import React, {useState} from 'react';
import video from './seminarist-speaker.mp4';
import Talk from './Talk';
import './Talks.css';

//const Talks = () =>{

const itemTalk = [
    {title: '#conference1', link:'JavaScript'},
    {title: '#conference2', link:'Python'},
    {title: '#conference3', link:'NodeJS'}

]

const categories = [
    {id: 'js', name:'JavaScript'},
    {id: 'python', name:'Python'},
    {id: 'nodejs', name:'NodeJS'}

]

const talks = [
    {
      id: 'js',
      topics: [
        {
          title: "JavaScript Básico",
          startTime: "9:00",
          date: "12/10/2019",
          speaker: "Lupita"
        },
        {
          title: "JavaScript Intermedio",
          startTime: "12:00",
          date: "12/10/2019",
          speaker: "Lupita"
        }
      ]
    },
    {
      id: 'python',
      topics: [
        {
          title: "Python Básico",
          startTime: "9:00",
          date: "12/10/2019",
          speaker: "Mario"
        },
        {
          title: "Python Intermedio",
          startTime: "12:00",
          date: "12/10/2019",
          speaker: "Mario"
        }
      ]
    },
    {
      id: 'nodejs',
      topics: [
        {
          title: "NodeJS Básico",
          startTime: "9:00",
          date: "12/10/2019",
          speaker: "Adrián"
        },
        {
          title: "NodeJS Intermedio",
          startTime: "12:00",
          date: "12/10/2019",
          speaker: "Adrián"
        }
      ]
    }
  ];

const Talks = () =>{

    const [selectedCategory,setSelectedCategory] = useState('js');
    const updateCategory = (categoryId) =>{
        return () =>{
            
              setSelectedCategory(categoryId);
            
        };
    }
    
    return(
          <section className="featured-conferences">
              <div className="bg-video-featured-conferences">
                  <video autoPlay loop>
                      <source src={video} type="video/mp4" />
                  </video>
              </div>
              <div className="section-padding">
                  <div className="container">
                      <div className="featured-conferences-content flex">
                          <h2>Conferencias destacadas</h2>
                          <nav className="featured-conferences-nav flex">
                              {categories.map((category) =>{
                                  return(
                                      <a  key={category.id}
                                      onClick={updateCategory(category.id)}><i className="fas fa-code"></i> {category.name} </a>
                                  )
                                  
                              })}
                              
                          </nav>
                          <div className="conferences-program">
                              {talks.map(talk =>{
                                  return <Talk topics={talk.topics} activeId={selectedCategory} id={talk.id} />;
                                })}
                          </div> 
                      </div>
                  </div>
              </div>
          </section>
          
      );  
    
}

   

   

//}

export default Talks;