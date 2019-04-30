import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './config/globalStyle'
import theme from './config/theme'

// import theme from './config/theme'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <App />
      </Fragment>
    </ThemeProvider>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
