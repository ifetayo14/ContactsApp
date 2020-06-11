import { create } from 'apisauce'
import {AUTH_URL} from '../../config/env'
import * as API from '../../config/api'

const api = create({ baseURL: AUTH_URL })

export const login = async (phone_number, password) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.LOGIN, { phone_number: phone_number, password: password }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const register = async (data) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.REGISTER, { 
        phone_number: data.phone_number, 
        password: data.password, 
        name: data.name, 
        gender: data.gender, 
        year_of_birth: data.yob, 
        description: data.description,
        email: data.email
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const validateOTP = (phone_number, otp) => {
  return new Promise((resolve, reject) => {
      mAxios.put(API.CONFIRM_CODE, { phone_number: phone_number, verification_code: otp }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const resendOTP = (phone_number) => {
  return new Promise((resolve, reject) => {
      mAxios.get(API.RESEND_CONFIRM_CODE.replace(/{(phone_number)}/, phone_number), {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const refreshToken = (phone_number, refresh_token) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.REFRESH_TOKEN, { phone_number: phone_number, refresh_token: refresh_token }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const getProfile = (auth) => {
  return new Promise((resolve, reject) => {
      mAxios.get(API.PROFILE, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": auth
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const forgetPassCode = (phone_number) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.FORGET_PASS_CODE, { phone_number: phone_number}, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const forgetPass = (phone_number, verification_code, password) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.FORGET_PASS, { phone_number: phone_number, verification_code: verification_code, password: password}, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const forgetPassCode = (phone_number) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.FORGET_PASS_CODE, { phone_number: phone_number}, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export const forgetPassConfirm = (phone_number, verification_code) => {
  return new Promise((resolve, reject) => {
      mAxios.post(API.FORGET_PASS_CONFIRM, { phone_number: phone_number, verification_code: verification_code}, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response){
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}