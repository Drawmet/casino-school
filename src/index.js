import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import content from './reducers/reducer';

let store = createStore(content);

render(
    <Provider {...{store}}>
    <App />
    </Provider>, 
        document.getElementById('root'));
registerServiceWorker();
