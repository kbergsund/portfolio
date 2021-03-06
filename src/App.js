import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import './scss/App.scss';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1E5359'
      },
      secondary: {
        main: '#3B758C'
      },
      tertiary: {
        main: '#A7D4D9'
      }
    },
  })

  return (
    <div className='App' id='home'>
      <ThemeProvider theme={theme}>
        <div className='background-img'>
          <Nav />
          <Header />
          <Main />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
