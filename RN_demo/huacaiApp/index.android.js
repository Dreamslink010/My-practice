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
import TabNavigator from 'react-native-tab-navigator';  

//StatusBar.setHidden(true);

var TabNavigatorItem =TabNavigator.Item; 

var tab_normal_1=require('./images/index.png');  
var tab_normal_2=require('./images/video.png');  


var tab_press_1=require('./images/index_press.png');  
var tab_press_2=require('./images/video_press.png');  


class huacaiApp extends Component{
	constructor(){
		super();
	    this.state={  
	      selectedTab:'Book',  
	    }  
	}
	
	onPress(tabName){  
	    if(tabName){  
	      this.setState(  
	        {
	          selectedTab:tabName,  
	        }  
	      );  
	    }  
	}
	
	renderTabView(title,tabName,tabContent,isBadge){  
	    var tabNomal;  
	    var tabPress;  
	    switch (tabName) {  
	        case 'Book':  
	        tabNomal=tab_normal_1;  
	        tabPress=tab_press_1;  
	        break;  
	    	case 'movie':  
	        tabNomal=tab_normal_2;  
	        tabPress=tab_press_2;  
	        break;  
	     	default:  
  		}
	    
	    if( title === "图书" ){
	    	return(
		    	<TabNavigatorItem  
			        title={title}  
			        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}  
			        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}  
			        selected={this.state.selectedTab===tabName}  
			        selectedTitleStyle={{color:'green'}}  
			        onPress={()=>this.onPress(tabName)}  
		        >
			        <View 
			        	style={{flex:1,justifyContent:'center',alignItems:'center'}}
			        >
			        	<Text>{tabContent}</Text>
			        	<Text>{tabContent}</Text>
			        </View>
		        </TabNavigatorItem>
		    );
	    }else if( title === "电影" ){
	    	return(
		    	<TabNavigatorItem  
			        title={title}  
			        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}  
			        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}  
			        selected={this.state.selectedTab===tabName}  
			        selectedTitleStyle={{color:'green'}}  
			        onPress={()=>this.onPress(tabName)}  
		        >
			        <View 
			        	style={{flex:1,justifyContent:'center',alignItems:'center'}}
			        >
			        	<Text>{tabContent}</Text>
			        </View>
		        </TabNavigatorItem>
		    );
	    }
    }
	
	tabBarView(){  
	    return (  
		    <TabNavigator  
		       tabBarStyle={styles.tab}  
		    >  
			    {this.renderTabView('图书','Book','图书板块',true)}  
			    {this.renderTabView('电影','movie','电影板块',false)}  
			</TabNavigator>  
	    );  
	}
	
	render() {  
	    var tabBarView=this.tabBarView();  
	    return (  
	      <View style={styles.container}>  
	        {tabBarView}  
	      </View>  
	    );  
	}
};

var styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#F5FCFF',  
  },  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5,  
  },  
  tab:{  
    height: 52,  
    alignItems:'center',  
    backgroundColor:'#f4f5f6',  
  },  
  tabIcon:{  
    width:25,  
    height:25,  
  },  
  badgeView:{  
    width:22,  
    height:14 ,  
    backgroundColor:'#f85959',  
    borderWidth:1,  
    marginLeft:10,  
    marginTop:3,  
    borderColor:'#FFF',  
    alignItems:'center',  
    justifyContent:'center',  
    borderRadius:8,  
  },  
  badgeText:{  
    color:'#fff',  
    fontSize:8,  
  }  
}) 

AppRegistry.registerComponent('huacaiApp', () => huacaiApp);
