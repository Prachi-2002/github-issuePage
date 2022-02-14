import React from 'react'
import { useState } from 'react'

function Label(props) {
    const[project,setProject] = useState("");
    const[label,setLabel] = useState("");

  return (
    <form className="row g-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Project Title</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
          setProject(e.target.value)
        }} placeholder="Enter Your Project Title Here" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Label</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
          setLabel(e.target.value)
        }} placeholder="Enter Your Project Title Here" />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary mb-3" onClick={issueHandler}>Add Label</button>
      </div>
    </form>
  )
}

export default Label