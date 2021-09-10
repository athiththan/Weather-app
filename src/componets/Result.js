import React from "react";
import "./Result.css";
import {Button} from "@material-ui/core";
const Result = ({temp,desc,icon}) => {
    return<div className="result">
        <div className="result__box">
            <h1>Temp:{temp}</h1>
            <p>{desc}</p>
            <img src={icon} alt="logo" />
            <Button variant="contained" color="default">
                Back
            </Button>
        </div>
    </div>
}
export default Result;