import React from "react"
import ArrowIcon from "../icons/arrow.svg"

export default function Projects() {
  return (
    <ArrowIcon />
    <div className="projects-container">
      <div className="project vw">
        <h1 className="title">VW</h1>
      </div>
      <div className="project penny-mac">
        <h1 className="title">Penny Mac</h1>
      </div>
      <div className="project city-natl-bank">
        <h1 className="title">City National Bank</h1>
      </div>
    </div>
    <ArrowIcon />
  )
}
