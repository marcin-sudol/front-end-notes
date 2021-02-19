var Link = window.ReactRouterDOM.Link;

var Error = function Error() {
  return React.createElement(
    "div",
    null,
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
};

export default Error;