
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar/Navbar';

import AddCar from './components/Cars/AddCar';
import React from 'react'
import ListCars from './components/Cars/ListCars';


import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <div className="App">
      <div className="container-fluid">
      <Provider store={store}>
        {/* Navbar  */}
        <Navbar/>
        {/* Add Cars  */}


        <AddCar />


        {/* Cars  */}
        <ListCars />
                   </Provider>
      </div>
    </div>

  );
}

export default App;
