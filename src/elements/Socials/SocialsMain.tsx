/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type SocialsLinksProps = {
  SocialsLinks: any
  socialsClass?: string
}

type SocialsLinksInfoProps = {
  id: number
  classSoc: string
  socIcon: string
  socPath: string
}

const SocialsMain = ({ SocialsLinks, socialsClass }: SocialsLinksProps) => {
  return (
    <div className={`socials_sidebar_block ${socialsClass}`}>
      <div className="socials_sidebar_heading">Ми в соціальних мережах</div>
      <ul className="socials_list">
        {SocialsLinks.map(({ id, classSoc, socIcon, socPath }: SocialsLinksInfoProps) => (
          <li className="socials_list_item" key={id}>
            <a className={`socials_link socials_${classSoc}`} href={socPath}>
              <i className={`fa-brands fa-${socIcon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default SocialsMain
