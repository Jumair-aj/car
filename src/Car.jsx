import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Model } from './Scene'
import { Environment, OrbitControls } from '@react-three/drei'
import { MeshPhongMaterial } from 'three'

const Car = () => {
  return (
    <div id='modelCar'>
        <Canvas shadows>
        <ambientLight/>
            <spotLight position={[0,5,0]} intensity={1.5} angle={1} castShadow/>
            {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
            {/* <Environment  near={100} far={1000} resolution={2560} blur={0}/> */}
           
            <Suspense fallback={null}>
                <Model/>
                <OrbitControls minPolarAngle={Math.PI / 2} enableZoom={false} maxPolarAngle={Math.PI / 2}/>
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Car