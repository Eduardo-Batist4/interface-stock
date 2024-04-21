import { useState } from "react";

function SelectType(props) {
    // const [ selectOption, setSelectOption ] = useState("");

    return (
        <div className="text-left space-y-3 mb-5">
            <label htmlFor="selectOption" className="text-xl uppercase font-medium text-slate-50">tipo</label>
            <select name="selectionOption" 
            className="w-full font-medium outline-none px-4 py-3 rounded-lg"
            value={props.selectOption} 
            onChange={(ev) => props.setSelectOption(ev.target.value)}>
                <option value="">selecione...</option>
                <option value="input">entrada</option>
                <option value="output">saida</option>
            </select>
        </div>
    );
};

export default SelectType;