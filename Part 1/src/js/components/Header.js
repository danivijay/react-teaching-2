import React from 'react'

import Title from './Header/Title'

export default class Header extends React.Component{
  constructor() {
    super()
    this.state = {
      title: "Welcome"
    }
  }
  render() {
    setTimeout(() => {
      this.setState({
        title: "Welcome Dani!!"
      })
    }, 2000)
    return (
      <header>
        <Title title={this.state.title} />
        <Title title="Another title!!" />
      </header>
    )
  }
}