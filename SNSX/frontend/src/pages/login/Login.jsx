import React, { useState } from 'react'
import "./Login.css";

const Login = () => {

    const [showModal,setShowModal] = useState(false);

  return (
    <div className='loginWrapper'>
      <div className="loginLeft">
        <h1 className="logo">X</h1>
      </div>
      <div className="loginRight">
        <h1 className="mainTitle">すべての話題が、ここに。</h1>
        <h2 className="subTitle">今すぐ参加しましょう。</h2>

        <form action="" className="loginForm">
            <input type="email" placeholder='メールアドレス' required />
            <input type="password" placeholder='パスワード' required />
            <button className="loginSubmit">ログイン</button>
        </form>

        <div className="separator">または</div>

        <button className="createAccountBtn" onClick={() => setShowModal(true)}>アカウントを作成</button>
      </div>

        {showModal && (
            <div className="modalOverlay">
                <div className="modalWrapper">
                    <button className='modalClose' onClick={() => setShowModal(false)}>
                        x
                    </button>

                    <h2>X</h2>
                    <form action="" className="modalForm">
                        <input type="text" placeholder='ユーザー名' required/>
                        <input type="email" placeholder='メールアドレス' required />
                        <input type="password" placeholder='パスワード' required />
                        <button className="modalSubmit">登録する</button>
                    </form>
                </div>
            </div>
        )}

    </div>



  )
}

export default Login
