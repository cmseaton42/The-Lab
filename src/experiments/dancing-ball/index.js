import React, { Component } from "react";
import anime from "animejs";

import "./dancing-ball.scss";

export default class DancingBalls extends Component {
    constructor() {
        super();

        this.state = { play: true };

        this.anime = anime.timeline({ direction: "alternate", loop: true, autoplay: true });
    }

    _handleClick = e => {
        let { play } = this.state;
        play = !play;

        if (play) {
            this.anime.play();
        } else {
            this.anime.pause();
        }

        this.setState({ play });
    };

    componentDidMount() {
        let { anime, red, blue, green } = this;
        anime
            .add({
                targets: red,
                translateX: [{ value: 180 }, { value: 350 }, { value: 445 }],
                translateY: [{ value: 55 }, { value: 110 }, { value: 110 }],
                duration: 2500
            })
            .add({
                targets: blue,
                translateX: [{ value: 180 }, { value: 350 }, { value: 445 }],
                translateY: [{ value: 55 }, { value: -55 }, { value: -55 }],
                duration: 2500,
                offset: 200
            })
            .add({
                targets: green,
                translateX: [{ value: 180 }, { value: 445 }],
                translateY: [{ value: -110 }, { value: -55 }, { value: -55 }],
                duration: 2500,
                offset: 600
            });
    }

    render() {
        return (
            <div className="dancing-ball-demo">
                <div className="banner">
                    <p>Follow the Dancing Ball</p>
                </div>
                {this.state.play ? null : (
                    <div className="btn-play" onClick={this._handleClick}>
                        <div>
                            <i className="fa fa-play" />
                        </div>
                    </div>
                )}
                <div className="dancing-ball-wrapper">
                    <div
                        className="dancing-ball red"
                        onClick={this._handleClick}
                        ref={red => {
                            this.red = red;
                        }}
                    />
                    <div
                        className="dancing-ball blue"
                        onClick={this._handleClick}
                        ref={blue => {
                            this.blue = blue;
                        }}
                    />
                    <div
                        className="dancing-ball green"
                        onClick={this._handleClick}
                        ref={green => {
                            this.green = green;
                        }}
                    />
                </div>
                <div
                    className="btn-restart"
                    onClick={e => {
                        this.anime.restart();
                        this.setState({ play: true });
                    }}>
                    <p>Restart</p>
                </div>
            </div>
        );
    }
}
