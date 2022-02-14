import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from "./Project.json";
import DropDownItem from './DropDownItem';
import NewIssuePage from './NewIssuePage';
import Assignee from './Assignee';
import Header from "./Header"
function Navbar() {
  
  const [addrtype, setAddrtype] = useState(["Labels","Prachi","Pooja","Shubham"]);
  const [author, setAuthor] = useState(["Author","Prachi","Pooja","Shubham"]);
  const [assignee, setAssignee] = useState(["Assignee","Prachi","Pooja","Shubham"]);

  const Add = addrtype.map(Add => Add
  )
  const auth = author.map(i => i
    )
    const assi = assignee.map(elem => elem
      )
  const handleAddrTypeChange = (e) => console.log((addrtype[e.target.value]))
  const handleAuthTypeChange = (e) => console.log((author[e.target.value]))
  const handleAssiTypeChange = (e) => console.log((assignee[e.target.value]))
  const data=["Prachi","Pooja","Shubham"]
  const [allProjects, setallProjects] = useState([]);
  const [open, setOpen] = useState("dropdown");
  const [activeProject, setactiveProject] = useState(-1);
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);
  const [filteredResults, setFilteredResults] = useState(allProjects);
  const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = allProjects.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(allProjects)
    }
  }
  console.log(activeProject);
  return (
    <>
    <Header/>
    <div class="container">
      <div class="row">
        <div class="col-4 text-left p-3"><button type="button" class="btn btn-success ml-2" onClick={() => setModal(true)}>AddProject</button></div>
        <div class="col m-2 p-2"><input class="form-control" type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search Here...." aria-label="default input example"></input></div>
        <div class="col p-3"><select
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select p-2 " >
      {
        Add.map((address, key) => <option value={key}>{address}</option>)
      }
    </select ></div>
        <div class="col p-3"><select
      onChange={e => handleAuthTypeChange(e)}
      className="browser-default custom-select p-2 " >
      {
        auth.map((address, key) => <option value={key}>{address}</option>)
      }
    </select ></div>
        <div class="col p-3"><select
      onChange={e => handleAssiTypeChange(e)}
      className="browser-default custom-select p-2 " >
      {
        assi.map((address, key) => <option value={key}>{address}</option>)
      }
    </select ></div>
        <div class="col p-3"><button type="button" class="btn btn-success ml-2" onClick={() => setActive(true)}>Newissue</button></div>
      </div>

      <div class="row">
        <div class="col-4">
          {modal && <DropDownItem allProjects={allProjects} setallProjects={setallProjects} setModal={setModal} />}
          {console.log(`allProjects ${allProjects}`)}
          {allProjects.map((elem, i) => {
            return <div class="card">
              <div class="card-body">
                <p class="text-left" onClick={() => setactiveProject(i)}>{elem.title}<br /> This issue was created by {elem.author}</p>
              </div>
            </div>
          })}
        </div>
        <div class="col-8">
          {active && <NewIssuePage allProjects={allProjects} setallProjects={setallProjects} Project={activeProject} setActive={setActive} />}
          {console.log(`activeProject ${activeProject}`)}
          {console.log(JSON.stringify(allProjects[activeProject]))}
          {allProjects && (activeProject > -1) && allProjects[activeProject].issues.map((elem) => {
            return <div class="card">
              <div class="card-body">
                <p class="text-left">{elem.name}<br /> This issue was created by {elem.label}{elem.assignee}</p>
              </div>
            </div>
          })}
        </div>
      </div>


    </div>
    </>
  )
}

export default Navbar;