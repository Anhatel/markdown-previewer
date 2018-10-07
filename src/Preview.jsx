import React from 'react';
import marked from 'marked';

function Preview({ rawMarkdown }) {
  return (
    <div className="preview-container">
      <p>Preview</p>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: rawMarkdown }}
      />
    </div>
  );
}

export default Preview;
