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

	//ListView 基本练习
	var HelloWorld = require('./myListView');
	//电影列表
	
	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);