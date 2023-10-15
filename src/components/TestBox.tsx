import './TestBox.css';
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'

export default function TestBox(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => {
    ref.current.rotation.z += (delta  * 2);
    ref.current.rotation.x += delta;
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.25 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial color={hovered ? 'lightgreen' : 'orange'} />
    </mesh>
  )
}