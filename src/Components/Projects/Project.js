import React from 'react'
import store from "store";

function Project({data}) {
  // const [addProject,setAddProject] = useState(data);
  // con
  return (
    <div class="container">
    <div class="row">
      <div class="col text-left p-3">Projects</div>
      <div class="col-6 m-2"><input class="form-control" type="text"  placeholder="Search Projects Here...." aria-label="default input example"></input></div>
      <div class="col p-3">Labels</div>
      <div class="col p-3">Milestone</div>
      <div class="col p-3">Author</div>
      <div class="col p-3">Assignee</div>
      <div class="col m-2"><button type="button" class="btn btn-success">Newissue</button></div>
    </div></div>
  )
}

export default Project