import React from 'react'
// import PropTypes from 'prop-types'

const ProfileInfo = (props) => {
 const { link } = props

 return (
  <div>
   <div className={link}></div>
   <div>avt + description</div>
  </div>
 )
}

export default ProfileInfo

// ProfileInfo.propTypes = {
//  link: PropTypes.string
// }
