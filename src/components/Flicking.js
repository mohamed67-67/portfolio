import React, { useEffect, useRef } from 'react'
import Flicking from "@egjs/react-flicking";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';



SwiperCore.use([Pagination, Autoplay, Navigation]);
const FlickT = () => {

    return (
        <div>
            <h1 >Experiences</h1>
            <Swiper
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": true
                }}
                loop={true} spaceBetween={50} >
                <SwiperSlide>

                    <div className="cont">
                        <h4 >FullStack Intern</h4>
                        <h4>at TFG U.S.A</h4>
                        <img style={{ width: '70%' }} src="./photos/techforgood_logo.png" alt="" />
                        <p className='site'>https://techforgoodinc.org/</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cont">
                        <h4 >React.js Intern</h4>
                        <h4>at MPA U.S.A</h4>
                        <img style={{ width: '50%' }} src="https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg" alt="" />
                        <p className='site'>https://minorityprogrammers.com/</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}



function Flick() {

    // const plugins = [new AutoPlay()];

    // writting effect
    let i = 0;
    let j = 0
    let textToScreen = useRef();
    let Phrases = ['Getting Bugs', 'Be Frustrated', "Get 'em fixed", 'Learn', 'Getting Better'];
    let currentPhrase = []
    let isDeleting = false;
    let isEnded = false

    const Loop = () => {
        isEnded = false

        if (i < Phrases.length) {
            // writting 
            if (!isDeleting && j <= Phrases[i].length) {
                currentPhrase.push(Phrases[i][j])
                j++
                textToScreen.current.innerHTML = currentPhrase.join('');
            }
            // Deleting
            if (isDeleting && j <= Phrases[i].length) {
                currentPhrase.pop(Phrases[i][j])
                j--
                textToScreen.current.innerHTML = currentPhrase.join('')
            }

            if (j === Phrases[i].length) {
                isDeleting = true;
                isEnded = true;
            }
            if (isDeleting && j === 0) {
                i++
                isDeleting = false
                if (i === Phrases.length) {
                    i = 0
                    currentPhrase = []
                }
            }
        }
        let time = isEnded ? 3000 : isDeleting ? 100 : 100
        setTimeout(Loop, time)
    }
    const theFlek = useRef();

    useEffect(() => {
        textToScreen.current = document.getElementById('mytext');
        const indecators = document.querySelectorAll('.fa-circle');
        Loop();

        indecators.forEach(one => {
            one.addEventListener('click', () => {
                indecators.forEach(one => {
                    one.classList.remove('fas')
                })
                let theID = one.id
                document.getElementById(theID).classList.add('fas')
                theFlek.current.moveTo(theID);
            })
        })

    })

    // console.log(theFlek.current.currentPanel); activeIndex
    return (
        <Flicking disableOnInit={true} adaptive={true} ref={theFlek} align='prev' horizontal={false}  >

            <div className='first single'>
                <div className="syntax">
                    <h1>Persistence..</h1>
                    <h1 className='GB'><span id='mytext'>Better</span><span id='mybadge'>|</span> </h1>
                    <h2>Every Day.</h2>
                </div>
            </div>

            <div className='second single'>
                <div className="syntax">
                    <h1>Alexandria Uni</h1>
                    <h1>BSC In</h1>
                    <h1>Civil</h1>
                    <h1>Engineering</h1>
                    <h3>Class : 2018</h3>
                </div>
            </div>

            <div className='third single'>
                <h3>Skills</h3>
                <div className="skills ">
                    <div className="html">
                        <i className="fab fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div className="css">
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-sass"></i>
                        <p>CSS&Sass(bas)</p>
                    </div>
                    <div className="javascript">
                        <i className="fab fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className="bootstrap">
                        <i className="fab fa-bootstrap"></i>
                        <p>BootStrap</p>
                    </div>
                    <div className="react">
                        <i className="fab fa-react"></i>
                        <p>React.js</p>
                    </div>
                    <div className="react">
                        <i className="fab fa-node-js"></i>
                        <p>node.js(bas) </p>
                    </div>
                    <div className="react">
                        <i className="fas fa-code "></i>
                        <p>Redux</p>
                    </div>
                    <div className="react">
                        <i className="fas fa-code"></i>
                        <p>Material-UI</p>
                    </div>
                    <div className="react">
                        <i className="fas fa-code"></i>
                        <p>FramerMotion</p>
                    </div>
                    <div className="react">
                        <i className="fas fa-code"></i>
                        <p>SQL(bas)</p>
                    </div>
                    <div className="react">
                        <i className="fas fa-code"></i>
                        <p>JQuery(bas) </p>
                    </div>
                    <div className="mongo">
                        <i className="fas fa-code"></i>
                        <p>MongoDB(bas)</p>
                    </div>

                </div>

            </div>

            <div className='fourth'>
                {/* <h1 >Experiences</h1>

                <div className="cont">
                    <h4 >FullStack Intern</h4>
                    <h4>in TFG U.S.A</h4>
                    <img style={{ width: '90%' }} src="./photos/techforgood_logo.png" alt="" />
                    <p className='site'>https://techforgoodinc.org/</p>
                </div> */}
                <FlickT />

            </div>

        </Flicking >
    )
}

export default Flick;