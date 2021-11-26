import React, { Component } from 'react'
import { ComboBox, Form, FormField } from 'rc-easyui';
import axios from 'axios'
class ComboBox1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             value:'',
        }
    }
    componentDidMount(){
        console.log("message")
        let api1="https://jsonplaceholder.typicode.com/users"
        axios.get(api1)
        .then((response)=>{
            console.log(response)
            let temporaryData=response.data
            this.setState({
                data:temporaryData
            })
        })
        .catch(error=>console.log(error))
    }
    // handleChange=(e)=>{
    //     // this.setState({
    //     //     [e.target.name] : e.target.value
    //     // })
        
    // }
    
    render() {
        return (
            <div>
        <Form>
            <FormField  name="value" Label="name">
            <ComboBox
                data={this.state.data}
                value={this.state.value} 
                textField="name" valueField="id"
                onChange={(value) => this.setState({ value: value })}
        />
        </FormField>
        </Form>
            </div>
        )
    }
}

export default ComboBox1
