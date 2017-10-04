import React from 'react'

import onClickOutside from 'react-onclickoutside'

import NavMenuIcon from './NavMenuIcon'
import FilterSelection from './FilterSelection'
import FilterSelectionArrow from './FilterSelectionArrow'
import SearchIcon from './SearchIcon'
import LikeIcon from './LikeIcon'
import MenuIcon from './MenuIcon'
import NavMenu from './NavMenu'

class AppBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLeftMenuVisible: false,
      isRightMenuVisible: false,
      isArrowMenuVisible: false,
      labelMenuSelection: ''
    }
  }

  handleClickOutside = (event) => {
    this.setState({
      isLeftMenuVisible: false,
      isArrowMenuVisible: false,
      isRightMenuVisible: false
    })
  }

  getCSSClasses () {
    const classes = [this.props.classes || 'defaultAppClass']

    return classes
  }

  handleClickLeftMenu = () => {
    this.setState({
      isLeftMenuVisible: !this.state.isLeftMenuVisible
    })
  }

  handleMouseLeaveLeftMenu = () => {
    this.setState({
      isLeftMenuVisible: !this.state.isLeftMenuVisible
    })
  }

  handleOnSelectLeftMenu = (item, index) => {
    this.props.onSelectLeftMenu(item, index)
    this.setState({
      isLeftMenuVisible: false
    })
  }

  handleClickRightMenu = () => {
    this.setState({
      isRightMenuVisible: !this.state.isRightMenuVisible
    })
  }

  handleMouseLeaveRightMenu = () => {
    this.setState({
      isRightMenuVisible: !this.state.isRightMenuVisible
    })
  }
  handleOnSelectRightMenu = (item, index) => {
    console.log(`Index: ${index} => Selected value: ${item.label}`)
    this.setState({
      isRightMenuVisible: false
    })
  }

  handleClickArrowMenu = () => {
    this.setState({
      isArrowMenuVisible: !this.state.isArrowMenuVisible
    })
  }

  handleMouseLeaveArrowMenu = () => {
    this.setState({
      isArrowMenuVisible: !this.state.isArrowMenuVisible
    })
  }

  handleOnSelectArrowMenu = (item, index) => {
    console.log(`Index: ${index} => Selected value: ${item.label}`)
    this.setState({
      labelMenuSelection: item.label,
      isArrowMenuVisible: false
    })
  }

  handleSearchIconClick = () => {
    console.log('Search Icon Clicked')
  }

  handleLikeIconClick = () => {
    console.log('Like Icon Clicked')
  }

  render () {
    var style = {
      backgroundColor: this.props.color
    }

    return (
      <div className={this.getCSSClasses()} style={style}>

        <NavMenuIcon
          onClick={this.handleClickLeftMenu}
        />

        <NavMenu
          classes='defaultLeftMenuCSS'
          options={this.props.optionsMenu1}
          isItemListVisible={this.state.isLeftMenuVisible}
          onMouseLeave={this.handleMouseLeaveLeftMenu}
          onSelect={this.handleOnSelectLeftMenu.bind(this)}
        // selectedInput={this.state.selectedInput}
        />

        <FilterSelection
          label={this.state.labelMenuSelection}
          onClick={this.handleClickArrowMenu}
        />

        <FilterSelectionArrow
          icon={this.state.defaultArrowIcon}
          isArrowMenuVisible={this.state.isArrowMenuVisible}
          onClick={this.handleClickArrowMenu}
        />

        <NavMenu
          classes='defaultArrowMenuCSS'
          options={this.props.optionsMenu2}
          isItemListVisible={this.state.isArrowMenuVisible}
          onSelect={this.handleOnSelectArrowMenu.bind(this)}
        />

        <div className='rightBox'>
          <SearchIcon
            onClick={this.handleSearchIconClick}
          />

          <LikeIcon
            onClick={this.handleLikeIconClick}
          />

          <MenuIcon
            onClick={this.handleClickRightMenu}
          />

          <NavMenu
            classes='defaultRightMenuCSS'
            options={this.props.optionsMenu3}
            isItemListVisible={this.state.isRightMenuVisible}
            onMouseLeave={this.handleMouseLeaveRightMenu}
            onSelect={this.handleOnSelectRightMenu.bind(this)}
          // selectedInput={this.state.selectedInput}
          />
        </div>
      </div>
    )
  }
}

export default onClickOutside(AppBar)
