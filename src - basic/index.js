import React from 'react';
import ReactDOM from 'react-dom';
//全局样式
import './index.css';
//根组件
import App from './App';
//脚手架的自带工具
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
