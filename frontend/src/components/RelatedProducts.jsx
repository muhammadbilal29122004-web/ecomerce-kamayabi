import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import HorizontalCardRow from '../components/HorizontalCardRow'
import { normalizeCategory } from '../utils/category'

const RelatedProducts = ({ category }) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0 && category) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter(
              (item) => normalizeCategory(category) === normalizeCategory(item.category)
            );
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category]);

  return (
    <div className='my-24'>
        <div className='py-2 text-3xl text-center'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <HorizontalCardRow>
            {related.map((item, index) => (
                <ProductItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
            ))}
        </HorizontalCardRow>
    </div>
  )
}

export default RelatedProducts
