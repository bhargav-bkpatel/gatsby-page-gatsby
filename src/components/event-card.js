import React from 'react'

import PropTypes from 'prop-types'

import styles from './event-card.module.css'

const EventCard = (props) => {
  return (
    <div className={styles['event-card']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['vertical-line']}></div>
      <div className={styles['container']}>
        <span className={styles['title']}>{props.title}</span>
        <span className={styles['text']}>{props.text}</span>
      </div>
    </div>
  )
}

EventCard.defaultProps = {
  title: 'Inbound Marketing Secrets',
  image_alt: 'image',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200',
}

EventCard.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default EventCard
