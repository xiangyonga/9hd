

//Component是react中自带的标准父类，所有组件的类都需要继承它的属性和方法
import React,{Component} from 'react'
import Advert from "./Advert"


//在16版本中，组件的写法有很多种：有状态组件（最普通、常见的组件），无状态组件，高阶级组件
//最普通的组件就是一个类，需要继承Component父类

class TestComponent extends Component {
	constructor(props, context) {
		super(props);//是父类的构造器


		//组件的状态
		this.state = {
			theme :'red'
		}
	}
	render (){
		return (
				<div style={{color:this.state.theme}}>
					<Advert/>
					<p> { this.props.message } </p>
				</div>
			)
	}
}


//组件设置默认属性的方法
TestComponent.defaultProps = {
	message: 'this is a react demo'
}

export default TestComponent 