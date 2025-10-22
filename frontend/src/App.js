import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //notesが変数で、その中に代入する時にsetNotes()を使ったらできる
  const [notes,setNotes] = useState([]);
  const [text,setText] = useState("");
  const [editingIndex,setEditingIndex] = useState(null);
  const [editText,setEditText] = useState("");

  //立ち上げ時にメモ一覧を取得
  useEffect(() => {
    axios.get("/api/notes").then((res) => setNotes(res.data));
  })

  const addNote = () => {
    if(!text.trim()) return;
    axios.post("/api/notes",{text}).then(() => {
      //スプレッド構文 => 配列を分解する　["a","b"] => "a","b"
      setNotes([...notes,text]);
      setText("");
    })
  }

  const deleteNote = (index) => {
    axios.delete(`/api/notes/${index}`).then(() => {
      const newNotes = notes.filter((_,i) => i !== index);
      setNotes(newNotes);
    })
  }

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditText(notes[index]);
  }

  const saveEdit = async(index) => {
    if(!editText.trim()) return;
    await axios.put(`/api/notes/${index}`,{text:editText});
    setEditingIndex(null);
    setEditText("");
  }

  return (
    <div className="App">
      <h2>メモアプリ</h2>
      <input 
      value ={text}
      onChange={(e) => setText(e.target.value)} 
      placeholder='メモを入力'></input>
      <button onClick = {addNote}>追加</button>
      <ul>
        {notes.map((note,i) => (
          <li key={i}>
            {editingIndex === i ? (
              <>
              <input value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={async(e) =>{
                if(e.key === "Enter") await saveEdit(i);
                if(e.key === "Escape") setEditingIndex(null);
              }}/>
              <div className='buttonSet'>
              <button onClick={() => saveEdit(i)}>保存</button>
              <button onClick={() => setEditingIndex(null)}>キャンセル</button>
              </div>
              </>
            ):(
            <>
            {note}
            <div className='buttonSet'>
            <button onClick={() => startEdit(i)}>編集</button>
            <button onClick={() => deleteNote(i)}>削除</button>
            </div>
            </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
