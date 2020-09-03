import React from "react"
import Modal from './Modal'
import useModal from './useModal'
import cardData from './cardData'
import Card from './Card'

export default function Projects() {

  const card = cardData.map(cards => <Card key={cards.id} title={cards.title} />)
  const {isShowing, toggle} = useModal();

  return (
      <div className="projects-container">
        <Modal
          isShowing={isShowing}
          hide={toggle}
        >
          {
            card
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
