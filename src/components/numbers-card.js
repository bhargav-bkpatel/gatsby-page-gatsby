import React from 'react'

import PropTypes from 'prop-types'

import styles from './numbers-card.module.css'

const NumbersCard = (props) => {
  return (
    <div className={styles['numbers-card']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <span className={styles['number']}>{props.number}</span>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

NumbersCard.defaultProps = {
  image_src: '/playground_assets/message-200h.png',
  text: 'sessions',
  image_alt: 'image',
  number: '2,148',
}

NumbersCard.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  number: PropTypes.string,
}

export default NumbersCard
