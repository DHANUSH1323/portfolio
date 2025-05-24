import { useGLTF } from '@react-three/drei';

export default function RobotModel(props) {
  const { scene } = useGLTF('/models/robot.gltf');
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/robot.gltf');