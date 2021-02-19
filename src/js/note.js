const Link = window.ReactRouterDOM.Link;

export default function Note({ note }) {
  return (
    <div>
      <h2>{note}</h2>
      <button>
        <Link to="/">Return to home</Link>
      </button>
    </div>
  );
}
