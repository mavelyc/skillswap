import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    withRouter,
  } from "react-router-dom";

const Enter = () => {
    return(
        <div>
            <h1>Enter</h1>
        </div>
    )
}

export default withRouter(Enter);