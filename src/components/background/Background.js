import React from 'react';
import Wave from 'react-wavify';

import "./Background.scss";

export default class Background extends React.Component {
    render() {
        return <Wave id='canvas'  fill='#000'
            paused={false}
            options={{
                height: 20,
                amplitude: 60,
                speed: 0.1,
                points: 10
            }} />
    }
}