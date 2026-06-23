import React, { useState, useEffect, useRef } from 'react'
import { sfx } from './sfx'

function PopcornEasterEgg() {
  const [popcorns, setPopcorns] = useState([])
  const [clickedIds, setClickedIds] = useState([])
  const spawnTimeouts = useRef([])
  const popcornIdCounter = useRef(0)

  useEffect(() => {
    const startTime = Date.now()
    let lastSpawnTime = 0

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime

      if (elapsed >= 4000) {
        clearInterval(interval)
        return
      }

      // Spawning gets faster towards the end
      let spawnRate = 800
      if (elapsed >= 2500) {
        spawnRate = 80
      } else if (elapsed >= 1000) {
        spawnRate = 350
      }

      if (Date.now() - lastSpawnTime >= spawnRate) {
        const x = 5 + Math.random() * 90
        const peak = 25 + Math.random() * 50
        const id = ++popcornIdCounter.current

        setPopcorns((prev) => [...prev, { id, x, peak }])
        lastSpawnTime = Date.now()

        // Delay the popping sound to align perfectly with the peak visual popping effect (50% of 2.5s animation = 1.25s)
        const tId = setTimeout(() => {
          sfx.playPop(0.03)
          spawnTimeouts.current = spawnTimeouts.current.filter((t) => t !== tId)
        }, 1250)
        spawnTimeouts.current.push(tId)

        // Auto-remove after animation
        setTimeout(() => {
          setPopcorns((prev) => prev.filter((p) => p.id !== id))
        }, 2500)
      }
    }, 30)

    return () => {
      clearInterval(interval)
      spawnTimeouts.current.forEach(clearTimeout)
    }
  }, [])

  const handleClick = (id) => {
    if (clickedIds.includes(id)) return
    sfx.playPop()
    setClickedIds((prev) => [...prev, id])
  }

  return (
    <div className="popcorn-container">
      {popcorns.map((pop) => {
        const isClicked = clickedIds.includes(pop.id)
        return (
          <div
            key={pop.id}
            className={`popcorn-item ${isClicked ? 'popcorn-item--clicked' : ''}`}
            style={{
              left: `${pop.x}%`,
              '--peak-height': `${pop.peak}%`
            }}
            onClick={() => handleClick(pop.id)}
          >
            <div className="popcorn-sprite" />
          </div>
        )
      })}
    </div>
  )
}

export default PopcornEasterEgg

