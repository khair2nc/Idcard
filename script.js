let data = [];

/* ADD */
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let obj = {
        type: type.value,
        name: name.value,
        position: position.value,
        index: index.value,
        subject: subject.value,
        join: join.value,
        expire: expire.value,
        phone: phone.value,
        blood: blood.value
    };

    data.push(obj);
    this.reset();
    display(data);
});

/* DISPLAY */
function display(list){
    let container = document.getElementById("cardContainer");
    container.innerHTML = "";

    list.forEach((item,i)=>{
        container.innerHTML += `
        <div class="card" id="card${i}">
            <div class="header">
                ${item.type.toUpperCase()} ID CARD
            </div>

            <div class="info">
                <p><b>নাম:</b> ${item.name}</p>
                <p><b>পদবী:</b> ${item.position}</p>
                <p><b>আইডি:</b> ${item.index}</p>
                <p><b>বিষয়:</b> ${item.subject}</p>
                <p><b>যোগদান:</b> ${item.join}</p>
                <p><b>মেয়াদ:</b> ${item.expire}</p>
                <p><b>মোবাইল:</b> ${item.phone}</p>
                <p><b>রক্তের গ্রুপ:</b> ${item.blood}</p>
            </div>

            <div class="signature">
                <div class="signature-line"></div>
                প্রতিষ্ঠান প্রধানের স্বাক্ষর
            </div>

            <button class="download" onclick="downloadCard(${i})">Download</button>
        </div>
        `;
    });
}

/* SEARCH */
document.getElementById("search").addEventListener("keyup", function(){
    let input = this.value.toLowerCase();

    let filtered = data.filter(item =>
        item.name.toLowerCase().includes(input) ||
        item.index.toLowerCase().includes(input)
    );

    display(filtered);
});

/* DOWNLOAD */
function downloadCard(i){
    let card = document.getElementById("card" + i);

    html2canvas(card).then(canvas=>{
        let a = document.createElement("a");
        a.download = "id-card.png";
        a.href = canvas.toDataURL();
        a.click();
    });
}

/* INIT */
display(data);