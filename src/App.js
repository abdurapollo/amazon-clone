import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import{Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_8ALmBVOgpExH7EBkycdttLCk00CRj0D6AQ");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The USER is >>>', authUser);

      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
        type: 'SET_USER',
        user: null
        })
      }
    })
  }, [])

  return (

    <Router>
    <div className="app">
       <Switch>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/checkout">
           <Header />
           <Checkout />
         </Route>
         <Route path="/payment">
           <Header />
           <Elements stripe={promise}>
              <Payment />
           </Elements>
         </Route>
         <Route path="/">
           <Header />
           <Home />
         </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
