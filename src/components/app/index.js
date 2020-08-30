import React from 'react'
import { fromJS } from 'immutable'
import Menu from 'components/menu/menu-container'
import menuJson from 'mock/menu.json'
import "style/main.scss"


const menuImmutable = fromJS(menuJson)

function App() {
  return (
    <div className="flipdish-app">
      <h1>Flipdish App</h1>
      <Menu
        menuSections={menuImmutable.get('MenuSections')}
      />
    </div>
  );
}

export default App;