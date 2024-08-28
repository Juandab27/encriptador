document.getElementById("encrypt-btn").addEventListener("click", function() {
    let text = document.getElementById("input-text").value;
    let encryptedText = encrypt(text);
    displayResult(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let text = document.getElementById("input-text").value;
    let decryptedText = decrypt(text);
    displayResult(decryptedText);
});

function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

function displayResult(result) {
    document.getElementById("output-image").style.display;
    document.getElementById("output-text").textContent = result;
}

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text").textContent;
    navigator.clipboard.writeText(outputText);
    alert("Texto copiado al portapapeles");
});
