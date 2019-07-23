import React from 'react';
import AddFishForm from './AddFishForm';

function Inventory(props) {
    return (
        <div className="inventory">
            <h2>Inventory</h2>
            <AddFishForm addFish={props.addFish} />
        </div>
    );
}

export default Inventory;
