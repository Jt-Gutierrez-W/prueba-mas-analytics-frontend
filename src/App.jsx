import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.css';

// Placeholder for pages, if you want to define routes here
// import UserListPage from './pages/UserListPage'; 
// import UserCreatePage from './pages/UserCreatePage';
// import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          {/* Example of nested routes if you have pages to render within MainLayout's Outlet */}
          {/* <Route index element={<UserListPage />} /> */}
          {/* <Route path="users" element={<UserListPage />} /> */}
          {/* <Route path="users/create" element={<UserCreatePage />} /> */}
          {/* <Route path="users/:userId" element={<UserDetailPage />} /> */}
          {/* Add a default/home page for the content area */}
          <Route index element={<div>Welcome to the application!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
