import React, { useEffect, useMemo, useState } from 'react'

const stats = [
    { label: 'HAPPY CUSTOMERS', value: '10K+', note: 'Trusted by families daily' },
    { label: 'CATEGORIES', value: '6+', note: 'Curated premium essentials' },
    { label: 'PRODUCTS READY', value: '500+', note: 'Quality checked inventory' },
    { label: 'YEARS TRUSTED', value: '15+', note: 'Consistent service excellence' }
]

const Stats = () => {
    const parsedStats = useMemo(
        () =>
            stats.map((item) => {
                const match = item.value.match(/^(\d+)(.*)$/);
                return {
                    ...item,
                    target: match ? Number(match[1]) : 1,
                    suffix: match ? match[2] : ''
                };
            }),
        []
    );

    const [animatedValues, setAnimatedValues] = useState(parsedStats.map(() => 1));

    useEffect(() => {
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setAnimatedValues(
                parsedStats.map((item) => Math.max(1, Math.round(1 + (item.target - 1) * eased)))
            );

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        const frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [parsedStats]);

    return (
        <div className='max-w-6xl mx-auto px-4 py-10 sm:py-16'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
                {stats.map((item, index) => (
                    <div 
                        key={index} 
                        className='group relative overflow-hidden bg-white/95 p-5 sm:p-7 flex flex-col items-center justify-center text-center rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(17,24,39,0.08)] hover:shadow-[0_16px_40px_rgba(17,24,39,0.14)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-default'
                    >
                        <div className='absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 opacity-80'></div>
                        <div className='relative'>
                            <h5 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-300'>
                                {animatedValues[index]}{parsedStats[index].suffix}
                            </h5>
                        </div>
                        <p className='text-gray-500 text-[9px] sm:text-[10px] tracking-[0.28em] font-semibold uppercase mt-2 group-hover:text-gray-700 transition-colors duration-300'>
                            {item.label}
                        </p>
                        <p className='text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3'>
                            {item.note}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats
