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
                <Reel
                    key="reel1"
                    x={0}
                    numberImages={4}
                    imageWidth={100}
                    imageHeight={100}
                    scrollSpeed={1000}
                />
                <Reel
                    key="reel2"
                    x={100}
                    numberImages={4}
                    imageWidth={100}
                    imageHeight={100}
                    scrollSpeed={1200}
                />
                <Reel
                    key="reel3"
                    x={200}
                    numberImages={4}
                    imageWidth={100}
                    imageHeight={100}
                    scrollSpeed={800}
                />
            </DisplayObjectContainer>
        );
    }
}

export default Slot;