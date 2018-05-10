import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import Home from './components/Home';
import Login from './components/admin/Login';
import Products from './components/admin/Products';
import ProductsNew from './components/admin/ProductsNew';
import Banners from './components/admin/Banners';
import Categories from './components/admin/Catagories';
import CategoriesNew from './components/admin/CategoriesNew';
import Details from './components/Details';
import ProductsPhotos from './components/admin/ProductsPhotos';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAIA8AIWCTWcLQwrZDrAOcZ2JhntASFbjo",
      authDomain: "api-cea-v1.firebaseapp.com",
      databaseURL: "https://api-cea-v1.firebaseio.com",
      projectId: "api-cea-v1",
      storageBucket: "api-cea-v1.appspot.com",
      messagingSenderId: "688230257881"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/admin/login" component={Login} />
              <Route path="/admin/produtos/fotos/:id" component={ProductsPhotos} />
              <Route path="/admin/produtos/novo" component={ProductsNew} />
              <Route path="/admin/produtos" component={Products} />
              <Route path="/admin/banners" component={Banners} />
              <Route path="/admin/categorias/novo" component={CategoriesNew} />
              <Route path="/admin/categorias" component={Categories} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
