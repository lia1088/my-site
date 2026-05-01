'use client'

import { useState, useRef } from 'react'

type Tag = {
  label: string
  color: string
}

type Props = {
  title: string
  description: string
  tags: Tag[]
  index: number
  onHover: () => void
  onLeave: () => void
}

// Fixed jitter so positions are consistent (no hydration issues)
const JITTER = [
  { x: 4,  y: -6  },
  { x: -8, y: 10  },
  { x: 10, y: 4   },
  { x: -5, y: -10 },
  { x: 6,  y: 8   },
  { x: -10, y: -4 },
  { x: 8,  y: -8  },
  { x: -4, y: 6   },
]

export default function ExpertiseItem({ title, description, tags, index, onHover, onLeave }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const rowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return
    const rect = rowRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 80
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 80
    setOffset({ x, y })
  }

  return (
    <div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setIsHovered(true); onHover() }}
      onMouseLeave={() => { setIsHovered(false); onLeave() }}
      className="relative grid grid-cols-12 gap-4 border-t border-white/10 cursor-default"
    >
      {/* Title */}
      <h3
        className="col-span-12 lg:col-span-7 font-serif font-medium leading-none text-[#fff]"
        style={{ fontSize: 'clamp(2.5rem, 6.944vw, 7.5rem)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-[8px]">
        <p
          className="text-[#fff] leading-[1.2]"
          style={{ fontSize: 'clamp(1rem, 1.273vw, 1.375rem)' }}
        >
          {description}
        </p>
      </div>

      {/* Tags — scattered on an oval over the 7-column headline area */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full"
        style={{ width: `${(7 / 12) * 100}%` }}
      >
        {tags?.map((tag, tagIndex) => {
          const total = tags.length
          // Distribute evenly around ellipse, starting from top
          const angle = (tagIndex / total) * 2 * Math.PI - Math.PI / 2
          const j = JITTER[tagIndex % JITTER.length]
          // 40% of radius so tags stay well within the container
          const xPercent = 50 + 40 * Math.cos(angle) + j.x
          const yPercent = 50 + 40 * Math.sin(angle) + j.y

          return (
            <span
              key={tagIndex}
              className="absolute px-4 py-2 text-sm text-black font-medium"
              style={{
                backgroundColor: tag.color,
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                opacity: isHovered ? 1 : 0,
                transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
                transition: 'opacity 0.3s ease, transform 0.15s ease-out',
              }}
            >
              {tag.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
