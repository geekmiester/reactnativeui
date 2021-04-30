import * as React from 'react';
import { Text, View,StatusBar,StyleSheet,FlatList, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();  


function WeeklyData() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', paddingTop:20 }}>
      <Text style={styles.text}>asdasd</Text>
    </View>
  );
}

function MonthlyData() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function AllTimeData() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }}>
      <Text>all time data here!</Text>
    </View>
  );
}
function TabStack(){
  return(
<Tab.Navigator
  initialRouteName="Last 7 Days"
  tabBarOptions={{
  activeTintColor: '#f99d34',
  inactiveTintColor: '#F8F8F8',
  style: {
    backgroundColor: '#0b2242',
  },
  labelStyle: {
    textAlign: 'center',
  },
  indicatorStyle: {
    borderBottomColor: '#f99d34',
    borderBottomWidth: 2,
  },
}}>
  <Tab.Screen name="Last 7 Days" component={WeeklyData} />
  <Tab.Screen name="Last 30 Days" component={MonthlyData} />
  <Tab.Screen name="All Time" component={AllTimeData} />
</Tab.Navigator>
  );}


export default function Leaderboard() {
  return (
          <NavigationContainer>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor='#0b2242'></StatusBar>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: { backgroundColor: '#0b2242' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Leaderboard' }}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text:{
    justifyContent:'center',
    color:'white'
  },
  tabs_style:{
    flex: 1, justifyContent: 'space-between', flexDirection:'row', backgroundColor:'blue'
  },
  table_element:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'red',
  }
})