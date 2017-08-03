/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
	第一部分
	
	导入ReactNative包，导入ReactNative组件
	AppRegistry：JS运行所有ReactNative应用的入口
	StyleSheet：ReactNative中使用的样式表，类似CSS样式表
	Text,
  	View
  	各种开发中需要使用的组件
  	
  	模板中使用的是ES6的写法，ES5语法如下
  	let React = require("react-native");
  	let {
  		AppRegistry,
		StyleSheet,
		Text,
		View
  	} = React
  	
  	require函数，搜索目录加载文件

*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
	第二部分
	
	创建ReactNative组件
	
	模板中使用的是ES6的语法
	render(){}是ES6中函数的简写
	
	ES5语法如下:
	
	var HelloWorld = React.createClass({
		render:function(){
			return{};
		}
	});

	
export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 华采找鱼！
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
*/

	//定义组件
	
	var HelloWorld = React.creatClass({
		render:function(){
			return(
				<View style={styles.container}>
					<View style={styles.top}></View>
					<View style={styles.bottom}></View>
				</View>
			)
		}
	})

/*
	第三部分
	
	StyleSheet.create创建样式实例
	在应用中只会被创建一次,不用每次在渲染周期中重新创建
	


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});
*/

	//定义样式
	/*
	
	1、html5以;结尾
	   React以,结尾
	2、html5中key，value都不加引号
	   React中属于JavaSript对象，key的值不能出现“-”，需要使用驼峰命名法。如果value为字符串，需要加引号
	3、html5中，value如果是数字，需要加单位
	   React中不用加单位
	注意：拼接样式，写在后面的样式，优先级越高
	
	*/
	
	var styles = StyleSheet.create({
		//外层view
		container:{
			backgroundColor:"red",
			width:300,
			height:400,
		}
		//上层view
		top:{
			backgroundColor:"green",
			width:280,
			height:250,
			margin:10,
		}
		//下层view
		bottom:{
			backgroundColor:"yellow",
			width:280,
			height:110,
			margin:10,
		}
	});

/*
	第四部分
	
	注册入口组件
	
	AppRegistry:负责注册运行ReactNative应用程序的JavaScript入口
	registerComponent 注册应用程序的入口组件.告知ReactNative哪一个组件被注册为应用的跟容器
	
	第二个参数使用了ES6的语法,箭头函数:
	() => HelloWorld 返回的必须是定义的组件类的名字
	
	等价于
	function(){return HelloWorld}

*/

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

