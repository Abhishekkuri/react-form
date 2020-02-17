import React, { Component } from "react";
import Input from "../../containers/Input/Input";
import Button from "../../containers/Button/Button";
import CheckBox from "../../containers/CheckBox/CheckBox";
import Select from "../../containers/Select/Select";
import TextArea from "../../containers/TextArea/TextArea";
import { postDeveloperDetails } from "../../Axios/AxiosMethods";

import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDeveloper: {
        name: "",
        age: "",
        gender: "",
        technologies: [],
        motivation: ""
      },
      genderOptions: ["Male", "Female", "Others", "Undisclosed"],
      technologiesOptions: [
        "Front-End",
        "Back-End",
        "Full-Stack",
        "Middleware",
        "DevOps",
        "Others"
      ]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let dataToSend = this.state.newDeveloper;
    postDeveloperDetails(dataToSend);
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newDeveloper: {
        name: "",
        age: "",
        gender: "",
        technologies: [],
        motivation: ""
      }
    });
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newDeveloper: { ...prevState.newDeveloper, [name]: value }
    }));
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.newDeveloper.technologies.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newDeveloper.technologies.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [
        ...this.state.newDeveloper.technologies,
        newSelection
      ];
    }
    this.setState(prevState => ({
      newDeveloper: {
        ...prevState.newDeveloper,
        technologies: newSelectionArray
      }
    }));
  }

  handleTextArea(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newDeveloper: {
        ...prevState.newDeveloper,
        motivation: value
      }
    }));
  }

  render() {
    return (
      <div className="body">
        <form className="container" onSubmit={this.handleFormSubmit}>
          <div className="item">
            <Input
              type={"text"}
              title={"Full Name"}
              name={"name"}
              value={this.state.newDeveloper.name}
              placeholder={"Full Name"}
              handleChange={this.handleInput}
            />
          </div>
          <div className="item">
            <Input
              type={"number"}
              title={"Age"}
              name={"age"}
              value={this.state.newDeveloper.age}
              placeholder={"Age"}
              handleChange={this.handleInput}
            />
          </div>
          <div className="item">
            <Select
              title={"Gender"}
              name={"gender"}
              options={this.state.genderOptions}
              value={this.state.newDeveloper.gender}
              placeholder={"Select Gender"}
              handleChange={this.handleInput}
            />
          </div>
          <div className="item">
            <CheckBox
              title={"Technologies"}
              name={"technologies"}
              options={this.state.technologiesOptions}
              selectedOptions={this.state.newDeveloper.technologies}
              handleChange={this.handleCheckBox}
            />
          </div>
          <div className="item">
            <TextArea
              title={"Motivation"}
              rows={10}
              value={this.state.newDeveloper.motivation}
              name={"motivation"}
              handleChange={this.handleTextArea}
              placeholder={"Describe your Motivation for this Post"}
            />
          </div>
          <div className="item">
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              style={buttonStyle}
            />
            <Button
              action={this.handleClearForm}
              type={"secondary"}
              title={"Clear"}
              style={buttonStyle}
            />
          </div>
        </form>
      </div>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Form;
