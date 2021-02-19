import Error from "./error.js";

const App = ({ notes }) => {
  return (
    <React.Fragment>
      <header id="app-header">
        <h1>
          <i className="fas fa-pencil-alt"></i> Front-End Notes
        </h1>
      </header>
      <Error />
    </React.Fragment>
  );
};

export default App;
