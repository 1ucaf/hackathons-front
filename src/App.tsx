import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SelectedHackathonProvider from './contexts/Hackathons/SelectedHackathonContext';
import SessionProvider from './contexts/Session/SessionContext';
import { Pages } from "./pages";

const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
});
function App() {
  return (
    <div className="App">
      <SessionProvider>
        <SelectedHackathonProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Pages/>
          </ThemeProvider>
        </SelectedHackathonProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
