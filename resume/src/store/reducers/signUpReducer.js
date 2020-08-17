import * as actionTypes from '../actions/action'
import firebase from '../../config/fire'
const intialState={
token:null,
    user:"kk",
      loading:false,error:null
}
export  const Signup=(email,password)=>{
  
              
    return dispatch=>{

        dispatch(user_request())
        firebase.auth().createUserWithEmailAndPassword(email,password).then(u=>{
           
            dispatch(user_success(u.user.ga.a,u.user.email))
        }).catch(err=>{
       
            dispatch(user_error(err.message))
        })}}
              
export const user_request=()=>{
    return{
    type: actionTypes.user_request
}
}
export const user_error=(err)=>{
    return{

        type: actionTypes.user_error,
        payload:err
    }
}
export const user_success=(token,email)=>{
  
    return{
type: actionTypes.user_success,
user:email,token:token
}
}



const reducer=(state=intialState,action)=>{
  
    switch (action.type) {
        case actionTypes.user_request:
          
            
            return{
                ...state,
                loading:true
            }
        
        case actionTypes.user_success:
       
        localStorage.setItem('token',action.token)
        localStorage.setItem('user',action.user)
            return{
                ...state,
                user:action.user,
                loading:false,
                token:action.token
                      }
        case actionTypes.user_error:
            
            
            return{
               
                ...state,
                loading:false,
          error:action.payload
                
                      }
                      
      
                      default:
                          return{
                              state
                          }
              
      }
   
          
                
            }
                      
      export default reducer
                           
     