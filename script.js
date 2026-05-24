function generateCard(){

let type = document.getElementById("type").value;
let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let dob = document.getElementById("dob").value;
let cls = document.getElementById("class").value;
let position = document.getElementById("position").value;
let join = document.getElementById("join").value;
let expire = document.getElementById("expire").value;
let phone = document.getElementById("phone").value;
let blood = document.getElementById("blood").value;

let html = `
<div class="card ${type}" id="card">

<div class="card-header">
<h3>${name.toUpperCase()}</h3>
<p>${position}</p>
</div>

<div class="card-body">
<p><b>ID:</b> ${id}</p>
<p><b>DOB:</b> ${dob}</p>
<p><b>Class:</b> ${cls}</p>
<p><b>Join:</b> ${join}</p>
<p><b>Expire:</b> ${expire}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Blood:</b> ${blood}</p>

<div id="qrcode"></div>
</div>

<div class="card-footer">
প্রতিষ্ঠানের সম্পত্তি - হারালে ফেরত দিন
</div>

<div class="back">
School: নদেরচাঁদ প্রেমচাঁদ দাস একাডেমি |
Phone: 017XXXXXXXX
</div>

</div>
`;

document.getElementById("cardArea").innerHTML = html;

// QR CODE
document.getElementById("qrcode").innerHTML = "";
new QRCode(document.getElementById("qrcode"), {
    text: id + " | " + name,
    width: 80,
    height: 80
});

}