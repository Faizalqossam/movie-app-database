import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Layout from './layout';
import Home from './pages/Home';
import CreateMovie from './pages/movie/Create';
import Detail from './pages/movie/Detail';
import NowPlayingMovie from './pages/movie/NowPlaying';
import PopularMovie from './pages/movie/Popular';
import TopRatedMovie from './pages/movie/TopRated';
import theme from './utils/constants/themes';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
