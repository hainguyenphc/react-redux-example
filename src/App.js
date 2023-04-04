import './App.css';

import { Provider } from "react-redux";
import { createStore } from 'redux';
import SongList from './components/SongList';
import rootReducer from './redux/rootReducer';
import CakeContainer from './components/CakeContainer';

const store = createStore(rootReducer);

function App() {
  return <Provider store={store}>
    <SongList />
    <CakeContainer />
  </Provider>;
}

export default App;
