import React from "react"
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styles from './blockText.module.css'
import base from '../pages/base.module.css'

const blockText = ({ id }) => {
  const block = id;
  const images = id.images;

  return (
    <article className={styles.blocktext}>
      <header className={styles.blocktext__images}>
        {images.map((img, i) => <Img key={i} className="blocktext__img" alt={img.title} fluid={img.fluid}/>)}
        {images.map((img, i) => <Img key={i} className="blocktext__img" alt={img.title} fluid={img.fluid}/>)}
      </header>
      <div className={styles.blocktext__body}>
        <h3 className={styles.blocktext__title}>{block.title}</h3>
        <p className={base.text}>{block.body.body}</p>
      </div>
    </article>
  )
}

blockText.propTypes = {
  id: PropTypes.object.isRequired
};

export default blockText