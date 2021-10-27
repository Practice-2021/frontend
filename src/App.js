import {Route, Switch} from "react-router-dom";
import {routes} from "./utils/routes";
const App = () => {
  return (
    <Switch>
      {routes.map((route, idx) => {
        return route.component && (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            render={props => (
                <route.component {...props} {...route.props} />
            )}
          />
        );
      })}
    </Switch>
  );
}

export default App;

