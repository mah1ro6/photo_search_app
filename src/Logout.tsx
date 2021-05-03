import React from 'react'

interface PROPS {
  userLogout: () => Promise<void>
}

const Logout: React.FC<PROPS> = (props) => {
  return (
    <div className="right floated column">
      <button 
        className="ui inverted grey button"
        onClick={props.userLogout}
      >Log Out</button>
    </div>
  )
}

export default Logout
