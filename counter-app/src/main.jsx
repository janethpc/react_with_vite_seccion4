import React from 'react';
import ReactDom from 'react-dom/client';
//import {App,  HelloApp}  from './App';
import {FirstApp} from './FirstApp'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)
