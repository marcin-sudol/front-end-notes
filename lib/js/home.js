var Link = window.ReactRouterDOM.Link;

export default function Home(_ref) {
  var notes = _ref.notes;

  return React.createElement(
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
    )
  );
}