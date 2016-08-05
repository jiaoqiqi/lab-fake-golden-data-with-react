const App = React.createClass({
    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },

    addElement: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },

    deleteElement: function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements});
    },

    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            {this.props.children && React.cloneElement(this.props.children, {
                elements: this.state.elements,
                onAdd: this.addElement,
                onDelete: this.deleteElement
            })}

        </div>;
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/Previewer">
                <button>Previewer</button>
            </ReactRouter.Link>
            <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
            <Right onAdd={this.props.onAdd}/>
        </div>;

    }
});

const Left = React.createClass({
    remove: function (index) {
        this.props.onDelete(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/>
                <button onClick={this.remove.bind(this, index)}>X</button>
            </div>;
        });

        return <div>
            {elements}
        </div>
    }
});

const Right = React.createClass({
    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element);
    },
    render: function () {
        return <div>
            <input type="radio" name="element" value="text"/>Text
            <input type="radio" name="element" value="date"/>Date
            <button onClick={this.add}>+</button>
        </div>
    }
});

const Previewer = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/>
            </div>;
        });
        return <div>
            <ReactRouter.Link to="/">
                <button>Edit</button>
            </ReactRouter.Link>
            {elements}
            <button>Submit</button>
        </div>;
    }
});


ReactDOM.render(<ReactRouter.Router>
    <ReactRouter.Route path="/" component={App}>
        <ReactRouter.IndexRoute component={Editor}/>
        <ReactRouter.Route path="Previewer" component={Previewer}/>
    </ReactRouter.Route>
</ReactRouter.Router>, document.getElementById('content'));