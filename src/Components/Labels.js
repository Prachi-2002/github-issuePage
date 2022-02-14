import React from 'react'
import Label from "./Labels.json";
import { useState } from "react";
function Labels() {
    const [filteredResults, setFilteredResults] = useState(Label);
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = Label.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(Label)
        }
    }
  return (
    <div class='container'>
    <div class="row">
    <div class="col text-left p-3">Labels</div>
    <div class="col text-left p-3">Milestones</div>
    <div class="col-6 m-2"><input class="form-control" type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search ...." aria-label="default input example"></input></div>
    <div class="col m-2"><button type="button" class="btn btn-success" >Newissue</button></div>
  </div>
    <div>{filteredResults.map((elem) =>{
        return <div class="card ">
        <div class="card-body ml-3">
        <div class="btn-group d-block" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger ">{elem.labels}</button>
      </div>
      </div>
      </div>
    })}</div>
    </div>
  )
}

export default Labels