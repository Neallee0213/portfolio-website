import React from 'react'
import './MailMe.scss'
import Slide from 'react-reveal/Slide';
const MailMe = () => {
    return (
        <div className="container-fulid mailme">
            <Slide bottom delay={500}>
                <div className="row justify-content-center">
                    <div className="col-10 mail-text">
                        <h1>Get In Touch</h1>

                        <p>Have a sweet project in mind or just want to say hi?</p>
                        <p>Feel free to send me a email!</p>
                        {/* <h1 className="text2">the next step </h1>
                    <h1 className="text3">and work</h1>
                    <h1 className="text4">together?</h1> */}
                    </div>
                </div>
            </Slide>
            <Slide bottom delay={500}>
                <div className="row justify-content-center">
                    <div className="col-10 mail-btn">
                        <a className="btn btn-white" href="mailto:hyunjoon.lee0213@gmail.com" target="_blank">Contact Me</a>
                    </div>
                </div>
            </Slide>
        </div >
    )
}

export default MailMe
