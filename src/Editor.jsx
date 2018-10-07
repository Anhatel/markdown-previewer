import React from 'react';

function Editor({ text, handleChange }) {
  return (
    <div className="editor-container">
      <p>Editor</p>
      <textarea
        id="editor"
        value={text}        
        onChange={handleChange}
      />
    </div>
  );
}

export default Editor;
