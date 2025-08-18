import React from "react";
import "./Sidebar.scss";
import type { Note } from "../types/typeAll";

type Props = {
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
  activeNote: string;
  setActiveNote: (id: string) => void;
  notes: Note[];
};

const Sidebar = ({
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  notes,
}: Props) => {
  const soredNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note.</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {soredNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              {/* ページリロードの際に発火しないように */}
              <button onClick={() => onDeleteNote(note.id)}>delete</button>
            </div>
            <p>{note.content}</p>
            <small>last update:{note.modDate}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
