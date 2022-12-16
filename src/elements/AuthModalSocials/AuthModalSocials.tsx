import React from 'react'

const AuthModalSocials = () => {
  return (
    <div className="auth_modal_socials">
      <div className="auth_modal_socials_buttons">
        <div className="auth_modal_socials_label">Увійти як користувач</div>
        <button className="button button_socials">
          <i className="facebookicon fa-brands fa-facebook-f"></i> Facebook
        </button>
        <button className="button button_socials button_space">
          <i className="googleicon fa-brands fa-google"></i> Google
        </button>
      </div>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default AuthModalSocials
