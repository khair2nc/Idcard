// script.js

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


// Dynamic Input

category.addEventListener("change", () => {

    let value = category.value;

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

});


// Dummy Data

const users = {

    teacher:{

        name:"মোঃ রহমান",

        position:"সহকারী শিক্ষক",

        index:"T-102",

        subject:"বাংলা",

        join:"01-01-2020",

        expire:"31-12-2028",

        mobile:"01700000000",

        blood:"A+"

    },

    staff:{

        name:"মোঃ করিম",

        position:"অফিস সহকারী",

        index:"S-205",

        subject:"অফিস",

        join:"05-02-2021",

        expire:"31-12-2028",

        mobile:"01800000000",

        blood:"B+"

    }

};


// SEARCH

searchBtn.addEventListener("click", () => {

    let value = category.value;

    if(value === ""){

        alert("ক্যাটাগরি নির্বাচন করুন");

        return;

    }

    cardSection.classList.remove("hidden");


    // TEACHER

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


    // STAFF

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


    // QR CODE

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"),{

        text:"https://npcdacademy.edu.bd/profile",

        width:70,

        height:70

    });

});


// PDF DOWNLOAD

document.getElementById("downloadBtn").addEventListener("click", async () => {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p","mm","a4");

    const frontCard = document.getElementById("frontCard");

    const backCard = document.getElementById("backCard");

    const frontCanvas = await html2canvas(frontCard);

    const backCanvas = await html2canvas(backCard);

    const frontImg = frontCanvas.toDataURL("image/png");

    const backImg = backCanvas.toDataURL("image/png");

    pdf.text("NPCD Academy ID Card", 65, 10);

    pdf.addImage(frontImg, "PNG", 20, 20, 54, 86);

    pdf.addImage(backImg, "PNG", 100, 20, 54, 86);

    pdf.save("npcd-id-card.pdf");

});