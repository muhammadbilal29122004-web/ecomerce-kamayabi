import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    motherName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!token) {
        toast.error("Please login to place an order");
        navigate('/login');
        return;
      }

      let orderItems = [];
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            const itemInfo = products.find(p => p._id === itemId);
            if (itemInfo) {
              orderItems.push({
                ...itemInfo,
                size,
                quantity: cartItems[itemId][size],
              });
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod: "Advance Payment",
      };

      if (!paymentScreenshot) {
        toast.error("Please upload payment screenshot");
        return;
      }

      const payload = new FormData();
      payload.append("address", JSON.stringify(orderData.address));
      payload.append("items", JSON.stringify(orderData.items));
      payload.append("amount", String(orderData.amount));
      payload.append("paymentMethod", orderData.paymentMethod);
      if (paymentScreenshot) {
        payload.append("paymentScreenshot", paymentScreenshot);
      }

      const response = await axios.post(`${backendUrl}/api/order/place`, payload, {
        headers: { token },
      });

      if (response.data.success) {
        setCartItems({});
        localStorage.removeItem('cartItems');
        toast.success("Order placed successfully!");
        navigate('/orders');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Unable to place order";
      toast.error(message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side Content */}
      <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
        <div className='my-3 text-xl sm:text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='firstName' value={formData.firstName}
            className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='First Name' required />
          <input onChange={onChangeHandler} name='lastName' value={formData.lastName}
            className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Last Name' required />
        </div>
        <input onChange={onChangeHandler} name='motherName' value={formData.motherName}
          className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Mother Name' required />
        <input onChange={onChangeHandler} name='email' value={formData.email}
          className='w-full px-4 py-2 border border-gray-300 rounded' type="email" placeholder='Email Address' required />
        <input onChange={onChangeHandler} name='street' value={formData.street}
          className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Street' required />
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='city' value={formData.city}
            className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='City' required />
          <input onChange={onChangeHandler} name='state' value={formData.state}
            className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='State' required />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode}
            className='w-full px-4 py-2 border border-gray-300 rounded' type="number" placeholder='Zip Code' required />
          <input onChange={onChangeHandler} name='country' value={formData.country}
            className='w-full px-4 py-2 border border-gray-300 rounded' type="text" placeholder='Country' required />
        </div>
        <input onChange={onChangeHandler} name='phone' value={formData.phone}
          className='w-full px-4 py-2 border border-gray-300 rounded' type="number" placeholder='Mobile' required />
      </div>
      {/* Right Side Content */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        {/* Payment Method - Advance Payment */}
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHODS'} />
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className='min-w-3.5 h-3.5 border rounded-full bg-green-600'></p>
              <p className='mx-4 text-sm font-medium text-gray-600'>ADVANCE PAYMENT (JazzCash / EasyPaisa / Bank)</p>
            </div>

            <div className='p-4 text-sm border border-gray-200 rounded bg-gray-50 text-gray-700 space-y-1'>
              <p className='font-medium text-gray-800'>JazzCash / EasyPaisa</p>
              <p>03352805020 - Hassan Abbas</p>
              <p className='mt-2 font-medium text-gray-800'>Account Title: AL-GHAZI TABARRUKAT CENTRE</p>
              <p>Account Number: 56385001173284</p>
              <p>IBAN: PK25ALFH5638005001173284</p>
              <p>Swift Code: ALFHPKKAXXX</p>
              <p>Branch Name: Soldier Bazar Br IBG</p>
              <p>Branch Code: 5638</p>
              <p>Bank Name: Bank Alfalah</p>
              <div className='pt-2 mt-2 border-t border-gray-200'>
                <label className='block mb-1 font-medium text-gray-800'>Upload Payment Screenshot *</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPaymentScreenshot(e.target.files?.[0] || null)}
                  className='w-full p-2 text-sm bg-white border border-gray-300 rounded'
                  required
                />
              </div>
            </div>
          </div>
          <div className='w-full mt-8 text-end'>
            <button type='submit' className='bg-emerald-700 px-16 py-3 text-sm text-white active:bg-emerald-800'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
