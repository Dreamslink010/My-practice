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
		Navigator,
		TouchableOpacity
	} from 'react-native';

	/*
	
	应用程序由很多视图组成，一个应用中最重要的功能之一就是“导航”，在ReactNative中称为“路由route”
	使用导航器可以让你在应用的不同场景（页面）间进行切换。
	
	在ReactNative中，有两个实现导航功能的组件：Navigator和NavigatorIOS
	Navigator支持安卓和IOS，NavigatorIOS支持IOS，
	NavigatorIOS比Navigator具有更多的属性和方法，在UI方面可以进行更多的设置，比如backButtonIcon、backButtonTitle、onLeftButtonPress等等，比较方便；
	如果想实现更多自定义设置，建议使用Navigator
	
	*/
	
	//实现导航功能
	var HelloWorld = require("./navigator");
	
	//实现导航功能，传值
	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);