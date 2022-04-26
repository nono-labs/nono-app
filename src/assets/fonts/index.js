import ArchivoBlackRegularFont from './ArchivoBlack-Regular.ttf';

const ArchivoBlackRegular = {
  fontFamily: "ArchivoBlack",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
      local('Metrolpolis'),
      local('ArchivoBlack-Regular'),
      url(${ArchivoBlackRegularFont}) format('ttf')
  `
}
export default {
  ArchivoBlackRegular,
};