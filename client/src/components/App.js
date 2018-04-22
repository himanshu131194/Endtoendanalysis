import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Header from './Header';
const Questions = ()=> <p>Add Questions</p>
const App  = () =>{
     return (
        <div>
          <BrowserRouter>
              <div>
                 <Header/>
                 <Route exact path="/add-questions" component={Questions}/>
              </div>
          </BrowserRouter>
        </div>
     );
}
export default App;
