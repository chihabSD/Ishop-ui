import React from 'react'
import { Link } from 'react-router-dom'

const BottomLink = ({title, to, linkLable}) => {
  return (
    <div style={{ marginTop: "20px" }}>
    <p
      style={{
        // color: "grey",
        marginRight: "5px",
        fontSize: "1rem",
        marginTop: "30px",
      }}
    >
        {title}
      {/* You dont have an account ? */}
      <Link
        to={to}
        style={{
          textDecoration: "underline",
          color: "grey",
          marginLeft: "5px",
          fontSize: "1rem",
          marginTop: "30px",
          cursor: "pointer",
        }}
      >
        {linkLable}
      </Link>
    </p>
  </div>
  )
}

export default BottomLink