/*
	
	实现功能：封装返回按钮图标，不使用图片
	
	包含组件：
	
	外部传入：
	
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import TabNavigator from 'react-native-tab-navigator'; 

var Icon = React.createClass({
	render:function(){
		rturn(
			<View>
				<View style={styles.go }></View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	go:{
		width:15,
		height:15,
		borderLeftWidth:2,
		borderBottomWidth:2,
		borderColor:10,
		transform:[{rotate:"45deg"}] //将一个矩形框旋转了45度
	}
});

module.exports = Icon;