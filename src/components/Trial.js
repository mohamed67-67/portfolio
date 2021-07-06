import React, { useEffect } from 'react'

function Trial() {

    var i = 0;
    var j = 0;
    var txt = 'Bug'; /* The text */
    var frus = 'frustrated'
    var speed = 500; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
            // i === 0
        } 
    }

    // const typeWritter2 = () => {
        
        
    // }
    useEffect( ()=>{
        typeWriter()
        // document.getElementById('demo').innerHTML = '';
        // await typeWritter2()
    })


    return (
        <p style={{margin: '15rem'}} id="demo"></p>
    )
}

export default Trial
