document.body.onload = function() {
  let inputfield = document.querySelector("#searchText");
  let textfield = document.querySelector("#sourceText");
  let nextButton = document.querySelector("#nextBtn");
  let prevButton = document.querySelector("#prevBtn");
  let keyword = "";

  inputfield.addEventListener("change", function keywordmaker() {
    keyword = inputfield.value;
    return;
  });

  nextButton.addEventListener("click", function nextAction() {
    keywordSearcher(keyword);
  });

  function keywordSearcher(keyword) {
    //let textfield = textfield;
    let text = textfield.value;
    let keyindex = text.indexOf(keyword);
    let subText = text.substr(keyindex, keyword.length);
    textfield.value = text.replace(subText, `<p style="color:red;">Hi</p>`);
    let cutter = keyindex + keyword.length;
    let firstPart = "";
    let secondPart = "";
    for (let i = 0; i < keyindex; i++) {
      firstPart += text[i];
    }
    for (let i = cutter; i < text.length; i++) {
      secondPart += text[i];
    }
    console.log(keyindex, subText);
    console.log(firstPart);
    console.log(secondPart);
    /*let p = document.createElement("p");
        p.style.color = "red";
        p.textContent = subText;
        textfield.value = `${firstPart}` + ` ${p.innerHTML}` + ` ${secondPart}`;*/
    return;
  }
};
