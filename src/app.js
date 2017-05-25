/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import 'helpers/touchClass';

// container
import Layout from 'Layouts/main';

// components Pages
import {
  Home,
  About,
  Products
} from 'components';

/**
 * Render application
 *
 * @param {string} mountNodeId - mount node id.
 * @param {object} store       - redux store.
 * @param {object} history     - react router history.
 */
export function renderApp(mountNodeId, store, history) {
  const mountNode = document.getElementById(mountNodeId);

  // don't do anything if mount node not found.
  if (!mountNode) {
    console.log('test');
    return null;
  }
  // <Route path="profile" component={Profile}></Route>


  // render application
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="about" component={About}></Route>
          <Route path="products">
            <Route path=":id" component={Products} />
          </Route>
        </Route>
      </Router>
    </Provider>,
    mountNode
  );
}
