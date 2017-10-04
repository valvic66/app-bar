import React from 'react'

export default class LikeIcon extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultLikeIconClass']

    return classes
  }

  render () {
    return (
      <div
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        <img src='https://cdn.rawgit.com/valvic66/app-bar/f4fbe1c2/assets/i_heart.svg' height='25' width='25' />

      </div>
    )
  }
}
