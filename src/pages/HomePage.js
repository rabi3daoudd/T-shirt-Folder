import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const HomePage = () => {
  const [tshirtCount, setTshirtCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [orientation, setOrientation] = useState('portrait');
  const bluetoothConnected = true; // Replace with the actual Bluetooth connection status

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get('window');
    const newOrientation = width > height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  };

  const handleFoldButtonPress = async () => {
    if (!bluetoothConnected) {
      console.log('Bluetooth not connected');
      return;
    }
    console.log('Fold button pressed');
    const newTshirtCount = tshirtCount + 1;
    setTshirtCount(newTshirtCount);
    await AsyncStorage.setItem('tshirtCount', JSON.stringify(newTshirtCount));

    setProgress(0);
    setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 1000);
    }, 100);
  };

  const loadTshirtCount = async () => {
    const storedTshirtCount = await AsyncStorage.getItem('tshirtCount');
    if (storedTshirtCount !== null) {
      setTshirtCount(JSON.parse(storedTshirtCount));
    }
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
    loadTshirtCount();

    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6200EE', '#B819F7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.foldButton(orientation)}
      >
        <AnimatedCircularProgress
          size={orientation === 'portrait' ? 750 : 500}
          width={10}
          fill={progress}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
        >
          {() => (
            <TouchableOpacity onPress={handleFoldButtonPress} style={styles.touchableArea}>
              <Icon name="tshirt-crew" type="material-community" size={150} color="#ffffff" />
              <Text style={styles.foldButtonText}>Fold</Text>
            </TouchableOpacity>
          )}
        </AnimatedCircularProgress>
      </LinearGradient>
      <View style={styles.bluetoothStatus}>
        <Text>Bluetooth Status:</Text>
        <Text style={bluetoothConnected ? styles.connected : styles.disconnected}>
          {bluetoothConnected ? 'Connected' : 'Disconnected'}
        </Text>
      </View>
      <View style={styles.tshirtCounter}>
        <Text>T-shirts folded: {tshirtCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bluetoothStatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  connected: {
    color: 'green',
    fontWeight: 'bold',
  },
  disconnected: {
    color: 'red',
    fontWeight: 'bold',
  },
  foldButton: (orientation) => ({
    width: orientation === 'portrait' ? 750 : 500,
    height: orientation === 'portrait' ? 750 : 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    alignSelf: 'center',
    marginTop: 50,
  }),
  touchableArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  foldButtonText: {
    fontSize: 94,
    color: '#ffffff',
  },
  tshirtCounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomePage;

