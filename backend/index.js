const express = require("express");
const cors = require("cors");
const fs = require("fs");
const NOTES_FILE = "./notes.json";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//仮のDBとしましょう
// 初期読み込み
let notes = fs.existsSync(NOTES_FILE)
  ? JSON.parse(fs.readFileSync(NOTES_FILE, "utf-8"))
  : [];

// 保存関数
function saveNotes() {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

//新しいメモを追加する
app.post("/api/notes",(req,res) => {
    const newNote = req.body.text;
    if(newNote){
        notes.push(newNote);
        saveNotes();
        res.status(201).json({message:"メモを追加しました"});
        console.log(notes[0]);
    }else{
        res.status(400).json({error:"テキストがありません"});
    }
})

//全メモの取得
app.get("/api/notes",(req,res) => {
    res.json(notes);
})

//メモの削除
// 特定のメモを削除
app.delete("/api/notes/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);

  if (isNaN(index) || index < 0 || index >= notes.length) {
    return res.status(400).json({ error: "不正なインデックスです" });
  }

  // 削除処理
  const deletedNote = notes.splice(index, 1)[0];
  saveNotes();

  res.json({ message: "メモを削除しました", deleted: deletedNote });
});

//メモの更新
app.put("/api/notes/:index",(req,res) => {
    const index = parseInt(req.params.index,10);
    const updatedText = req.body.text;

    if(isNaN(index) || index < 0 || index >= notes.length){
        return res.status(400).json({error:"不正インデックス"});
    }
    if(!updatedText){
        return res.json.status(400).json({error:"更新テキストがありません"});
    }

    notes[index] = updatedText;
    saveNotes();

    res.json({message:"メモを更新しました",updated:updatedText});
})


app.listen(PORT,() => console.log("さーばーかいし"));