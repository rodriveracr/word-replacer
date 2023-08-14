function getReplacements() {
    const rows = document.querySelectorAll('.replacementRow');
    let replacements = {};

    rows.forEach(row => {
        const keyword = row.querySelector('.keyword').value;
        const replacement = row.querySelector('.replacement').value;
        replacements[keyword] = replacement;
    });

    return replacements;
}

function replaceWords() {
    const inputText = document.getElementById('inputText').value;
    const replacements = getReplacements();

    let outputText = inputText;

    for (let key in replacements) {
        const regex = new RegExp(key, 'gi');
        outputText = outputText.replace(regex, replacements[key]);
    }

    document.getElementById('outputText').value = outputText;
}

function addRow() {
    const newRow = document.createElement('div');
    newRow.className = 'replacementRow';
    newRow.innerHTML = `
        <input type="text" class="keyword">
        →
        <input type="text" class="replacement">
        <button onclick="removeRow(this)">Eliminar</button>
    `;
    document.getElementById('replacements').appendChild(newRow);
}

function removeRow(button) {
    button.parentElement.remove();
}
