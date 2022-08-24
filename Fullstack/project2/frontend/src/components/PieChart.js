import React from 'react'
import axios from 'axios'

export default class PieChart extends React.Component{
    state = {
        persons: []
    }

    componentDidMount(){
        axios.get('/pieChart').then(res => {
            const persons = res.data;
            this.setState({persons});
        })
    }

    render(){
        
        return (
            <ul>
                {
                    this.state.persons
                        .map(person => 
                            <li key = {person.id}>{person.cpu_usage}</li> )
                }


            </ul>
           
        )
    }
}