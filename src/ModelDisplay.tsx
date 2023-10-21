import { Canvas } from '@react-three/fiber';
import TestBox from './components/TestBox'

const ModelDisplay = (props: {
  color: string
}) =>
  <div className="card">
    <Canvas>
      <ambientLight color={props.color} intensity={4} />
      <directionalLight color={props.color} intensity={2} position={[12, 2, 3]} />

      <TestBox position={[0, 0, 1]} />

    </Canvas>
  </div>;

export default ModelDisplay;
