class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            flag: true
        }
    }

    addText() {
        this.setState(function () {
            let forms = this.state.forms;
            forms.push(0);
            let index = this.state.index++;
            return {forms, index};
        })
    }

    addDate() {
        this.setState(function () {
            let forms = this.state.forms;
            forms.push(1);
            let index = this.state.index++;
            return {forms, index};
        })
    }

    deleteForm(index) {
        this.setState(function () {
            let forms = this.state.forms.splice(index, 1);
            return forms;
        })
    }
    choosePage() {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        if (this.state.flag) {
            return (
                <div>
                    <div className="preview">
                        <div  role="group">
                            <button type="button"  onClick={()=>this.choosePage()}>预览</button>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            {this.state.forms.map((form, index)=> {
                                if (form === 0) {
                                    return (
                                        <div>
                                            <div className=" select">
                                                <textarea type="text"/>
                                                <button onClick={()=>this.deleteForm(index)}>delete</button>
                                            </div>

                                        </div>
                                    )
                                } else {
                                    return (

                                        <div>
                                            <div className=" select">
                                                <input type="date"/>
                                                <button onClick={()=>this.deleteForm(index)}>delete</button>
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                        </div>
                        <div className="col-md-4 select">
                            <div role="group">
                                <button type="button"  onClick={()=>this.addText()}>
                                    文本框
                                </button>
                            </div>
                            <div  role="group">
                                <button type="button"  onClick={()=>this.addDate()}>
                                    日期选择框
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="preview">
                    <div  role="group">
                        <button type="button" onClick={()=>this.choosePage()}>编辑</button>
                    </div>
                    <div>
                        {this.state.forms.map((form, index)=> {
                            if (form === 0) {
                                return (
                                    <div>
                                        <div className=" select container">
                                            <textarea type="text"/>

                                        </div>

                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        <div className=" select container">
                                            <input type="date"/>

                                        </div>

                                    </div>

                                )
                            }
                        })}
                        <div role="group">
                            <button type="button" className="btn btn-success" onClick={()=>this.choosePage()}>提交</button>

                        </div>
                    </div>
                </div>

            )
        }
    }
}

ReactDOM.render(<App />,
    document.getElementById('fake-golden-data-with-react'));