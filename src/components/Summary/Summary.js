import React from 'react';
import './Summary.css';

const Summary = () =>{

    return (

        <section id="general-data" className="general-data">
			<div className="bg-parallax-general-data"></div>
			<div className="section-padding">
				<div className="container">
					<div className="general-data-content flex">
						<div className="conference-days">
							<span>3</span>
							<p>Días de conferencias</p>
						</div>
						<div className="conferencist-number">
							<span>6</span>
							<p>Conferencistas Expertos</p>
						</div>
						<div className="number-of-conferences">
							<span>12</span>
							<p>Conferencias magistrales</p>
						</div>
						<div className="workshops-number">
							<span>15</span>
							<p>Talleres profesionales</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )

}

export default Summary;