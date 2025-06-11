import React, { useState } from 'react'
import ProfileCard from './ProfileCard'

//メンバーの情報を配列＆オブジェクトでまとめる
const people = [
    {id:1,name:"山田太郎",age:32,bio:"いつも元気"},
    {id:2,name:"山田次郎",age:32,bio:"いつも陽気"},
    {id:3,name:"山田三郎",age:32,bio:"いつも勝気"},
]

const nameStyle = 
{
    cursor:"pointer",
    textAlign:"center",
    fontSize:"2rem"
}

const MemberList = () => {
    const [selectedId,setSelectedId] = useState(null);
    //名前がクリックされたときに、selectedIdが更新されて、
    // コンポーネントが再レンダリングされる
    const selectedPerson = people.find(person => person.id === selectedId);

    //メンバーリストをmapメソッドで展開
    //データの数だけコンポーネントを表示したいときに使うよ
  return (
    <div>
        <h2>名簿一覧</h2>
        {people.map(person => (
            <p key={person.id} 
            style={nameStyle} 
            onClick={() => setSelectedId(person.id)}>
                {person.name}
                </p>
        ))}
        {/* selectedPersonが存在するなら */}
        {/* && は左側がtrueのときだけ右側を評価 */}
        {selectedPerson && <ProfileCard 
        name={selectedPerson.name} age = {selectedPerson.age} bio={selectedPerson.bio}/>}
    </div>
  )
}

export default MemberList