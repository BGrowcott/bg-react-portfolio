import React from 'react';
import Photo from '../images/IMG-2174.jpg'


const styles = {
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
        fontSize: 'larger',
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
               <span>Hi </span>
               I'm a full stack developer currently based in Birmingham and working as
               a junior developer with the University College Birmingham.
           </p>
           <div style={styles.backGroundImage}></div>
        </section>
    )
}

export default AboutMe;