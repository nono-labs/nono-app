import ArchivoBlackRegularFont from './ArchivoBlack-Regular.ttf';

const ArchivoBlackRegular = {
  fontFamily: "Archivo Black",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
      local('ArchivoBlack'),
      local('ArchivoBlack-Regular'),
      url(${ArchivoBlackRegularFont}) format('ttf')
  `
}
export default {
  ArchivoBlackRegular,
};