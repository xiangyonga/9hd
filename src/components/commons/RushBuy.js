

//Component是react中自带的标准父类，所有组件的类都需要继承它的属性和方法
import React,{Component} from 'react'


//在16版本中，组件的写法有很多种：有状态组件（最普通、常见的组件），无状态组件，高阶级组件
//最普通的组件就是一个类，需要继承Component父类

class RushBuy extends Component {
	constructor(props, context) {
		super(props);//是父类的构造器

	}
	closes(){

	}
	boxisshow(){

	}
	render (){
		return (
				<div className="rush_buy">
					<div className="rush_head">
					<h3 className="head_tit">
						<i className="icon_box"></i>
						<span>1号抢购</span>
					</h3>
					</div>
					
				</div>
			)
	}
}


//组件设置默认属性的方法
RushBuy.defaultProps = {
}

export default RushBuy 