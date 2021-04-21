const Link = window.ReactRouterDOM.Link;

export default function Home({ notes }) {
  return (
    <div id="home">
      <nav id="nav">
        {notes.map((note, index) => (
          <Link to={"/" + note.name} key={index}>
            <span>{note.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
