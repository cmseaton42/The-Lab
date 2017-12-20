import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import DancingBalls from "./components/dancing-ball";

const Home = () => {
    return (
        <div>
            <img src="/TheLab.jpg" alt="The Lab" />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                {/* Nav Menu */}
                <div class="navbar">
                    <div class="dropdown">
                        <button class="dropbtn">
                            Demos 
                            <i class="fa fa-caret-down" />
                        </button>
                        <div class="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="Dancing-Ball-Demo">Dancing Balls</Link>
                        </div>
                    </div>
                </div>

                {/* Where the magic Happens */}
                <div className="lab-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route path="/Dancing-Ball-Demo" component={DancingBalls} />
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

//
registerServiceWorker();
