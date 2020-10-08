const button = document.getElementsByClassName("stack_button");
const buttonArray = Array.from(button[0].querySelectorAll("button"));
const stackDiv = document.getElementsByClassName("stack_place")[0];
const topValue = document.querySelector("#stack_size_size");

let size = 0;
let number = 0;
let ArrayMember_ = [
  "카스밍",
  "시즈쿠",
  "리나",
  "아유무",
  "세츠나",
  "아이",
  "카나타",
  "카린",
  "엠마",
  "유우",
];
let Color = [
  "#fdfd96",
  "#add8e6",
  "#a1a5a4",
  "#ffb6c1",
  "#f76865",
  "#ffa359",
  "#d5ace7",
  "#000080",
  "#adec92",
  "#000000",
];
function push() {
  if (size === 9) {
    alert("큐가 가득 찼습니다.");
  } else {
    var newDiv = document.createElement("div");
    newDiv.innerText = ArrayMember_[number];
    newDiv.style.color = Color[number];
    newDiv.setAttribute("id", number++);
    stackDiv.appendChild(newDiv);
    size++;
    console.log(topValue.innerText);
    topValue.innerText = size;
  }
}
function pop() {
  const memberArray = Array.from(stackDiv.querySelectorAll("div"));
  if (memberArray.length === 0) {
    alert("큐가 비었습니다.");
  } else {
    stackDiv.removeChild(memberArray[0]);
  }
}
function front_f() {
  const memberArray = Array.from(stackDiv.querySelectorAll("div"));
  if (memberArray.length === 0) {
    alert("큐가 비었습니다.");
  } else {
    alert(`큐 맨앞의 값: ${memberArray[0].innerText}`);
  }
}
function back() {
  const memberArray = Array.from(stackDiv.querySelectorAll("div"));
  if (memberArray.length === 0) {
    alert("큐가 비었습니다.");
  } else {
    const memberArray = Array.from(stackDiv.querySelectorAll("div"));
    alert(`큐 맨뒤값: ${memberArray[memberArray.length - 1].innerText}`);
  }
}
function isFull() {
  const memberArray = Array.from(stackDiv.querySelectorAll("div"));
  if (memberArray.length === 9) {
    alert("TRUE");
  } else {
    alert("FALSE");
  }
}
function isEmpty() {
  if (top_ === -1) {
    alert("TRUE");
  } else {
    alert("FALSE");
  }
}

function handleLowClick(e) {
  switch (e.target.id) {
    case "push":
      console.log("hi");
      push();
      break;
    case "pop":
      pop();
      break;
    case "front":
      front_f();
      break;
    case "back":
      back();
      break;
    case "isEmpty":
      isEmpty();
      break;
  }
}

buttonArray.forEach(function (e) {
  e.addEventListener("click", handleLowClick);
});
