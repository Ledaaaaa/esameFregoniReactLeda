import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {FadeInRight, FadeOutLeft} from 'react-native-reanimated';

const Post = ({image, username, text, likes, onPress}) => {
  
    return (
    <Animated.View  style={{flex:1}} entering={FadeInRight.duration(600).delay(600)} exiting={FadeOutLeft.duration(600).delay(600)}>
        <View style={styles.container}>
          <Image source={{uri: image}}style={styles.image} />
          <View style={{width: 15}}/>
          <Text style={{ flex: 1, fontWeight: 'bold'}}>{username}</Text>
          <Ionicons name="home" />
        </View>
        <TouchableOpacity onPress={onPress}>
        <Image source={{uri: image}} style={styles.image2} />
        </TouchableOpacity>

        <View style={styles.viewButton2}>
          <View style={styles.viewButton}>
            <Ionicons name="heart-outline" size={25} />
            <View style={{width: 15}}/>
            <Ionicons name="chatbox-outline" size={25} />
            <View style={{width: 15}}/>
            <Ionicons name="send-outline" size={25} />
          </View>
          <Ionicons name= "save-outline" size={25} />
        </View>

      <View style={styles.space}>
        <Text style={{color:'gray'}}>{'Like'} {likes}</Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>{username}</Text>
          {' '}{text}
        </Text>
          <Text style={{color:'gray'}}>Visualizza gli altri commenti</Text>
      </View>
        
    </Animated.View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15
    },
    image: {
        width: 20, 
        height: 20, 
        borderRadius: 10
    },
    image2: {
        width:'100%', 
        height:270, 
        flex:1
    },
    viewButton:{
        flex:1, 
        flexDirection:'row'
    },
    viewButton2:{
        flex:1, 
        flexDirection:'row',
        padding:15
    },
    space: {
        flex:1, 
        paddingStart:10
    }
  });
  
  export default Post;
  