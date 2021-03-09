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
      <footer id="footer">
        <p>
          I created this website as a part of learning process. At first, I
          wrote several markdown files covering some javascript, git and npm
          topics, so I could quickly look into it if I need to. Some time later,
          I thought it would be nice to have all the notes easy accessible from
          a single website. And so I created this page.
        </p>
      </footer>
    </div>
  );
}
