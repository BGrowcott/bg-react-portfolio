import React from 'react';
import $ from "jquery";

const noMargin = {
    margin: '0px'
}

const aboutMeStyle = {
    backgroundColor: 'white', 
    color: 'black'
}

function NavBar ({setPage}) {

    function navSelect (e) {
        $('li').css({'background-color': 'black', 'color': 'white'})
        $(e.target).css({'background-color': 'white', 'color': 'black'})
        setPage(e.target.dataset.page)
    }

    return (
        <div>
            <ul style={noMargin}>
                <li id='name'>
                    Ben Growcott
                </li>
                <li data-page='about' style={aboutMeStyle} onClick={navSelect}>
                   About Me
                </li>
                <li data-page='portfolio' onClick={navSelect}>
                   Portfolio
                </li>
                <li data-page='contact' onClick={navSelect}>
                    Contact
                </li>
                <li>
                    CV
                </li>
            </ul>
        </div>
    )
}

export default NavBar;