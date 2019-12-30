import React from 'react'
import './MailMe.scss'
const MailMe = () => {
    return (
        <div className="container-fulid mailme">
            <div className="row justify-content-center">
                <div className="col-10 mail-text">
                    <h1>Ready to take the next step and work together?</h1>
                    {/* <h1 className="text2">the next step </h1>
                    <h1 className="text3">and work</h1>
                    <h1 className="text4">together?</h1> */}
                </div>

            </div>
            <div className="row justify-content-center">
                <div className="col-10 mail-btn">
                    <a className="btn btn-white" href="mailto:hyunjoon.lee0213@gmail.com" target="_blank">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default MailMe
