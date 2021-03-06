var Link = window.ReactRouterDOM.Link;

export default function Error() {
  return React.createElement(
    "section",
    { id: "error" },
    React.createElement(
      "h3",
      { id: "error-header" },
      "Page not found"
    ),
    React.createElement(
      Link,
      { to: "/", id: "error-return-link" },
      "Return to homepage"
    )
  );
}