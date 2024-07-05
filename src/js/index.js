import App from "./app.js";
import notes from "./data.js";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App notes={notes} />);
