import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ApplicationNavbar from './components/ApplicationNavbar';
import ShoppingList from './components/ShoppingList';
import { loadUser } from './actions/authActions';
import { Container } from 'reactstrap'
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';


class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ApplicationNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
