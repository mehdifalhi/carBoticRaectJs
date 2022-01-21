import React, { useRef} from 'react'


export default function AddCar(props) {
    

   // const closeRefBtn = useRef()
    const urlref = useRef()
    const marqueref = useRef()
    const prixref = useRef()
    const modelref = useRef()

    const onHandelSbmuit = () => {

        let urlValue = urlref.current.value;
        let marqueValue = marqueref.current.value;
        let prixValue = prixref.current.value;
        let modelValue  = modelref.current.value;

        if(urlValue === ''|| marqueValue === '' || prixValue === ''|| modelValue==='' ) alert("remple les champs !!!")
        else{
            urlref.current.value = "";
            marqueref.current.value = "";
            prixref.current.value = "";
            modelref.current.value = "";
            
            props.addCar(urlValue,marqueValue,prixValue,modelValue)
        }
    }

    return (
        <div>
            {/* Scrollable modal Ajoute Cars*/}
            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Cars</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">image URL</label>
                                <input type="text" className="form-control"
                                    name='urlCar'  placeholder="URL"
                                    ref={urlref}  required />
                                <div className="valid-feedback">
                                    good!
                                    </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">la marque de voiture</label>
                                <input type="text" className="form-control"
                                    name='marqueCar'  placeholder="voiture"
                                    ref={marqueref}  required />
                                <div className="valid-feedback">
                                    good!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Prix</label>
                                <input type="number" className="form-control"
                                    name='prixCar'  placeholder="Prix"
                                    ref={prixref} required />
                                <div className="valid-feedback">
                                    good!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Model</label>
                                <input type="text" className="form-control"
                                    name='modelCar' placeholder="Model"
                                    ref={modelref} required />
                                <div className="valid-feedback">
                                    good!
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onHandelSbmuit}>
                                <i className="fas fa-plus" />Ajoute</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
