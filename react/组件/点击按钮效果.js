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
	  TouchableOpacity,
	  TouchableHighlight
	} from 'react-native';

	/*
	
	ReactNative 提供了3个组件用于给其他没有触摸事件的组件绑定触摸事件
	TouchableOpacity 透明触摸，点击时，组件会出现透明过度效果
	TouchableHighlight 高亮触摸，点击时，组件会出现高亮效果
	TouchableWidthoutFeedback 无反馈性触摸，点击时，组件无视觉变化
	
	*/
	
	var HelloWorld = React.createClass({
		clickBtn:function(){
			alert("点击搜索按钮")
		},
		render:function(){
			return(
				<View style={styles.container}>
					<View style={styles.flex}>
						<View style={styles.input}></View>
					</View>
					<TouchableOpacity style={styles.btn} onPress = {this.clickBtn}>
						<Text style={styles.search}>搜索</Text>
					</TouchableOpacity>
					
				</View>
			)
		}
	});
	
	var styles = StyleSheet.create({
		container:{
			flexDirection:"row",
			height:45,
		},
		flex:{
			flex:1,
		},
		input:{
			height:45,
			borderWidth:1,
			marginLeft:5,
			paddingLeft:5,
			borderColor:"#ccc",
			borderRadius:4,
		},
		btn:{
			width:55,
			marginLeft:5,
			marginRight:5,
			backgroundColor:"#23beff",
			height:45,
			justifyContent:"center",
			alignItems:"center",
		},
		search:{
			color:"#fff",
			fontSize:15,
			fontWeight:"bold",
		}
		
	})
	
	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

