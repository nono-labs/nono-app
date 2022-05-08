import ArchivoBlackRegularFont from './ArchivoBlack-Regular.ttf';
import BarlowBoldFont from './Barlow-Bold.ttf';
import BarlowBlackFont from './Barlow-Black.ttf';
import BarlowRegularFont from './Barlow-Regular.ttf';

const ArchivoBlack = {
  fontFamily: "ArchivoBlack",
  src: `
      url(${ArchivoBlackRegularFont})
  `
}
const BarlowBold= {
  fontFamily: "BarlowBold",
  src: `
      url(${BarlowBoldFont})
  `
}
const BarlowBlack = {
  fontFamily: "BarlowBlack",
  src: `
      url(${BarlowBlackFont})
  `
}
const BarlowRegular = {
  fontFamily: "BarlowRegular",
  src: `
      url(${BarlowRegularFont})
  `
}
export default {
  ArchivoBlack,
  BarlowBlack,
  BarlowBold,
  BarlowRegular
};