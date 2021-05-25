import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import React from "react";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt();

const MarkdownEditor = props => {
  function handleEditorChange({ html, text }) {
    props.updatePostContent(text);
  }

  return (
    <div>
      <MdEditor
        style={{ height: "1000px", width: "auto" }}
        renderHTML={text => mdParser.render(text)}
        onChange={handleEditorChange}
        defaultValue={props.post.rawMarkdownBody}
      />
    </div>
  );
};

export default MarkdownEditor;
