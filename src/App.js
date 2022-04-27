import './App.css';
import Home from './components/Home/Home/Home';
import
{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllOrderedService from './components/AllOrderedService/AllOrderedService/AllOrderedService';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageService from './components/ManageService/ManageService';
import Review from './components/Review/Review';
import BookingService from './components/BookingService/BookingService';
import BookService from './components/BookService/BookService';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import AuthProvider from './context/AuthProvider';

function App()
{
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="allOrderedService" element={<AllOrderedService />} />
            <Route path="addService" element={<AddService />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageService" element={<ManageService />} />
            <Route path="bookService/:title" element={<BookService />} />
            <Route path="bookingService" element={<BookingService />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
