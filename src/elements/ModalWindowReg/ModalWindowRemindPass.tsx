/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import AuthModalSocials from 'src/elements/AuthModalSocials/AuthModalSocials'

import ButtonModalWindow from './ButtonModalWindow'

type remindePassProp = {
  openRemindePass: any
  setOpenRemindePass: any
  setOpen: any
}

interface IFormsValid {
  email: string
}

export const ModalWindowRemindPass = ({ openRemindePass, setOpenRemindePass, setOpen }: remindePassProp) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormsValid>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<IFormsValid> = (data: any) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <>
      <div
        className={`modal_holder animated ${openRemindePass ? 'show' : ''} `}
        onClick={() => setOpenRemindePass(false)}
      >
        <div className="modal_window" onClick={(e) => e.stopPropagation()}>
          <div className="modal_header">
            <div className="modal_heading">Вхід</div>
            <button className="modal_close" onClick={() => setOpenRemindePass(false)}>
              X
            </button>
          </div>
          <div className="modal_content">
            <div className="auth_modal">
              <form className="auth_modal_form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="reset_fieldset">
                  <div className="form_row">
                    <label className="form_label">Ел. пошта або телефон</label>
                    <input
                      {...register('email', {
                        required: 'Введено невірну адресу ел. пошти або номер телефону',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                          message: 'Введіть коректну ел. пошту або номер телефона',
                        },
                      })}
                      className="input input_email"
                      type="email"
                    />
                    {errors?.email && (
                      <p className="error_message">
                        <i className="error_icon fa-solid fa-triangle-exclamation"></i>
                        {errors?.email?.message}
                      </p>
                    )}
                  </div>

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Отримати тимчасовий пароль" isValid={!isValid} />
                    <button
                      className="button button_link_modal"
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenRemindePass(false)
                        setOpen(true)
                      }}
                    >
                      Я згадав свій пароль
                    </button>
                  </div>
                </fieldset>
                <span className="auth_modal_devider">або</span>
              </form>

              <AuthModalSocials />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
