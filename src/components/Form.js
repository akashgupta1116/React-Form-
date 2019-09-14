import React, {Component} from 'react'
import './mystyles.css'
import FormOp from './FormOp'



let storedItemObj = localStorage.getItem('formData');
class Form extends  Component{
    constructor (props){
        super(props)
        this.state={
            firstname :'',
            lastname:'',
            age:'',
            address:'',
            gender:'Male',
            formSubmit: false,
            image:'',
        };
        
        console.log(storedItemObj);
    }
    handlefirstname=(event)=>{
        this.setState({
            firstname:event.target.value
        })
    }

    handlelastname=(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }
    handleage=(event)=>{
        this.setState({
            age:event.target.value
        })
    }
    handleaddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handlegender=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
    imageHandler=(event)=>{
        this.setState({
            image:event.target.value
        })
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({
            formSubmit: true,
            firstname :''

        });
        const formData = {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            age: this.state.age,
            address: this.state.address,
            gender: this.state.gender
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        storedItemObj = JSON.parse(localStorage.getItem('formData'));
        
        console.log(storedItemObj.firstName,storedItemObj.lastName,storedItemObj.age,storedItemObj.address,storedItemObj.gender)
    }


    render (){
        return(
            <div>
                 <form>
                     <div className = {primary}>
                        <label > First Name: </label>
                         <input value={this.state.firstName} onChange={this.handlefirstname} type ='text'/><br/>
                     </div>
                     <div className = {primary}>
                         <label> Last Name: </label>
                         <input value={this.state.lastName} onChange={this.handlelastname} type ='text '/><br/>
                     </div>
                     <div className = {primary}>
                         <label> Age :</label> 
                         <input value={this.state.age} onChange={this.handleage} className='age' type ='text'/><br/> 
                     </div>
                     <div className = {primary}>
                        <label> Address :</label>
                        <input value={this.state.address} onChange={this.handleaddress} className='address' type ='text'/><br/>
                     </div>
                     <div className = {primary}>
                        <label> Gender: </label>
                        <select value={this.state.gender} onChange={this.handlegender} className='gender'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Others'>Others</option>
                        </select><br/>
                    </div>
                    <input value={this.state.image} onChange={this.imageHandler} className='imageUp' type = 'file' name='pic' accept='image/*' / >
                        
                        <button onClick={this.handleSubmit} className='primary'>Submit</button>
                </form>
                <div>  
                    {this.state.formSubmit?
                    <FormOp firstName = {storedItemObj.firstName} lastName = {storedItemObj.lastName} age={storedItemObj.age} address={storedItemObj.address} gender={storedItemObj.gender} image={this.state.image}/>
                    : null}
                </div>
            </div>

        )
    }
     
}

const primary = 'primary';
const container = 'container';


export default Form