import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import { progress } from 'framer-motion'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className='text-sm text-white font-extrabold mt-10 text-center'>Loading {progress.toFixed()}%</p>
    </Html>
  )
}

export default Loader