var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Link = window.ReactRouterDOM.Link;
var useState = React.useState;
var useEffect = React.useEffect;

export default function Note(_ref) {
  var title = _ref.title,
      name = _ref.name;

  var _useState = useState({ __html: "<p>Loading...</p>" }),
      _useState2 = _slicedToArray(_useState, 2),
      html = _useState2[0],
      setHtml = _useState2[1];

  var _useState3 = useState(new AbortController()),
      _useState4 = _slicedToArray(_useState3, 2),
      fetchController = _useState4[0],
      setFetchController = _useState4[1];

  // on mounting load note, on unmounting abort loading


  useEffect(function () {
    loadNote();
    return abortLoading;
  }, []);

  function loadNote() {
    fetch("./notes/" + name + ".md", { signal: fetchController.signal }).then(function (response) {
      return response.ok ? response.text() : response.error();
    }).then(function (data) {
      setHtml({ __html: marked(data, { breaks: true, gfm: true }) });
    }).catch(function () {
      if (!fetchController.signal.aborted) {
        setHtml({ __html: "<p>Error loading...</p>" });
      }
    });
  }

  function abortLoading() {
    fetchController.abort();
  }

  return React.createElement(
    "article",
    { id: "note" },
    React.createElement(
      "header",
      { id: "note-header" },
      React.createElement(
        "h2",
        null,
        title
      ),
      React.createElement(
        Link,
        { to: "/", id: "note-return-link" },
        React.createElement("i", { className: "fas fa-arrow-left" })
      )
    ),
    React.createElement("div", { id: "note-content", dangerouslySetInnerHTML: html })
  );
}