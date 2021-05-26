## React Router Dom Intl

Package intent to get localized Routes.

Use `Link` and `Switch` components from this package and let the magic happen.

### Warning

> In this early version only `<Link to={String} />` are supported. Not the `Object{pathname}` syntax. This will come in v1.

## Basic usage

```js
<IntlProvider
  locale="fr"
  defaultLocale="fr"
  messages={{
    '/route1': '/chemin1', // Localize your path here
  }}>
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
      <Route path="/route1"><div>route 1</div></Route>{/* Will be translated to '/chemin1' according to "messages" */}
      <Route path="/route2"><div>route 2</div></Route>{/* Stay provided path since it's not provided */}
    </Switch>
  </BrowserRouter>
</IntlProvider>
```

See src/index.js for sample and src/lib for logic or `npm run start` this project locally for a demo.
