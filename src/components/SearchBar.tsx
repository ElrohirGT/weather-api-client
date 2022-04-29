import React, { Fragment, useRef } from "react";

type SearchBarProps = {
    onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export function SearchBar(props: SearchBarProps) {
    const inputElement = useRef({} as HTMLInputElement)
    function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        inputElement.current.value = "";
        inputElement.current.focus();
        props.handleButtonClick(e);
    }
    return (
        <Fragment>
            <input onChange={props.onChanged} ref={inputElement}/>
            <button type="submit" onClick={handleButtonClick}>+</button>
        </Fragment>
    );
}