import { useGLTF } from '@react-three/drei'
import React from 'react'

const Custom = () => {
  const {  materials } = useGLTF('/scene.gltf')

    const changeColor = (color)=>{
    materials.McLaren_F1_1993_By_Alex_Ka.color.set(color)
    }
    return (
        <div className='customContainer' id='endPart'>
            <div className="paintBox">
            <p>Paint</p>
            <div className="buttonGrp">
                <button className='btn1' onClick={()=>changeColor('#fff')}></button>
                <button className='btn2' onClick={()=>changeColor('#0000ff')}></button>
                <button className='btn3' onClick={()=>changeColor('#ff0000')}></button>
            </div>
            </div>
        </div>
    )
}

export default Custom