// 🔐 كلمة السر الصحيحة المعتمدة لدخول المنصة
const SECRET_PASSWORD = "bebo"; 

// تاريخ البداية المخصص للعداد الحي
const startDate = new Date("2021-04-04T00:00:00");

// دالة فحص وتأكيد كلمة المرور
function checkCredentials() {
    const inputPassword = document.getElementById("passwordInput").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    // التحقق من كلمة السر الموحدة (bebo)
    if (inputPassword === SECRET_PASSWORD) {
        // فك الحجب وإظهار المنصة والمحتوى الأساسي
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        
        // تفعيل تجربة الصفحة الحية
        initGiftExperience();
    } else {
        // إظهار رسالة الخطأ في حالة الإدخال الخاطئ
        errorMsg.style.display = "block";
    }
}

function initGiftExperience() {
    // تشغيل عداد السنين والأيام والشهور التلقائي
    setInterval(updateCounter, 1000);
    updateCounter();

    // تشغيل الأغنية تلقائياً كعنصر مفاجأة فور الدخول
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("playBtn");
    const status = document.getElementById("trackStatus");
    
    if (audio) {
        audio.play().then(() => {
            btn.innerText = "⏸️ إيقاف";
            status.innerText = "يعرض الآن.. ❤️";
        }).catch(err => {
            console.log("سياسات المتصفح تتطلب ضغطة يدوية لتشغيل الصوت أول مرة.");
        });
    }
}

// دالة حساب الوقت الحقيقي للعداد
function updateCounter() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    if (days < 0) {
        months--;
        let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const hours = now.getHours();

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
}

// دالة قلب كروت التسلية
function flipCard(card) {
    card.classList.toggle('flipped');
}

// التحكم اليدوي بمشغل الصوت
function togglePlay() {
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("playBtn");
    const status = document.getElementById("trackStatus");

    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸️ إيقاف";
        status.innerText = "يعرض الآن.. ❤️";
    } else {
        audio.pause();
        btn.innerText = "▶️ تشغيل";
        status.innerText = "متوقف الآن";
    }
}

// إنتاج قلوب الحب المتساقطة تلقائياً بالخلفية
function createHeart() {
    const container = document.getElementById('heartsContainer');
    if(!container) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 300); // سرعة وكثافة هطول القلوب
