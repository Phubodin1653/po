// ประกาศตัวแปร
let countdownValue = 10; // ค่าเริ่มต้นสำหรับตัวนับถอยหลัง
let countdownElement = document.getElementById('countdown');
let loginForm = document.getElementById('loginForm');
let countdownContainer = document.querySelector('.countdown-container');
let errorMessage = document.getElementById('error-message');
let videoBackground = document.getElementById('video-background');
let messageBox = document.querySelector('.message-box');
let gifContainer = document.querySelector('.gif-container');
let funnyGif = document.getElementById('funny-gif'); // GIF ที่แสดง

// ฟังก์ชันสำหรับการล็อกอิน
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    let password = document.getElementById('password').value;

    // ถ้ารหัสถูกต้อง
    if (password === '09072567') {
        // ซ่อนหน้าล็อกอินและแสดงตัวนับถอยหลัง
        document.querySelector('.login-container').style.display = 'none';
        countdownContainer.style.display = 'block';
        
        // ซ่อนวิดีโอพื้นหลังและเปลี่ยนเป็นพื้นหลังขาว
        videoBackground.style.display = 'none';
        document.body.style.backgroundColor = '#fff'; // เปลี่ยนพื้นหลังเป็นสีขาว

        // เริ่มนับถอยหลัง
        startCountdown();
    } else {
        // ถ้ารหัสไม่ถูกต้อง
        errorMessage.style.display = 'block';
    }
});

// ฟังก์ชันสำหรับการเริ่มนับถอยหลัง
function startCountdown() {
    let countdownInterval = setInterval(function() {
        countdownElement.textContent = countdownValue;

        // เมื่อถึง 0 ให้หยุดนับถอยหลัง
        if (countdownValue === 0) {
            clearInterval(countdownInterval); // หยุดการนับถอยหลัง

            // ซ่อนตัวเลขนับถอยหลังและแสดง GIF
            countdownContainer.style.display = 'none';
            gifContainer.style.display = 'block';

            // เปลี่ยนพื้นหลังเป็นขาว และแสดงกล่องข้อความ
            document.body.style.backgroundColor = '#fff';
            messageBox.style.display = 'block';
            
            // เลื่อนกล่องข้อความขึ้นจากด้านล่าง
            setTimeout(function() {
                messageBox.style.bottom = '20px';
            }, 100);
            
            // เริ่มการวนซ้ำ GIF ใหม่
            startGifLoop();
        }

        countdownValue--; // ลดค่าตัวนับ
    }, 1000); // นับทุก 1 วินาที
}

// ฟังก์ชันสำหรับวนซ้ำ GIF
function startGifLoop() {
    funnyGif.addEventListener('ended', function() {
        funnyGif.currentTime = 0; // กลับไปที่จุดเริ่มต้น
        funnyGif.play(); // เล่น GIF ใหม่
    });
}

// ฟังก์ชันที่ทำให้กล่องข้อความหายเมื่อกด "พร้อมแล้ว"
document.getElementById('ready-btn').addEventListener('click', function() {
    // เพิ่มแอนิเมชั่นให้กล่องข้อความหายไป
    messageBox.classList.add('hide');

    // เพิ่มแอนิเมชั่นให้ GIF และปุ่มหายไป
    setTimeout(function() {
        gifContainer.style.display = 'none'; // ซ่อน GIF
    }, 500); // รอให้แอนิเมชั่นกล่องข้อความเสร็จ

    // เพิ่มคลาสเพื่อเปลี่ยนพื้นหลังและซ่อนข้อความ
    document.body.classList.add('after-click');

    // เปลี่ยนไปยังเว็บที่ต้องการ
    setTimeout(function() {
        window.location.href = "https://mybabe6.wordpress.com"; // เปลี่ยน URL
    }, 1000); // รอ 1 วินาทีก่อนเปลี่ยน
});
