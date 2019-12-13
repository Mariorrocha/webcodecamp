import React from 'react';
import Cover from '../components/Cover';
import Menu from '../components/Menu';
import Headline from '../components/Headline';
import Talks from '../components/Talks';
import Countdown from '../components/Countdown';
import Speakers from '../components/Speakers';
import Summary from '../components/Summary';
import Pricing from '../components/Pricing';
import Location from '../components/Location';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const Home = () =>{

  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 1);
  return (
    <React.Fragment>
      <Cover />
      <Menu />
      <main>
       <Headline />
        <Talks />
        <Speakers />
        <Summary />
        <Pricing />
        <Location />
        <Testimonials />
        <Newsletter />
        <Countdown deadline={deadline}/>
      </main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
     
    </React.Fragment>
  );

}

export default Home;