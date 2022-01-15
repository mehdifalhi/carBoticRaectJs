
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar/Navbar';
//import Cars from './components/Cars/Cars';
import AddCar from './components/Cars/AddCar';
import React, { useState} from 'react'
import ListCars from './components/Cars/ListCars';
import EditCars from './components/Cars/EditCars';
//import { LIST_CARS } from './data/carsData';
import { Car } from './models/car';
//import { v4 as uuidv4 } from 'uuid';
function App() {

  const carsData = [
    { id: 1, carUrl: "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", marqueCar: "TOYOTA", prixCar: 20000, modelCar: "20000" },
    { id: 2, carUrl: "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", marqueCar: "FORD", prixCar: 20000, modelCar: "20000" },
    { id: 3, carUrl: "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", marqueCar: "HONDA", prixCar: 20000, modelCar: "20000" },
    { id: 4, carUrl: "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", marqueCar: "SEAT", prixCar: 20000, modelCar: "20000" },
    { id: 5, carUrl: "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", marqueCar: "KIA", prixCar: 20000, modelCar: "20000" }]

  const [listCars, setListCars] = useState(carsData);
 
  
  const addCar = (urlValue,marqueValue,prixValue,modelValuer) => {
   
    let newListCar = listCars
    
    newListCar.push(new Car(listCars.length+1,urlValue,marqueValue,prixValue,modelValuer)) 
    setListCars([...newListCar])

  }
  const deleteCarById = (id) => {

    setListCars(listCars.filter((car => car.id !== id)))

  }
  const updateCar = (idCar,newUrl,newMarq,newPrix,newModel)=>{

    alert(idCar+" "+newUrl+" "+newMarq+" "+newPrix+" "+newModel)
    // let newListCar = listCars
    // newListCar.forEach(c =>{
    //   if(c.id === idCar ){
    //     c.carUrl = newUrl
    //     c.marqueCar = newMarq
    //     c.prixCar =newPrix
    //     c.modelCar = newModel
    //   }

    // })
    // setListCars([...newListCar])
  }
  
  return (
    <div className="App">
      <div className="container-fluid">
        {/* Navbar  */}
        <Navbar />
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
