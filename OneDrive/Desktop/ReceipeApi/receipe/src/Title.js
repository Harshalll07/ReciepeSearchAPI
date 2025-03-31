import React from 'react';
import "./App.css";

const Title = () => {
    return(
        <div className="title">
        <div className="border rounded m-3 p-5 shadow bg-warning">
        <h1 className="display-1 p-3">Recipe Search API</h1>
        <h3 className="lead">This Edamam recipe API has the data of tens of thousands of foods, including international dishes.<br></br> Enter <strong>ANY</strong> sort of food (e.g.: pasta, chicken enchilada, dumpling, etc.) to see its magic.  <span className="spinner-grow spinner-grow-sm"> </span></h3>
        </div>
        </div>
    );
}

export default Title;
