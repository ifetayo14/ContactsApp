import AsyncStorage from '@react-native-community/async-storage';
import Auth from "../services/api/auth";
import * as CONST from "../config/constants"

export const KEY_AUTH = "KEY_AUTH"
export const KEY_PROFILE = "KEY_PROFILE"

export default class AuthManager {

  static validateOTP = (otp) => {
    return new Promise( async (resolve, reject) => {
      var phone_number = await AsyncStorage.getItem(CONST.CODE_OTP_PHONE)

      Auth.validateOTP(phone_number, otp).then(async (result) => {
        AsyncStorage.removeItem(CONST.CODE_OTP_SENT)
        AsyncStorage.removeItem(CONST.CODE_OTP_PHONE)

        resolve(result);
      }).catch((err) => {
        reject(err)
      });
    })
  }

  static resendOTP = () => {
    return new Promise( async (resolve, reject) => {
      var phone_number = await AsyncStorage.getItem(CONST.CODE_OTP_PHONE)

      Auth.resendOTP(phone_number).then(async (result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err)
      });
    })
  }
}