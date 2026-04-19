const text = "Chúc bạn một tuổi mới thật rực rỡ, luôn vui vẻ, hạnh phúc và đạt được mọi mục tiêu của mình nhé! Mỗi ngày trôi qua đều là một món quà. Happy Birthday!";
let index = 0;

function typing() {
    const element = document.getElementById("typing-text");
    if (element && index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 50);
    }
}

// Chạy khi trang web tải xong
document.addEventListener('DOMContentLoaded', (event) => {
    typing();
});

// Hiệu ứng khi nhấn nút
const btn = document.getElementById('btn-open');
if(btn) {
    btn.addEventListener('click', () => {
        alert("Chúc mừng sinh nhật bạn eiu! 🎉🎁");
    });
}
