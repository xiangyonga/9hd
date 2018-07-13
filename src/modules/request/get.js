

//引入axios组件
import axios from 'axios'

//定义获取方法
const Get = ({url,data}) => {
	return axios.get('/juooo'+url,{
		params: data
	})
}

export default Get

// Get({
// 	url: '',
// 	data: {}
// }).then(res => {

// })