import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { showMessage } from 'react-native-flash-message';

export const requestUserpermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}

const getFcmToken = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log('the old Token', fcmToken);
    
    if (!fcmToken) {
        try {
            const fcmTokens = await messaging().getToken()
            console.log(`messaging=>`,fcmTokens);
            if (fcmToken) 
            {
             console.log('new generated token',fcmToken);
                await AsyncStorage.setItem('fcmToken', fcmToken)
            }
        } catch (error) {
            console.log('error raisded in function');
            showMessage(error)

        }
    }

}

export const notificationlistern=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',remoteMessage.notification,);
      });
      messaging().onMessage( async remoteMessage => {
        console.log(
          'ForGrand caused app to open from background state:',remoteMessage.notification,);
      });
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'getInitialNotification caused app to open from quit state:',remoteMessage.notification,);
        }        
      });
  
}