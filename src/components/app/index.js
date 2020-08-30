import React from 'react'
import { fromJS } from 'immutable'
import Menu from 'components/menu/menu-container'
// import menuJson from 'mock/menu.json'
import { getMenu } from 'api/menu'
import "style/main.scss"


const menuImmutable = async () => await getMenu()
// async function menuImmutable() {
//   return getMenu()
// }

function App() {
  return (
    <div className="flipdish-app">
      <h1>Flipdish App</h1>
      <Menu
        menuSections={menuImmutable().get('MenuSections')}
      />
    </div>
  );
}

export default App;
