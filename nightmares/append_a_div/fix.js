const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
// const div5 = document.getElementById("div5");

function createTextDiv() {
  const textDiv = document.createElement('div');
  textDiv.innerHTML = 'Blub blub';
  return textDiv;
}

div1.append(createTextDiv());
div2.append(createTextDiv());
div3.append(createTextDiv());
div4.append(createTextDiv());
// div5.append(textDiv);
