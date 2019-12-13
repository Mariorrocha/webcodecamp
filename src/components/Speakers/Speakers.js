import React from 'react';
import { Link } from 'react-router-dom';
import './Speakers.css';
import conf1 from './images/conferencist1.jpg';
import conf2 from './images/conferencist2.jpg';
import conf3 from './images/conferencist3.jpg';
import conf4 from './images/conferencist4.jpg';
import conf5 from './images/conferencist5.jpg';
import conf6 from './images/conferencist6.jpg';

const Speakers = () =>{

    return(
        <section id="conferencists" className="section-padding">
			<div className="container">
				<div className="conferencists-content flex">
					<h2>Conoce a los conferencistas</h2>
					<div className="conferencist">
						<div className="conferencist-image-wrapper">
							<img src={conf1} />
						</div>
						<div className="conferencist-data-wrapper flex">
							<div className="conferencist-name">Mario</div>
							<div className="conferencist-profile">
								<Link  className="btn-view-profile" to="/speakers/mario">Ver perfil</Link>
							</div>
						</div>
					</div>
					<div className="conferencist">
						<div className="conferencist-image-wrapper">
							<img src={conf2} />
						</div>
						<div className="conferencist-data-wrapper flex">
							<div className="conferencist-name">Adrian</div>
							<div className="conferencist-profile">
								<Link className="btn-view-profile" to="/speakers/adrian">Ver perfil</Link>
							</div>
						</div>
					</div>
					<div className="conferencist">
						<div className="conferencist-image-wrapper">
							<img src={conf3} />
						</div>
						<div className="conferencist-data-wrapper flex">
							<div className="conferencist-name">Lupita</div>
							<div className="conferencist-profile">
								<Link className="btn-view-profile" to="/speakers/lupita">Ver perfil</Link>
							</div>
						</div>
					</div>
					<div className="conferencist">
						<div className="conferencist-image-wrapper">
							<img src={conf4} />
						</div>
						<div className="conferencist-data-wrapper flex">
							<div className="conferencist-name">Jane Doe</div>
							<div className="conferencist-profile">
								<a  href="#" target="_blank" className="btn-view-profile">Ver perfil</a>
							</div>
						</div>
					</div>
					<div className="conferencist">
						<div className="conferencist-image-wrapper">
							<img src={conf5} />
						</div>
						<div className="conferencist-data-wrapper flex">
							<div className="conferencist-name">John Doe</div>
							<div className="conferencist-profile">
								<a  href="#" target="_blank" className="btn-view-profile">Ver perfil</a>
							</div>
						</div>
					</div>
					<div className="conferencist">
						<div className="conferencist-image-wrapper">
							<img src={conf6} />
						</div>
						<div className="conferencist-data-wrapper flex">
							<div className="conferencist-name">Jane Doe</div>
							<div className="conferencist-profile">
								<a  href="#" target="_blank" className="btn-view-profile">Ver perfil</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Speakers;