import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  } from 'react-native';


  export default class WeeklyData extends Component {
 
    constructor() {
           super();
           this.state = {
                 dataSource: []
           };   
    }

    renderItem = ({item})=> {
      return (
       <View  style={{ flex: 1, flexDirection: 'row', marginBottos: 3,paddingTop:20}} > 
       <Image style={{ width: 30, height: 30, margin: 5 }} source={{ uri: item.image }} /> 
       <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5, borderBottomColor:'#000' }} > 
       <Text  styLe={{ fontSize: 18, coLor: 'green', morginBottom: 15}} >{item.fname} {item.lname} </Text> 
       <Text  style={{ fontsize: 16, coLor: 'red' }} > sets:{item.testOwned} </Text>
       <Text  style={{ fontsize: 16, coLor: 'red' }} > score:{item.score} </Text>  
         </View> 
       </View> 
        )
    }

    componentDidMount() {
         const url = "https://p9uljg669h.execute-api.ap-south-1.amazonaws.com/dev/leaderboard/all?";
         fetch(url).then((response)=>response.json())
                   .then((responseJson)=> {
                     this.setState({
                       dataSource : responseJson.leaderboards
                     })
                    })
                    .catch((error)=> {
                      console.log(error);
                    })      
    }


    render() {
       return (
         <View> 

             <FlatList
              data={this.state.dataSource}
              renderItem={this.renderItem}
              />
         </View>
          )

    }
  }