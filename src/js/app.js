import Note from "./note.js";
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
          {notes.map((note, index) => (
            <button key={index}>
              <Link to={"/" + note}>{note}</Link>
            </button>
          ))}
        </Route>
        {notes.map((note, index) => (
          <Route path={"/" + note} key={index}>
            <Note note={note} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
