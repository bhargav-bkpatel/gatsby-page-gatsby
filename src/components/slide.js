import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './slide.module.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={` ${styles['slide']} ${projectStyles['slide']} ${
        styles[props.rootClassName]
      } `}
    >
      <div
        className={` ${styles['max-wdith']} ${projectStyles['max-content-container']} `}
      >
        <h1 className={` ${styles['text']} ${projectStyles['heading2']} `}>
          {props.heading}
        </h1>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  heading: 'Slide #1',
  rootClassName: '',
}

Slide.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
