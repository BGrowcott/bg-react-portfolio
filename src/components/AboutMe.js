import React from 'react';
import Photo from '../images/IMG-2174.jpg'


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
        width: '40%',
        boxShadow: 'inset 0px 0px 10px black',
        padding: '25px',
        borderRadius: '15px',
        backgroundColor: 'whitesmoke',
    },
    backGroundImage: {
        width: '200px',
        height: '200px',
        backgroundImage: `url(${Photo})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '100px',
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