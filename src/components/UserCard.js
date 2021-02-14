import React from 'react';

export default function UserCard() {
    return (
        <div>
            < img src={thumbnail} alt="{first} {last} info" />
            <h4>{title} {first} {last}</h4>
            <small>{city}, {country}</small>
        </div>
    )
}