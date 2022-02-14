import React from 'react'
import { useState } from 'react';


function DropDownItem(props) {
  console.log(props);
  const [project, setProject] = useState({ title: "", des: "", issues: [] });
  const SubmitHandler = (e) => {
    e.preventDefault();
    props.setallProjects([...props.allProjects, project]);
    props.setModal(false);
  }
  return (

    <form className="row g-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Project Title</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
          setProject({ ...project, title: e.target.value })
        }} placeholder="Enter Your Project Title Here" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Description</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
          setProject({ ...project, des: e.target.value })
        }} placeholder="Enter Label Here" />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary mb-3" onClick={SubmitHandler}>Add Project</button>
      </div>
    </form>
  )
}

export default DropDownItem