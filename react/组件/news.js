	import React, { Component } from 'react';
	import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View
	} from 'react-native';
	
	//组价
	
	var News = React.createClass({
		show:function(title){
			alert(title);
		},
		render:function(){
			//定义数组，用于存储定义好的Text组件
			var newComponents = [];
			//遍历存储信息的数组，从外部传入的
			for ( var i in this.props.news ){
				var text = (
					<Text
						onPress={this.show.bind(this,this.props.news[i])}
						style={styles.news_items}
						numberOfLines = {2}
						key = {i}>
						{this.props.news[i]}
					</Text>
				);
				//将设置好的Text存入数组
				newComponents.push(text);
			}
			return(
				<View style={styles.flex}>
					<Text style={styles.news_title}>今日要闻</Text>
					{newComponents}
				</View>
			)
		}
	})
	
	//样式
	
	var styles = StyleSheet.create({
		flex:{
			flex:1
		},
		//“今日要闻”的标题
		news_title:{
			fontSize:20,
			fontWeight:"bold",
			color:"#cd1d1c",
			marginLeft:10,
			marginTop:15,
		},
		//每条新闻
		news_items:{
			marginTop:10,
			marginLeft:10,
			marginRight:10,
			fontSize:15,
			lineHeight:30,
		}
	})

	//导出模块
	
	module.exports = News