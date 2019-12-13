import React from 'react';
import { useParams } from 'react-router-dom';
import speakers from '../data/speakers.json'

const Speaker = () =>{
    
    const { id } = useParams();
    const speakerInfo = speakers.find(speaker => speaker.id === id);
    return (
        <div>
            <h1>{speakerInfo.name}</h1>
            <p>{speakerInfo.description}</p>
            <div>
                <h3>Skills</h3>
                <ul>
                    {speakerInfo.skills.map(skill =>{
                        return(
                            <li key={skill}>{skill}</li>
                        )
                    })}
                </ul>
            </div>
            <p>
                <span>Siguiente taller</span>
                <strong>{speakerInfo.nextTalk}</strong>
            </p>
        </div>
            
    )
}

export default Speaker;