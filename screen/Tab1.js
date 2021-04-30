import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}} />
                <Body>
                  <Text>Suman Gautam</Text>
                  <Text note>1 hour ag0</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
                <Body>
                  <Text>Every Flower has its own taste when made into tea</Text>
                </Body>
              
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://thumbs.gfycat.com/HonestWanBoubou-size_restricted.gif'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>share</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}} />
                <Body>
                  <Text>Suman Gautam</Text>
                  <Text note>1 hour ag0</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
                <Body>
                  <Text>Every Flower has its own taste when made into tea</Text>
                </Body>
              
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://thumbs.gfycat.com/HonestWanBoubou-size_restricted.gif'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>share</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>

          </Card>
        </Content>
        </ScrollView>
      </Container>
    );
  }
}