import '../src/assets/css/App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage';
import BookingPage from './views/BookingPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>

      <Footer />

    </>
  );
}

export default App;