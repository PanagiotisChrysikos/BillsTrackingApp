

import BillDetails from './BillDetails';
import Create from './Create';
import CreateBillCategory from './CreateBillCategory';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>

            <Route path = "/create">
              <Create />
            </Route>

            <Route path = "/create-category">
              <CreateBillCategory />
            </Route>

            <Route path = "/bills/:id">
              <BillDetails />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
