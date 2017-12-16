import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import DancingBalls from "./components/dancing-ball";

const App = () => {
    return (
        <div className="lab-wrapper">
            <DancingBalls />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

//
registerServiceWorker();
