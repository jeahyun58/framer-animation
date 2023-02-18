import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
