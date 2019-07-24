import React, { useRef } from 'react'
import 'styled-components/macro'
import { useSpring, animated } from 'react-spring'
import * as types from 'styled-components/cssprop'

const calc = (x: number, y: number, height: number, width: number) => [
  -(y - height / 2) / 20,
  (x - width / 2) / 20,
  1.1,
]
const trans = (x: number, y: number, s: number) => {
  return `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
}

const AnimatedCard: React.FC = ({ children }) => {
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  const cardRef = useRef<HTMLDivElement | null>(null)

  const { xys } = springProps

  // @ts-ignore
  const transform = xys.interpolate(trans)

  return (
    <animated.div
      ref={cardRef}
      css={{
        borderRadius: 4,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderRight: '4px solid #00A991',
        textAlign: 'center',
        width: 300,
        fontSize: 14,
        transition: 'box-shadow 0.4s',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          boxShadow:
            '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      }}
      onMouseMove={({ clientX, clientY }) => {
        const rect = cardRef && cardRef.current && cardRef.current.getBoundingClientRect()

        const offsetX = clientX - ((rect && rect.left) || 0)
        const offsetY = clientY - ((rect && rect.top) || 0)

        set({
          xys: calc(offsetX, offsetY, (rect && rect.height) || 0, (rect && rect.width) || 0),
        })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform }}
    >
      {children}
    </animated.div>
  )
}

export default AnimatedCard
