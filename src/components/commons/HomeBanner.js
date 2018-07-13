

import React, { Component } from 'react'
import Swiper from 'swiper'
// let Swiper = window.Swiper 
class HomeBanner extends Component{  constructor(props){  super(props); 
this.state = { 
  myName : "这里是HomeBanner页面", 
    } 
 }
   
//  componentWillUnmount() {
//  this.Swiper = new Swiper(this.refs.lun, 
// {loop:true,        
// pagination: {       
//  el: '.swiper-pagination',     
//     clickable: true,      
//       onClick: function(swiper,e){  
//              var paginationContainer= document.getElementById('PgFather'); 
//                    var paginationFather = document.getElementById('body-left-pagination'); 
//                    //这里是判断是否点击的轮播底部圆点，因为方法在点击圆点的时候也会触发，所以为了能保证点击圆点轮播效果，应该将其屏蔽掉  
//                         if(!this.isDOMContains(paginationFather,e.target,paginationContainer)){   
//                              var se = document.querySelectorAll(".body-left-lunbo .swiper-slide");   
//                                   var nowNode = ""; 
//                                          var index = swiper.activeIndex;   
//                                                 if(index==0){   
//                                                       index = se.length-3;  
//                                                             }else if(index==se.length-1){   
//                                                                   index=0;   
//                                                                        }else{   
//                                                                         index = swiper.activeIndex-1;  
//                                                                               }           
//                                                                                if(self.state.swiperList.length===1){         
//                                                                                	nowNode = se[0];        
//                                                                                }else{         
//                                                                                	for(var i=0;i<se.length;i++){          
//                                                                                		if(se[i].getAttribute('data-swiper-slide-index')==index){           
//                                                                                			nowNode = se[i]          }         }        }        
//                                                                                			if(nowNode){         
//                                                                                				var id= nowNode.getAttribute("data-id");         
//                                                                                				var itemObj = {          id:id         }         
//                                                                                				goDetail(itemObj,self.state.myName)         
//                                                                                				return true       }       
//                                                                                			}else{       
//                                                                                			 return false      
//                                                                                			}     
//                                                                                		}       
//                                                                                	},      
//                                                                                }); 
 // if (this.swiper) { // 销毁swiper   
 //  this.swiper.destroy()   }  } 
   

 //  componentDidUpdate(){  
 //  	if(this.swiper){   
 //  	 this.swiper.slideTo(0, 0)   
 //  		this.swiper.destroy() 
 //  		   this.swiper = null;   } 
 //  		 this.swiper = new Swiper(this.refs.lun, {   
 //  		      loop:true,       
 //  		  pagination: {    
 //  		      el: '.swiper-pagination',    
 //  		          clickable: true,    
 //  		             },   
 //  		                }); 
 //  	 } 
  	 // isDOMContains:(parentEle,ele,container)=>{   console.log(parentEle) 
    //  //判断一个节点是否是其子节点 
    //   //parentEle: 要判断节点的父级节点 
    //    //ele:要判断的子节点 
    //     //container : 二者的父级节点   
    //      //如果parentEle h和ele传的值一样，那么两个节点相同  
    //      if(parentEle == ele){   return true }  if(!ele || !ele.nodeType || ele.nodeType != 1){   return false;  }
    //        //如果浏览器支持contains
    //          if(parentEle.contains){   return parentEle.contains(ele)  } 
    //           //火狐支持 
    //            if(parentEle.compareDocumentPosition){   
    //            return !!(parentEle.compareDocumentPosition(ele)&16);  }   
    //             //获取ele的父节点 
    //              var parEle = ele.parentNode; 
    //               while(parEle && parEle != container){  
    //                if(parEle == parentEle){   
    //                 return true;   }   parEle = parEle.parentNode;  } 
    //                  return false; } 
  		 render(){ 
  		  return (  
  		  <div>  
  		   <div className="swiper-container" ref="lun">   
  		    <div className="swiper-wrapper">  
  		      <div className="swiper-slide" data-id="0">
  		      	<img src="https://img14.360buyimg.com/img/jfs/t21784/225/2114394058/74588/38559dc7/5b4712bdNe7beea92.jpg"></img>
  		      </div>  
  		        <div className="swiper-slide" data-id="1">
  		       		 
  		        </div>   
  		         <div className="swiper-slide" data-id="2">Slide 3</div>  
  		           <div className="swiper-slide" data-id="3">Slide 4</div>  
  		             <div className="swiper-slide" data-id="4">Slide 5</div> 
  		                <div className="swiper-slide" data-id="5">Slide 6</div> 
  		                   <div className="swiper-slide" data-id="6">Slide 7</div> 
  		                      <div className="swiper-slide" data-id="7">Slide 8</div>  
  		                        <div className="swiper-slide" data-id="8">Slide 9</div> 
  		                           <div className="swiper-slide" data-id="9">Slide 10</div> 
  		                             </div> <div id="PgFather"> 
  		                              <div className="swiper-pagination" id='body-left-pagination'>
  		                              </div> 
  		                              </div>  
  		  </div>  
  		    </div> 
  		     ) 
  		      } 
  		  } 
export default HomeBanner 
