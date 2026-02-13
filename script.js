document.addEventListener('DOMContentLoaded', () => {

    // 1. TYPING EFFECT
    new Typed('.multiple-text', {
        strings: ['Full Stack Developer', 'Frontend Designer', 'Coder', 'CSE Engineer'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        cursorChar: '|',
    });

    // 2. DATA CONFIGURATIONS
    const techSkills = [
        { name: "MongoDB", icon: "bxl-mongodb", level: "Intermediate" },
        { name: "Express.js", icon: "bxl-nodejs", level: "Intermediate" },
        { name: "Node.js", icon: "bxl-nodejs", level: "Intermediate" },
        { name: "JavaScript", icon: "bxl-javascript", level: "Intermediate" },
        { name: "Python", icon: "bxl-python", level: "Intermediate" },
        { name: "Bootstrap", icon: "bxl-bootstrap", level: "Intermediate" },
        { name: "C++", icon: "bxl-c-plus-plus", level: "Intermediate" },
    ];

    const certificates = [
        { title: "C-NARIO", org: "IEEE SIT", img: "images/cer1Hemanth.png" },
        { title: "TriEEvia", org: "IEEE SIT", img: "images/cer2hemanth.png" },
        { title: "TCS Tech Bytes", org: "TCS & BITES", img: "images/cer3hemanth.png" },
        { title: "Google Course 1", org: "Google", img: "images/cer4hemanth.png" },
        { title: "Google Course 2", org: "Google", img: "images/cer5hemanth.png" },
        { title: "Google Course 3", org: "Google", img: "images/cer6hemanth.png" }
    ];

const achievements = [
    {
        title: "Rajya Puraskar Award",
        org: "SCOUTS (GOV. OF KARNATAKA)",
        img: "images/rajyaPuraskar.png",
        desc: "Presented by Shri Vajubhai Vala, former Governor of Karnataka."
    }

        // {
        //     title: "TCS Tech Bytes Finalist",
        //     org: "Regional Finals",
        //     img: "images/cer3hemanth.png",
        //     desc: "Recognized among top IT quiz participants in the state."
        // }
    ];

    // 3. RENDER SKILLS GRID
    const skillGrid = document.getElementById('skills-grid');
    if (skillGrid) {
        skillGrid.innerHTML = techSkills.map(s => `
            <div class="col-6 col-md-4 col-lg-2">
                <div class="skill-card">
                    <i class='bx ${s.icon}'></i>
                    <h4>${s.name}</h4>
                    <div class="skill-status">${s.level}</div>
                </div>
            </div>`).join('');
    }

    // 4. DYNAMIC CARD RENDERER (Shared for Certs & Achievements)
    const renderCards = (containerId, dataList) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = dataList.map(item => `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="cert-card glass-container-outer">
                    <div class="cert-img-container">
                        <img src="${item.img}" alt="${item.title}" class="cert-img">
                        <div class="cert-hover-overlay">
                            <button class="cert-btn">View Details</button>
                        </div>
                    </div>
                    <div class="cert-details">
                        <span class="cert-org">${item.org}</span>
                        <h3>${item.title}</h3>
                        ${item.desc ? `<p class="achievement-desc">${item.desc}</p>` : ''}
                    </div>
                </div>
            </div>`).join('');
    };

    // Execute Rendering
    renderCards('certificate-grid', certificates);
    renderCards('achievement-grid', achievements);

    // 5. GLOBAL INTERACTION (Tilt & Spotlight)
    // Targeting all card types including the new achievement cards
    const cards = document.querySelectorAll(".glass-container-outer, .skill-card, .stack-card, .cert-card");
    const glow = document.querySelector('.cursor-glow');

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(cards, {
            max: 8,
            speed: 400,
            glare: true,
            "max-glare": 0.15,
            perspective: 1000
        });
    }

    document.addEventListener('mousemove', (e) => {
        if (glow) {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        }

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        });
    });

    // 6. DYNAMIC BACKGROUND GRID
    const bg = document.getElementById('grid-background');
    const generateGrid = () => {
        if (!bg) return;
        bg.innerHTML = '';
        const boxSize = 50;
        const count = Math.floor(window.innerWidth / boxSize) * Math.floor(window.innerHeight / boxSize);
        for (let i = 0; i < count; i++) {
            const box = document.createElement('div');
            box.classList.add('grid-box');
            bg.appendChild(box);
        }
    };
    generateGrid();
    window.addEventListener('resize', generateGrid);
});


