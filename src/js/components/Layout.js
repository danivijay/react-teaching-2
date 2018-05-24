import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component{
  constructor() {
    super()
    this.state = {
      name: "dani"
    }
  }
  render() {
    setTimeout(() => {
      this.setState({
        name: "dani m v"
      })
    }, 1000)
    return (
      <div>
        { this.state.name }
        <Header />
        <Footer />
      </div>
    )
  }
}