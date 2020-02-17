import React, { Component } from "react";
import Axios from "../../Axios/AxiosInstance";
import Developer from "./Developer/Developer";
import "../../containers/Loader/Loader.css";

export class Developers extends Component {
  constructor(props) {
    super(props);
    this.state = { developers: "", isLoading: false };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    Axios.get("/developers.json")
      .then(response => {
        this.setState({ developers: response.data, isLoading: false });
      })
      .catch(error => {
        alert(error.response);
        this.setState({ isLoading: false });
      });
  }

  handleDelete(id) {
    this.setState({ isLoading: true });
    Axios.delete(`/developers/${id}.json`)
      .then(response => {
        this.componentDidMount();
        console.log(response);
      })
      .catch(error => {
        this.setState({ isLoading: false });
        alert(error.response);
        return error.response;
      });
  }
  // handleUpdate(id) {
  //   this.setState({ isLoading: true });
  //   Axios.delete(`/developers/${id}.json`)
  //     .then(response => {
  //       this.componentDidMount();
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       this.setState({ isLoading: false });
  //       alert(error.response);
  //       return error.response;
  //     });
  // }

  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <Developer
            developers={this.state.developers}
            delete={this.handleDelete}
          />
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
    );
  }
}

export default Developers;
