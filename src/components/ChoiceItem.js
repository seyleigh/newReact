import React from "react";
import "../css/choiceItem.css";

const ChoiceItem = props => {
    const { image, id, name } = props.choices;

    return (
        <img
        className="card"
        src={image}
        alt={name}
        onClick={() => props.handleClickEvent(id)}
        />
    );
};

export default ChoiceItem;