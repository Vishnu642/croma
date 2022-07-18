import Axios from "axios"
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS,
     GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST,
      GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes"
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

const getSingleProductRequest = (payload)=>{
    return{
        type:GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess = (payload)=>{
    return{
        type:GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}
const getSingleProductFailure = (payload)=>{
    return{
        type:GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}

export const getSingleProduct=(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    Axios.get(`/products/${id}`)
    .then(res=>dispatch(getSingleProductSuccess(res.data)))
    .catch(e=>dispatch(getSingleProductFailure(e.data)))
}

