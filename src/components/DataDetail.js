import React from 'react';
import {Text, View, StyleSheet, StatusBar, Image} from 'react-native';
import {Item, Icon} from 'native-base';

const DataDetail = props => {
  return (
    <View>
      <StatusBar backgroundColor="#2e3678" barStyle="light-content" />
      <Item style={styles.itemStyle}>
        <Image style={styles.tinyLogo} source={require('../Flags/virus.png')} />
        <Text style={styles.textViewStyle}> Toplam Görülen Vaka Sayısı :</Text>
        <Text style={styles.textStyle}> {props.data.totalCases}</Text>
      </Item>
      <Item style={styles.itemStyle}>
        <Image
          style={styles.tinyLogo}
          source={require('../Flags/spirit.png')}
        />
        <Text style={styles.textViewStyle}> Toplam Ölü Sayısı :</Text>
        <Text style={styles.textStyle}> {props.data.totalDeaths}</Text>
      </Item>
      <Item style={styles.itemStyle}>
        <Image style={styles.tinyLogo} source={require('../Flags/blood.png')} />
        <Text style={styles.textViewStyle}> Toplam İyileşen Sayısı :</Text>
        <Text style={styles.textStyle}> {props.data.totalRecovered}</Text>
      </Item>
      <Item style={styles.itemStyle}>
        <Image
          style={styles.tinyLogo}
          source={require('../Flags/hospital.png')}
        />
        <Text style={styles.textViewStyle}> Aktif Hasta Sayısı :</Text>
        <Text style={styles.textStyle}> {props.data.activeCases}</Text>
      </Item>
      <Item style={styles.itemStyle}>
        <Image
          style={styles.tinyLogo}
          source={require('../Flags/population.png')}
        />
        <Text style={{fontSize: 15}}> Son Vaka Sayısı : </Text>
        <Text style={{fontSize: 18, color: 'blue'}}>
          {props.data.newCases !== ''
            ? props.data.newCases
            : 'Henüz açıklanmadı.'}
        </Text>
      </Item>
      <Item style={styles.itemStyle}>
        <Image style={styles.tinyLogo} source={require('../Flags/death.png')} />
        <Text style={{fontSize: 15}}> Son Ölüm Sayısı : </Text>
        <Text style={{fontSize: 18, color: 'blue'}}>
          {props.data.newDeaths !== ''
            ? props.data.newDeaths
            : 'Henüz açıklanmadı.'}
        </Text>
      </Item>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'blue',
  },
  itemStyle: {
    padding: 10,
  },
  textViewStyle: {
    fontSize: 15,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
});
export default DataDetail;
