import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

export default function Details(props: any) {
  const [data, setData] = useState();

  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <ImageBackground
        source={require('../Images/image7.jpg')}
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
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View style={{width: '100%'}}>
              <Text style={{color: 'white', fontSize: 30}}>{name}</Text>
              <Text style={{color: 'white', fontSize: 20}}>
                {data['weather'][0]['main']}
              </Text>
              <Text style={{color: 'white', fontSize: 40}}>
                {(data['main']['temp'] - 273).toFixed(0)}&deg; C
              </Text>
              <Text style={{color: 'white', fontSize: 22}}>
                Weather Details
              </Text>
            </View>
            <View style={{width: deviceWidth - 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 22}}>Wind</Text>
                <Text style={{color: 'white', fontSize: 22}}>
                  {data['wind']['speed']}Km/hr
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 22}}>Humidity</Text>
                <Text style={{color: 'white', fontSize: 22}}>
                  {data['main']['humidity']}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 22}}>Pressure</Text>
                <Text style={{color: 'white', fontSize: 22}}>
                  {data['main']['pressure']}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 22}}>Feels like</Text>
                <Text style={{color: 'white', fontSize: 22}}>
                  {(data['main']['feels_like'] - 273).toFixed(0)}&deg; C
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
