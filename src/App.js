import '../src/assets/css/App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage';
import BookingPage from './views/BookingPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;