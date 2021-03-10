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
        "While learning javascript and git, I wrote several markdown files, so I could quickly look into them if I need to. I also wrote down some npm commands that I was using. Some time later, I thought it would be nice to have all the notes easy accessible from a single webpage. So I created this page."
      )
    )
  );
}