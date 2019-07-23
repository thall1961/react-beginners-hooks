import React from 'react';
import {formatPrice} from '../helpers';

function Fish(props) {
    const {image, name, price, desc, status} = props.fish;
    const isAvailable = status === 'available';
    return (
        <li className="menu-fish">
            <img src={image} alt={name} />
            <h3 className="fish-name">
                {name}{' '}
                <span className="price">{formatPrice(parseInt(price))}</span>
            </h3>
            <p>{desc}</p>
            <button
                disabled={!isAvailable}
                onClick={() => props.updateOrder(props.index)}
            >
                {isAvailable ? 'Add To Order' : 'Sold Out'}
            </button>
        </li>
    );
}

export default Fish;
