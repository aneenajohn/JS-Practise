const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
// const div5 = document.getElementById("div5");

const textDiv = document.createElement('div');
textDiv.innerHTML = 'Blub blub';

div1.append(textDiv);
div2.append(textDiv);
div3.append(textDiv);
div4.append(textDiv);
// div5.append(textDiv);
