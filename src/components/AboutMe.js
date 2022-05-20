import React from 'react';
import Photo from '../images/IMG-2174.jpg'
import '../styles/About.css'


const styles = {
    hiSpan: {
        fontFamily: 'Pacifico',
        fontSize: '30px'
    },

    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    paragraph: {
        boxShadow: 'inset 0px 0px 10px black',
        padding: '25px',
        borderRadius: '15px',
        backgroundColor: 'whitesmoke',
    },
    backGroundImage: {
        width: '300px',
        height: '300px',
        backgroundImage: `url(${Photo})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '150px',
        boxShadow: 'inset 0px 0px 10px black',
    }
}

function AboutMe () {
    return (
        <section id='aboutMe' style={styles.container}>
           <p style={styles.paragraph}>
               <span style={styles.hiSpan}>Hi, I'm Ben.</span><br/>
               Full stack developer currently based in Birmingham and working as
               a junior developer with the University College Birmingham.
               <br/>
               I enjoy learning new tech and love a challenge - please check out my portfolio and get in touch!
           </p>
           <div style={styles.backGroundImage}></div>
        </section>
    )
}

export default AboutMe;