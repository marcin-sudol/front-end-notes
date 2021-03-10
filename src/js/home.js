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
          While learning javascript and git, I wrote several markdown files, so
          I could quickly look into them if I need to. I also wrote down some
          npm commands that I was using. Some time later, I thought it would be
          nice to have all the notes easy accessible from a single webpage. So I
          created this page.
        </p>
      </footer>
    </div>
  );
}
