import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('/home')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
 
  render() {
    // console.log(this.state.persons)
    // const map = new Map(Object.entries(JSON.parse(this.state.persons)));
    // for (const key of map.values()) {    
    //   console.log(key)
    // }
    return (
      const json = {"user1": "John", "user2":"Kate", "user3":"Peter"};
      const map = new Map(Object.entries(JSON.parse(json)));
      for (const key of map.values()) {
          console.log(key)
      }






    )
  }
}