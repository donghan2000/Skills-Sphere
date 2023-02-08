import React from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx'


function App() {

  return <>

      <div className='canvas'>
        <Canvas> 
          <Experience/>
        <ambientLight/>
      </Canvas>
    </div>


  </>


}

export default App;