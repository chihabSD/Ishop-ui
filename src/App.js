import logo from './logo.svg';

import  { Switch, Route} from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
function App() {
  return (
    
    <Switch>
      <Route  path='/' component={Home}/>
      <Route  path='/login' component={Login}/>
      <Route  path='/register' component={Register}/>
    </Switch>
  );
}

export default App;