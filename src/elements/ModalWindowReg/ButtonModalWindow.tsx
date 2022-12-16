/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type entryProp = {
  entry: string
  isValid: any
}

const ButtonModalWindow = ({ entry, isValid }: entryProp) => {
  return (
    <>
      <button className="button button_auth_modal" disabled={isValid} type="submit">
        {entry}
      </button>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default ButtonModalWindow
