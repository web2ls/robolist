import React from 'react';
import { directive } from '@babel/types';

const Card = () => {
    return (
        <div className='card'>
            <img src='https://robohash.org/test?200x200' alt='' />
            <div>
                <p>John Doe</p>
                <p>johndoe@mail.com</p>
            </div>
        </div>
    )
}

export default Card;