// Xử lý sự kiện gửi form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn chặn reload trang
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
