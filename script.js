// Nội dung lời chúc chạy chữ
const text = "Chúc em một tuổi mới thật rực rỡ, luôn vui vẻ, hạnh phúc và đạt được mọi mục tiêu của mình nhé! Mỗi ngày trôi qua đều là một món quà. Happy Birthday!";
let index = 0;

// Hiệu ứng chữ gõ (typing effect)
function typing() {
    const element = document.getElementById("typing-text");
    if (element && index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 50); // Tốc độ chạy chữ (ms)
    }
}

// Chạy hiệu ứng chữ gõ khi trang tải xong
document.addEventListener('DOMContentLoaded', (event) => {
    typing();
});

// Xử lý sự kiện mở và đóng modal quà tặng
const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('gift-modal');
const btnClose = document.getElementById('btn-close');

if (btnOpen) {
    btnOpen.addEventListener('click', () => {
        if (modal) {
            modal.classList.remove('hidden'); // Hiện modal
            // Bắt đầu pháo hoa khi mở quà
            startFireworks();
        }
    });
}

if (btnClose) {
    btnClose.addEventListener('click', () => {
        if (modal) {
            modal.classList.add('hidden'); // Ẩn modal
            // Dừng pháo hoa khi đóng
            stopFireworks();
        }
    });
}

// --- Hiệu ứng pháo hoa đơn giản trên canvas ---
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
let fireworksInterval;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    fireworksInterval = setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        createFirework(x, y, color);
    }, 500); // Tạo pháo hoa mới mỗi 0.5 giây
}

function stopFireworks() {
    clearInterval(fireworksInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa sạch canvas
}

function createFirework(x, y, color) {
    const particles = 50;
    const speed = 4;
    for (let i = 0; i < particles; i++) {
        const angle = (Math.PI * 2 / particles) * i;
        const particleSpeed = Math.random() * speed;
        drawParticle(x, y, angle, particleSpeed, color);
    }
}

function drawParticle(x, y, angle, speed, color) {
    let px = x;
    let py = y;
    let life = 100;

    function animateParticle() {
        px += Math.cos(angle) * speed;
        py += Math.sin(angle) * speed;
        py += 0.04; // Trọng lực (gravity)
        life -= 1.5;

        if (life > 0) {
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();
            requestAnimationFrame(animateParticle);
        }
    }
    animateParticle();
}
