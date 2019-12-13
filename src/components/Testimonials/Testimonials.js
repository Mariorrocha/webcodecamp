import React from 'react';
import './Testimonials.css';
import testimonial1 from './images/testimonial1.jpg';
import testimonial2 from './images/testimonial2.jpg';
import testimonial3 from './images/testimonial3.jpg';

const Testimonials = () =>{

    return (
        <section id="testimonials" className="testimonials section-padding">
			<div className="container">
				<div className="testimonials-content flex">
					<h2>Testimoniales</h2>
					<div className="testimonial-box flex">
						<div class="testimonial-text flex">
							<p><i className="fas fa-quote-left"></i> Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. <i class="fas fa-quote-right"></i> </p>
							<div className="testimonial-person-data flex">
								<div className="testimonial-person-photo">
									<img src={testimonial1} />
								</div>
								<div className="testimonial-person-name flex"><h3>Jane Doe</h3>
								<p><em>Graphic designer</em></p></div>
							</div>
						</div>
					</div>
					<div className="testimonial-box flex">
						<div className="testimonial-text flex">
							<p><i className="fas fa-quote-left"></i> Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. <i class="fas fa-quote-right"></i> </p>
							<div className="testimonial-person-data flex">
								<div className="testimonial-person-photo">
									<img src={testimonial2} />
								</div>
								<div className="testimonial-person-name flex"><h3>John Doe</h3>
								<p><em>Graphic designer</em></p></div>
							</div>
						</div>
					</div>
					<div className="testimonial-box flex">
						<div className="testimonial-text flex">
							<p><i className="fas fa-quote-left"></i> Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. <i class="fas fa-quote-right"></i> </p>
							<div className="testimonial-person-data flex">
								<div className="testimonial-person-photo">
									<img src={testimonial3} />
								</div>
								<div className="testimonial-person-name flex"><h3>Jane Doe</h3>
								<p><em>Graphic designer</em></p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Testimonials;