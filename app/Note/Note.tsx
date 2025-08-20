'use client'
import Select from 'react-select';
import food from '../../public/dog-food.svg';
import water from '../../public/water.svg';
import poo from '../../public/poo.svg';
import toy from '../../public/toy.svg';
import hydrant from '../../public/hydrant.svg';

const options = [
    { value: "food", label:{food}},
    { value: "water", label:{water}},
    { value: "poo", label:{poo}},
    { value: "pee", label:{hydrant}},
    { value: "toy", label:{toy}},
]


const Note = () => {
    return (
        <div className={"Note"}>
            <input type="text"></input>
            <Select options={options} />
        </div>
    )
}

export default Note