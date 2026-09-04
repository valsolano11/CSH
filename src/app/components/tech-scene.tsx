'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, RoundedBox, Sparkles, Text } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

const licenses = [
  {
    letter: 'M',
    category: 'PRODUCTIVIDAD EMPRESARIAL',
    title: 'Microsoft 365',
    subtitle: 'CSP NCE anual',
    color: '#005b76',
    accent: '#12cbd1',
  },
  {
    letter: 'A',
    category: 'CREATIVIDAD PROFESIONAL',
    title: 'Adobe Creative Cloud',
    subtitle: 'Plan empresarial',
    color: '#263b68',
    accent: '#8fd8ff',
  },
  {
    letter: 'W',
    category: 'SISTEMA OPERATIVO',
    title: 'Windows 11 Pro',
    subtitle: 'Licencia digital',
    color: '#075878',
    accent: '#27d8ef',
  },
  {
    letter: 'O',
    category: 'PRODUCTIVIDAD',
    title: 'Office 365',
    subtitle: 'Plan empresarial',
    color: '#096d69',
    accent: '#55ded0',
  },
]

function LicenseCard({ license }: { license: typeof licenses[number] }) {
  const group = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (!group.current) return

    const time = state.clock.elapsedTime
    group.current.position.y = Math.sin(time * 1.25) * 0.08

    const targetY = Math.sin(time * 0.65) * 0.08
    const targetX = Math.sin(time * 0.5) * 0.025

    group.current.rotation.y += (targetY - group.current.rotation.y) * delta * 2
    group.current.rotation.x += (targetX - group.current.rotation.x) * delta * 2

    const targetScale = hovered ? 1.035 : 1
    const currentScale = group.current.scale.x
    const newScale = currentScale + (targetScale - currentScale) * delta * 5

    group.current.scale.set(newScale, newScale, newScale)
  })

  return (
    <group ref={group} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <RoundedBox args={[4.35, 3.65, 0.22]} radius={0.25} smoothness={8} position={[0.1, -0.12, -0.18]}>
        <meshStandardMaterial color="#002d4b" metalness={0.8} roughness={0.25} />
      </RoundedBox>

      <RoundedBox args={[4.25, 3.55, 0.3]} radius={0.26} smoothness={8}>
        <meshStandardMaterial color={license.color} metalness={0.45} roughness={0.23} />
      </RoundedBox>

      <RoundedBox args={[4.05, 3.35, 0.035]} radius={0.23} smoothness={8} position={[0, 0, 0.18]}>
        <meshStandardMaterial color={license.accent} emissive={license.accent} emissiveIntensity={0.25} metalness={0.3} roughness={0.25} />
      </RoundedBox>

      <RoundedBox args={[3.92, 3.22, 0.08]} radius={0.21} smoothness={8} position={[0, 0, 0.22]}>
        <meshStandardMaterial color={license.color} metalness={0.25} roughness={0.3} />
      </RoundedBox>

      <RoundedBox args={[1.65, 0.31, 0.06]} radius={0.13} smoothness={6} position={[-1.05, 1.23, 0.3]}>
        <meshStandardMaterial color="#36768c" transparent opacity={0.9} />
      </RoundedBox>

      <Text position={[-1.05, 1.23, 0.35]} fontSize={0.105} color="#e6f8fc" anchorX="center" anchorY="middle" letterSpacing={0.07}>
        LICENCIA ORIGINAL
      </Text>

      <Text position={[-1.43, 0.58, 0.34]} fontSize={0.92} fontWeight={900} color="#edfaff" anchorX="left" anchorY="middle">
        {license.letter}
      </Text>

      <Text position={[-1.43, -0.18, 0.34]} fontSize={0.105} color="#a9d4df" anchorX="left" anchorY="middle" letterSpacing={0.07} maxWidth={3.1}>
        {license.category}
      </Text>

      <Text position={[-1.43, -0.62, 0.34]} fontSize={license.title.length > 18 ? 0.25 : 0.34} fontWeight={700} color="#ffffff" anchorX="left" anchorY="middle" maxWidth={3.2}>
        {license.title}
      </Text>

      <Text position={[-1.43, -0.96, 0.34]} fontSize={0.145} color="#d1e7ed" anchorX="left" anchorY="middle">
        {license.subtitle}
      </Text>

      <mesh position={[0, -1.32, 0.35]}>
        <boxGeometry args={[3.25, 0.014, 0.02]} />
        <meshStandardMaterial color="#c2e2e8" transparent opacity={0.55} />
      </mesh>

      <mesh position={[-1.34, -1.59, 0.35]}>
        <sphereGeometry args={[0.052, 16, 16]} />
        <meshStandardMaterial color={license.accent} emissive={license.accent} emissiveIntensity={1.7} />
      </mesh>

      <Text position={[-1.18, -1.59, 0.35]} fontSize={0.125} color="#e4f4f7" anchorX="left" anchorY="middle">
        Activación inmediata
      </Text>

      <Text position={[1.28, -1.59, 0.35]} fontSize={0.145} fontWeight={700} color="#ffffff" anchorX="center" anchorY="middle">
        Cotizar ↗
      </Text>
    </group>
  )
}

