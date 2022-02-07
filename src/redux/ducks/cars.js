import { Car } from "../../models/car"


// types 
const ADD_CAR = "car/add"
const DEL_CAR = "car/del"
const EDIT_CAR = "car/edit"


export const addCar = (id,carUrl,marqueCar,prixCar,modelCar) =>({

    type:ADD_CAR,
    payload: new Car(id,carUrl,marqueCar,prixCar,modelCar)
})

export const delCar = (deletedId) => ({
    type:DEL_CAR,
    payload:deletedId
})
export const editCars = (updateCar) => ({
    type:EDIT_CAR,
    payload:updateCar
})
//define the initial state : array of todos 
const initialState = [
    
 new Car (1,"https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", "TOYOTA",  20000,  "20000" ) ,
 new Car  ( 2, "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", "FORD",  20000,  "20000"),
 new Car  ( 3, "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", "HONDA",  20000,  "20000"),
 new Car  ( 4, "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", "SEAT",  20000,  "20000"),
 new Car  ( 5, "https://s1.cdn.autoevolution.com/images/gallery/TOYOTA-Fortuner-6076_43.jpg", "KIA",  20000,  "20000")
]

const carReducer = (state = initialState, action) => {

    //destruct type and payload from action obj
    const { type, payload } = action

    switch (type) {

        case ADD_CAR:
            return [
                ...state, { ...payload }
            ]


        case DEL_CAR:
            return [
                ...state.filter(t => t.id !== payload)
            ]

        case EDIT_CAR:
            return [
                ...state.map(t => {
                    if (t.id === payload.id)
                        t = { ...payload }
                    return t
                })
            ]
        default:
            return state
    }
}

export default carReducer