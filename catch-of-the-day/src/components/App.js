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
        console.log('effecting');
        //         syncState
        //         endpoint (String)
        //              The relative Firebase endpoint to which you'd like to bind your component's state
        //         options (Object)
        //              context: (Object - required) The context of your component
        //              state: (String - required) The state property you want to sync with Firebase; can be an arbitrarily nested property a là foo.bar
        //              defaultValue: (String|Boolean|Number|Object - optional) A default value to set when the Firebase endpoint has no value (i.e., on init) (use this if you want a value other than an empty object or empty array)
        //              asArray: (Boolean - optional) Returns the Firebase data at the specified endpoint as an Array instead of an Object
        //              keepKeys: (Boolean - optional) will keep any firebase generated keys intact when manipulating data using the asArray option.
        //              queries: (Object - optional) Queries to be used with your read operations. See Query Options for more details.
        //              then: (Function - optional) The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
        //              onFailure: (Function - optional) A callback function that will be invoked if the current user does not have read or write permissions at the location.
        const ref = base.syncState(`${props.storeId}/fishes`, {
            context: {setFishes},
            reactSetState: setFishes,
            state: 'fishes'
        });

        return () => {
            console.log('removing');
            base.removeBinding(ref);
        };
    }, [fishes]);

    function addFish(fish) {
        console.log('addFish');
        const myFishes = {...fishes};
        myFishes[`fish${Date.now()}`] = fish;
        setFishes(myFishes);
    }

    function loadSamplefishes() {
        console.log('loadSamplefishes');
        setFishes(sampleFishes);
    }

    function updateOrder(key) {
        console.log('updateOrder');
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
