import App from "./app.js";
import notes from "./data.js";

ReactDOM.render(React.createElement(App, { notes: notes }), document.getElementById("root"));