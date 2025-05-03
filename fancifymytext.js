function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("text-area").style.fontSize = "24pt";
  }
  
  function fancifyText() {
    let textArea = document.getElementById("text-area");
    let fancy = document.getElementById("fancy").checked;
  
    if (fancy) {
      alert("FancyShmancy selected!");
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      alert("BoringBetty selected!");
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function mooifyText() {
    let textArea = document.getElementById("text-area");
    let str = textArea.value.toUpperCase();
  
    let sentences = str.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
  
    textArea.value = sentences.join(". ").trim();
  }  