import Axios from "axios"
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes"
import { Products } from "../../Pages/Products"
const fetchDataRequest=(payload)=>{
    return{
        type:FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess=(payload)=>{
    return{
        type:FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailure=(payload)=>{
    return{
        type:FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest())
        Axios.get("/products",{
            params:{
                ...payload
            }
        }).then(res=>dispatch(fetchDataSuccess(res.data)))
        .catch(e=>dispatch(fetchDataFailure(e.data)))
    }

}

