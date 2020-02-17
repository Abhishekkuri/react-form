import Axios from "../Axios/AxiosInstance";

export const postDeveloperDetails = data => {
  Axios.post("/developers.json", data)
    .then(response => {
      console.log(response);
      alert("Developer's Details saved Successfully");
    })
    .catch(error => {
      alert(error.response);
    });
};

export const deleteDeveloper = id => {};
