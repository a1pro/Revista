import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../../styles/Styles";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //   navigation.navigate('Login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
        }}>
            <View style={{ alignSelf: 'center' }}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%', height: undefined, aspectRatio: 2 }}
                    resizeMode="contain"
                />
                {/* <Text>Beautifu eCommerce</Text> */}
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btntext}>Let's get started</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default SplashScreen;