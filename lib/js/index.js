import App from "./app.js";
import notes from "./data.js";

var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App, { notes: notes }));