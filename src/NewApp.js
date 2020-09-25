import React from "react";
import Header from "./Layouts/Header";
import { Route } from "react-router-dom";
import MM00 from "./Screens/MM00";
import MM01 from "./Screens/MM01";
import MM02 from "./Screens/MM02";
import MM03 from "./Screens/MM03";
import MM04 from "./Screens/MM04";
import MM05 from "./Screens/MM05";

const NewApp = () => {
  return (
    <div className="NewApp">
      <section className="NewApp__header">
        <Route path="/" component={Header} />
      </section>

      <section className="NewApp__content">
        <Route exact path="/" component={MM00} />
        <Route exact path="/solution-dev-team" component={MM01} />
        <Route exact path="/solution-desgine-team" component={MM02} />
        <Route exact path="/taq-dev-team" component={MM03} />
        <Route exact path="/administration-center" component={MM04} />
        <Route exact path="/intern" component={MM05} />
      </section>
    </div>
  );
};

export default NewApp;
