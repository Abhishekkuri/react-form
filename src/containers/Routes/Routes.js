import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "../../components/Form/Form";
import Developers from "../../components/Developers/Developers";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/developers" component={Developers} />
      </Switch>
    </div>
  );
};

export default Routes;
