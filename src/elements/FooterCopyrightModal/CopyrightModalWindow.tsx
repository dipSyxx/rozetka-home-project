/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'

type propCopyrightModalWindow = {
  text: string
  content: string
  openCard: any
  setOpenCard: any
}

const CopyrightModalWindow = ({ text, content, openCard, setOpenCard }: propCopyrightModalWindow) => {
  return (
    <>
      <div
        className={`modal_holder_cards animated_cards ${openCard ? 'show_cards' : ''} `}
        onClick={() => setOpenCard(false)}
      >
        <div className="modal_window_cards" onClick={(e) => e.stopPropagation()}>
          <div className="modal_header_cards">
            <div className="modal_heading_cards">{text}</div>
            <button className="modal_close_cards" onClick={() => setOpenCard(false)}>
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
