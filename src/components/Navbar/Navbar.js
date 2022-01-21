import React, { useRef } from 'react'

export default function Navbar(props) {
  
  const filterQueryRef = useRef()

  const handleKeyUp = ()=>{
    //console.log(filterQueryRef.current.value);
    props.filterCarsByMarque(filterQueryRef.current.value)
}
    return (
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Cars Botic</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fas fa-plus" /> Add Cars 
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" 
             onKeyUp={handleKeyUp} 
             placeholder="Filter Cars by Marque"
            ref={filterQueryRef} aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
       
    )
}
