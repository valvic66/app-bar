import React from 'react'

import NavMenuItem from './NavMenuItem'

export default class NavMenu extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultNavMenuClass']
    if (this.props.isItemListVisible) {
      classes.push('showItemList')
    } else {
      classes.push('hideItemList')
    }
    return classes.join(' ')
  }

  handleSelect = (item, index) => {
    this.props.onSelect(item, index)
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
      >

        {this.props.options.map((item, index) => {
          return (<NavMenuItem
            key={index}
            id='list_item'
            classes='defaultNavMenuItemClass'
            label={item.label}
            onClick={this.handleSelect.bind(this, item, index)}
          />)
        })}
      </div>
    )
  }
}
