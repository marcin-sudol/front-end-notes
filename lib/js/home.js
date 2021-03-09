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
  );
}