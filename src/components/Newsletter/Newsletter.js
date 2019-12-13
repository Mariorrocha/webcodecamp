import React from 'react';
import './Newsletter.css';

const Newsletter = () =>{
    return (
        <section id="newsletter">
			<div className="newsletter">
				<div className="bg-newsletter"></div>
				<div className="section-padding">
					<div className="container">
						<div className="newsletter-content flex">
							<p>Regístrate al boletín del</p>
							<h2>Web/Code/Camp</h2>
							<div className="newsletter-register-btn-wrapper">
								<a href="#" className="newsletter-register-btn">
									Registro
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    )
}

export default Newsletter;