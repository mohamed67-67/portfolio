import React from 'react'
import { motion } from 'framer-motion'
import { CardActionArea } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1, transition: { duration: 2, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0, transition: { duration: 0.5 }
    },
    exitForI: {
        x: '-5vw', transition: { duration: 1 }
    }
}


// TasksProjects


function TasksProjects() {
    return (
        <motion.div className='projects' variants={Variants} animate='animate' initial='initial' exit='exit' >
            <Link to='/'> <motion.h2 variants={Variants} exit='exitForI'> <i variants={Variants} exit='exitForI' className="fas fa-angle-double-left"></i> Back</motion.h2> </Link>
            <h1>Tasks Projects</h1>

            <a target='_blank' rel="noreferrer" href='https://x-kom-assignment.netlify.app/'>
                <CardActionArea className="internal">
                    <img src="/photos/pol.png" alt="" />
                    <div className="det">
                        <h3>reserveing Theater Seats</h3>
                        <h5>In this project I had a task from X-Kom 'Poland' for reserveing theatre seats system with certain functionality and design it was an internship acceptance project using React & Redux for state managment</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span> <span>Redux</span> <span>Material-UI</span> <span>Framer Motion</span> <span>Sass</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://daoggregate-67.netlify.app/'>
                <CardActionArea className="internal">
                    <img src="/photos/daos.png" alt="" />
                    <div className="det">
                        <h3>DAO Aggregatation</h3>
                        <h5>In this project I had a task from minority programmers 'USA' for Rendring DAOs with my own design and certain functionality like searching and filtering it was an internship acceptance project using React & Redux for state managment</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span> <span>Redux</span> <span>Boot-Strap</span> <span>Boot-StrapTable</span> <span>Sass</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://gemography-task.netlify.app/'>
                <CardActionArea className="internal">
                    <img src="/photos/gemo.png" alt="" />
                    <div className="det">
                        <h3>Trending Repos in GitHub</h3>
                        <h5>In this project I had a task from Gemography Inc it was about fetching an end point contains the most starred repos in the last 30 days of github</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Material-UI</span> <span>React.js</span> <span>Redux</span> <span>Sass</span> <span>Moment</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://erp-system.netlify.app'>
                <CardActionArea className="internal">
                    <img src="/photos/banks.png" alt="" />
                    <div className="det">
                        <h3>Banks erp UI system</h3>
                        <h5>In this project I had a task from WhiteCloud 'Egypt' for making up a UI table for different Banks and their accounts as a sub component using react.js and redux for state managment and material table for a full functional table</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Material-Table</span> <span>Material-UI</span> <span>React.js</span> <span>Redux</span></p>
                    </div>
                </CardActionArea>
            </a>


            <a target='_blank' rel="noreferrer" href='https://hex-ocean-task.netlify.app'>
                <CardActionArea className="internal">
                    <img src="/photos/port.png" alt="" />
                    <div className="det">
                        <h3>multi ordering form</h3>
                        <h5>In this project I had a task from Hex-Ocean 'Poland' it was making up a form... the trick here was rendering conditionaly a certain ui according to the type of the order with certain type of input and make a json for all orders to be submitted to DB</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Material-UI</span> <span>React.js</span> <span>Redux</span> <span>Sass</span></p>
                    </div>
                </CardActionArea>
            </a>
        </motion.div>
    )
}

export default TasksProjects
