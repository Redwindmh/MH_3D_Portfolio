import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, testimonial, name, designation, company, image, site, order }) => (
  <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)} className={`bg-black-200 hover-url-${order} text-white hover:text-opacity-10 p-10 rounded-3xl xs:w-[320px] w-full`}>
    <a href={`https://${site}.com`} target="_blank">
    <span className="text-white font-black sm:text-[28px] text-[16px]" >{site}</span>
    <span className="text-white">.com</span>
    <div className="mt-1">
      <p className=' tracking-wider text-[18px]'>{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span>{name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation}&nbsp;of&nbsp;{company}</p>
        </div>
        <img src={image} alt={`feedback_from_${name}`} className="w-10 h-10 rounded-full" />
      </div>
    </div>
    </a>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-gradient-to-b from-tertiary to-black rounded-[20px]'>
      <div className={`${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mb-3 text-secondary text-[17px] max-w-3xl leading-30px' >
          Here are some of the sites I have built as well as some words from my clients. Click on the cards to see their sites!
        </motion.p>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => <FeedbackCard key={testimonial.name} index={index} {...testimonial} />)}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'testimonials')
