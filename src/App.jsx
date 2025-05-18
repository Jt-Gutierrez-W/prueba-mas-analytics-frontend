import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />}>

          <Route index element={<div>Welcome to the application!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
