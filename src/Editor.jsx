import React from 'react';

function Editor({ handleChange }) {
  return (
    <textarea
      id="editor"
      onChange={handleChange}
    >
    </textarea>
  );
}

export default Editor;
