import { React, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { templateID, serviceID, myName, myEmail, emailJSKey } from '../assets/keys'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: form.name,
        to_name: myName,
        from_email: form.email,
        to_email: myEmail,
        message: form.message,
      },
      emailJSKey
    )
    .then(()=> {
      setLoading(false)
      alert('Thanks for your message!')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    },(error) => {
      setLoading(false)

      console.log(error)

      alert('There seems to be an issue')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-tertiary p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Please enter your name' className='bg-black-100 px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Please enter your email' className='bg-black-100 px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder='Please enter your message' className='bg-black-100 px-6 py-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-black-100 px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-white hover:text-tertiary focus:ring focus:ring-red-500'>{loading?'Sending your message...':"Send"}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')