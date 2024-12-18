// script.js

// 获取 DOM 元素
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const dataForm = document.getElementById("dataForm");
const dataInput = document.getElementById("dataInput");

// 打开弹框
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// 关闭弹框
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 点击弹框外部区域时关闭弹框
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// 表单提交逻辑（新增或修改数据）
dataForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 阻止默认表单提交

    const data = dataInput.value; // 获取输入的数据

    if (data) {
        console.log("保存的数据:", data);
        alert("数据已保存！");
    } else {
        alert("请输入数据！");
    }

    // 关闭弹框
    modal.style.display = "none";
    dataInput.value = ""; // 清空输入框
});
