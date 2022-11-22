import React from 'react'

export default function UserInfo(props) {
  return (
    <div>
      <div className="personal-info">
          <img className="pfp" src="" alt="Author's profile pic" />
          <p className="username">{props.user.name}</p>
        </div>
    </div>
  )
}
