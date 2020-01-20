import React from 'react';
import './cards-style.css'

export const Cards = (props) => {
    return (
        <div className='card-container'>
        <img alt="images" src={`https://robohash.org/${props.classes.id}?set=set2&size=150x180`} />
            <h2>{props.classes.name}</h2>
            <p>{props.classes.email}</p>
        </div>
    );
}