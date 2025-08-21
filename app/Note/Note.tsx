'use client'
import './Note.css';
import Select from 'react-select';
import food from '../../public/dog-food.svg';
import water from '../../public/water.svg';
import poo from '../../public/poo.svg';
import toy from '../../public/toy.svg';
import hydrant from '../../public/hydrant.svg';

const options = [
    { value: "food", icon: food },
    { value: "water", icon: water },
    { value: "poo", icon: poo },
    { value: "toy", icon: toy },
    { value: "hydrant", icon: hydrant }
]

const optionSelect = () => {
    return (
        <Select
            options={options}
            isSearchable={false}
            classNamePrefix="select"
            className="select"
            formatOptionLabel={(option) => (
                <div className="option">
                    <img src={option.icon.src} alt={option.value} />
                </div>
            )}
        />
    )
}

export default function Note(){
    return (
        <div className={"Note"}>
            <input type="text"></input>
            {optionSelect()}
        </div>
    )
}