import React, {useRef, useState} from 'react';

function AddFishForm(props) {
    const fishName = useRef('');
    const fishPrice = useRef('');
    const fishStatus = useRef('');
    const fishDesc = useRef('');
    const fishImage = useRef('');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('available');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    function createFish(e) {
        e.preventDefault();
        const fish = {
            name,
            price,
            status,
            desc,
            image
        };
        props.addFish(fish);
        e.target.reset();
    }

    return (
        <form className="fish-edit" onSubmit={createFish}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                ref={fishName}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                name="price"
                placeholder="Price"
                ref={fishPrice}
                onChange={e => setPrice(e.target.value)}
            />
            <select
                name="status"
                ref={fishStatus}
                onChange={e => setStatus(e.target.value)}
            >
                <option value="available">Fresh</option>
                <option value="unavailable">Sold Out</option>
            </select>
            <textarea
                name="desc"
                placeholder="Desc"
                ref={fishDesc}
                onChange={e => setDesc(e.target.value)}
            />
            <input
                type="text"
                name="image"
                placeholder="Image"
                ref={fishImage}
                onChange={e => setImage(e.target.value)}
            />
            <button type="submit">+ Add Fish</button>
        </form>
    );
}

export default AddFishForm;
