import React, { Component } from 'react';
import './App.css';

export default class CheckboxComponent extends Component {
    CheckBoxChange(event) {
        this.props.CheckBoxChange(this.props.currentReference, this.props.state, event);
    }
    conditionCheckBoxChange(event) {
        this.props.conditionCheckBoxChange(this.props.currentReference, this.props.state, event);
    }

    render() {
            return (<div className="paddingTop-1">
                <div className="custom-control custom-radio custom-control-inline col">
                    <div className="text-info">Set compare Conditions</div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} defaultChecked id="file-c8-checkbox" className="custom-control-input" value="-D --LTYPE"  name="condition" ></input>
                        <label className="custom-control-label" htmlFor="file-c8-checkbox">Display Merged file</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c1-checkbox" className="custom-control-input" value="-i" name="condition" ></input>
                        <label className="custom-control-label" htmlFor="file-c1-checkbox">Ignore Case</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1 display-none">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c2-checkbox" className="custom-control-input" value="-E"  name="condition"></input>
                        <label className="custom-control-label" htmlFor="file-c2-checkbox">Ignore changes due to tab expansion</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1 ">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c3-checkbox" className="custom-control-input" value="-y"  name="condition"></input>
                        <label className="custom-control-label" htmlFor="file-c3-checkbox">Output in two columns</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1 display-none">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c4-checkbox" className="custom-control-input" value="-Z"  name="condition"></input>
                        <label className="custom-control-label" htmlFor="file-c4-checkbox">Ignore white space at line end</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1 display-none">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c5-checkbox" className="custom-control-input" value="-b"  name="condition"></input>
                        <label className="custom-control-label" htmlFor="file-c5-checkbox">Ignore changes in the amount of white space</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1 ">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c6-checkbox" className="custom-control-input" value="-w"  name="condition"></input>
                        <label className="custom-control-label" htmlFor="file-c6-checkbox">Ignore all white space</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline paddingLeft-1 display-none">
                        <input type="radio" onChange={this.conditionCheckBoxChange.bind(this)} id="file-c7-checkbox" className="custom-control-input" value="-B"  name="condition"></input>
                        <label className="custom-control-label" htmlFor="file-c7-checkbox">Ignore changes where lines are all blank</label>
                    </div>
                </div>
                <div className={"custom-control custom-checkbox custom-control-inline "+(this.props.show?"":"display-none") }>
                    <div className="custom-control custom-checkbox custom-control-inline paddingLeft-1">
                        <input type="checkbox" onChange={this.CheckBoxChange.bind(this)} className="custom-control-input" value="0" id="file-1-checkbox" defaultChecked name="example"></input>
                        <label className="custom-control-label" htmlFor="file-1-checkbox">Display Merged File</label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" onChange={this.CheckBoxChange.bind(this)} className="custom-control-input" value="1" id="file-2-checkbox" name="example"></input>
                        <label className="custom-control-label" htmlFor="file-2-checkbox">Display File1</label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" onChange={this.CheckBoxChange.bind(this)} className="custom-control-input" value="2" id="file-3-checkbox" name="example"></input>
                        <label className="custom-control-label" htmlFor="file-3-checkbox">Display File2</label>
                    </div>
                </div></div>);
    }
}