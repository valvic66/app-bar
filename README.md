
<h1>React-AppBar Demo</h1>

Description: An AppBar React component with three select menus which receive options via props and return the selected option to a user-defined function.

Live Example: http://htmlpreview.github.io/?https://github.com/valvic66/app-bar/blob/master/example/index.html

Usage

    const optionsMenu1 = [
      { label: 'Menu Item One', action: 'do_menuitem1' },
      { label: 'Menu Item Two', action: 'do_menuitem2' },
    ]
    
    <AppBar
      color={'#00bcd4'}
      optionsMenu1={optionsMenu1}
      optionsMenu2={optionsMenu2}
      optionsMenu3={optionsMenu3}
      onSelectMenu1={(item, index) => { this.handleSelectMenu1(item) }}
    />


License: Micu Valentin - 2017
