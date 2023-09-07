import React from 'react';
// import github from '../assets/github-icon-logo-png-transparent.png';
// import linkedin from '../assets/linkedin-icon-logo-png-transparent.png';
// import facebook from '../assets/facebook-3-logo-png-transparent.png';

const imgStyle = {
    width: 32,
}

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/dylanadams98?tab=repositories"><img
                    // src={github}
                    alt="github"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 1}
                    onMouseOut={e => e.currentTarget.style.opacity = 0.3}
                /></a>
                <a href="https://www.linkedin.com"><img
                    // src={linkedin}
                    alt="linkedin"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 1}
                    onMouseOut={e => e.currentTarget.style.opacity = 0.2}
                /></a>
                <a href="https://www.facebook.com"><img
                    // src={facebook}
                    alt="facebook"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 1}
                    onMouseOut={e => e.currentTarget.style.opacity = 0.3}
                /></a>
            </div>
            <span style={{ color: 'white',}}>© Dylan Adams 2023</span>
        </footer>
    );
}

export default Footer;