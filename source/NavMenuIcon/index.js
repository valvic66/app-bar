import React from 'react'

export default class NavMenuIcon extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultNavMenuIconClass']
    return classes
  }

  render () {
    return (
      <div
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        <img src='https://cdn.rawgit.com/valvic66/app-bar/f4fbe1c2/assets/i_hamburger.svg' height='25' width='25' />

      </div>
    )
  }
}
