const text = "This is khubaib Shoukat";
let index = 1;

function writeText() {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 150);
