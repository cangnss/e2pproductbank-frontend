import { StyledEngineProvider } from '@mui/material';
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Header />
        <main>
          <Search />
        </main>
        <footer>
          <Footer />
        </footer>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
