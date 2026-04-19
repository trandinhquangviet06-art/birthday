const text = "Chúc bạn một tuổi mới thật rực rỡ, luôn vui vẻ, hạnh phúc và đạt được mọi mục tiêu của mình nhé! Mỗi ngày trôi qua đều là một món quà. Happy Birthday!";
let index = 0;

function typing() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 50); // Đã thêm dấu đóng ngoặc ) ở đây
    }
}

// Chạy hiệu ứng khi trang tải xong
window.onload = typing;

// Hiệu ứng khi nhấn nút
const btn = document.getElementById('btn-open');
btn.addEventListener('click', () => {
    alert("Chúc mừng sinh nhật! 🎉");
    // Tạo hiệu ứng pháo hoa đơn giản bằng màu sắc nền
    document.body.style.backgroundColor = "#f8bbd0";
    setTimeout(() => {
        document.body.style.backgroundColor = "#fce4ec";
    }, 500);
});
