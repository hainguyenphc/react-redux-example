import './App.css';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import CakeContainer from './components/CakeContainer';
import SongList from './components/SongList';
import UsersContainer from './components/UsersContainer';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return <Provider store={store}>
    <SongList />
    <CakeContainer />
    <UsersContainer />
  </Provider>;
}

export default App;
