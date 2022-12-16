import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';

function App() {
  return (
    <div>
      <BrowserRouter basename='spotify-test'>
        <Routes>
          <Route index element={<TopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;