import React, { useEffect, useMemo, useState } from 'react'

const stats = [
    { label: 'HAPPY CUSTOMERS', value: '10K+', note: 'Trusted by families daily' },
    { label: 'CATEGORIES', value: '8+', note: 'Curated premium essentials' },
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
                        className='group relative flex cursor-default flex-col items-center justify-center overflow-hidden rounded-3xl bg-white/95 p-5 text-center shadow-[0_10px_30px_rgba(6,78,59,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(6,78,59,0.12)] sm:p-7'
                    >
                        <div className='absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-200 opacity-90'></div>
                        <div className='relative'>
                            <h5 className='text-3xl font-extrabold tracking-tight text-emerald-900 transition-transform duration-300 group-hover:scale-105 sm:text-4xl'>
                                {animatedValues[index]}{parsedStats[index].suffix}
                            </h5>
                        </div>
                        <p className='mt-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-700/80 transition-colors duration-300 group-hover:text-emerald-800 sm:text-[10px]'>
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
