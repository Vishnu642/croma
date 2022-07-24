import Axios from "axios"
import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, 
    ADD_PRODUCT_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST,
     FETCH_CART_SUCCESS, FETCH_DATA_FAILURE,
     FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS,
     GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST,
      GET_SINGLE_PRODUCT_SUCCESS, 
      REMOVE_PRODUCT_CART_FAILURE,
      REMOVE_PRODUCT_CART_REQUEST,
      REMOVE_PRODUCT_CART_SUCCESS} from "./actionTypes"
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
                ...payload,
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

const addProductCartRequest = (payload)=>{
    return{
        type:ADD_PRODUCT_CART_REQUEST,
        payload
    }
}

const addProductCartSuccess = (payload)=>{
    return{
        type:ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}

const addProductCartFailure = (payload)=>{
    return{
        type:ADD_PRODUCT_CART_FAILURE,
        payload
    }
}

export const addProductCart = (product)=>dispatch=>{
    dispatch(addProductCartRequest())
    Axios.post("/cart",product).then(r=>dispatch(addProductCartSuccess(r.data)))
    .catch(e=>dispatch(addProductCartFailure(e.data)))
}

const fetchCartRequest=(payload)=>{
    return{
        type:FETCH_CART_REQUEST,
        payload
    }
}

const fetchCartSuccess = (payload)=>{
    return{
        type:FETCH_CART_SUCCESS,
        payload
    }
}

const fetchCartFailure = (payload)=>{
    return{
        type:FETCH_CART_FAILURE,
        payload
    }
}

export const fetchCart = (payload)=>dispatch=>{
    dispatch(fetchCartRequest())
    Axios.get("/cart").then(res=>dispatch(fetchCartSuccess(res.data)))
    .catch(e=>dispatch(fetchCartFailure(e.data)))
}


const deleteProductCartRequest = (payload) =>{
    return{
        type:REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}

const deleteProductCartSuccess = (payload) =>{
    return{
        type: REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}

const deleteProductCartFailure = (payload) =>{
    return{
        type: REMOVE_PRODUCT_CART_FAILURE,
        payload
    }
}

  export  const deleteProductCart = (id)=>dispatch=>{
        dispatch(deleteProductCartRequest())
        Axios.delete(`/cart/${id}`).then(res=>dispatch(deleteProductCartSuccess(res.data)))
        .then(()=>dispatch(fetchCart()))
        .catch(e=>dispatch(deleteProductCartFailure(e.data)))
}