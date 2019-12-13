import React from 'react';
import './Cover.css';

const icons = ['fa-facebook-square',
               'fa-twitter-square',
               'fa-youtube-square',
               'fa-instagram',
               'fa-pinterest-square'
                ]
const Cover = () =>{

    return (
        <header>
		<section id="hero">
			<div className="bg-hero" />
			<div className="hero-content container flex">
				<nav className="main-social-media-nav flex">
                {icons.map( (icon) =>{
                    return (
                        <a key="" href="#" target="_blank">
						<i className={`fab ${icon}`}></i>
					</a>
                    );
                } )}

				</nav>
				<h1 className="event-name">Web/Code/Camp</h1>
				<p className="slogan">Las mejores conferencias de diseño web en México</p>
				<div className="scroll-down-arrow"><a href="#event-presentation"><i className="fas fa-chevron-down" /></a></div>
			</div>
		</section>
	</header>
    );

};

export default Cover;