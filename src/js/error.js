const Link = window.ReactRouterDOM.Link;

export default function Error() {
  return (
    <section id="error">
      <h3 id="error-header">Page does not exist</h3>
      <Link to="/" id="error-return-link">
        Return to homepage
      </Link>
    </section>
  );
}
