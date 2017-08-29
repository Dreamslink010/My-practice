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
		View,
		TabBarIOS
	} from 'react-native';

	/*
		在ReactNative中，实现页面切换，提供了两个组件：TabBarIOS和TabBarIOS.Item
		
		常用性能：
		
		selected: 是否选中某个Tab.如果为true则选中并显示组件
		title：标题
		icon：图标
		onPress:点击事件，当某个tab被选中时，需要改变组件的selected={true}设置
	
		实现原理：点击tab时触发onPress方法，记录被点击tab的title。再通过title设置tab是否被选中
		（通过比较设置selected的值，true/false）
	*/
	
	var TextInput = require("./TextInput");
	var MovieList = require("./movieList");
	var Image = require("./Image");
	
	var HelloWorld = React.createClass({
		getInitialState:function(){
			return{
				//用于记录显示页面组件对应的title
				tab:"No1"
			};
		},
		//TabBarIOS.Item的onPress的处理方法
		select:function(tabName){
			this.setState({
				tab:tabName
			});
		},
			
		
		
		render:function(){
			return(
				<TabBarIOS style={{flex:1}}>
					<TabBarIOS.Item
						title="No1"
						icon={require("image!star")}
						onPress={this.select.bind(this,"No1")}
						selected={this.state.tab==="No1"}
					>
					<TextInput></TextInput>
					</TabBarIOS.Item>
					<TabBarIOS.Item
						title="No2"
						systemIcon="bookmarks"
						onPress={this.select.bind(this,"No2")}
						selected={this.state.tab==="No2"}
					>
					<MovieList></MovieList>
					</TabBarIOS.Item>
					<TabBarIOS.Item
						title="No3"
						icon={require("image!message")}
						onPress={this.select.bind(this,"No3")}
						selected={this.state.tab==="No3"}
					>
					<Image></Image>
					</TabBarIOS.Item>
				</TabBarIOS>
			)
		}
			
	})
	
	
	
	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);