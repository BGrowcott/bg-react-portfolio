import React from "react";
import gitHubLogo from '../images/GitHub-Mark-64px.png'
import linkedInLogo from '../images/LI-In-Bug.png'
import stackLogo from '../images/768px-Stack_Overflow_icon.png'
import '../styles/Footer.css'

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '50px 0px 0px'
}

function Footer () {
    return (
        <footer style={footerStyle}>
            <a href="https://github.com/BGrowcott" target='_blank'><img className="logo" src={gitHubLogo}/></a>
            <a href="https://www.linkedin.com/in/ben-growcott-6a0232221/" target='_blank'><img className="logo" src={linkedInLogo}/></a> 
            <a href="https://stackoverflow.com/users/17089548/bgrowcott" target='_blank'><img className="logo" src={stackLogo}/></a>
        </footer>
    )
}

export default Footer