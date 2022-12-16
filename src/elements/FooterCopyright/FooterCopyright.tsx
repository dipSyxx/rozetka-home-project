import React from 'react'

import CopyrightText from './CopyrightText'
import PaymentMastercard from './PaymentMastercard'
import PaymentVisa from './PaymentVisa'

const FooterCopyright = () => {
  return (
    <>
      <div className="copyright_block">
        <div className="copyright_payments">
          <ul className="payments_buttons">
            <PaymentMastercard />
            <PaymentVisa />
          </ul>
        </div>
        <CopyrightText />
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default FooterCopyright
