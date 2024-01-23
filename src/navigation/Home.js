import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet,  } from 'react-native';
import ighome from '../api/ighome.json'
import { Ionicons } from '@expo/vector-icons';
import Post from '../components/posts'
import Storie from '../components/stories';
import {useState, useEffect } from 'react';
import { getInsta } from '../api/apiCalls';


export default function Home({navigation}) {

  const [list, setList] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getInsta();
          setList(response);
        } catch (error){
         console.error( "error useeffect", error);
        }
      };
    fetchData();
    }, []);

  const renderPosts = ({item}) => {
  return (
    <Post image={item.image} onPress={()=>navigation.navigate('Profile')} likes={item.likes} text={item.text} username={item.username} />
  )
  };

  const listHeaderComponent = () => {
    return (
      <Storie stories={ighome.stories} />
    )
  };

  return (
    <SafeAreaView>
        <FlatList 
          data={list}
          renderItem={renderPosts}
          ListHeaderComponent={listHeaderComponent}
        /> 
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
