import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <section className="footer-top section-padding">
        <div className="container">
            <div className="footer-content-wrapper flex">
                <div className="footer-content flex">
                    <div className="box">
                        <h2>Sobre <span>Web/Code/Camp</span></h2>
                        <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p>
                    </div>
                    <div className="box">
                        <h2>Preguntas <span>Frecuentes</span></h2>
                        <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p>
                    </div>
                    <div className="box">
                        <nav className="footer-socia-media-nav flex">
                            <a href="#" target="_blank">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-youtube-square"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-pinterest-square"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;