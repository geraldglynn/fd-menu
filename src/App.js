import React from 'react'
import { fromJS } from 'immutable'
import './App.css'
import Menu from './js/components/menu'
import menuJson from './mock/menu.json'

const menuImmutable = fromJS(menuJson)

function App() {
  return (
    <div className="App">
      <Menu         
        menuSections={menuImmutable.get('MenuSections')}
      />
    </div>
  );
}

export default App;
