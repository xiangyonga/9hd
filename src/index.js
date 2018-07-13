

import React from 'react';
import ReactDOM from 'react-dom';
//全局样式
import './stylesheets/main.scss'

//添加Get、Post的一种方法
import './modules/request'

//rem引入
import './modules/rem'

//引入swiper
import 'swiper/dist/css/swiper.min.css'

//根组件
import App from './components/App';

//全局配置
import './modules/config'

 
//脚手架自带工具
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
