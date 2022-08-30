import React, { Component } from 'react'

export default class FooterComponent extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      first: []
   }
 }

 componentDidMount(){
    this.setState({first: this.props.pekerjaan()})
 }

  render() {
    return (
      <div>{this.state.first}</div>
    )
  }
}
