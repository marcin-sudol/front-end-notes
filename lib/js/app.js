import Error from "./error.js";

var App = function App(_ref) {
  var notes = _ref.notes;

  return React.createElement(
    React.Fragment,
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
    React.createElement(Error, null)
  );
};

export default App;