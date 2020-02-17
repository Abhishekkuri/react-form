import React from "react";
import Button from "../../../containers/Button/Button";
import "./Developer.css";

const Developer = props => {
  const developers = props.developers;
  // console.log(
  //   typeof developers,
  //   developers,
  //   typeof Object.keys(developers).map(key => developers[key]),
  //   Object.keys(developers).map(key => developers[key])
  // );

  function handleDelete(id, e) {
    props.delete(id);
  }

  // function handleUpdate(id,e) {
  //   props.update(id);
  // }

  return (
    <div className="dev-container">
      {Object.keys(developers)
        .map(key => {
          const developer = developers[key];
          developer["id"] = key;
          return developer;
        })
        .map(developer => {
          return (
            <div className="container-fluid" key={developer.id}>
              <div className="container-item">
                <h3> {developer.name}</h3>
                <div className="age">
                  <strong>Age :</strong> {developer.age}
                </div>
                <div className="age">
                  <strong>Gender :</strong> {developer.gender}
                </div>
                <div className="age">
                  <strong>
                    <div>Technologies:</div>
                  </strong>
                  {developer.technologies.map(technology => {
                    return <span key={technology}>{technology}, </span>;
                  })}
                </div>
                <div className="age">
                  <div>
                    <strong>Motivation:</strong>
                  </div>
                  {developer.motivation}
                </div>
                <div className="delete-button">
                  {/* <Button
                  action={(event)=>handleUpdate(developer.id,event)}
                  type={"button"}
                  title={"Primary"}
                  style={buttonStyle}
                /> */}
                  <Button
                    action={event => handleDelete(developer.id, event)}
                    type={"button"}
                    title={"Delete"}
                    style={buttonStyle}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Developer;
