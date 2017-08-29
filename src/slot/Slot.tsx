import * as React from 'react';
import { ContainerPropsType, DisplayObjectContainer } from 'react-pixi';
import * as PIXI from 'pixi.js';
import Reel from './reel/Reel';

interface State {
}

class Slot extends React.Component<ContainerPropsType, State> {
    render() {
        const mask = new PIXI.Graphics();
        mask.beginFill(0, 1);
        mask.drawRect(this.props.x || 0, this.props.y || 0, this.props.width || 0, this.props.height || 0);

        return (
            <DisplayObjectContainer mask={mask} {...this.props} >
                <Reel x={0} numberImages={10} imageWidth={100} imageHeight={100} key="reel1"/>
                <Reel x={100} numberImages={10} imageWidth={100} imageHeight={100} key="reel2"/>
                <Reel x={200} numberImages={10} imageWidth={100} imageHeight={100} key="reel3"/>
            </DisplayObjectContainer>
        );
    }
}

export default Slot;