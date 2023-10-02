import React from 'react'
import { textState, updateText } from '../redux/slice/markdown.slice';
import { useDispatch, useSelector } from 'react-redux';


const Text = () => {
    const dispatch = useDispatch();
    const text = useSelector(textState);

    console.log(text);

    const handleChange = (e) => {
        dispatch(updateText({text: e.target.value}));
    }

    return (
        <div style={{width: "45%"}}>
            <p>Text area</p>
            <textarea value={text} onChange={handleChange} className="text-panel-left" readOnly={false}></textarea>
        </div>
    )
}

export default Text