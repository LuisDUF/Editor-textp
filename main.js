function getSelectionText() {
  let text = "";

  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }

  return text;
}

let currentMode = "Normal";

window.onload = function () {
  const btnItalicTxt = document.getElementById("btnBold");
  const btnBoldTxt = document.getElementById("btnItalic");

  addEventListener("keypress", (event) => {
    const input = String.fromCharCode(event.keyCode);
    document.getElementById("editor").innerHTML =
      document.getElementById("editor").innerHTML + input;
  });

  btnItalicTxt.onclick = function () {
    boldText();
    changeText();
  };

  btnBoldTxt.onclick = function () {
    italicText();
    changeText();
  };
};

function changeText() {
  const text = getSelectionText();
  const editor = document.getElementById("editor");
  const editorTxt = editor.innerHTML;

  if (editorTxt.includes(text)) {
    switch (currentMode) {
      case "Normal":
        editor.innerHTML = editorTxt.replace(text, `<p>${text}</p>`);
        break;
      case "Bold":
        editor.innerHTML = editorTxt.replace(text, `<b>${text}</b>`);
        break;
      case "Italic":
        editor.innerHTML = editorTxt.replace(text, `<i>${text}</i>`);

        break;
    }
    
  }
}

function normalText() {
  currentMode = "Normal";
}

function boldText() {
  currentMode = "Bold";
}

function italicText() {
  currentMode = "Italic";
}

