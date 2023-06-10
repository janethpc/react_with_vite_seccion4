import React from 'react';
import ReactDom from 'react-dom/client';
//import {App,  HelloApp}  from './App';
//import {FirstApp} from './FirstApp'
import {CounterApp} from './CounterApp'
import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        { /*<FirstApp title="este es la prueba del titulo" subTitle={123}/> */}
    <CounterApp value={1}/>
    </React.StrictMode>
)
