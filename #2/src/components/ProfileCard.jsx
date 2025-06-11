import React from 'react'

const cardStyle = {
    border:"1px solid black",
    padding:"1em",
    margin:"1em"
}

//Propsで情報を受け取る
const ProfileCard = ({name,age,bio}) => {
  return (
    <div style={cardStyle}>
        <h2>名前：{name}</h2>
        <p>年齢：{age}</p>
        <p>紹介：{bio}</p>
    </div>
  )
}

export default ProfileCard