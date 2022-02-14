import React from 'react';
import {useState} from"react";

function NewIssuePage(props) {
  // console.log(props.)
  console.log(props);
  const[issue,setIssue] = useState({name:"",labels:[],assignee:[]});
  const[issueName,setIssueName] = useState("");
  const[issueLabel,setIssueLabel] = useState([]);
  const[issueAssignee,setIssueAssignee] = useState([]);
  let NewProjects = props.allProjects;
  const issueHandler = (e) => {
    e.preventDefault();
    console.log(NewProjects);
    // console.log(NewProjects.issues);
    console.log(`New issue ${NewProjects[props.Project]}`);
    const updatedProjectdata =props.allProjects.map((item,i)=>{if(i===props.Project){
      let upitem = item;
      console.log(upitem);
      upitem.issues= [...upitem.issues,issue];
      console.log(`upitem ${JSON.stringify(upitem.issues)}`);
      console.log(issue);
      console.log(`item ${upitem}`)
      return upitem;
    }else{
      return item;
    }})
    // const updatedProjectdata = NewProjects[props.Project].issues.push(issue);
  
    console.log(`updatedProjectdata ${JSON.stringify(updatedProjectdata)}`);
    props.setallProjects(NewProjects);
    props.setActive(false);
  }
  return (
    <form className="row g-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Issue title</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
          setIssue({ ...issue, name: e.target.value })
        }} placeholder="Enter Your Issue Title Here" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Issue Label</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
          setIssue({ ...issue, labels: [...issue.labels,e.target.value] })
        }} placeholder="Enter Your Issue Label Here" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Issue Assignee</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => {
         setIssue({ ...issue, assignee: [...issue.assignee,e.target.value]  })
        }} placeholder="Enter Your Issue Assignee Here" />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary mb-3" onClick={issueHandler}>Add Issue</button>
      </div>
    </form>
  )
}

export default NewIssuePage