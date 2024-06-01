import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

export default function cardImg(props) {
    return (
        <div className='w-1/3 mt-16'>
            {
                props.id % 3 == 0 ? <img src={card1} alt="" /> : props.id % 3 == 1 ? <img src={card2} alt="" /> : <img src={card3} alt="" />
            }
            <p className='text-center text-white text-4xl md:-mt-24 -mt-16 sm:-mt-16'>Name</p>
        </div>
    )
}
