import React, { Component } from "react";
import { createPortal } from "react-dom";

import "./simple-portal.css";

export default class SimplePortal extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            input: "",
            showDialog: false
        };

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onChange(e) {
        let input = e.target.value;

        this.setState({ input });
    }

    _onSubmit(e) {
        e.preventDefault();
        let showDialog = false;

        // Dont Mutate the State!!!
        let list = this.state.list.slice();

        list.push(this.state.input);

        this.setState({ showDialog, list, input: "" });
    }

    render() {
        const { showDialog, list, input } = this.state;

        return (
            <div className="container">
                <div>
                    <button
                        className="btn"
                        onClick={e =>
                            this.setState({
                                showDialog: !showDialog
                            })
                        }
                    >
                        Add Item
                    </button>
                </div>

                {/* Render Items from List */}
                <div>
                    <ul>
                        {list.map(item => {
                            return <li key={item}>{item}</li>;
                        })}
                    </ul>
                </div>

                {/* Show Modal - Renders Outside React Hierarchy Tree via Portal Pattern */}
                {showDialog === true ? (
                    <DialogModal>
                        <div className="dialog-wrapper">
                            <h1>New List Item</h1>
                            <form onSubmit={this._onSubmit}>
                                <input type="text" value={input} onChange={this._onChange} />
                            </form>
                        </div>
                    </DialogModal>
                ) : null}
            </div>
        );
    }
}

class DialogModal extends Component {
    constructor() {
        super();
        this.body = document.getElementsByTagName("body")[0];
        this.el = document.createElement("div");
        this.el.id = "dialog-root";
    }

    componentDidMount() {
        this.body.appendChild(this.el);
    }

    componentWillUnmount() {
        this.body.removeChild(this.el);
    }

    render() {
        return createPortal(this.props.children, this.el);
    }
}
