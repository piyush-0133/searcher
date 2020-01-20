import React from 'react';
import './card-list-style.css';
import {Cards} from '../card/cards';

export const CardList = (props) =>
{
    
   return(
        <div className="card-list">
          {
     props.cards.map(classes =>
         <Cards key={classes.id} classes={classes}/>
    )}
       </div>
   );
}