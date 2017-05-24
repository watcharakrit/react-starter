/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Config
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

const _baseEndpointUrl = {
  development: 'https://app.seedoc.testnoi.com',
  production: 'https://app.seedoctornow.com'
};

const baseEndpointUrl = _baseEndpointUrl[process.env.API_URL];

const cookieAuthName = 'see_doctor_now_auth';

const baseImagePath = 'public/images';
const baseAudioPath = 'public/audios';

const userPlaceholderImg = `${baseImagePath}/user-placeholder-dark.jpg`;
const doctorPlaceholderImg = `${baseImagePath}/doctor-placeholder-dark.jpg`;

const prefixNameIcons = 'icon-sdn-';


// Debug Setting
const isDebug = process.env.NODE_ENV == 'production' ? false: true;
const debugScopes = [
  {name: 'focus', color: '#fff', bg: '#000', enable: true},
  {name: 'error', color: '#ff0000', bg: '#ddd', enable: true},
  {name: 'helper', color: '#008cff', bg: '#ddd', enable: true},
  {name: 'reducer', color: '#ee22ff', bg: '#ddd', enable: true},
  {name: 'queue', color: '#fff', bg: '#008cff', enable: true},
  {name: 'doctor_room', color: '#fff', bg: '#ee22ff', enable: true},
  {name: 'base_component', color: '#fff', bg: '#ff8d27', enable: true}
];


export {
  baseEndpointUrl,
  cookieAuthName,
  baseImagePath,
  baseAudioPath,
  userPlaceholderImg,
  doctorPlaceholderImg,
  prefixNameIcons,
  isDebug,
  debugScopes
};
