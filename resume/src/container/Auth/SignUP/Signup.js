import React,{Component} from 'react'
import Input from '../../../ui/input' 
import Error from '../../../ui/Error' 
import Spinner from '../../../ui/spinner' 
import '../Auth.css'
import firebase from '../../../config/fire'
class   Signup       extends Component{

state={
    SignUp:{
        input:[
            {placeholder:'UserName',type:'text',className:'inputUsername',label:'name',value:''},
            {placeholder:'Password',type:'Password',className:'inputPassword',label:'password',value:''},
            {placeholder:'Confirm password',type:'Password',className:'inputCpassword',label:'cpassword',value:''},
        ]
    },
    error:null,loading:false
}
authanticationHandler=()=>{
    this.setState({loading:true})
       firebase.auth().createUserWithEmailAndPassword(this.state.SignUp.input[0].value,this.state.SignUp.input[1].value).then(u=>{
           console.log(u,"done");  
           this.setState({loading:false})  
       }).catch(err=>{
           console.log(err.code,"error");
           this.setState({
               error:err.code,loading:false
           })
       })

}
    ChangeHandler=(e,i)=>{
   
        
    
            let PseudoInput=[...this.state.SignUp.input];
            PseudoInput[i].value=e.target.value
            this.setState({
                PseudoInput
            })
            
                   } 
render(){
return(<>
                {!this.state.error?
<div className="middleDiv">
                {this.state.loading?<Spinner/>:
            <div>
        {this.state.SignUp.input.map((items,i)=>{
            return(<div key={items.placeholder}>
                <label className={items.label}>
                {items.placeholder}
                </label>
                <Input type={items.type} required placeholder={items.placeholder}className={items.className } onChange={(e)=>this.ChangeHandler(e,i)}/>
                </div>
                )
            })}
            
            <button className='Button ' onClick={this.authanticationHandler}>
           Sign Up
        </button>
            </div>}
            <span className='Account'>
            Already have a account <button className='Authhandler' onClick={this.props.renderHandler} >
            Login
            </button>
            </span>
            </div> :<Error errorMessage={this.state.error}/>
        }
        </>
         



)}
}
export default Signup