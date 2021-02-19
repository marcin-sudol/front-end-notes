import Error from "./error.js";

const Router = window.ReactRouterDOM.BrowserRouter;
const Switch = window.ReactRouterDOM.Switch;
const Link = window.ReactRouterDOM.Link;
const Route = window.ReactRouterDOM.Route;

const App = ({ notes }) => {
  return (
    <Router>
      <header id="app-header">
        <h1>
          <i className="fas fa-pencil-alt"></i> Front-End Notes
        </h1>
      </header>
      <Switch>
        <Route exact path="/">
          <button>
            <Link to="/error">Go to Error</Link>
          </button>
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
