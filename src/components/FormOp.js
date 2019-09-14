import React,{Component} from 'react'
import './mystyles.css'


class FormOp extends Component{
    render (){
        return this.props?(
            <div className='formOp'>
                <p>
                    First Name: {this.props.firstName}
                </p>
                <p>
                    Last Name: {this.props.lastName}
                </p>
                <p>
                    Age: {this.props.age}
                </p>
                <p>
                    Address:{this.props.address}
                </p>
                <p>
                    Gender :{this.props.gender}
                </p>
                <img src={this.props.image} height="100px" width="100px"/>
                
            </div>  
        ):null
    }
}


export default FormOp