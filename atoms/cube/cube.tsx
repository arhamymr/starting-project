import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  const ref = useRef(null)

  useFrame(() => {
    ref.current.rotation.y += 0.001;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[2, 2, 2]} />
    </Canvas>
  )
}
