import './App.css';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import {rootSaga} from './store/sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./store/reducers/rootReducer"
import FootballPage from './components/SportsPages/FootballPage'
import BasketballPage from './components/SportsPages/BasketballPage'
import Navigationbar from './components/Navbar/Navigationbar';
import Eticket from './components/Ticket/Eticket';
import MyTicketsPage from './components/Ticket/MyTickets';
import Home from './components/Home/Home'

import {fetchBasketballMatches} from './store/actions/basketballActions';
import {fetchFootballMatches} from './store/actions/footballActions';
import {fetchMyTickets} from './store/actions/myTicketAction'


const sagaMiddleware=createSagaMiddleware();

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga)


class App extends React.Component {

  render(){
    {
      store.dispatch(fetchBasketballMatches());
      store.dispatch(fetchFootballMatches());
      store.dispatch(fetchMyTickets());
  }
  return (
    <Provider store={store}> 
    <div>
      
      <BrowserRouter>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/football" component={FootballPage}/>
          <Route path="/basketball" component={BasketballPage}/>
          <Route path="/eticket" component={Eticket}/>
          <Route path="/mytickets" component={MyTicketsPage}/>
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
  }
}  

export default App;
