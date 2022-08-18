import React from 'react'
import { Link } from 'react-router-dom'

const LinkWrapper = ({url, children}) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={url}>{children}</Link>
  )
}

export default LinkWrapper