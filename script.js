// script.js

// =============================
// ELEMENTS
// =============================

const category = document.getElementById("category");

const dynamicFields = document.getElementById("dynamicFields");

const searchBtn = document.getElementById("searchBtn");

const cardSection = document.getElementById("cardSection");

const personName = document.getElementById("personName");

const personType = document.getElementById("personType");

const extraInfo1 = document.getElementById("extraInfo1");

const extraInfo2 = document.getElementById("extraInfo2");

const extraInfo3 = document.getElementById("extraInfo3");

const extraInfo4 = document.getElementById("extraInfo4");

const extraInfo5 = document.getElementById("extraInfo5");

const extraInfo6 = document.getElementById("extraInfo6");



// =============================
// DYNAMIC SEARCH INPUT
// =============================

category.addEventListener("change", () => {

    let value = category.value;

    // Teacher & Staff

    if(value === "teacher" || value === "staff"){

        dynamicFields.innerHTML = `

            <div class="input-group">

                <label>ইনডেক্স নং</label>

                <input type="text" id="indexNo">

            </div>

            <div class="input-group">

                <label>জন্মতারিখ</label>

                <input type="date" id="birthDate">

            </div>

        `;

    }

    // Student

    else if(value === "student"){

        dynamicFields.innerHTML = `

            <div class="input-group">

                <label>শ্রেণি</label>

                <input type="text" id="className">

            </div>

            <div class="input-group">

                <label>রোল নং</label>

                <input type="text" id="rollNo">

            </div>

        `;

    }

    else{

        dynamicFields.innerHTML = "";

    }

});



// =============================
// DUMMY DATABASE
// =============================

const users = {

    teacher:{

        name:"রেবা পারভীন",

        position:"সহকারী শিক্ষক",

        index:"১০৫২০৪০",

        subject:"সমাজ বিজ্ঞান",

        join:"০৫-০১-২০০৫",

        expire:"১১-০১-২০৩৪",

        mobile:"০১৭১৪-৫৬২৬২৬",

        blood:"AB+"

    },



    staff:{

        name:"মোঃ করিম",

        position:"অফিস সহকারী",

        index:"২০৫১০",

        subject:"অফিস",

        join:"০১-০২-২০২০",

        expire:"৩১-১২-২০৩০",

        mobile:"০১৮০০-০০০০০০",

        blood:"B+"

    },



    student:{

        name:"সুমাইয়া আক্তার",

        class:"দশম",

        roll:"১২",

        session:"২০২৬",

        mobile:"০১৭০০-০০০০০০",

        blood:"A+"

    }

};



// =============================
// SEARCH BUTTON
// =============================

searchBtn.addEventListener("click", () => {

    let value = category.value;

    // No Category

    if(value === ""){

        alert("ক্যাটাগরি নির্বাচন করুন");

        return;

    }

    // Show Card

    cardSection.classList.remove("hidden");



    // =========================
    // TEACHER
    // =========================

    if(value === "teacher"){

        personName.innerText = users.teacher.name;

        personType.innerText = users.teacher.position;

        extraInfo1.innerText = users.teacher.index;

        extraInfo2.innerText = users.teacher.subject;

        extraInfo3.innerText = users.teacher.join;

        extraInfo4.innerText = users.teacher.expire;

        extraInfo5.innerText = users.teacher.mobile;

        extraInfo6.innerText = users.teacher.blood;

    }



    // =========================
    // STAFF
    // =========================

    else if(value === "staff"){

        personName.innerText = users.staff.name;

        personType.innerText = users.staff.position;

        extraInfo1.innerText = users.staff.index;

        extraInfo2.innerText = users.staff.subject;

        extraInfo3.innerText = users.staff.join;

        extraInfo4.innerText = users.staff.expire;

        extraInfo5.innerText = users.staff.mobile;

        extraInfo6.innerText = users.staff.blood;

    }



    // =========================
    // STUDENT
    // =========================

    else if(value === "student"){

        personName.innerText = users.student.name;

        personType.innerText = "স্টুডেন্ট";

        extraInfo1.innerText = "শ্রেণি: " + users.student.class;

        extraInfo2.innerText = "রোল: " + users.student.roll;

        extraInfo3.innerText = "শিক্ষাবর্ষ: " + users.student.session;

        extraInfo4.innerText = "মোবাইল: " + users.student.mobile;

        extraInfo5.innerText = "রক্ত: " + users.student.blood;

        extraInfo6.innerText = "";

    }



    // =========================
    // QR CODE
    // =========================

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"),{

        text:"https://npcdacademy.edu.bd/profile",

        width:70,

        height:70

    });

});



// =============================
// PDF DOWNLOAD
// =============================

document.getElementById("downloadBtn").addEventListener("click", async () => {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p","mm","a4");



    const frontCard = document.getElementById("frontCard");

    const backCard = document.getElementById("backCard");



    const frontCanvas = await html2canvas(frontCard);

    const backCanvas = await html2canvas(backCard);



    const frontImg = frontCanvas.toDataURL("image/png");

    const backImg = backCanvas.toDataURL("image/png");



    // Title

    pdf.text("NPCD Academy ID Card", 65, 10);



    // Front Card

    pdf.addImage(frontImg, "PNG", 20, 20, 54, 86);



    // Back Card

    pdf.addImage(backImg, "PNG", 100, 20, 54, 86);



    // Save PDF

    pdf.save("npcd-id-card.pdf");

});