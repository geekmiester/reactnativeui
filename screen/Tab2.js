import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { List } from 'react-native-paper';


const MyComponent = () => {
  return (
    <List.AccordionGroup>
      <List.Accordion
        title={<Text style={styles.text_head}>Quantitative Techniques</Text>} id='1'>
        <List.Item title="Tabulation" />
        <List.Item title="Pipes and Cisterns" />
        <List.Item title="Permutations & Combinations" />
        <List.Item title="In-equations" />
        <List.Item title="Algebra" />
      </List.Accordion>

      <List.Accordion
        title={<Text style={styles.text_head}>Logical Reasoning</Text>} id='2'>
        <List.Item title="Analytical Reasoning" />
        <List.Item title="Linear Arrangements" />
        <List.Item title="Statements and Arguments" />
        <List.Item title="Sequencing" />
        <List.Item title="Matrix Arrangements" />
        <List.Item title="Number Series" />
      </List.Accordion>
      <List.Accordion
        title={<Text style={styles.text_head}>Logical Reasoning</Text>} id='3'>
        <List.Item title="Analytical Reasoning" />
        <List.Item title="Linear Arrangements" />
        <List.Item title="Statements and Arguments" />
        <List.Item title="Sequencing" />
        <List.Item title="Matrix Arrangements" />
        <List.Item title="Number Series" />
      </List.Accordion>
      
    </List.AccordionGroup>
  );
};

export default MyComponent;

const styles= StyleSheet.create({
  text_head:{
    fontWeight:'bold',
    color:'#0b2242'

  }
})