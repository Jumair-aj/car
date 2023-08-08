import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './global.scss'
import Car from './Car'
import { useGLTF } from '@react-three/drei'
import Home from './Home'
import About from './About'
import Custom from './Custom'
import Background from './Background'

function App() {
const [carLoading,setCarLoading] = useState(false)

setTimeout(() => {
  setCarLoading(true)
}, 4000);
  return (
    <div className="container">
      {carLoading ? <Home/> : <Background/>}
     <Car/>
     <About/>
     <Custom/>
    </div>
  )
}

export default App
