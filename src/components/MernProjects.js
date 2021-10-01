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


function MernProjects() {
    return (
        <motion.div style={{ minHeight: '100vh' }} className='projects' variants={Variants} animate='animate' initial='initial' exit='exit' >
            <Link to='/'> <motion.h2 variants={Variants} exit='exitForI'> <i variants={Variants} exit='exitForI' className="fas fa-angle-double-left"></i> Back</motion.h2> </Link>
            <h1>MERN stack project</h1>

            <a target='_blank' rel="noreferrer" href='https://hardcore-kalam-6a9efa.netlify.app/'>
                <CardActionArea className="internal">
                    <img src="/photos/mern.png" alt="" />
                    <div className="det">
                        <h3>Simple CRUD Application</h3>
                        <h5>After learning the basics of node.js I needed an application to implement despite it is a simple 'Create Read Update Delete' app but it helped me understanding the connection between front-end and back-end as well as node core concepts under the hood like event loop plus mongo.DB..the focus was in functionality not UI</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span> <span>Redux</span> <span>Material-UI</span> <span>node.js</span> <span>express</span> <span>mongo.DB</span> <span>JWT</span></p>
                    </div>
                </CardActionArea>
            </a>

        </motion.div>
    )
}

export default MernProjects