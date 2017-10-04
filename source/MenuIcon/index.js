import React from 'react'

export default class MenuIcon extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultMenuIconClass']
    return classes
  }

  render () {
    return (
      <div
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        <img src='https://cdn.rawgit.com/valvic66/app-bar/f4fbe1c2/assets/i_menu.svg' height='25' width='25' />

      </div>
    )
  }
}
