import React from 'react'

import styles from "./headerBlock.module.scss"

interface HeaderBlockProps {
  src?: string;
  children?: JSX.Element
}

export const HeaderBlock: React.FunctionComponent<HeaderBlockProps> = ({src, children}) => {
  return (
    <>
      <div className={styles.content}>
        {children ? children : <img alt="" src={src} className={styles.img}/>}
      </div>
      <div className={styles.ellipse} />
    </>
  )
}

export default HeaderBlock;
