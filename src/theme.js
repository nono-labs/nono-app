import { createTheme } from "@material-ui/core/styles";
import { red, amber, grey } from "@material-ui/core/colors";

import Fonts from "@/assets/fonts";
const fontFamilyArchivoBlack = {
  fontFamily: [
    "ArchivoBlack",
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",")
};
const theme = createTheme({
  type: 'light',
  palette: {
    primary: {
      main: '#e5e5e5'
    },
    secondary: {
      main: amber[500],
      light: "#feefc3"
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
    md20: '20px'
  },
  transitions: {

  },
  typography: {
    // fontFamily: "Poppins",
    // ...fontFamilyArchivoBlack,

  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          Fonts.ArchivoBlackRegular,
        ]
      }
    },
    MuiButton: {
      root: {
        background: '#fff',
        border: '0.5px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '10px',
        href: 'none',
        variant: 'text',
        textTransform: 'none',
      },
      text: {
        color: '#000',
        minWidth: '160px',
        height: '40px',
        padding: '0 23px',
        fontFamily: 'Archivo Black',
      },
    },
  
  },
  custom: {
    fontFamily: {
      archivo: fontFamilyArchivoBlack,
    },
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
    }
  }
  
});
export default theme;
