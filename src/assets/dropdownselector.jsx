import React from "react";

const DropdownSelector = ({ options, selectedOption, onChange }) => {
    return (
    <div>
        <label htmlFor="basemapSelector">Basemap: </label>
        <select
        id="basemapSelector"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        >
        {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
        </select>
    </div>
    );
};

export default DropdownSelector;
