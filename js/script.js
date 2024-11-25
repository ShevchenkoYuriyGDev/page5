document.getElementById("submitBtn").addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("error"));

    const pib = document.getElementById("pib").value;
    const variant = document.getElementById("variant").value;
    const group = document.getElementById("group").value;
    const faculty = document.getElementById("faculty").value;
    const birthDate = document.getElementById("birthDate").value;

    const patterns = {
        pib: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
        variant: /^\d+$/,
        group: /^[А-ЯІЇЄҐ]{2}-\d{2}$/,
        faculty: /^[А-ЯІЇЄҐ]+$/,
        birthDate: /^\d{2}\.\d{2}\.\d{4}$/,
    };

    let isValid = true;
    if (!patterns.pib.test(pib)) {
        document.getElementById("pib").classList.add("error");
        isValid = false;
    }
    if (!patterns.variant.test(variant)) {
        document.getElementById("variant").classList.add("error");
        isValid = false;
    }
    if (!patterns.group.test(group)) {
        document.getElementById("group").classList.add("error");
        isValid = false;
    }
    if (!patterns.faculty.test(faculty)) {
        document.getElementById("faculty").classList.add("error");
        isValid = false;
    }
    if (!patterns.birthDate.test(birthDate)) {
        document.getElementById("birthDate").classList.add("error");
        isValid = false;
    }
    
    if (isValid) {
        alert(`Дані введено правильно!\n\nПІБ: ${pib}\nВаріант: ${variant}\nГрупа: ${group}\nФакультет: ${faculty}\nДата народження: ${birthDate}`);
    } else {
        alert("Є помилки у введених даних. Перевірте виділені поля!");
    }
});
const variant = 9; 

const table = document.getElementById("taskTable");
let number = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");
        cell.textContent = number++;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

const colorPicker = document.getElementById("colorPicker");

table.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "TD" && e.target.textContent == variant) {
        e.target.style.backgroundColor = getRandomColor();
    }
});

table.addEventListener("click", (e) => {
    if (e.target.tagName === "TD" && e.target.textContent == variant) {
        e.target.style.backgroundColor = colorPicker.value;
    }
});

table.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "TD" && e.target.textContent == variant) {
        const rows = table.rows;
        const rowIndex = e.target.parentElement.rowIndex;
        const colIndex = e.target.cellIndex;

    for (let i = rowIndex; i < 6; i += 2) {
        rows[i].cells[colIndex].style.backgroundColor = colorPicker.value;
        }
    }
});