var Link = window.ReactRouterDOM.Link;

export default function Note(_ref) {
  var note = _ref.note;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      note
    ),
    React.createElement(
      "button",
      null,
      React.createElement(
        Link,
        { to: "/" },
        "Return to home"
      )
    )
  );
}