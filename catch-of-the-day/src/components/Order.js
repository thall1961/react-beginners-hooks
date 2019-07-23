import React from 'react';
import {formatPrice} from '../helpers';

function Order(props) {
    function renderOrder(key) {
        const fish = props.fishes[key];
        const count = props.order[key];
        const isAvailable = fish.status === 'available';
        if (!isAvailable) {
            return (
                <li key={key}>
                    Sorry {fish ? fish.name : 'fish'} is no longer available.
                </li>
            );
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        );
    }
    const {fishes, order} = props;
    const total = Object.keys(order)
        .map(key => {
            if (fishes[key] && fishes[key].status === 'available') {
                return order[key] * fishes[key].price;
            }
            return 0;
        })
        .reduce((a, b) => a + b, 0);
    return (
        <div className="order-wrap">
            <h2>Order</h2>
            <ul className="order">
                {Object.keys(order).map(key => renderOrder(key))}
            </ul>
            <div className="total">
                Total: <strong>{formatPrice(total)}</strong>
            </div>
        </div>
    );
}

export default Order;
