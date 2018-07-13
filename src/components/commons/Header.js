

//Component是react中自带的标准父类，所有组件的类都需要继承它的属性和方法
import React,{Component} from 'react'


//在16版本中，组件的写法有很多种：有状态组件（最普通、常见的组件），无状态组件，高阶级组件
//最普通的组件就是一个类，需要继承Component父类

class Header extends Component {
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
				<div className="header">
					<div className="img">
						<img src="/9logo.png"/>
					</div>
					<div>
						<a className="header_area"><span>上海</span></a>
					</div>
					<div className="search_box">
						<form className="search_form">
						<div className="icon_search">
							<i className="fa fa-search"></i>
						</div>
						<input className="search_text" type="search" placeholder="冰淇淋超级品类日 满199减50"></input>
						</form>
					</div>
					<div className="right">
						<i className="fa fa-th-large"></i>
						<i className="fa fa-shopping-cart"></i>
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
Header.defaultProps = {
	message: 'this is a react demo'
}

export default Header 