import { StyledEngineProvider } from '@mui/material';
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import './App.css';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Header />
        <main>
          <Search />
        </main>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
