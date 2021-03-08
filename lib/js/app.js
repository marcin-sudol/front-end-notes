var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Note from "./note.js";
import Error from "./error.js";
var Router = window.ReactRouterDOM.HashRouter;
var Switch = window.ReactRouterDOM.Switch;
var Link = window.ReactRouterDOM.Link;
var Route = window.ReactRouterDOM.Route;
var useState = React.useState;
var useEffect = React.useEffect;

var App = function App(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      notes = _useState2[0],
      setNotes = _useState2[1];

  // initially set notes


  useEffect(function () {
    setNotes(props.notes.map(function (note) {
      return {
        title: note.split("-").join(" "),
        name: note
      };
    }));
  }, []);

  return React.createElement(
    Router,
    null,
    React.createElement(
      "header",
      { id: "app-header" },
      React.createElement(
        "h1",
        null,
        React.createElement(
          Link,
          { to: "/" },
          "Front-End Notes"
        )
      )
    ),
    React.createElement(
      "main",
      { id: "app-content" },
      React.createElement(
        Switch,
        null,
        React.createElement(
          Route,
          { exact: true, path: "/" },
          React.createElement(
            "div",
            { id: "home" },
            React.createElement(
              "nav",
              { id: "nav" },
              notes.map(function (note, index) {
                return React.createElement(
                  Link,
                  { to: "/" + note.name, key: index },
                  React.createElement(
                    "span",
                    null,
                    note.title
                  )
                );
              })
            ),
            React.createElement(
              "footer",
              { id: "footer" },
              React.createElement(
                "p",
                null,
                "I created this website as a part of learning process. At first, I wrote several markdown files covering some javascript, git and npm topics, so I could quickly look into it if I need to. Some time later, I thought it would be nice to have all the notes easy accessible from a single website. And so I created this page."
              )
            )
          )
        ),
        notes.map(function (note, index) {
          return React.createElement(
            Route,
            { path: "/" + note.name, key: index },
            React.createElement(Note, note)
          );
        }),
        React.createElement(
          Route,
          { path: "*" },
          React.createElement(Error, null)
        )
      )
    )
  );
};

export default App;