import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST,
     FETCH_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST,
      GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";


const initialState={
    products:[],
    loading:false,
    error:"",
    currentProduct:{},
    cart:[]
}

const reducer=(state=initialState,action)=>{
    const {type,payload} = action;
    switch (type){
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:true
            }
            case FETCH_DATA_SUCCESS:
                return{
                    ...state,
                    products:payload,
                    error:"",
                    loading:false
                }
                case FETCH_DATA_FAILURE:
                    return{
                        ...state,
                        error:payload,
                        loading:false
                    }
                case GET_SINGLE_PRODUCT_REQUEST:
                    return{
                        ...state,
                        error:"",
                        loading:true

                    } 
                case GET_SINGLE_PRODUCT_SUCCESS:
                    return{
                        ...state,
                        currentProduct:payload,
                        loading:false
                    }
                case GET_SINGLE_PRODUCT_FAILURE:
                    return{
                        ...state,
                        error:payload,
                        loading:false
                    }
                case ADD_PRODUCT_CART_REQUEST:
                    return{
                        ...state,
                        error:"",
                        loading:true
                    }
                case ADD_PRODUCT_CART_SUCCESS:
                    return{
                        ...state,
                        error:"",
                        cart:[...state.cart,payload],
                        loading:false
                    }
                case ADD_PRODUCT_CART_FAILURE:
                    return{
                        ...state,
                        error:payload,
                        loading:false
                    }
                case FETCH_CART_REQUEST:
                    return{
                        ...state,
                        error:"",
                        loading:true
                    }
                case FETCH_CART_SUCCESS:
                    return{
                        ...state,
                        error:"",
                        cart:[...payload],
                        loading:false
                    }
                case FETCH_CART_FAILURE:
                    return{
                        ...state,
                        error:payload,
                        loading:false
                    }    

                    default:
                        return state;
    }

}

export default reducer;