import React from 'react'

export default class NavMenuItem extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultNavMenuItemClass']
    return classes
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        {this.props.label}

      </div>
    )
  }
}
