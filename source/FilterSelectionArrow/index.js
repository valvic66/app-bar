import React from 'react'

export default class FilterSelectionArrow extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultFilterSelectionArrowClass']

    return classes
  }

  getArrowCSSClasses () {
    const classes = 'arrowDown'
    if (this.props.isArrowMenuVisible) {
      const classes = 'arrowUp'

      return classes
    }
    return classes
  }

  render () {
    return (
      <div
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        <img className={this.getArrowCSSClasses()} height='20' width='20' />

      </div>
    )
  }
}
