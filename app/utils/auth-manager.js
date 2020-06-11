import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import Auth from "../services/api/auth";
import * as CONST from "../config/constants"

export const KEY_AUTH = "KEY_AUTH"
export const KEY_PROFILE = "KEY_PROFILE"

export default class AuthManager {

  static register = (data, phone) => {
    return new Promise((resolve, reject) => {
      Auth.register(data).then(async (result) => {
        AsyncStorage.setItem(CONST.CODE_OTP_SENT, "1")
        AsyncStorage.setItem(CONST.CODE_OTP_PHONE, phone)
        resolve(result);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }

  static signIn = (phone_number, password) => {
    return new Promise((resolve, reject) => {
      Auth.login(phone_number, password).then(async (result) => {
        await Keychain.setGenericPassword( KEY_AUTH, JSON.stringify(result) );

        AuthManager.requestProfile().then((profile) => {

          resolve(true);
        }).catch((err) => {
          AuthManager.signOut()
          reject(err)
        });
      })
      .catch((err) => {
        AuthManager.signOut()
      });
    })
  }
  
  static signOut = () => {
    return new Promise((resolve, reject) => {
      try {
        AuthManager.getProfile().then(profile => {

          Keychain.resetGenericPassword();
          AsyncStorage.removeItem(KEY_PROFILE);

          resolve(true);
        }).catch(err => {
          reject(err)
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  static requestProfile = () => {
    return new Promise(async (resolve, reject) => {
      Auth.getProfile(await AuthManager.getAuthorization()).then(result => {
        AsyncStorage.setItem(KEY_PROFILE, JSON.stringify(result));
        resolve(result);
      }).catch(err => {
        reject(err)
      })
    })
  };

  static refreshToken = () => {
    return new Promise(async (resolve, reject) => {

      try {
        var refreshToken = await AuthManager.getRefreshToken()
        var profile = await AuthManager.getProfile()
      } catch (err) {
        AuthManager.signOut()
        reject("You have been logged out")
      }

      Auth.refreshToken(profile.phone_number, refreshToken).then(async (result) => {

        await Keychain.setGenericPassword( KEY_AUTH, JSON.stringify(result) );
  
        resolve(result.id_token);
      })
      .catch((err) => {
        AuthManager.signOut()

        reject(err)
      });
    })
  }

  static requestResetPassword = (phone_number) => {
    return new Promise((resolve, reject) => {
      Auth.forgetPassCode(phone_number).then(async (result) => {
        AsyncStorage.setItem(CONST.CODE_OTP_PHONE, phone_number)
        resolve(result);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }

  static confirmResetPassword = (phone_number, verification_code) => {
    return new Promise((resolve, reject) => {
      Auth.forgetPassConfirm(phone_number, verification_code).then(async (result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }

  static resetPassword = (phone_number, verification_code, password) => {
    return new Promise((resolve, reject) => {
      Auth.forgetPass(phone_number, verification_code, password).then(async (result) => {
        AsyncStorage.removeItem(CONST.CODE_OTP_PHONE)
        resolve(result);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }

  static async getAuthorization(){
    return "Bearer " + await AuthManager.getToken();
  }

  static async getToken(){
    const res = await Keychain.getGenericPassword();

    let mObj = JSON.parse(res.password)

    return mObj.id_token;
  }

  static async getRefreshToken(){
    const res = await Keychain.getGenericPassword();

    let mObj = JSON.parse(res.password)

    return mObj.refresh_token;
  }

  static async getProfile(){
    const res = await AsyncStorage.getItem(KEY_PROFILE);

    let mObj = JSON.parse(res)

    return mObj;
  }

  static async isLoggedIn(){
    const keychain = await Keychain.getGenericPassword();
    const profile = await AsyncStorage.getItem(KEY_PROFILE);

    if(keychain?.password && profile)
      return true
    else
      return false
      
  }
}