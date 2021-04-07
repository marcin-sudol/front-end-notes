import Home from "./home.js";
import Note from "./note.js";
import Error from "./error.js";
const Router = window.ReactRouterDOM.HashRouter;
const Switch = window.ReactRouterDOM.Switch;
const Link = window.ReactRouterDOM.Link;
const Route = window.ReactRouterDOM.Route;
const useState = React.useState;
const useEffect = React.useEffect;

const App = (props) => {
  const [notes, setNotes] = useState([]);

  // initially set notes
  useEffect(() => {
    setNotes(
      props.notes.map((note) => {
        return {
          title: note.split("-").join(" "),
          name: note,
        };
      })
    );
  }, []);

  return (
    <Router>
      <header id="app-header">
        <h1>
          <Link to="/" aria-label="Return to homepage">
            Front-End Notes
          </Link>
        </h1>
      </header>

      <main id="app-content">
        <Switch>
          <Route exact path="/">
            {/* home screen */}
            <Home notes={notes} />
          </Route>

          {notes.map((note, index) => (
            <Route path={"/" + note.name} key={index}>
              {/* note screen */}
              <Note {...note} />
            </Route>
          ))}

          <Route path="*">
            {/* error screen */}
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
