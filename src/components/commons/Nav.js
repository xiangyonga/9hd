

//Component是react中自带的标准父类，所有组件的类都需要继承它的属性和方法
import React,{Component} from 'react'


//在16版本中，组件的写法有很多种：有状态组件（最普通、常见的组件），无状态组件，高阶级组件
//最普通的组件就是一个类，需要继承Component父类

class Nav extends Component {
	constructor(props, context) {
		super(props);//是父类的构造器

	}
	closes(){

	}
	boxisshow(){

	}
	render (){
		return (
				<div className="nav">
					<div className="nav_1">
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b1.png"/>
						</div>
						<span className="span">1号团</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b2.png"/>
						</div>
						<span className="span">饮食宝箱</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b3.png"/>
						</div>
						<span className="span">1号榜单</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b4.png"/>
						</div>
						<span className="span">1号生鲜</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b5.png"/>
						</div>
						<span className="span">全球进口</span>
						</a>
					</div>
					<div className="nav_1">
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b6.png"/>
						</div>
						<span className="span">1号闪购</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b7.png"/>
						</div>
						<span className="span">1号匠造</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b8.png"/>
						</div>
						<span className="span">领券中心</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b9.png"/>
						</div>
						<span className="span">领金币</span>
						</a>
						<a className="item_a">
						<div className="icon_box">
							<img src="/images/b10.png"/>
						</div>
						<span className="span">个人中心</span>
						</a>
					</div>
					
				</div>
			)
	}
}


//组件设置默认属性的方法
Nav.defaultProps = {
}

export default Nav 