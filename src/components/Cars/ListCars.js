import React, { useRef, useState } from 'react'
import Cars from './Cars'
export default function ListCars(props) {
  const [selectedId, setSelectedId] = useState()

    const urlRef = useRef()
    const marqRef = useRef()
    const prixRef = useRef()
    const modelRef = useRef()

    const editCar =(carUrl,marqueCar,prixCar,modelCar,id)=>{

    //  alert(carUrl+" "+marqueCar+" "+prixCar+" "+modelCar)
        urlRef.current.value = carUrl
        marqRef.current.value = marqueCar
        prixRef.current.value = prixCar
        modelRef.current.value = modelCar
         setSelectedId(id)
    }
    const handleClickUpdate = ()=>{
       
        props.updateCar(urlRef.current.value,marqRef.current.value, prixRef.current.value, modelRef.current.value, selectedId)
    }
    return (
        <div>
            
             <div className="d-flex flex-wrap" >       
             {props.listCars.map(car => ( <  Cars 
                                            key={car.id}
                                            id={car.id}
                                            carUrl={car.carUrl}
                                            marqueCar= {car.marqueCar}
                                            prixCar= {car.prixCar}
                                            modelCar= {car.modelCar}
                                            deleteCarById ={props.deleteCarById}
                                            editCar={editCar}
             /> ))}
               
             </div>

            {/* Scrollable modal Update */}
            <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Cars</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">image URL</label>
                                    <input type="text" className="form-control"
                                        name='urlCar'  placeholder="URL"
                                     ref={urlRef}  required />
                                    <div className="valid-feedback">
                                        good!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">la marque de voiture</label>
                                    <input type="text" className="form-control"
                                        name='marqueCar' placeholder="voiture"
                                        ref={marqRef}  required />
                                    <div className="valid-feedback">
                                        good!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Prix</label>
                                    <input type="number" className="form-control"
                                        name='prixCar'  placeholder="Prix"
                                        ref={prixRef}   required />
                                    <div className="valid-feedback">
                                        good!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Model</label>
                                    <input type="text" className="form-control"
                                        name='modelCar'  placeholder="Model"
                                        ref={modelRef}   required />
                                    <div className="valid-feedback">
                                        good!
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  data-bs-dismiss="modal" onClick={handleClickUpdate} className="btn btn-success " ><i className="fas fa-edit" />Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
