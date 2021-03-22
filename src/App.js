import { routes } from './routes'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        {routes && routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
    </div>
  );
}

export default App;
