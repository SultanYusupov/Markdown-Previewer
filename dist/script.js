//import React, { useState } from "https://cdn.skypack.dev/react";
const { useState, useEffect } = React;

marked.setOptions({
  breaks: true });

const renderMarkdown = new marked.Renderer();

const MarkdownPreviewer = () => {
  const [editState, bigEdit] = useState(false);
  const [previewState, bigPreview] = useState(false);
  const [text, setText] = useState("");
  const handleToggle1 = () => {
    bigPreview(!previewState);
  };
  const handleToggle2 = () => {
    bigEdit(!editState);
  };
  const handleChange = event => {
    setText(event.target.value);
  };
  useEffect(() => {
    setText(placeholder);
  }, []);
  {
    /*передаём вторым аргументом пустой массив, чтобы сбросить эффект только один раз. React посчитает, что эффект не зависит от каких-либо значений из пропсов или состояния и поэтому не будет выполнять повторных запусков эффекта. При передаче пустого массива, состояние внутри эффекта всегда будет иметь значения, присвоенные им изначально*/
  }
  return /*#__PURE__*/(
    React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
    React.createElement("div", {
      className:
      editState && !previewState ?
      "hide" :
      !editState && previewState ?
      "bigSize" :
      "editWrap" }, /*#__PURE__*/


    React.createElement("div", { className: "head" }, /*#__PURE__*/
    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement("i", { className: "fab fa-free-code-camp", title: "no-stack-dub-sack" }), "Edit"), /*#__PURE__*/


    React.createElement("i", {
      className:
      previewState ? "fas fa-compress-alt" : "fa fa-arrows-alt",

      onClick: handleToggle1 })), /*#__PURE__*/


    React.createElement("textarea", { id: "editor", rows: "50", cols: "30", onChange: handleChange },
    placeholder)), /*#__PURE__*/



    React.createElement("div", { className: !editState ? "previewWrap" : "bigSize" }, /*#__PURE__*/
    React.createElement("div", { className: "head" }, /*#__PURE__*/
    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement("i", { className: "fab fa-free-code-camp", title: "no-stack-dub-sack" }), "Previewer"), /*#__PURE__*/


    React.createElement("i", {
      className: editState ? "fas fa-compress-alt" : "fa fa-arrows-alt",
      onClick: handleToggle2 })), /*#__PURE__*/


    React.createElement("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: marked(text, { renderer: renderMarkdown }) } }))));





};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![CodePen Logo](https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png)
`;
// ====================
ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("app"));