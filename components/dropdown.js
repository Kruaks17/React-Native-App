import React, {useState} from 'react';

function Dropdown({title,item, multiSelect=false}){

    const [open, setOpen]= useState(false);
    const [selection, setSelection]= useState([]);
    const toggle = () => setOpen(!open);

    function handleClick(item){}


    return(
        <div>
            <div tabIndex={0} role="buttton" 
            onKeyPress={() =>toggle(!open)} 
            onClick={()=> toggle(!open)}>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>
            </div>
            {open && (
            <ul>
                {items.map(item => {
                    <li key={item.id}>
                        <button onPress={() => handleClick(item)}> 
                        <span>{item.value}</span>
                        <span>Selected...</span>
                        </button>
                    </li>
                })}
                
            </ul>
            )}
        </div>
    )

};

export default Dropdown;