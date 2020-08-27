import React from 'react'
import { fromJS } from 'immutable'
import Menu from './js/components/menu'
import menuJson from './mock/menu.json'
import "./style/main.scss"


const menuImmutable = fromJS(menuJson)

function App() {
  return (
    <div className="flipdish-app">
      <Menu
        menuSections={menuImmutable.get('MenuSections')}
      />
    </div>
  );
}

export default App;
