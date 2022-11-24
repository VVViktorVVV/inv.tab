import React from "react";

const MySelect = function ({ options, defaultValue, value, onChange }) {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}>
            
            <option disabled={false} value="">{defaultValue}</option>
                              
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )};
      

        </select>
    );
};

export default MySelect;