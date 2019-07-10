import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardsList = robots.map(robot => {
        return (
            <Card 
                id={robot.id} 
                name={robot.name} 
                email={robot.email} 
                key={robot.id} 
                />
        )
    })
    return (
        <div>
            {cardsList}
        </div>
    )
}

export default CardList;