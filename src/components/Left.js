import React from 'react'
import Flick from './Flicking'
import {motion} from 'framer-motion'


const Variants = {
    initial : {
        x: '-100vw'
    },
    animate:{
        x : '0', transition:{delay: 0.2, type: 'spring', duration: 1}
    },
    exit:{
        x: '-100vw',
        transition :{duration: 1}
    }
}
function Left() {
    return (
        <motion.div variants={Variants} initial='initial' animate='animate' exit='exit' className='left' >
            <div className="inecation">
                <i id='0'   className="far fas fa-circle"></i>
                <i id='1'  className="far fa-circle"></i>
                <i id='2'  className="far fa-circle"></i>
                <i id='3'  className="far fa-circle"></i>
            </div>
           <div className="mainLeft">
                <Flick/>
            </div>
            <div className="socials">
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/mohamed.sharkawey.7/"><i className="fab fa-facebook-f"></i></a> 
                <a rel="noreferrer" target="_blank" href="https://twitter.com/sharkawey393"><i className="fab fa-twitter"></i></a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/mohamedsharkawey/"><i className="fab fa-instagram"></i></a>
                <a rel="noreferrer" target="_blank" href="https://github.com/mohamed67-67"> <i className="fab oo fa-github"></i> </a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mohamed-sharkawey-01a92712a/"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </motion.div>
    )
}

export default Left
