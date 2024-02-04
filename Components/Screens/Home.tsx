import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

export default function Home(props: any) {
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'New Delhi',
      image: require('../Images/image2.jpg'),
    },
    {
      name: 'Amritsar',
      image: require('../Images/image1.jpg'),
    },
    {
      name: 'Kolkata',
      image: require('../Images/image4.jpg'),
    },
    {
      name: 'Bengaluru',
      image: require('../Images/image6.jpg'),
    },
    {
      name: 'Dehradun',
      image: require('../Images/image5.jpg'),
    },
    {
      name: 'New York',
      image: require('../Images/image7.jpg'),
    },
    {
      name: 'Chennai',
      image: require('../Images/image7.jpg'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../Images/image3.jpg')}
        style={{flex: 1, height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={25} color="white" />
          <Image
            source={require('../Images/avatar.png')}
            style={{width: 50, borderRadius: 50, height: 60}}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          {/* <Text style={{fontSize: 40, color: 'white'}}>Hello Nabin</Text> */}
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
            Search By City Name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 10,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{
                paddingHorizontal: 20,
                color: 'white',
                flex: 1,
                fontSize: 16,
              }}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Icon name="search" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              paddingHorizontal: 10,
              fontSize: 22,
              marginBottom: 20,
              marginTop: 220,
            }}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
