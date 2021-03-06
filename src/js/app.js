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
          <Link to="/">Front-End Notes</Link>
        </h1>
      </header>

      <main id="app-content">
        <Switch>
          <Route exact path="/">
            {/* home screen */}
            <nav id="nav">
              {notes.map((note, index) => (
                <Link to={"/" + note.name} key={index}>
                  <span>{note.title}</span>
                </Link>
              ))}
            </nav>
            <footer id="footer">
              <p>
                I created this website as a part of my learning process. At
                first, I wrote several markdown files covering some javascript,
                git and npm topics, so I could quickly look into it if I need
                to. Some time later, I thought it would be nice to have all the
                notes easy accessible from a single website. And so I created
                this page.
              </p>
            </footer>
          </Route>
          {notes.map((note, index) => (
            <Route path={"/" + note.name} key={index}>
              {/* note screen */}
              <Note {...note} />
            </Route>
          ))}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
