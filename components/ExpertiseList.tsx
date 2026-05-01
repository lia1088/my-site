'use client'

import { useState } from 'react'
import ExpertiseItem from './ExpertiseItem'

type Tag = {
  label: string
  color: string
}

type ExpertiseItemType = {
  title: string
  description: string
  tags: Tag[]
}

export default function ExpertiseList({ items }: { items: ExpertiseItemType[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-[40px]">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
          }}
        >
          <ExpertiseItem
            index={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        </div>
      ))}
    </div>
  )
}
