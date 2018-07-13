
import axios from 'axios'
import qs from 'querystring'

const Post = ({url, data}) => {
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source();
    let request = axios({
        method:"post",
        url:"/juooo"+url,
        headers:{
            'Content-type': 'application/x-www-form-urlencoded'
        },
        cancelToken: source.token,
        data: qs.stringify(data || {})
    })
    request.source = source
    return request
}

export default Post


		// axios({
		// 	method:"post",
		// 	url:"/juooo/index/getNationalSildeList",
		// 	headers:{
		// 		'Content-type':"application/x-www-form-urlencoded"
		// 	},
		// 	data:{
		// 		confType:'L',
		// 		isSymbol:1,
		// 		limit:6
		// 	},
		// 	transformRequest: [function (data) {
		// 		return qs.stringify(data)
		// 	}],
		// }).then(res=>{
		// 	console.log(res.data)
		// })
