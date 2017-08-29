import * as React from 'react';
import { Sprite, DisplayObjectContainer, DisplayObjectPropsType } from 'react-pixi';

interface Props extends DisplayObjectPropsType {
    numberImages: number;
    imageWidth: number;
    imageHeight: number;
}

interface State {
}

class Reel extends React.Component<Props, State> {
    getRandomAnimal(): string {
        const animals = [
            'elephant',
            'giraffe',
            'hippo',
            'monkey',
            'panda',
            'parrot',
            'penguin',
            'pig',
            'rabbit',
            'snake'
        ];

        return animals[Math.floor(Math.random() * animals.length)];
    }

    render() {
        let sprites = [];

        for (let i = 0; i < this.props.numberImages; i++) {
            sprites.push(
                <Sprite
                    image={`images/animals/${this.getRandomAnimal()}.png`}
                    y={i * this.props.imageHeight}
                    width={this.props.imageWidth}
                    height={this.props.imageHeight}
                    key={`sprite-${i}`}
                />
            );
        }

        return (
            <DisplayObjectContainer name="reel" x={this.props.x} y={this.props.y}>
                {sprites}
            </DisplayObjectContainer>
        );
    }
}

export default Reel;