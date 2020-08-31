import React from 'react'
import { fromJS } from 'immutable'

import Menu from 'components/menu/menu-container'
import "style/main.scss"
import "./app.scss"

function App() {
  return (
    <div id="flipdish">
      <header>
        <div className="col-3">
					<a data-testid="logo" href="https://www.flipdish.com">
						<img alt="Flipdish" src="https://www.flipdish.com/wp-content/uploads/2018/09/Flipdish-Logo-Type-White-1.png"/>
					</a>
        </div>
      </header>
      <Menu />
    </div>
  );
}

export default App;
