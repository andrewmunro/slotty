import * as React from 'react';
import { Stage } from 'react-pixi';
import Slot from './slot/Slot';

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Stage width={800} height={600}>
                    <Slot width={300} height={400} x={250} y={50}/>
                </Stage>
            </div>
        );
    }
}

export default App;
