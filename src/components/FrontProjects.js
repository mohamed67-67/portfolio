import React from 'react'
import { motion } from 'framer-motion'
import { CardActionArea } from '@material-ui/core'
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


function FrontProjects() {
    return (
        <motion.div className='projects' variants={Variants} animate='animate' initial='initial' exit='exit' >
            <Link to='/'> <motion.h2 variants={Variants} exit='exitForI'> <i variants={Variants} exit='exitForI' className="fas fa-angle-double-left"></i> Back</motion.h2> </Link>
            <h1>Front End Projects</h1>


            <CardActionArea style={{ cursor: 'default' }} className="internal">
                <img src="/photos/design.png" alt="" />
                <div className="det">
                    <h3>My Portfolio</h3>
                    <h5>A Design i found on youtube felt nice to me so took a snap shot of it and implemented it as a personal portfolio</h5>
                    <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span> <span>Framer-motion</span> <span>Material-UI</span> <span>Sass</span> <span>React-flicking</span></p>
                </div>
            </CardActionArea>

            <a target='_blank' rel="noreferrer" href='https://netflix-clonefirst.netlify.app/'>
                <CardActionArea className="internal">
                    <img src="/photos/netflix.png" alt="" />
                    <div className="det">
                        <h3>Netflix Clone <i className="fas fa-angle-double-right"></i></h3>
                        <h5>A clone of netflix site built with React.js with several feature like fetching an end point for movies List and catch Youtube Trailers</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React.js</span> <span>React-YouTube</span> <span>Axios</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://mohamed67-67.github.io/KinderGarten/.'>
                <CardActionArea className="internal">
                    <img src="/photos/projectKinder.png" alt="" />
                    <div className="det">
                        <h3>kindergarten <i className="fas fa-angle-double-right"></i></h3>
                        <h5>In this project i wanted to start building a practical project after learning only html,css,js and JQuery and to implement different tricks of CSS so i made this site up as a kindergarten site.</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>BootStrap</span> <span>JQuery</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://coffe-shop.netlify.app'>
                <CardActionArea className="internal extra">
                    <img src="/photos/projectReact.png" alt="" />
                    <div className="det">
                        <h3>Coffee Shop <span>V1.1.0</span> <i className="fas fa-angle-double-right"></i></h3>
                        <h5>In this project i used React.js for the first time and i found it a good chance to improve one of my pervious projects which is Coffe Shop and Practice React.js, for state managment i used React Hooks like useContext and useReducer no Redux in this Point.</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>BootStrap</span> <span>JQuery</span> <span>React.js</span> <span>Sass</span></p>
                    </div>
                </CardActionArea>
            </a>

            <a target='_blank' rel="noreferrer" href='https://mohamed67-67.github.io/Coffe-Shop/'>
                <CardActionArea className="internal">
                    <img src="/photos/projectRegular.png" alt="" />
                    <div className="det">
                        <h3>Coffee Shop <span>V1.0.0</span> <i className="fas fa-angle-double-right"></i></h3>
                        <h5>In this project i wanted to expand my knowledge further by integrating libraries for the first time and expand my experience in such beginner level of me then.</h5>
                        <p>Technologies : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>BootStrap</span> <span>JQuery</span></p>
                    </div>
                </CardActionArea>
            </a>


        </motion.div>
    )
}

export default FrontProjects
