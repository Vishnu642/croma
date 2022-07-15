import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes";


const initialState={
    products:[],
    loading:false,
    error:""
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
                    default:
                        return state;
    }

}

export default reducer;