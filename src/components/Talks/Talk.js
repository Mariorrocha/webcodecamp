import React from 'react';
import { Link } from 'react-router-dom';

const Talk = ({ topics, activeId, id}) =>{
    const isActive = activeId === id;
    return (

        <div className={`talk ${isActive ? "active" : ""}`}>
            {topics.map(topic=>{
                return(
                    <React.Fragment>
                        <ul className="list">
                            <li>
                                <h3>{topic.title}</h3>
                            </li>
                            <li>
                                <i className="fa fa-clock"/>{topic.startTime}
                            </li>
                            <li>
                                <i className="fa fa-calendar-alt"/>{topic.date}
                            </li>
                            <li>
                                <i className="fa fa-user-tie"/>{topic.speaker}
                            </li>
                        </ul>
                    </React.Fragment>
                ) ;
            })}
            <div className="information-button-wrapper flex">
                <Link className="more-information-button" to="/conference">
                    Más información
                </Link>
            </div>

        </div>

    )

}

export default Talk;