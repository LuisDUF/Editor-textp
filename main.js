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
    const btnNormalTxt = document.getElementById('btnNormal');
    btnNormalTxt.onclick = function () {
        normalText();
        changeText();
    };
}

function changeText()
{
    const text = getSelectionText();
    const editor = document.getElementById('editor');
    const editorTxt = editor.value;
    if (editorTxt.includes(text))
    {
        editor.value=`${editorTxt.replace(text,"Hola")}`;
        alert("A "+ editorTxt + 'Hola: '+text);
    }
}

function normalText()
{
    currentMode = "Normal";
}

function boldText()
{
    currentMode = "Bold";
    
}

function italicText()
{
    currentMode = "Italic";
}

function normalText()
{
    currentMode = "Normal";
}