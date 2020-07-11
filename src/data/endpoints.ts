const devEndpoint = 'https://f9bl34plnc.execute-api.sa-east-1.amazonaws.com/dev';
const prodEndpoint = 'https://rtv1ue19z9.execute-api.sa-east-1.amazonaws.com';

export const currentEndpoint = devEndpoint;

const accountEndpoints = {
  loginAuth: '/login-auth',
  loginDeAuth: '/login-deauth',
  passChange: '/pass-change',
  passRec: '/pass-rec',
  createAccount: '/create-account',
};

export const endpoints = {
  account: accountEndpoints,
};

export const headers = {
  Accept: '*/*',
  'Access-Control-Allow-Origin': true,
  'Access-Control-Allow-Headers': '*',
  "Access-Control-Allow-Credentials": true,
  'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'
};

export const defaultConfig = {
  headers: headers,
  mode: 'no-cors',
  credentials: 'same-origin',
};
