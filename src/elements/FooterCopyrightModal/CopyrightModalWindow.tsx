/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type CopyrightModalWindowProps = {
  text: string
  content: string
  openCard: any
  setOpenCard: any
}

const CopyrightModalWindow = ({ text, content, openCard, setOpenCard }: CopyrightModalWindowProps) => {
  const handlerCloseCardWindow = () => {
    setOpenCard(false)
  }

  const handlerStopPropagationCardWindow = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handlerCloseXCardWindow = () => {
    setOpenCard(false)
  }

  return (
    <>
      <div
        className={`modal_holder_cards animated_cards ${openCard ? 'show_cards' : ''} `}
        onClick={handlerCloseCardWindow}
      >
        <div className="modal_window_cards" onClick={handlerStopPropagationCardWindow}>
          <div className="modal_header_cards">
            <div className="modal_heading_cards">{text}</div>
            <button className="modal_close_cards" onClick={handlerCloseXCardWindow}>
              X
            </button>
          </div>
          <div className="modal_content_cards">
            <p className="modal_content_text">{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default CopyrightModalWindow
