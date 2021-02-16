import React from 'react';

export default function UserCard({ onClick, thumbnail, title, first, last, city, country }) {
    return (
        <button
            type="button"
            className="link-button"
            onClick={onClick}>
            <div className="card">
                < img src={thumbnail} alt="{first} {last} info" />
                <h4>{title} {first} {last}</h4>
                <small>{city}, {country}</small>
            </div>
        </button>
    )
}