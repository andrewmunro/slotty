import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as TWEEN from '@tweenjs/tween.js';

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

let update = () => {
    window.requestAnimationFrame(() => update());
    TWEEN.update();
};

update();