import React from 'react';
import {Provider} from "react-redux"
import {store} from "./Redux/store"
import Router from './Router/Router';


function App() {

  return (
    <div>
 <Provider store={store}>
         <Router />
      </Provider>
    </div>
  );
}

export default App;





