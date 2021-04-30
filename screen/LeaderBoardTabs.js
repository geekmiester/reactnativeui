import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const width= Dimensions.width;

export default class MyWebComponent extends Component {
  render() {
    return <WebView source={{ html: "<iframe src='https://player.vimeo.com/video/461284915' width='640' height='360' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>" }} />;
  }
}

