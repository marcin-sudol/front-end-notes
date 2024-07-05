import Home from "./home.js";
import Note from "./note.js";
import Error from "./error.js";
const Router = ReactRouterDOM.HashRouter;
const Routes = ReactRouterDOM.Routes;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
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
        <Routes>
          {/* home screen */}
          <Route exact path="/" element={<Home notes={notes} />}>
            
            {/* note screen */}
            {notes.map((note, index) => (
              <Route path={note.name} key={index} element={<Note {...note} />}/>
            ))}
          
          </Route>
          {/* error screen */}
          <Route path="*" element={<Error />}/>
            
        </Routes>
      </main>
    </Router>
  );
};

export default App;
