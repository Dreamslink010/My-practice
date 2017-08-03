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

	
/*var HelloWorld = React.createClass({
	render:function() {
	    return (
	      	<View style={styles.container}>
				<View style={[styles.top,styles.border]}>
				</View>
				<View style={[styles.bottom,styles.border,{borderWidth:5}]}>
				</View>
			</View>
	    );
	  }
});

var styles = StyleSheet.create({
    //外层view
	container:{
		marginTop:25,
		marginLeft:30,
		backgroundColor:"red",
		width:300,
		height:400,
	},
	//上层view
	top:{
		backgroundColor:"green",
		width:280,
		height:250,
		margin:10,
	},
	//下层view
	bottom:{
		backgroundColor:"yellow",
		width:280,
		height:110,
		margin:10,
	},
	//公共部分提出来（拼接样式）
	border:{
		borderWidth:3,
		borderColor:"#000",
	}
});*/

var HelloWorld = React.createClass({
	render:function(){
		return(
			<View style={styles.container}>
				<View style={styles.child1}>
				</View>
				<View style={styles.child2}>
				</View>
			</View>
		);
	}
});

/*var styles = StyleSheet.create({
	container:{
		width:300,
		height:500,
		margin:30,
		backgroundColor:"pink",
		//在ReactNative中，默认主轴方向是column(竖向排列)
		//设置为横向排列
		flexDirection:"row",
		//主轴方向
		justifyContent:"center",
		//交叉轴
		alignItems:"center",
	},
	child1:{
		width:100,
		height:100,
		backgroundColor:"green",
	},
	child2:{
		width:100,
		height:100,
		backgroundColor:"orange",
	}
});*/

	/*
	
	flex 可以给组件指定flex，并且flex值为数字。flex:1表示：组件可以撑满父组件所有的剩余空间
	同时存在多个并列的子组件，flex：1，均分
	如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据的剩余空间的比例就更大
	（即占据剩余空间的比等于并列组件间flex值的比）
	
	*/
	
	var styles = StyleSheet.create({
		container:{
			margin:30,
			flex:1,
			backgroundColor:"purple",
		},
		child1:{
			flex:1,
			backgroundColor:"cyan",
		},
		child2:{
			flex:3,
			backgroundColor:"yellow",
		}
	})

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

/*return(
			<View style={[styles.container,styles.flex]}>
				<View style={styles.item}>
					<View style={[styles.flex,styles.center]}>
						<Text>酒店</Text>
					</View>
					<View style={[styles.flex,styles.lineLeftRight]}>
						<View style={[styles.flex,styles.center,styles.lineCenter]}>
							<Text>海外酒店</Text>
						</View>
						<View style={[styles.flex,styles.center]}>
							<Text>特价酒店</Text>
						</View>
					</View>
					<View style={[styles.flex]}>
						<View style={[styles.flex,styles.center,styles.lineCenter]}>
							<Text>团购</Text>
						</View>
						<View style={[styles.flex,styles.center]}>
							<Text>民宿·客栈</Text>
						</View>
					</View>
				</View>
			</View>
		)*/
		


/*var styles = StyleSheet.create({
	container:{
		marginTop:25,
		backgroundColor:"#f2f2f2",
	},
	//多个组件都需要设置
	flex:{
		flex:1
	}
	//多个组件都需要设置
	center:{
		justifyContent:"center",
		alignItems:"center",
	},
	item:{
		flexDirection:"row",
		backgroundColor:"#ff607c",
		marginTop:5,
		marginLeft:5,
		marginRight:5,
		height:80
		borderRadius:5,
	},
	//给中间的区域设置左右边线
	lineLeftRight:{
		 borderLeftWidth:1,
		 borderRightWidth:1,
		 borderColor:"#fff",
	},
	lineCenter:{
		borderBottomWidth:1,
		borderColor:"#fff",
	}
});*/