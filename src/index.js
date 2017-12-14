import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <div className="lab-wrapper">
            <h1>content</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
