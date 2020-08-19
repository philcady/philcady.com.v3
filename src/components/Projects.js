import React from "react"
import Modal from './Modal'
import useModal from './useModal'

const projArr = ['hello jeanine', 'hello navin']

export default function Projects() {
  const {isShowing, toggle} = useModal();
  return (
      <div className="projects-container">
        <Modal
          isShowing={isShowing}
          hide={toggle}
        >
          {projArr[1]}

        </Modal>
          <div className="project vw">
            <h1 className="title">VW</h1>
          </div>
          <div className="project penny-mac">
            <h1 className="title">Penny Mac</h1>
            <button className="button-default" onClick={toggle}>Show Modal</button>
          </div>
          <div className="project city-natl-bank">
            <h1 className="title">City National Bank</h1>
          </div>
      </div>
  )
}
