import React from 'react';
import { useState } from 'react';
import Project from "./Project.json";
function ElementList() {
  const [filteredResults, setFilteredResults] = useState(Project);
  const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = Project.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(Project)
      }
  }
  return (
    <div>{Project.map((elem) =>{
        return <div class="card">
        <div class="card-body">
          <p class="text-left">{elem.title}<br/> This issue was created by {elem.author}</p>
        </div>
      </div>
    })}</div>
  )
}

export default ElementList