import React from "react"
import { graphql } from "gatsby";
import get from 'lodash/get'
import Img from "gatsby-image";
import styles from './blockText.module.css'
import base from '../pages/base.module.css'

const blockText = (props) => {
  const block = get(props, 'id')
  const images = get(props, 'id.images');

  return (
    <article className={styles.blocktext}>
      <header className={styles.blocktext__images}>
        {images.map((img, i) => <Img key={i} className="blocktext__img" alt={img.title} fluid={img.fluid}/>)}
      </header>
      <div className={styles.blocktext__body}>
        <h3 className={styles.blocktext__title}>{block.title}</h3>
        <p className={base.text}>{block.body.body}</p>
      </div>
    </article>
  )
}

export default blockText