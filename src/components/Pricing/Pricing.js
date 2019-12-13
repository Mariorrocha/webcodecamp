import React from 'react';
import './Pricing.css'

const Pricing = () =>{

    return (
        <section id="prices" className="prices section-padding">
			<div className="container">
				<div className="prices-content flex">
					<h2>Precios</h2>
					<div className="package-box flex">
						<h3>Pase por un día</h3>
						<span>$850 mxn</span>
						<p>Lo que incluye tu paquete:</p>
						<ul>
							<li><i className="far fa-check-square"></i> Desayuno y comida (Buffet).</li>
							<li><i className="far fa-check-square"></i> Accesso a las conferencias.</li>
							<li><i className="far fa-check-square"></i> Participación en los talleres.</li>
						</ul>
						<div className="home-buy-button-wrapper">
							<a href="#" className="home-buy-button">
								Comprar
							</a>
						</div>
					</div>
					<div className="package-box flex">
						<h3>Pase por tres días</h3>
						<span>$2,000 mxn</span>
						<p>Lo que incluye tu paquete:</p>
						<ul>
							<li><i className="far fa-check-square"></i> Desayuno y comida (Buffet).</li>
							<li><i className="far fa-check-square"></i> Accesso a las conferencias.</li>
							<li><i className="far fa-check-square"></i> Participación en los talleres.</li>
						</ul>
						<div className="home-buy-button-wrapper">
							<a href="#" className="home-buy-button">
								Comprar
							</a>
						</div>
					</div>
					<div className="package-box flex">
						<h3>Pase por dos días</h3>
						<span>$1,500 mxn</span>
						<p>Lo que incluye tu paquete:</p>
						<ul>
							<li><i className="far fa-check-square"></i> Desayuno y comida (Buffet)</li>
							<li><i className="far fa-check-square"></i> Accesso a las conferencias.</li>
							<li><i className="far fa-check-square"></i> Participación en los talleres.</li>
						</ul>
						<div className="home-buy-button-wrapper">
							<a href="#" className="home-buy-button">
								Comprar
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

    )
}

export default Pricing;