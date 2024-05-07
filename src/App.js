import React from 'react'
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main"
import Ctf from "./components/Ctf"
import Webinar from "./components/Webinar"
import About from "./components/About"
import Faq from "./components/Faq"
import Minictf from "./components/minictf"

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/ctf' component={Ctf} />
      <Route exact path='/webinar' component={Webinar} />
      <Route exact path='/about' component={About} />
      <Route exact path='/faq' component={Faq} />
      <Route exact path='/minictf' component={Minictf} />
    </Switch>
  );
}

export default App;