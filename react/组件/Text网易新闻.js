/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


	import React, { Component } from 'react';
	import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View
	} from 'react-native';

	/*
	
	常用特性
	
	onPress 手指触摸事件
	numberOfLines 显示多少行
	
	可以设置字体颜色，大小 ，对齐方式等等
	
	*/
	
	/*
	
	界面布局分为两部分
	header和新闻信息
	整个页面是一个组件，是由两个子组件组成
	如果都写在index.android.js文件中，代码比较乱
	在单独一个文件中定义子组件，使用Moudle.exports将组件导出为独立的模块
	可以在其他文件中引用
	
	*/
	
	//引入
	
	var Header = require("./header");
	var News = require("./news")
	
	var HelloWorld = React.createClass({
		render:function(){
			//定义一个数组，存储新闻内容
			var news = [
				"1、你好你好你好你好你好你好你好你好你好你好你好你好",
				"2、我好",
				"3、大家好"
			]
			return(
				<View style={styles.flex}>
					{/*Header*/}
					<Header></Header>
					{/*News*/}
					<News news = {news}></News>
				</View>
			)
		}
	});
	
	var styles = StyleSheet.create({
		flex:{
			flex:1,
		}
	});
	
	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

