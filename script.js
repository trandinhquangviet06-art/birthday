const text = "Chúc bạn một tuổi mới thật rực rỡ, luôn vui vẻ, hạnh phúc và đạt được mọi mục tiêu của mình nhé! Mỗi ngày trôi qua đều là một món quà. Happy Birthday!";
let index = 0;

function typing() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 50; // Tốc độ gõ chữ (ms)
    }
}

// Chạy hiệu ứng gõ chữ khi trang web tải xong
window.onload = typing;

// Hiệu ứng pháo hoa đơn giản khi nhấn nút
const btn = document.getElementById('btn-open');
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

btn.addEventListener('click', () => {
    alert("Chúc mừng sinh nhật! Hy vọng bạn thích món quà nhỏ này! 🎉");
    // Bạn có thể thêm code hiệu ứng pháo hoa phức tạp hơn ở đây
    createFirework();
});