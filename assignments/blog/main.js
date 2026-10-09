window.onload = setupFunction;

let postCount = 0;

function setupFunction() {
    // 1. แสดงคำว่า "Welcome to the Forum" ที่ id="top"
    document.getElementById("top").innerHTML = "Welcome to the Forum";

    // 2. ดึงปุ่ม Post และ Clear แล้วผูก event listener
    let buttons = document.getElementsByTagName("button");
    let postBtn = buttons[0];
    let clearBtn = buttons[1];

    postBtn.onclick = postFunction;
    clearBtn.onclick = clearFunction;
}

function postFunction() {
    let msgInput = document.getElementById("message");
    let text = msgInput.value;

    // ตรวจสอบว่ามีข้อความหรือไม่ก่อนโพสต์
    if (text.trim() === "") {
        return;
    }

    // โพสต์ข้อความตามลำดับครั้งที่กด
    if (postCount === 0) {
        document.getElementById("topic").innerHTML = text;
        postCount++;
        msgInput.value = "";
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = text;
        postCount++;
        msgInput.value = "";
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = text;
        postCount++;
        msgInput.value = "";
    } else {
        alert("โพสต์ครบตามจำนวนที่กำหนดแล้ว (3 ครั้ง)");
    }
}

function clearFunction() {
    // 1. ล้างข้อความทั้งหมดใน topic, reply1, reply2
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    // 2. ล้างข้อความใน textarea
    document.getElementById("message").value = "";

    // 3. รีเซ็ตตัวนับลำดับการโพสต์กลับเป็น 0
    postCount = 0;
}