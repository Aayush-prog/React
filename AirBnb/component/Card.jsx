import React from 'react'

export default function Card(){
    return(
        <div className="card">
            <img src="https://i2-prod.bristolpost.co.uk/incoming/article4072173.ece/ALTERNATES/s615b/1_Saltford-house.jpg" className="card-photo"/>
            <div className="card-info">
                <img className="star" src="https://github.com/somadisingh/airbnb/blob/master/src/images/star.png?raw=true" />
                <span>4.3</span>
                <span>Nepal</span>
            </div>
            <p>Made by</p>
            <p>Bombhu</p>
        </div>
    )
}