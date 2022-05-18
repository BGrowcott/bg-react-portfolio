import React from 'react';
import Photo from '../images/IMG-2174.jpg'


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '80px 0px'
    },
    paragraph: {
        width: '40%'
    },
    backGroundImage: {
        width: '200px',
        height: '200px',
        backgroundImage: `url(${Photo})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '100px'
    }
}

function AboutMe () {
    return (
        <section style={styles.container}>
           <p style={styles.paragraph}>
               <span>Hi </span>
               I'm a full stack developer currently based in Birmingham and working as
               a junior developer with the University College Birmingham.
           </p>
           <div style={styles.backGroundImage}></div>
        </section>
    )
}

export default AboutMe;