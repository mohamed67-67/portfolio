import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0, transition: { duration: 0.5 }
    },
    exitForI: {
        x: '-5vw', transition: { duration: 1 }
    }
}

const ErrorPage = () => {
    return (
        <motion.div variants={Variants} animate='animate' initial='initial' exit='exit' className='Error'>
            <Link to='/'> <motion.h2 variants={Variants} exit='exitForI'> <i variants={Variants} exit='exitForI' className="fas fa-angle-double-left"></i>  Home</motion.h2> </Link>
        </motion.div>
    )
}

export default ErrorPage
