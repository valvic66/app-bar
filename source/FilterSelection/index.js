import React from 'react'

export default class FilterSelection extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultFilterSelectionClass']

    return classes
  }

  render () {
    return (
      <div
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        {this.props.label || 'Please select '}

      </div>
    )
  }
}
