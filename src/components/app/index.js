import React from 'react'
import { Provider } from 'react-redux';

import Menu from 'components/menu/menu-container'
import "style/main.scss"
import "./app.scss"

import configureStore from 'store/configure-store';

const store = configureStore();
window.store = store

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
      <Provider store={store}>
        <Menu />
      </Provider>
    </div>
  );
}

export default App;
