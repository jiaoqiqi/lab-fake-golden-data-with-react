class App extends React.component{
    constructor(props){
        super(props);
        this.state={
            forms:[],
            flag:true
        }
    }

    addText(){
        this.setState(function () {
            let forms = this.state.forms;
            forms.push(0);
            let index = this.state.index++;
            return {forms,index};
        })
    }

    addDate(){
        this.setState(function(){
            let forms = this.state.forms;
            forms.push(1);
            let index = this.state.index++;
            return {forms,index};
        })
    }

    deleteForm(){
        this.setState(function () {
            let forms = this.state.forms.splice(index,1);
            return forms;
        })
    }

    choosePage(){
        this.setState({
            flag : !this.state.forms
        })
    }

    render(){
        if(this.state.flag){
            return(
                <div>
                    <div className="preview">
                        <div className="btn-group btn-group-lg " role="group">
                            <button type="button"  onClick={() => {choosePage()}}>预览</button>
                        </div>
                    </div>
                    <div class = "row">
                        <div>
                            {this.state.forms.map((form,index) => {
                                if(form === 0){
                                    return(
                                        <div>
                                            <div className=" select">
                                                <textarea type="text"/>
                                                <button onClick={()=>this.deleteForm(index)}>delete</button>
                                            </div>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div>
                                            <div className="selete">
                                                <input type="date"/>
                                                <button onClick={() => this.deleteForm(index)}>delete</button>

                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div>
                            <div>
                                <button onClick={() => this.addText()}>文本框</button>
                            </div>

                            <div>
                                <button onClick={()=> this.addDate()}>日期</button>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }else{
            return <div>
                <div>
                    <button type="button" onClick={() => this.choosePage()}>编辑</button>
                </div>
                <div>
                    {
                        this.state.forms.map((form,index) => {
                            if(form === 0){
                                return <div>
                                    <div className="select container">
                                        <textarea type="text"/>
                                    </div>
                                </div>
                            }else{
                                <div>
                                    <div className="select container">
                                        <input type="date"/>
                                    </div>
                                </div>
                            }
                        })
                    }
                    <div>
                        <button onClick={()=> this.choosePage()}>提交</button>
                    </div>
                </div>
            </div>
        }
    }
}

ReactDOM.render(<App />,
    document.getElementById('fake-golden-data-with-react'));