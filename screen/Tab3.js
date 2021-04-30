import React, { Component } from 'react';
import { SafeAreaView,View,ScrollView, Image,StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, } from 'native-base';

const dataArray=[
  {title:"Chapter 1: Intro", content:"introduction for chapter 1"},
  {title:"Chapter 1: Intro", content:"introduction for chapter 1"},
  {title:"Chapter 1: Intro", content:"introduction for chapter 1"},
  {title:"Chapter 1: Intro", content:"introduction for chapter 1"},

];
export default class Chapters extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Text style={{fontWeight:'bold', color:'black'}}>Chapter 1: Introduction</Text>
              </Left>
              <Right>
                <Icon style={{color:'#f99d34'}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{fontWeight:'bold', color:'black'}}>Chapter 2:</Text> 
                <Text style={{color:'#0b2242'}}> Introduction</Text>
              </Left>
              <Right>
                <Icon style={{color:'#f99d34'}} name="arrow-forward" />
              </Right>
            </ListItem><ListItem>
              <Left>
                <Text style={{fontWeight:'bold', color:'black'}}>Chapter 3: Introduction</Text>
              </Left>
              <Right>
                <Icon style={{color:'#f99d34'}} name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  text_style:{
    fontWeight:'bold',
    paddingRight:10
  }
})