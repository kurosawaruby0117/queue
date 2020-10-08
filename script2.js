const button2 = document.getElementsByClassName("stack_button2");
const buttonArray2 = Array.from(button2[0].querySelectorAll("button"));
const stackDiv2 = document.getElementsByClassName("stack_place2")[0];
const rear_va = document.querySelector("#stack_size_size_rear");
const front_va = document.querySelector("#stack_size_size_front");

let rear = 0;
let front = 0;
let queueSize = 9;

function push2() {
  if ((rear + 1) % queueSize == front) {
    alert("큐가 가득 찼습니다.");
  } else {
    const memberArray = Array.from(stackDiv2.querySelectorAll("div"));
    rear = (rear + 1) % queueSize;
    console.log(rear);
    console.log(memberArray[rear]);
    memberArray[rear].innerText = ArrayMember_[rear];
    memberArray[rear].style.color = Color[rear];
    rear_va.innerText = rear;
  }
}
function pop2() {
  const memberArray = Array.from(stackDiv2.querySelectorAll("div"));
  if (rear == front) {
    alert("큐가 비었습니다.");
  } else {
    front = (front + 1) % queueSize;
    console.log(memberArray[front]);
    memberArray[front].innerText = "빔";
  }
  front_va.innerText = front;
}

function handleLowClick2(e) {
  switch (e.target.id) {
    case "push":
      push2();
      break;
    case "pop":
      pop2();
      break;
  }
}
buttonArray2.forEach(function (e) {
  e.addEventListener("click", handleLowClick2);
});
