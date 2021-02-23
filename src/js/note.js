const Link = window.ReactRouterDOM.Link;
const useState = React.useState;
const useEffect = React.useEffect;

export default function Note({ noteTitle }) {
  // state for inner html
  const [html, setHtml] = useState({ __html: "<p>Loading...</p>" });

  // fetch markdown file
  useEffect(() => {
    fetch(`./../notes/${noteTitle}.md`)
      .then((response) => (response.ok ? response.text() : response.error()))
      .then((data) => {
        setHtml({ __html: marked(data, { breaks: true, gfm: true }) });
      })
      .catch(() => {
        setHtml({ __html: "<p>Error loading...</p>" });
      });
  }, []);

  return (
    <div id="note-container">
      <header id="note-header">
        <h2>{noteTitle}</h2>
        <button>
          <Link to="/">Return to home</Link>
        </button>
      </header>
      <article id="note" dangerouslySetInnerHTML={html}></article>
    </div>
  );
}
