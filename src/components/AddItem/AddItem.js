import React , {Component} from 'react'
import './AddItem.css'

class  AddItems extends Component {
    state= {
        name:"",
        age:""
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e)=> {
        e.preventDefault();
       if (e.target.name.value === ''){
        return false
    } else {
        this.props.addItem(this.state)
        this.setState ({
            name:'',
            age:''
        })

    }
}
    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
              <input className="nam" type='text' placeholder="Enter name..."  id="name" onChange={this.handleChange}  value={this.state.name}/>
              <input className="num" type='number' placeholder="Enter age..."  id="age" onChange={this.handleChange}  value={this.state.age} />
              <input  className="sub"type="submit" value="Add" />
            </form>
        </div>
    )
}
}
export default AddItems