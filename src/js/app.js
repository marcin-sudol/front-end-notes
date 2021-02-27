import Note from "./note.js";

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
      <div id="header-container">
        <header id="app-header">
          <h1>Front-End Notes</h1>
        </header>
      </div>
      <main>
        <Switch>
          <Route exact path="/">
            <nav id="nav">
              {notes.map((note, index) => (
                <button key={index}>
                  <Link to={"/" + note.name}>
                    <span className="symbol">&lt; </span>
                    {note.title}
                    <span className="symbol"> /&gt;</span>
                  </Link>
                </button>
              ))}
            </nav>
          </Route>
          {notes.map((note, index) => (
            <Route path={"/" + note.name} key={index}>
              <Note {...note} />
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
