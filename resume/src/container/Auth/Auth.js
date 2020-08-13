import React,{Component} from 'react'
import Input from '../../ui/input'
import './Auth.css'
class Auth  extends Component{
state={
    toggle:true,
    SignUp:{
        input:[
            {placeholder:'UserName',type:'text',className:'inputUsername',label:'name'},
            {placeholder:'Password',type:'Password',className:'inputPassword',label:'password'},
            {placeholder:'Confirm password',type:'Password',className:'inputCpassword',label:'cpassword'},
        ]
    },
    Login:{
        input:[
            {placeholder:'UserName',type:'text',className:'loginInputUsername',label:'loginname'},
            {placeholder:'Password',type:'Password',className:'loginInputPassword',label:'loginpassword'},
           
        ]
    }
}
renderHandler=()=>{
    this.setState({
        toggle:!this.state.toggle
    })
}

render(){
    let RenderJsx;
    if(this.state.toggle){
RenderJsx=<div className="middleDiv">
    <div>
{this.state.SignUp.input.map(items=>{
    return(<>
    <label className={items.label}>
        {items.placeholder}
    </label>
<Input type={items.type} required placeholder={items.placeholder}className={items.className }/>
</>
    )
})}
    
<button className='Button'>
   Sign Up
</button>
    </div>
<span className='Account'>
   Already have a account <br/> <button className='Authhandler' onClick={this.renderHandler}>
       Login
   </button>
</span>
</div>
 }
 else{
RenderJsx=<div className="middleDiv">
    <div>
    {this.state.Login.input.map(items=>{
        return(<>
        <label className={items.label}>
            {items.placeholder}
        </label>
    <Input type={items.type} required placeholder={items.placeholder}className={items.className }/>
    </>
        )
    })}

   

<button className='Button'>
   Login
</button>
    </div>
<span className='Account'>
  Don't Already have a account <br/> <button className='Authhandler' onClick={this.renderHandler}>
       SignUp
   </button>
</span>
</div>

 }
return( <div className="authDiv">
<h2 className='signUp'>
    {this.state.toggle?"SignUp":"Login"}
</h2>
{RenderJsx}
</div>
)}
}
export default Auth