import { createTheme } from "@material-ui/core/styles";
import Meta from '../fonts/meta.ttf'

const meta = {
  fontFamily: 'Meta',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
    local('meta'),
    url(${Meta}) format('ttf')
  `,
};

const theme = createTheme({
  typography: {
    fontFamily: ['Meta', 'Roboto', 'Arial', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [meta],
      }
    }
  }
});
export default theme;