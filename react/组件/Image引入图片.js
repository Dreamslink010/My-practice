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
	  Image
	} from 'react-native';

	/*
	
	用于显示图片的组件，包括网络图片，静态资源等等
	常用性能：
		resizeMode	图片适应模式cover，contain，stretch
		source	图片引用地址
		ios	支持属性：onLoad onLoadEnd onLoadStart onProgress
	
	*/
	
	//练习：显示两张图片，分别是网络图片，静态资源
	
	
	var HelloWorld = React.createClass({
		render:function(){
			return(
				<View style={styles.container}>
					<View style={styles.net}>
						<Image
							style={styles.netImg}
							source={{uri:"https://b-ssl.duitang.com/uploads/item/201702/22/20170222102449_rsEeC.jpeg"}}
						/>
					</View>
					<View style={styles.local}>
						<Image
							source={require('./img/fly.jpg')}
							style={styles.localImg}
						/>
					</View>
				</View>
			)
		}
	});
	
	var styles = StyleSheet.create({
		container:{
			flex:1,
			margin:25,
			alignItems:"center",
		},
		net:{
			marginTop:30,
			width:300,
			height:240,
			justifyContent:"center",
			alignItems:"center",
			backgroundColor:"cyan",
		},
		netImg:{
			width:280,
			height:200,
			backgroundColor:"gray",
		},
		local:{
			marginTop:30,
			width:300,
			height:200,
			justifyContent:"center",
			alignItems:"center",
			backgroundColor:"yellow",
		},
		localImg:{
			width:180,
			height:180,
			backgroundColor:"gray",
		}
	})
	
	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);