import './App.css';
import Home from './components/Home/Home/Home';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllOrderedService from './components/AllOrderedService/AllOrderedService/AllOrderedService';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageService from './components/ManageService/ManageService';
import Review from './components/Review/Review';
import BookingService from './components/BookingService/BookingService';
import BookService from './components/BookService/BookService';


export const UserContext = createContext();

function App()
{
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/allOrderedService">
            <AllOrderedService />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/bookService/:title">
            <BookService />
          </PrivateRoute>
          <PrivateRoute path="/bookingService">
            <BookingService />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
