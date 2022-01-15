import React from 'react'


export default function Cars(props) {
  
  
        const handleClick = () => {
              
          if(window.confirm("Are you sure .!!/*"))
                  
          props.deleteCarById(props.id)

        }

 const handleClickEdit =()=>{
          props.editCar(
            props.carUrl,
            props.marqueCar,
            props.prixCar,
            props.modelCar,
            props.id)
 }
 
    return (
        <div>

      <div className="card  mt-3 ms-2" style={{width: '18rem'}}>
        <img src={props.carUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title carlist">{props.marqueCar}</h4>
          <h6 className="card-title">{props.prixCar}</h6>
          <h6 className="card-title ">{props.modelCar}</h6>
          <button type="button" className="btn btn-danger m-1 float-end"  onClick={handleClick} ><i className="fas fa-trash-alt"> </i> DEL</button>
          <button type="button" className="btn btn-success m-1 float-end" onClick={handleClickEdit}  data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <i className="fas fa-edit" /> Edit
          </button>
        </div>
      </div>
   
        </div>
    )
}
