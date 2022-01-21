
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar/Navbar';

import AddCar from './components/Cars/AddCar';
import React, { useState} from 'react'
import ListCars from './components/Cars/ListCars';
import EditCars from './components/Cars/EditCars';
import { LIST_CARS } from './data/carsData';
import { Car } from './models/car';

function App() {

  
  const [listCars, setListCars] = useState(LIST_CARS);
  const [listCarsOrigine, setListCarsOrigine] = useState(LIST_CARS);
 
  
  const addCar = (urlValue,marqueValue,prixValue,modelValuer) => {
   console.log(urlValue);
    let newListCar = listCars
    
    newListCar.push(new Car(listCars.length+1,urlValue,marqueValue,prixValue,modelValuer)) 
    setListCars([...newListCar])
    setListCarsOrigine([...listCarsOrigine])

  }
  const deleteCarById = (id) => {

    setListCars(listCars.filter((car => car.id !== id)))
    setListCarsOrigine([...listCarsOrigine])

  }
  const updateCar = (newUrl,newMarq,newPrix,newModel, idCar)=>{

   // alert(newUrl+" "+newMarq+" "+newPrix+" "+newModel)
    let newListCar = listCars
    newListCar.forEach(c =>{
      if(c.id === idCar ){
        c.carUrl = newUrl
        c.marqueCar = newMarq
        c.prixCar =newPrix
        c.modelCar = newModel
      }

    })
    setListCars([...newListCar])
    setListCarsOrigine([...listCarsOrigine])
  }
  const filterCarsByMarque = (queryCars) => {
    if (queryCars === "") {
      setListCarsOrigine([...listCarsOrigine])

    } else {

  //  console.log(queryCars)
      //copier la list pred
      let newListCar = listCars
      //faire le changement sur la new list
      newListCar = newListCar.filter(m => m.marqueCar.includes(queryCars))
      //on ecrase notre state avec la new list 
      setListCars([...newListCar])
    }
  }
  
  return (
    <div className="App">
      <div className="container-fluid">
        {/* Navbar  */}
        <Navbar filterCarsByMarque={filterCarsByMarque}/>
        {/* Add Cars  */}

        < EditCars
       
           />

        <AddCar addCar={addCar} />


        {/* Cars  */}
        <ListCars listCars={listCars} 
                  deleteCarById={deleteCarById} 
                  updateCar = {updateCar}/>
      </div>
    </div>

  );
}

export default App;
