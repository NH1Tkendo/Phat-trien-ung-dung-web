const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", (e)=>{
    const radios = document.querySelectorAll("input[name='answer']");
        radios.forEach(radio => {
        const isCorrect = radio.dataset.dapan === "true"; // so sánh đúng kiểu dữ liệu
        const parentDiv = radio.closest("div"); // lấy phần tử chứa radio và label

        if (isCorrect) {
            parentDiv.classList.add("correct");
        }
    });
});
