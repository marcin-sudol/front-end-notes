import Note from "./note.js";
import Error from "./error.js";

var Router = window.ReactRouterDOM.BrowserRouter;
var Switch = window.ReactRouterDOM.Switch;
var Link = window.ReactRouterDOM.Link;
var Route = window.ReactRouterDOM.Route;

var App = function App(_ref) {
  var notes = _ref.notes;

  return React.createElement(
    Router,
    null,
    React.createElement(
      "header",
      { id: "app-header" },
      React.createElement(
        "h1",
        null,
        React.createElement("i", { className: "fas fa-pencil-alt" }),
        " Front-End Notes"
      )
    ),
    React.createElement(
      Switch,
      null,
      React.createElement(
        Route,
        { exact: true, path: "/" },
        notes.map(function (note, index) {
          return React.createElement(
            "button",
            { key: index },
            React.createElement(
              Link,
              { to: "/" + note },
              note
            )
          );
        })
      ),
      notes.map(function (note, index) {
        return React.createElement(
          Route,
          { path: "/" + note, key: index },
          React.createElement(Note, { note: note })
        );
      })
    )
  );
};

export default App;