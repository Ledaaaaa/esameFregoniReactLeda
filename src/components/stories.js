import { FlatList,  Text, View, Image, StyleSheet } from 'react-native';


  const Storie = ({stories}) => {

    const renderItem2 = ({ item }) => {
      return ( 
        <View style={{ alignItems: 'center', padding: 15 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width:70, height:70, borderRadius: 70, backgroundColor:'white', borderWidth: 3, borderColor: 'green'}}>
          <Image source={{uri: item.image}} style={{width:60, height:60, borderRadius: 30}}/>
          </View>
           <View style={{width: 15}}/>
            <Text style={{}}>{item.username}</Text>
        </View>
      ); 
    };
  
    return (
      <View>
      <Text style={styles.string}>Instagram</Text>
      <FlatList 
        data={stories}
        renderItem={renderItem2}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 100 }} />}
      />
      </View>
    )
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    string: { 
        padding: 15, 
        paddingTop:20, 
        fontWeight: 'bold', 
        fontSize:25
    }
  });
  
  export default Storie;
