const Link = window.ReactRouterDOM.Link;
const useState = React.useState;
const useEffect = React.useEffect;

export default function Note({ title, name }) {
  const [html, setHtml] = useState({ __html: "<p>Loading...</p>" });
  const [fetchController, setFetchController] = useState(new AbortController());

  // on mounting load note, on unmounting abort loading
  useEffect(() => {
    loadNote();
    return abortLoading;
  }, []);

  function loadNote() {
    fetch(`./notes/${name}.md`, { signal: fetchController.signal })
      .then((response) => (response.ok ? response.text() : response.error()))
      .then((data) => {
        setHtml({ __html: marked(data, { breaks: true, gfm: true }) });
      })
      .catch(() => {
        if (!fetchController.signal.aborted) {
          setHtml({ __html: "<p>Error loading...</p>" });
        }
      });
  }

  function abortLoading() {
    fetchController.abort();
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
