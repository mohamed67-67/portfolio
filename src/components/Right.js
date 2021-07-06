import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


const Variants = {
    initial :{
        x: '100vw'
    },
    animate: {
        x : 0, transition:{duration: 1, type:'spring'}
    },
    exit:{
        x: '100vw',
        transition :{duration: 1}
    },
    click:{
        init:{ x: 0 },
        animate: {x: '5vw', transition:{duration: 5}}
    },
    hover :{
        x: '4px',
        color : '#ffd486',
        transition : {duration: 1, yoyo: '7'}
    }
}

function Right() {
    return (
        <motion.div variants={Variants} animate='animate' initial='initial' exit='exit' className='right'>
            <div className="mainright">
                <div className="mob1">
                    <h4>mohamed.sharkawey.77@gmail.com</h4>
                    <h5>ABSTRACT</h5>
                    <p>i'm mohamed sharkawey a front end developer. Right now i'm seeking opportunity as one, i'm self learner and passionate about this field. so any further infrormation you shall find in my <a target='_blank' rel='noreferrer' className='CV' href="https://drive.google.com/file/d/1OEgnC531HqgvSeWQKFDIxrNgPQq9yYNv/view?usp=sharing">Resume <motion.i variants={Variants} whileHover='hover' className="fas fa-angle-double-right"></motion.i></a> and my portofolio or you can contact me</p>
                </div>
                <div className="mob2">
                    <Link to='/front' >
                        <div className="subright front">
                            <img src="./photos/projectKinder.png" alt=""/>
                            <div className="details">
                                <h5>FrontEnd<motion.i variants={Variants} className="fas fa-angle-double-right"></motion.i></h5>
                                <p>Projects With React.js</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/tasks'>
                        <div className="subright tasks">
                            <img src="./photos/pol.png" alt=""/>
                            <div className="details">
                                <h5>Tasks<motion.i variants={Variants} className="fas fa-angle-double-right"></motion.i></h5>
                                <p>React.js & Redux</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/mern' >
                        <div className="subright mern">
                            <img src="./photos/port.png" alt=""/>
                            <div className="details">
                                <h5>MERNStack<motion.i variants={Variants} className="fas fa-angle-double-right"></motion.i></h5>
                                <p>CRUD Apps</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </motion.div>
    )
}

export default Right
