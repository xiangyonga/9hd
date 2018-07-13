

//Component是react中自带的标准父类，所有组件的类都需要继承它的属性和方法
import React,{Component} from 'react'


//在16版本中，组件的写法有很多种：有状态组件（最普通、常见的组件），无状态组件，高阶级组件
//最普通的组件就是一个类，需要继承Component父类

class Advert extends Component {
	constructor(props, context) {
		super(props);//是父类的构造器


	// 	//组件的状态
		this.state = {
			isshow :true
		}
		this.closes = this.closes.bind(this)
	}
	closes(){
		this.setState({isshow:false})
	}
	boxisshow(){
		if(this.state.isshow){
			return(
				<div className="advert">
					<div className="img">
						<img src="/production.png"/>
						<span onClick={ this.closes }>&times;</span>
					</div>
				</div>
				)
		}
		return ''
	}
	render (){
		return (
				<div>
					{this.boxisshow()}
				</div>
			)
	}
}


//组件设置默认属性的方法
Advert.defaultProps = {
	message: 'this is a react demo'
}

export default Advert 