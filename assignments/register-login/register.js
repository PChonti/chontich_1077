// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myRegister");
    if (form) {
        form.onsubmit = validateForm;
    }
}

function validateForm(event) {
    const form = document.forms["myRegister"];
    const errorMsg = document.getElementById("errormsg");
    
    // ดึงค่าข้อมูลจากฟอร์ม
    const firstname = form["firstname"].value.trim();
    const lastname = form["lastname"].value.trim();
    const gender = form["gender"].value;
    const bday = form["bday"].value;
    const email = form["email"].value.trim();
    const username = form["username"].value.trim();
    const passwords = form["password"];
    const password = passwords[0].value;
    const retypePassword = passwords[1].value;

    // ตรวจสอบว่ากรอกข้อมูลครบทุกช่องหรือไม่
    if (!firstname || !lastname || !gender || !bday || !email || !username || !password || !retypePassword) {
        if (event) event.preventDefault();
        errorMsg.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        errorMsg.style.color = "#ef4444";
        return false;
    }

    // 1. ตรวจสอบว่า Password ทั้ง 2 ช่องตรงกันหรือไม่
    if (password !== retypePassword) {
        if (event) event.preventDefault();
        errorMsg.innerHTML = "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน";
        errorMsg.style.color = "#ef4444";
        return false;
    }

    // 2. เคลียร์ข้อความแจ้งเตือนถ้าผ่านการตรวจสอบ
    errorMsg.innerHTML = "";

    // 3. บันทึกข้อมูลลงใน localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);

    alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");

    // 4. นำทางไปหน้า login.html
    if (event) event.preventDefault();
    window.location.href = "login.html";
    return true;
}