// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { WebView } from 'react-native-webview';

// const width= Dimensions.width;

// export default class MyWebComponent extends Component {
//   render() {
//     return (<WebView style={{padding:100}} source={{ html: "<iframe width='100%' height='100%' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen webkitallowfullscreen mozallowfullscreen src='https://player.vimeo.com/video/511072422' ></iframe>" }} />);
//   }
// }



import React,{Component} from "react";
import { SafeAreaView,View,Text, StyleSheet,ScrollView, Image, TextInput} from "react-native";
import { Container, Header, Content,Left, Body, Title, Button,Icon,Card, CardItem, Thumbnail,Right,Tab, Tabs, TabHeading,Fab } from 'native-base';
// import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';

import Tab1 from './screen/Tab1';//description
import Tab2 from './screen/Tab2';//curriculum
import Tab3 from './screen/Tab3';//chapters

export default class VideoCourse extends Component {
  constructor() {
    super();
    this.state = { iconName: "bookmarks-outline" };
    this.iconstate={iconshare:'md-share-social-outline'};
   }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#0b2242'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Forum</Title>
          </Body>
        </Header>
        
        <Content style={{backgroundColor:'#ebebeb'}}>
          {/* VIDEO PLAYER */}
          <View style={{flex:1, flexDirection:'column'}}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}} />
                <Body>
                  <Text>Suman Gautam</Text>
                </Body>
              </Left>
            </CardItem>
{/* TEXT INPUT AREA */}
            <CardItem>
                <Body>
                  <TextInput  
                  style={{height: 80, borderWidth:1, width:'100%'}}
                  placeholder="Ask any question"
                  multiline={true}/>
                </Body>  
            </CardItem>
            
            <CardItem>
              <Left>
                <Button iconLeft transparent>
                  <Icon active name="documents" />
                  <Text>Attach Files</Text>
                </Button>
              </Left>
              <Left>
                <Button iconLeft transparent>
                <Icon active name="albums" />
                  <Text>Image</Text>
                </Button>
              </Left>
              <Right>
              <Body>
                <Button iconLeft rounded style={{width:120,}}>
                  <Icon active name="add-circle-sharp" />
                  <Text style={{color:'white'}}>Add Post </Text>
                </Button>
                </Body>
              </Right>
            </CardItem>
          </Card>
        {/* SECOND CARD-->Forum Tabs */}
            <Card style={{flex:1, backgroundColor:'white',}} hasTabs>
              <Tabs tabBarUnderlineStyle={{backgroundColor:'#f99d34'}}>
                <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'#0b2242'}} activeTextStyle={{color:'#f99d34'}} heading="Timeline">
                  <Tab1 />
                </Tab>
                <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'#0b2242'}} activeTextStyle={{color:'#f99d34'}} heading="Trending Post">
                  <Tab2 />
                </Tab>
                <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'#0b2242'}} activeTextStyle={{color:'#f99d34'}} heading="Favourites">
                  <Tab3 />
                </Tab>
              </Tabs>
            </Card>
          </View>
        </Content>
        
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add-circle-sharp" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="albums" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="documents" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  text_header:{
    fontSize:20, fontWeight:'bold', color:'#0b2242'
  },
  card_props:{
    flexDirection:'row', justifyContent:'space-between',alignContent:'center', padding:25,

  },
  text_price:{
    fontSize:16, color:'#0b2242'
  },
  text_props:{
    fontSize:14, fontWeight:'bold', color:'#0b2242'
  },
  text_props_value:{
    fontSize:14, fontWeight:'bold', color:'#f99d34'
  },
  card_style:{
    flex:0, backgroundColor:'white'}

})