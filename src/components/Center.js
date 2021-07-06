import React from 'react'
import { motion } from "framer-motion"



const Variraints = {
    initial : {
        x: '-100vw'
    },
    animate:{
        x : '0', transition:{type: 'spring', duration: 1}
    },
    exit:{
        x: '-100vw',
        transition :{duration: 1}
    }
}
function Center() {

    
    return (
        <motion.div variants={Variraints} initial='initial' animate='animate' exit='exit' className='center' >
            <img className='img' src='./photos/profile.png' alt=""/>
        </motion.div>
    )
}

export default Center
// E:\Front-End\React\trial\public\photos\profile.png
