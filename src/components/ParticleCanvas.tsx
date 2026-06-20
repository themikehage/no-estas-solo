import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 300
const CONNECTION_DISTANCE = 2.5
const SCROLL_SPEED = 0.001

export default function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 8

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      return
    }

    rendererRef.current = renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const sizes = new Float32Array(PARTICLE_COUNT)
    const basePositions = new Float32Array(PARTICLE_COUNT * 3)

    const palette = [
      new THREE.Color(0x00e676),
      new THREE.Color(0xffb300),
      new THREE.Color(0xc8a96e),
      new THREE.Color(0x1e4d8c),
      new THREE.Color(0xd32f2f),
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 3

      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = r * Math.cos(phi)

      basePositions[i3] = positions[i3]
      basePositions[i3 + 1] = positions[i3 + 1]
      basePositions[i3 + 2] = positions[i3 + 2]

      velocities[i3] = (Math.random() - 0.5) * 0.01
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01

      const color = palette[Math.floor(Math.random() * palette.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      sizes[i] = 0.03 + Math.random() * 0.05
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.2, 0.5, d);
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const maxConnections = 1000
    const linePositions = new Float32Array(maxConnections * 6)
    const lineColors = new Float32Array(maxConnections * 6)
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const scroll = scrollRef.current
      const posAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array

      const cohesion = Math.sin(scroll * Math.PI)
      const dispersion = 1 - cohesion

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3

        if (!prefersReducedMotion) {
          posArray[i3] += velocities[i3]
          posArray[i3 + 1] += velocities[i3 + 1]
          posArray[i3 + 2] += velocities[i3 + 2]

          const bx = basePositions[i3]
          const by = basePositions[i3 + 1]
          const bz = basePositions[i3 + 2]

          posArray[i3] += (bx * (1 + dispersion * 0.5) - posArray[i3]) * 0.01
          posArray[i3 + 1] += (by * (1 + dispersion * 0.5) - posArray[i3 + 1]) * 0.01
          posArray[i3 + 2] += (bz * (1 + dispersion * 0.5) - posArray[i3 + 2]) * 0.01
        }
      }
      posAttr.needsUpdate = true

      let lineCount = 0
      const linePosAttr = lineGeometry.getAttribute('position') as THREE.BufferAttribute
      const lineColAttr = lineGeometry.getAttribute('color') as THREE.BufferAttribute
      const linePosArray = linePosAttr.array as Float32Array
      const lineColArray = lineColAttr.array as Float32Array

      const connectionDist = CONNECTION_DISTANCE * (0.5 + cohesion * 0.5)

      for (let i = 0; i < PARTICLE_COUNT && lineCount < maxConnections; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineCount < maxConnections; j++) {
          const i3 = i * 3
          const j3 = j * 3

          const dx = posArray[i3] - posArray[j3]
          const dy = posArray[i3 + 1] - posArray[j3 + 1]
          const dz = posArray[i3 + 2] - posArray[j3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < connectionDist) {
            const li = lineCount * 6
            linePosArray[li] = posArray[i3]
            linePosArray[li + 1] = posArray[i3 + 1]
            linePosArray[li + 2] = posArray[i3 + 2]
            linePosArray[li + 3] = posArray[j3]
            linePosArray[li + 4] = posArray[j3 + 1]
            linePosArray[li + 5] = posArray[j3 + 2]

            const alpha = 1 - dist / connectionDist
            lineColArray[li] = colors[i3] * alpha
            lineColArray[li + 1] = colors[i3 + 1] * alpha
            lineColArray[li + 2] = colors[i3 + 2] * alpha
            lineColArray[li + 3] = colors[j3] * alpha
            lineColArray[li + 4] = colors[j3 + 1] * alpha
            lineColArray[li + 5] = colors[j3 + 2] * alpha

            lineCount++
          }
        }
      }

      for (let i = lineCount * 6; i < maxConnections * 6; i++) {
        linePosArray[i] = 0
        lineColArray[i] = 0
      }

      linePosAttr.needsUpdate = true
      lineColAttr.needsUpdate = true
      lineGeometry.setDrawRange(0, lineCount * 2)

      if (!prefersReducedMotion) {
        particles.rotation.y += SCROLL_SPEED
        particles.rotation.x += SCROLL_SPEED * 0.3
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      particleGeometry.dispose()
      particleMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
