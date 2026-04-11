import React from 'react'

/**
 * Below md: horizontal scroll with ~two cards visible; snap aligns each card.
 * md+: standard grid (columns via gridClassName).
 */
const HorizontalCardRow = ({
  children,
  className = '',
  gridClassName = 'md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 md:gap-y-6',
}) => {
  const items = React.Children.toArray(children).filter(Boolean)

  return (
    <div
      className={[
        '-mx-4 flex flex-nowrap gap-3 overflow-x-auto overscroll-x-contain px-4 pb-2 snap-x snap-mandatory',
        gridClassName,
        'md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 md:snap-none',
        className,
      ]
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className='w-[calc(50vw-1.375rem)] shrink-0 snap-start md:w-auto md:min-w-0 md:max-w-none md:shrink md:snap-none'
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default HorizontalCardRow
