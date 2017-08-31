import * as React from 'react';
import { Sprite, DisplayObjectContainer } from 'react-pixi';

import * as TWEEN from '@tweenjs/tween.js';

interface Props {
    x: number;
    numberImages: number;
    imageWidth: number;
    imageHeight: number;
    scrollSpeed: number;
}

interface State {
    x: number;
    y: number;
    sprites?: JSX.Element[];
    raf?: number;
}

class Reel extends React.Component<Props, State> {
    private tween: TWEEN.Tween;

    constructor(props: Props) {
        super(props);

        this.state = {
            x: props.x || 0,
            y: -(props.numberImages * props.imageHeight),
        };
    }

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

    getRandomAnimalSprites(count: number): JSX.Element[] {
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

        return sprites;
    }

    componentDidMount() {
        this.tween = new TWEEN.Tween(this.state)
            .to({ y: 0 }, this.props.scrollSpeed).onUpdate((state) => {
                this.setState(state);
            }).repeat(Infinity);

        this.setState({
            sprites: this.getRandomAnimalSprites(this.props.numberImages),
        });

        this.tween.start();
    }

    render() {
        return (
            <DisplayObjectContainer name="reel" x={this.state.x} y={this.state.y}>
                <DisplayObjectContainer>
                    {this.state.sprites}
                </DisplayObjectContainer>
                <DisplayObjectContainer y={this.props.numberImages * this.props.imageHeight}>
                    {this.state.sprites}
                </DisplayObjectContainer>
            </DisplayObjectContainer>
        );
    }
}

export default Reel;