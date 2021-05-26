import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider, } from 'react-intl'
import { BrowserRouter, } from 'react-router-dom'
import { Link, Route, Switch, } from 'lib/react-router-dom-intl'
// import { Link, } from 'lib'

const messages = {
  '/route1': '/chemin1'
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"))

function App () {
  return (
    <IntlProvider
      locale="fr"
      defaultLocale="fr"
      messages={messages}>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Link to /</Link>
        </li>
        <li>
          <Link to="/route1">Link to /route1 see the url link</Link>
        </li>
        <li>
          <Link to="/route2">Link to /route2</Link>
        </li>
      </ul>

        <Switch>
          <Route exact path="/"><div>base route</div></Route>
          <Route path="/route2"><div>route 2</div></Route>
          <Route path="/route1"><div>route 1</div></Route>
        </Switch>
      </BrowserRouter>
    </IntlProvider>
  )
}
