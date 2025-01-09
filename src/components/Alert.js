import React from 'react'

function ALert(props) {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {props.alert}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default ALert
