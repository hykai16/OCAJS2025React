import React from "react";
import "./Main.scss";
import type { Note } from "../types/typeAll";
import Markdown from "react-markdown";

type Props = {
  activeNote?: Note;
  onUpdateNote: (updatedNote: Note) => void;
};

type EditableFields = "title" | "content";

const Main = ({ activeNote, onUpdateNote }: Props) => {
  const onEditNote = (key: EditableFields, value: string) => {
    if (!activeNote) return;
    onUpdateNote({
      ...activeNote,
      [key]: value, //動的に指定するときは[]をつける
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">Note is not selected</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="please write text"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">
          <Markdown>{activeNote.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Main;
