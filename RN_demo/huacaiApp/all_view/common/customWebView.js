/*
	
	实现功能：封装webView，根据传入的url展示网页信息
	
	包含组件：Header、webView
	
	外部传入：
		给Header设置：navigator、initObj(backName,title)
		给webView设置，source

*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	WebView,
	Dimensions
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import TabNavigator from 'react-native-tab-navigator';


var Header = require("./header");

var CustomWebView = React.createClass({

  render: function() {
  	
    return (
      <View style={{backgroundColor:"white", flex:1}}>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName: this.props.backName,
            barTitle: this.props.title
          }}/>
        <WebView
          startInLoadingState={true}
          contentInset={{top:-44, bottom:-120}}
          source={{uri:this.props.url}}
          />
          
      </View>
    );
  }

});



module.exports = CustomWebView;












