import React from "react"
import Modal from './Modal'
import useModal from './useModal'

const projArr = [
  {id:1, title: 'VW', thumb: '../static/media/vw_beetle.png', alt:'VW Beetle'},
  {id:2, title: 'Penny Mac', thumb: '../static/media/penny_mac.71973829.png', alt: 'Penny Mac'},
]

export default function Projects() {
  const {isShowing, toggle} = useModal();

  return (
      <div className="projects-container">
        <Modal
          isShowing={isShowing}
          hide={toggle}
        >
          {
            <>
              <h1>{projArr[1].title}</h1>
              <img src={projArr[1].thumb} alt={projArr[1].alt} />
            </>
          }

        </Modal>
          <div className="project vw" onClick={toggle}>
          </div>
          <div className="project penny-mac" onClick={toggle}>
          </div>
          <div className="project city-natl-bank" onClick={toggle}>
          </div>
      </div>
  )
}
