import React from 'react';
import './flecha.css'

export default class Flecha extends React.Component {
    render() {
        return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    preserveAspectRatio="none" >
                    <path className="st0 draw-arrow" strokeLinecap="round" stoke-linejoin="round" d="M100, 60 V10, 125" />
                    <path className="draw-arrow tail-1" strokeLinecap="round" stoke-linejoin="round" d="M100,130 L50, 95"></path>
                    <path className="draw-arrow tail-2" strokeLinecap="round" stoke-linejoin="round" d="M100,130 L150, 95"></path>
                </svg>
        );
    }
}
