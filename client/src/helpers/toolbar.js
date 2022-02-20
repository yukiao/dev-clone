export const handleBoldButton = (textAreaRef, content, setContent) => {
  let startPos = textAreaRef.current.selectionStart;
  let endPos = textAreaRef.current.selectionEnd;
  let textToInsert = "**";

  let currentText = content;
  currentText =
    currentText.slice(0, startPos) +
    textToInsert +
    currentText.slice(startPos, endPos) +
    textToInsert +
    currentText.slice(endPos);
  setContent(currentText, function () {
    textAreaRef.current.focus();
    textAreaRef.current.setSelectionRange(
      startPos + 2,
      startPos + 2 + (endPos - startPos)
    );
  });
};

export const handleItalicButton = (textAreaRef, content, setContent) => {
  let startPos = textAreaRef.current.selectionStart;
  let endPos = textAreaRef.current.selectionEnd;
  let textToInsert = "_";

  let currentText = content;
  currentText =
    currentText.slice(0, startPos) +
    textToInsert +
    currentText.slice(startPos, endPos) +
    textToInsert +
    currentText.slice(endPos);
  setContent(currentText, function () {
    textAreaRef.current.focus();
    textAreaRef.current.setSelectionRange(
      startPos + 1,
      startPos + 1 + (endPos - startPos)
    );
  });
};

export const handleUnderlineButton = (textAreaRef, content, setContent) => {
  let startPos = textAreaRef.current.selectionStart;
  let endPos = textAreaRef.current.selectionEnd;

  let currentText = content;
  currentText =
    currentText.slice(0, startPos) +
    `<u>` +
    currentText.slice(startPos, endPos) +
    `</u>` +
    currentText.slice(endPos);
  setContent(currentText, function () {
    textAreaRef.current.focus();
    textAreaRef.current.setSelectionRange(
      startPos + 3,
      startPos + 3 + (endPos - startPos)
    );
  });
};

export const handleImageButton = (
  textAreaRef,
  content,
  setContent,
  imageContentUrl
) => {
  let startPos = textAreaRef.current.selectionStart;
  let endPos = textAreaRef.current.selectionEnd;

  let currentText = content;
  currentText =
    currentText.slice(0, startPos) +
    `![` +
    currentText.slice(startPos, endPos) +
    `](${imageContentUrl})\n` +
    currentText.slice(endPos);
  setContent(currentText, function () {
    textAreaRef.current.focus();
    textAreaRef.current.setSelectionRange(
      startPos + 2,
      startPos + 2 + (endPos - startPos)
    );
  });
};
