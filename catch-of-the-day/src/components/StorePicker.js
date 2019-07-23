import React, {useRef} from 'react';
import {getFunName} from '../helpers';
import {navigate} from '@reach/router';

function StorePicker(props) {
    const storeInput = useRef(null);
    function goToStore(e) {
        e.preventDefault();
        const value = storeInput.current.value;
        navigate(`/store/${value}`);
    }

    return (
        <form className="store-selector" onSubmit={goToStore}>
            <h2>Please Enter A Store Name</h2>
            <input
                ref={storeInput}
                type="text"
                required
                placeholder="Store Name"
                defaultValue={getFunName()}
            />
            <button stype="submit">Visit Store &rarr;</button>
        </form>
    );
}

export default StorePicker;
