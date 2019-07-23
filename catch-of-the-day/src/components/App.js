import React, {useState, useEffect} from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import base from '../base';
import sampleFishes from '../sample-fishes';

function App(props) {
    const [fishes, setFishes] = useState({});
    const [order, setOrder] = useState({});

    useEffect(() => {
        const ref = base.syncState(`${props.storeId}/fishes`, {
            context: {
                setState: ({fishes}) => setFishes({...fishes}),
                state: {fishes}
            },
            state: 'fishes'
        });

        console.log('effecting');

        return () => {
            base.removeBinding(ref);
        };
    }, []);

    function addFish(fish) {
        const myFishes = {...fishes};
        myFishes[`fish${Date.now()}`] = fish;
        setFishes(myFishes);
    }

    function loadSamplefishes() {
        setFishes(sampleFishes);
    }

    function updateOrder(key) {
        const myOrder = {...order};
        myOrder[key] = myOrder[key] + 1 || 1;
        setOrder(myOrder);
    }

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Daily" />
                <button onClick={() => loadSamplefishes()}>
                    Load Sample Fishes
                </button>
                <ul className="fishes">
                    {Object.keys(fishes).map(f => {
                        return (
                            <Fish
                                key={f}
                                index={f}
                                fish={fishes[f]}
                                updateOrder={updateOrder}
                            />
                        );
                    })}
                </ul>
            </div>
            <Order fishes={fishes} order={order} />
            <Inventory addFish={addFish} />
        </div>
    );
}

export default App;
