	import React, { Component } from 'react';
		import {
		  AppRegistry,
		  StyleSheet,
		  Text,
		  View,
		  ScrollView,
		  Image
		} from 'react-native';
	
	/*
	
	使用的是本地数据
	
	*/
	
	//从文件中读取数据，执行了JSON.parse()方法，将JSON格式的字符串转化为JSON格式的对象
	var movieData = require("./data.json");
	//获取所有movies数据，属性movies是一个数组
	var movies = movieData.movies;
	
	
	var MovieList = React.createClass({
		render:function(){
			//创建电影列表组件。根据movies中元素的个数，创建对应的组件
			//遍历数组，每当获取一个movies，就创建一个组件对象。样式一样，显示内容不一样
			//定义一个空数组。存储显示电影信息的组件
			var moviesRows = [];
			//遍历数组
			for (var i in movies){
				//获取movie对象
				var movie = movies[i];
				//创建组件。显示电影信息：图像（movie.posters.thumbnall）、电影名称（movie.title）、上映时间（movie.year）
				var row = (
					<View key={i} style={styles.row}>
						<Image
							style={styles.thumbnail}
							source={{uri:movie.posters.thumbnail}}
						/>
						<View style={styles.rightContainer}>
							<Text style={styles.title}>{movie.title}</Text>
							<Text style={styles.year}>{movie.year}</Text>
						</View>
					</View>
				);
				//将创建的组件存储到数组中
				moviesRows.push(row);
			}
			return(
				<View style={styles.container}>
					<ScrollView style={styles.scrollView}>
						{
							//数组[所有子组件]
							moviesRows
						}
					</ScrollView>
				</View>
			);
		}
	});
	
	var styles = StyleSheet.create({
		container:{
			flex:1,
		},
		scrollView:{
			flex:1,
			backgroundColor:"yellow",
		},
		row:{
			flexDirection:"row",
			padding:5,
			alignItems:"center",
			backgroundColor:"green",
		},
		thumbnail:{
			width:53,
			height:81,
			backgroundColor:"pink",
		},
		rightContainer:{
			marginLeft:10,
			flex:1,
		},
		title:{
			fontSize:18,
			marginTop:3,
			marginBottom:3,
			textAlign:"center"
		},
		year:{
			marginBottom:3,
			textAlign:"center",
		}
	});
	
	module.exports = MovieList;
