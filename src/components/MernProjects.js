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

            <a target='_blank' rel="noreferrer" href='https://minorityprogrammers.com/'>
                <CardActionArea className="internal">
                    <img src="/photos/mino.png" alt="" />
                    <div className="det">
                        <h3>Minority Programmers website <i className="fas fa-angle-double-right"></i></h3>
                        <h5>A project I worked on during my internship with MPA U.S.A it was a website and my main rule during my first 3 sprints was reviewing pull request and give the modifications needed to the front end part and my last 3 sprints I spent building schemas and got directed to the back end</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Next.js</span> <span>React Context</span> <span>Material-UI</span> <span>node.js</span> <span>express</span> <span>mongo.DB</span> <span>JWT</span> <span>Mongoose</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://hardcore-kalam-6a9efa.netlify.app/'>
                <CardActionArea className="internal">
                    <img src="/photos/mern.png" alt="" />
                    <div className="det">
                        <h3>Simple CRUD Application <i className="fas fa-angle-double-right"></i></h3>
                        <h5>After learning the basics of node.js I needed an application to implement despite it is a simple 'Create Read Update Delete' app but it helped me understanding the connection between front-end and back-end as well as node core concepts under the hood like event loop plus mongo.DB</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span> <span>Redux</span> <span>Material-UI</span> <span>node.js</span> <span>express</span> <span>mongo.DB</span> <span>JWT</span></p>
                    </div>
                </CardActionArea>
            </a>

        </motion.div>
    )
}

export default MernProjects