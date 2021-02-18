
// ----- FUNCTIONAL COMPONENT -----
const FunComponent = (props) => {
    return (
        <p>Subcomponent {props.value}</p>
    );
};





// ----- CLASS COMPONENT -----
class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        // ----- STATE FOR STATEFUL COMPONENT -----
        this.state = {
            value: 0,
            input: ''
        };

        // ----- BINDING METHODS -----
        this.handleChange = this.handleChange.bind(this);
    }

    // ----- PROP TYPES -----
    static propTypes = {
        title: PropTypes.string.isRequired,
        value: PropTypes.number,
        tools: PropTypes.array
    }

    // ----- DEFAULT PROPS -----
    static defaultProps = {
        title: 'Title',
        value: 1,
        tools: ['react']
    }

    // ----- COMPONENT DID MOUNT -----
    componentDidMount() {
        // ----- CALL FOR API -----
        // ----- ADD LISTENERS -----
        // window.addEventListener('keydown', function () { });
    }

    // ----- COMPONENT WILL UNMOUNT -----
    componentWillUnmount() {
        // ----- REMOVE LISTENERS -----
        // window.removeEventListener('keydown', function () { });
    }

    // ----- SHOULD COMPONENT UPDATE -----
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    // ----- METHODS -----
    handleChange(event) {
        let v = event.target.value;

        // ----- SET STATE -----
        this.setState((state, props) => ({
            value: state.value + props.value,
            input: v
        }));
    }

    // ----- RENDER -----
    render() {
        // ----- INLINE STYLES -----
        const styles = {
            border: "2px solid blue",
            fontSize: 20
        }

        return (
            <div>
                <h1 className="text-primary">My component</h1>
                <h2>{this.props.title + " " + this.props.value}</h2>
                <h3>Tools: {this.props.tools.join(", ")}</h3>
                <hr />
                <input type="text" onChange={this.handleChange} style={styles}></input>
                <span> {this.state.value} </span>
                <hr />
                <FunComponent value={1} />
            </div>
        );
    }
};





// ----- RENDER COMPONENT -----
ReactDOM.render(
    <MyComponent
        title='Template' value={4} tools={['jquery', 'bootstrap', 'react']} />,
    document.getElementById('content')
);

