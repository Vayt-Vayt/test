import React from 'react';

const MySelect = ({value, options, onchange, ...props }) => {
    return (
        <select {...props} value={value} onChange={ e => onchange(e.target.value)} >
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
              </select> 
    );
};

export default MySelect;