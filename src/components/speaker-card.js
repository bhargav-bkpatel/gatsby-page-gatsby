import React from 'react'

import PropTypes from 'prop-types'

import styles from './speaker-card.module.css'

const SpeakerCard = (props) => {
  return (
    <div className={styles['speaker-card']}>
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={styles['read-more-container']}>
          <span className={styles['hint']}>read more</span>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
          </svg>
        </div>
      </div>
      <span className={styles['first-name']}>{props.firstName}</span>
      <span className={styles['last-name']}>{props.lastName}</span>
      <span className={styles['text']}>{props.role}</span>
    </div>
  )
}

SpeakerCard.defaultProps = {
  firstName: 'Jonathan',
  lastName: 'carey',
  image_alt: 'image',
  role: 'brand manager @ pepsi',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

SpeakerCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image_alt: PropTypes.string,
  role: PropTypes.string,
  image_src: PropTypes.string,
}

export default SpeakerCard
