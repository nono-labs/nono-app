import { createTheme } from "@material-ui/core/styles";
import { red, amber, grey } from "@material-ui/core/colors";
import Fonts from "@/assets/fonts";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  type: 'light',
  palette: {
    primary: {
      main: '#e5e5e5',
    },
    secondary: {
      main: '#62929E',
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#FFF",
      highlight: "#F1F3F4"
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  mixins: {
    drawer: {
      minWidth: 200
    },
  },
  padding: {
    md50: '50px',
    md30: '30px',
    md20: '20px',
    md15: '15px',
    md10:  '10px',
  },
  typography: {
    fontFamily: 'BarlowBold',
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          Fonts.ArchivoBlack,
          Fonts.BarlowBold,
          Fonts.BarlowBlack,
          Fonts.BarlowRegular,
        ]
      }
    },
   
  
  },
  custom: {
    palette: {
      iconColor: "#5f6368",
      background: "#000",
      iconHighlight: grey[900],
      notesCheckbox: grey[700],
      profilePopColor: "#FFF",
      noteBackground: {
        default: "#000",
        red: "#F28B82",
        orange: "#FBBC04",
        yellow: "#FFF475",
        green: "#CCFF90",
        cyan: "#A7FFEB",
        lightblue: "#CBF0F8",
        darkblue: "#AECBFA",
        purple: "#D7AEFB",
        pink: "#FDCFE8",
        brown: "#E6C9A8",
        grey: "#E8EAED"
      },
      background: {
        default: "#FFF",
        highlight: "#F1F3F4"
      },
      noteColorCheck: "#0007",
      labelBackground: "#0002",

      // 公共样式
      defaultspacing: '50px',
      mdspacing: '20px',
      smspacing: '10px',
      radius10: '10px',
      radius5: '5px',
    }
  }
  
});
export default theme;
