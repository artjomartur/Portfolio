import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function StarField({ theme }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Konstante, sehr langsame Rotation
      const baseRotY = state.clock.elapsedTime * 0.03
      const baseRotX = state.clock.elapsedTime * 0.015
      
      // Zielrotation basierend auf Mausposition (state.pointer: -1 bis +1)
      // Mausbewegung verstärken für einen "reaktiven" Effekt
      const targetRotY = baseRotY + state.pointer.x * 0.8
      const targetRotX = baseRotX - state.pointer.y * 0.5
      
      // Weiche Interpolation (Lerping) zur Zielrotation
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * delta * 4
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * delta * 4
    }
  })

  return (
    <group ref={groupRef}>
      <Stars 
        radius={100} // Radius der Sternensphäre
        depth={50}  // Tiefe
        count={4000} // Anzahl der Sterne
        factor={theme === 'light' ? 6 : 4}   // Größe der Sterne anpassen
        saturation={0} // 0 = weiß/grau (minimalistisch)
        fade         // Sterne faden in der Ferne aus
        speed={1}    // Animationsgeschwindigkeit für das Twinkeln
      />
    </group>
  )
}

export default function Hero3D({ theme = 'dark' }) {
  return (
    <div style={{ 
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
      zIndex: 0, pointerEvents: 'none', 
      opacity: theme === 'light' ? 0.9 : 0.7,
      filter: theme === 'light' ? 'invert(1) contrast(1.2)' : 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
        <StarField theme={theme} />
      </Canvas>
    </div>
  )
}
