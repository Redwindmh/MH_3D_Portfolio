import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Sparkle from 'react-sparkle'
import { ModelCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[red]"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-600 to-black-500"/>
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi! I'm <span className="text-[red]">Malcolm</span>,</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            your friendly neighborhood&nbsp;<span className='md:hidden'><br/></span><Link className='absolute z-10' activeclassname='active' to='/technomancy'>technomancer <Sparkle flickerSpeed={'slowest'} color={'random'}/></Link>
          </p>
        </div>
      </div>
        <div className="mh-avi">
            <model-viewer camera-controls autoplay ar src="https://d1a370nemizbjq.cloudfront.net/d72f0910-17b1-4242-a773-0272a76a96be.glb" alt="mh_avatar" auto-rotate poster="https://www.pexels.com/photo/close-up-photo-of-clownfish-128756/" modelIsVisible="true" class="absolute h-[700px] w-4/5"></model-viewer>
        </div>
      {/* <ModelCanvas /> */}
      <div className="absolute bottom-1 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev animate={{y:[0,24,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero