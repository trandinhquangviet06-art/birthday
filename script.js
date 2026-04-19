const text = "Chúc em một tuổi mới thật rực rỡ, luôn vui vẻ, hạnh phúc và đạt được mọi mục tiêu của mình nhé! Mỗi ngày trôi qua đều là một món quà. Happy Birthday!";
let index = 0;

function typing() {
    const element = document.getElementById("typing-text");
    if (element && index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 50);
    }
}

// Chạy hiệu ứng gõ chữ khi trang web tải xong
document.addEventListener('DOMContentLoaded', (event) => {
    typing();
});

// --- Xử lý khi bấm nút nhận quà ---
const btn = document.getElementById('btn-open');
const modal = document.getElementById('gift-modal');
const btnClose = document.getElementById('btn-close');

if(btn) {
    btn.addEventListener('click', () => {
        // Hiện hộp quà ra (xóa class hidden)
        if(modal) modal.classList.remove('hidden');
    });
}

if(btnClose) {
    btnClose.addEventListener('click', () => {
        // Ẩn hộp quà đi (thêm class hidden)
        if(modal) modal.classList.add('hidden');
    });
}
