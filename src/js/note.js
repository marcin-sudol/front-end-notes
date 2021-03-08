const Link = window.ReactRouterDOM.Link;
const useState = React.useState;
const useEffect = React.useEffect;

export default function Note({ title, name }) {
  // inner html
  const [html, setHtml] = useState({ __html: "<p>Loading...</p>" });

  // load note
  useEffect(loadNote, []);

  // function for loading data
  function loadNote() {
    fetch(`./notes/${name}.md`)
      .then((response) => (response.ok ? response.text() : response.error()))
      .then((data) => {
        setHtml({ __html: marked(data, { breaks: true, gfm: true }) });
      })
      .catch(() => {
        setHtml({ __html: "<p>Error loading...</p>" });
      });
  }

  return (
    <article id="note">
      <header id="note-header">
        <h2>{title}</h2>
        <Link to="/" id="note-return-link">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </header>
      <div id="note-content" dangerouslySetInnerHTML={html}></div>
    </article>
  );
}
