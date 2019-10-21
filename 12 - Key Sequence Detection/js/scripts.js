const pressed = [];
const secretCode = "mario";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("Hooooraaaayyyyyy");
    cornify_add();
  }

  console.log(pressed);
});
