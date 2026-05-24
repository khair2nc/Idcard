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


// Dynamic Input Fields
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


// Dummy Data
const users = {

    teacher:{
        name:"মোঃ রহমান",
        position:"সহকারী শিক্ষক",
        index:"T-102",
        mobile:"01700000000",
        blood:"A+",
        join:"01-01-2020",
        expire:"31-12-2028"
    },

    staff:{
        name:"মোঃ করিম",
        position:"অফিস সহকারী",
        index:"S-205",
        mobile:"01800000000",
        blood:"B+",
        join:"05-02-2021",
        expire:"31-12-2028"
    },

    student:{
        name:"সুমাইয়া আক্তার",
        class:"দশম",
        roll:"12",
        session:"2026"
    }

};


// Search Button
searchBtn.addEventListener("click", () => {

    let value = category.value;

    if(value === ""){
        alert("ক্যাটাগরি নির্বাচন করুন");
        return;
    }

    cardSection.classList.remove("hidden");

    // Teacher
    if(value === "teacher"){

        personName.innerText = users.teacher.name.toUpperCase();

        personType.innerText = users.teacher.position;

        extraInfo1.innerText = "ইনডেক্স নং: " + users.teacher.index;

        extraInfo2.innerText = "মোবাইল: " + users.teacher.mobile;

        extraInfo3.innerText = "রক্তের গ্রুপ: " + users.teacher.blood;

        extraInfo4.innerText = "যোগদান: " + users.teacher.join;

    }

    // Staff
    else if(value === "staff"){

        personName.innerText = users.staff.name.toUpperCase();

        personType.innerText = users.staff.position;

        extraInfo1.innerText = "ইনডেক্স নং: " + users.staff.index;

        extraInfo2.innerText = "মোবাইল: " + users.staff.mobile;

        extraInfo3.innerText = "রক্তের গ্রুপ: " + users.staff.blood;

        extraInfo4.innerText = "যোগদান: " + users.staff.join;

    }

    // Student
    else if(value === "student"){

        personName.innerText = users.student.name.toUpperCase();

        personType.innerText = "স্টুডেন্ট";

        extraInfo1.innerText = "শ্রেণি: " + users.student.class;

        extraInfo2.innerText = "রোল: " + users.student.roll;

        extraInfo3.innerText = "শিক্ষাবর্ষ: " + users.student.session;

        extraInfo4.innerText = "";

    }


    // QR Code
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"),{
        text:"https://npcdacademy.edu.bd/profile",
        width:100,
        height:100
    });

});



// PDF Download
document.getElementById("downloadBtn").addEventListener("click", async () => {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p","mm","a4");

    const frontCard = document.getElementById("frontCard");
    const backCard = document.getElementById("backCard");

    const frontCanvas = await html2canvas(frontCard);
    const backCanvas = await html2canvas(backCard);

    const frontImg = frontCanvas.toDataURL("image/png");
    const backImg = backCanvas.toDataURL("image/png");

    pdf.text("NPCD Academy ID Card", 70, 10);

    pdf.addImage(frontImg, "PNG", 15, 20, 80, 120);

    pdf.addImage(backImg, "PNG", 110, 20, 80, 120);

    pdf.save("id-card.pdf");

});