function AnimatedLicense({ activeIndex }: { activeIndex: number }) {
  const group = useRef<Group>(null)
  const [displayIndex, setDisplayIndex] = useState(activeIndex)
  const animation = useRef<'idle' | 'out' | 'in'>('idle')
  const progress = useRef(0)

  useEffect(() => {
    if (activeIndex !== displayIndex) {
      animation.current = 'out'
      progress.current = 0
    }
  }, [activeIndex, displayIndex])

  useFrame((_, delta) => {
    if (!group.current) return

    if (animation.current === 'out') {
      progress.current += delta * 3
      group.current.position.x += delta * 4
      group.current.rotation.y += delta * 1.8
      group.current.rotation.z += delta * 0.7

      const scale = Math.max(0.75, 1 - progress.current * 0.25)
      group.current.scale.set(scale, scale, scale)

      if (progress.current >= 1) {
        setDisplayIndex(activeIndex)
        group.current.position.x = -4.7
        group.current.rotation.y = -0.9
        group.current.rotation.z = 0
        group.current.scale.set(0.78, 0.78, 0.78)
        progress.current = 0
        animation.current = 'in'
      }

      return
    }

    if (animation.current === 'in') {
      progress.current += delta * 2.7
      group.current.position.x += delta * 4.5
      group.current.rotation.y += delta * 1.4
      group.current.rotation.z -= delta * 0.4

      const scale = 0.78 + Math.min(progress.current, 1) * 0.22
      group.current.scale.set(scale, scale, scale)

      if (progress.current >= 1) {
        group.current.position.x = 0
        group.current.rotation.y = 0
        group.current.rotation.z = 0
        group.current.scale.set(1, 1, 1)
        animation.current = 'idle'
      }
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.04} floatIntensity={0.18}>
        <LicenseCard license={licenses[displayIndex]} />
      </Float>
    </group>
  )
}

export function TechScene() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % licenses.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="scene-shell" aria-label="Carrusel 3D de licencias CSH" role="img">
      <Canvas camera={{ position: [0, 0, 7], fov: 38 }} dpr={[1, 1.6]}>
        <color attach="background" args={['#f4f9fc']} />
        <ambientLight intensity={2.1} />
        <directionalLight position={[4, 5, 5]} intensity={4} />
        <pointLight position={[-4, 1, 3]} intensity={8} distance={8} color="#12cbd1" />
        <pointLight position={[4, -2, 2]} intensity={5} distance={7} color="#4ca6d0" />
        <Environment preset="city" environmentIntensity={0.4} />
        <AnimatedLicense activeIndex={activeIndex} />
        <Sparkles count={55} scale={[7, 5, 4]} size={2} speed={0.35} color="#12cbd1" />
      </Canvas>

      <div className="scene-decoration decoration-one" />
      <div className="scene-decoration decoration-two" />

      <div className="scene-carousel">
        {licenses.map((license, index) => (
          <button key={license.title} className={index === activeIndex ? 'scene-dot active' : 'scene-dot'} onClick={() => setActiveIndex(index)} aria-label={`Mostrar ${license.title}`} />
        ))}
      </div>

      <div className="scene-caption"><span>●</span> Licencias originales · Activación inmediata</div>
    </div>
  )
}

export default TechScene

