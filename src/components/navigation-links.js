import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <span
        className={` ${styles['text']} ${projectStyles['navigation-link']} `}
      >
        {props.link1}
      </span>
      <span
        className={` ${styles['text1']} ${projectStyles['navigation-link']} `}
      >
        {props.link2}
      </span>
      <span
        className={` ${styles['text2']} ${projectStyles['navigation-link']} `}
      >
        {props.link3}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'Speakers',
  link3: 'Agenda',
  link1: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
