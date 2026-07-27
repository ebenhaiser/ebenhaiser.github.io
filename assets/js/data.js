const siteConfig = {
    profile: {
        name: "Ebenhaiser Jonathan Caprisiano",
        image: "assets/img/Eben7.jpeg",
        cvUrl: "assets/CV_no_ATS_Ebenhaiser_Jonathan_Caprisiano.pdf",
        navItems: [
            { href: "#hero", icon: "bx bx-home", label: "Home" },
            { href: "#about", icon: "bx bx-user", label: "About" },
            { href: "#skills", icon: "bx bx-star", label: "Skills" },
            { href: "#resume", icon: "bx bx-file-blank", label: "Resume" },
            { href: "#portfolio", icon: "bx bx-book-content", label: "Portfolio" },
            { href: "#recommendation", icon: "bx bx-comment", label: "Recommendations" },
            { href: "#contact", icon: "bx bx-envelope", label: "Contact" }
        ],
        socialLinks: [
            { url: "mailto:ebenhaiser@gmail.com", icon: "bi bi-envelope", className: "email" },
            { url: "https://github.com/ebenhaiser", icon: "bx bxl-github", className: "github" },
            { url: "https://www.linkedin.com/in/ebenhaiser-caprisiano/", icon: "bx bxl-linkedin", className: "linkedin" },
            { url: "assets/CV_no_ATS_Ebenhaiser_Jonathan_Caprisiano.pdf", icon: "bi bi-download", className: "download" }
        ]
    },
    hero: {
        title: "Hi!<br>I'm Ebenhaiser Jonathan Caprisiano",
        subtitle: "Software Developer | Full-Stack Developer | Enterprise Applications"
    },
    about: {
        image: "assets/img/Eben7.jpeg",
        birthDate: "2001-04-12",
        details: [
            { label: "Name", value: "Ebenhaiser Jonathan Caprisiano" },
            { label: "Date of Birth", value: "", placeholderId: "formatted-birthdate" },
            { label: "City", value: "Jakarta, Indonesia" },
            { label: "Age", value: "", placeholderId: "age" },
            { label: "Degree", value: "Master of Computer Science" },
            { label: "Hobby", value: "Playing Guitar" },
            { label: "Email", value: "ebenhaiser@gmail.com", url: "mailto:ebenhaiser@gmail.com" },
            { label: "GitHub", value: "https://github.com/ebenhaiser", url: "https://github.com/ebenhaiser" },
            { label: "Linkedin", value: "linkedin.com/in/ebenhaiser-caprisiano", url: "https://www.linkedin.com/in/ebenhaiser-caprisiano/" }
        ]
    },
    skills: {
        hardSkills: [
            "C#", "ASP.NET", "DevExtreme", "NLP", "RNN", "CNN", "Text Mining", "Machine Learning", "Deep Learning", "AI", "UI Design", "UX Design", "Figma", "CSS", "HTML", "JavaScript", "Python", "Bootstrap", "C++", "SQL", "PHP", "Laravel", "Ms Office", "Adobe Premiere", "Java"
        ],
        softSkills: [
            "Teamwork", "Problem-Solving", "Time Management", "Adaptability", "Critical Thinking", "Creativity", "Work Ethic", "Decision Making", "Networking", "Empathy", "Innovation", "Persuasion", "Intercultural Competence", "Respectfulness", "Analytical Skills"
        ]
    },
    resume: {
        name: "Ebenhaiser Jonathan Caprisiano",
        summaryText: "Master of Computer Science graduate with professional experience as a Software Developer, specializing in full-stack web development and enterprise applications. Experienced in developing and maintaining secure, reliable systems in regulated environments using ASP.NET (.NET Framework), C#, Laravel, and modern web technologies. Skilled in backend logic, data validation, and dynamic user interface development, with hands-on experience in enterprise systems, POS applications, and multi-user web platforms. Strong analytical mindset, adaptable, and accustomed to collaborating in cross-functional teams while supporting deployment and production operations.",
        summaryContacts: [
            { text: "Jakarta, Indonesia" },
            { text: "ebenhaiser@gmail.com", href: "mailto:ebenhaiser@gmail.com" },
            { text: "www.linkedin.com/in/ebenhaiser-caprisiano", href: "https://www.linkedin.com/in/ebenhaiser-caprisiano/" }
        ],
        education: [
            {
                title: "Master of Computer Science",
                period: "2022 - 2024",
                institution: "Binus University, Indonesia",
                details: "I graduated with a master's degree in computer science focusing on Artificial Intelligence, Advanced Database, and IT Management. My studies equipped me with in-depth knowledge and practical skills in these areas, preparing me for advanced roles in the tech industry."
            },
            {
                title: "Bachelor of Computer Science",
                period: "2019 - 2023",
                institution: "Binus University, Indonesia",
                details: "Obtained a Bachelor of Computer Science from Bina Nusantara University, gaining a strong grounding in programming, algorithms, software development, and database management."
            }
        ],
        publications: [
            {
                title: "Bulletin of Electrical Engineering and Informatics (BEEI)",
                period: "June 2022",
                details: "Classifying possible hate speech from text with deep learning and ensemble on embedding method",
                link: "https://doi.org/10.11591/eei.v13i3.6041"
            }
        ],
        workExperience: [
            {
                title: "Software Developer",
                period: "Aug. 2025 - Present",
                institution: "PT. Datacaraka Solusindo",
                details: "Involved in the development and maintenance of enterprise-level applications in regulated environments, focusing on system reliability, data integrity, and secure application behavior.",
                bullets: [
                    "Developed and maintained application modules using ASP.NET (.NET Framework) and C#",
                    "Implemented data validation, business logic, and secure data handling",
                    "Built dynamic forms and UI components using DevExpress",
                    "Supported testing, deployment, and production issue analysis"
                ]
            },
            {
                title: "Freelance Web Developer",
                period: "May 2024 - Present",
                institution: "PT. Tumpang Sari Doa",
                details: "Developed a company profile website for a guest house and women’s boarding house business, showcasing detailed descriptions of facilities and rooms.",
                bullets: [
                    "Handled full-stack development including front-end using Bootstrap and back-end admin features with Laravel and Livewire.",
                    "Solely responsible for the website’s development, maintenance, and updates, managing the entire project independently."
                ]
            },
            {
                title: "IT Support Staff - Internship",
                period: "Sept. 2021 - Aug. 2022",
                institution: "PT. Morita Tjokro Gearindo",
                details: "Provided IT support to ensure office infrastructure meets workplace needs, assisting employees with computer-related issues.",
                bullets: [
                    "Provide IT support to ensure office infrastructure meets workplace needs, assisting employees with computer-related issues.",
                    "Build server hardware to meet business industry demands, including constructing new servers capable of accessing data from damaged database drives.",
                    "Connect various hardware devices to computers wirelessly to improve flexibility and efficiency in the workplace."
                ]
            }
        ],
        certificates: [
            {
                title: "Junior Web Developer",
                period: "Jan. 2025 - Jan. 2028",
                institution: "National Professional Certification Agency",
                details: "Certificate Number 58200 2513 4 0016863 2025"
            },
            {
                title: "Web Programming",
                period: "Nov. 2024",
                institution: "Central Jakarta Regional Workforce Training Center",
                details: "Credential ID T2.57.WPR.KT.02.03.240975"
            },
            {
                title: "ACA Cloud Computing Certification",
                period: "Aug. 2023 - Aug. 2025",
                institution: "Alibaba Cloud",
                details: "Credential ID IACA01230800098425L"
            }
        ]
    },
    contact: {
        email: { label: "Email", value: "ebenhaiser@gmail.com", href: "mailto:ebenhaiser@gmail.com" },
        github: { label: "GitHub", value: "https://github.com/ebenhaiser", href: "https://github.com/ebenhaiser" },
        linkedin: { label: "Linkedin", value: "https://www.linkedin.com/in/ebenhaiser-caprisiano/", href: "https://www.linkedin.com/in/ebenhaiser-caprisiano/" },
        cv: { label: "Curriculum Vitae", value: "Download Here", href: "assets/CV_no_ATS_Ebenhaiser_Jonathan_Caprisiano.pdf" }
    }
};

const recommendation = {
    people: [{
            id: 1,
            name: "Ramadhian Eka Putra",
            image: "assets/img/RamadhianEkaPutra.jpg",
            words: "Ebenhaiser is a great person in group projects. He is adept in writing research paper and keen to explore new things about computer science mainly in deep learning about text classifications. He also has a very good conversational skills in communicating many university projects.",
            affiliation: "Binus University",
        },

        {
            id: 2,
            name: "Wishnu Anindito",
            image: "assets/img/WishnuAnindito.jpg",
            words: "I had the pleasure of working closely with Ebenhaiser during their time as a master's student, and I can confidently say that they are an exceptional individual. Ebenhaiser's dedication to their work is truly impressive; they consistently demonstrate a strong work ethic and a willingness to go above and beyond to achieve excellence. One of Ebenhaiser's standout qualities is their ability to collaborate effectively with their working partners. They possess excellent communication skills and are always open to feedback and ideas from others. Ebenhaiser's collaborative nature not only fosters a positive working environment but also leads to successful outcomes. I have no doubt that Ebenhaiser will continue to thrive in their future endeavors, and I wholeheartedly recommend them for any opportunity they pursue.",
            affiliation: "Binus University",
        },

        {
            id: 3,
            name: "Brilyan Nathanael Rumahorbo",
            image: "assets/img/BrilyanNathanaelRumahorbo.jpg",
            words: "Ebenhaiser is a dependable and proactive individual who consistently completes his college projects on time. He exhibits a strong passion for technology, eagerly embracing new learning opportunities. Additionally, he actively supports his team members in achieving collective goals during group projects. I am delighted to have the opportunity to learn alongside Ebenhaiser and have gained valuable insights from him.",
            affiliation: "Binus University",
        },
    ]
};

const portfolio = {
    projects: [{
            id: 1,
            dataTarget: "coffeeBrew",
            title: "CoffeeBrew – POS System for Coffee Shops",
            coverImage: "assets/img/portfolio/CoffeeBrew/CoffeeBrew1.png",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/CoffeeBrew/CoffeeBrew1.png",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/CoffeeBrew/CoffeeBrew2.png",
                },
                {
                    imageId: 3,
                    imageCarouselId: "2",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/CoffeeBrew/CoffeeBrew3.png",
                },
                {
                    imageId: 4,
                    imageCarouselId: "3",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/CoffeeBrew/CoffeeBrew4.png",
                },
            ],
            category: "Web Development",
            client: "Self Project",
            date: "Feb 2025 - Mar 2025",
            url: "<li><strong>Project URL</strong>: <a href=\"https://github.com/ebenhaiser/CoffeeBrew\" target=\"_blank\">https://github.com/ebenhaiser/CoffeeBrew</a></li>",
            description: "I developed CoffeeBrew, a Point of Sale (POS) system for coffee shops built with Laravel 12 and Livewire, designed to streamline the ordering and transaction process. It features QR code ordering, allowing customers to scan a code based on their table number and place orders directly from their phones. Admins can manage dynamic menus, handle order processing, calculate totals, and generate receipts. The system also includes role-based access control, where customers can order and admins manage all operations. CoffeeBrew improves efficiency and enhances the customer experience by minimizing manual input and ensuring a smooth workflow.",
        },
        {
            id: 2,
            dataTarget: "writely",
            title: "Writely– Multi - User Blogging Platform ",
            coverImage: "assets/img/portfolio/Writely/Writely1.png",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/Writely/Writely1.png",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely2.png",
                },
                {
                    imageId: 3,
                    imageCarouselId: "2",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely3.png",
                },
                {
                    imageId: 4,
                    imageCarouselId: "3",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely4.png",
                },
                {
                    imageId: 5,
                    imageCarouselId: "4",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely5.png",
                },
                {
                    imageId: 6,
                    imageCarouselId: "5",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely6.png",
                },
                {
                    imageId: 7,
                    imageCarouselId: "6",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely7.png",
                },
                {
                    imageId: 8,
                    imageCarouselId: "7",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/Writely/Writely8.png",
                },
            ],
            category: "Web Development",
            client: "Self Project",
            date: "Jan. 2025",
            url: "<li><strong>Project URL</strong>: <a href=\"https://github.com/ebenhaiser/writely-project\" target=\"_blank\">https://github.com/ebenhaiser/writely-project</a></li>",
            description: "Writely is a dynamic multi-user blogging platform built with Laravel 11 for secure data management and a responsive frontend using HTML, CSS, JavaScript, jQuery, Bootstrap, and AJAX. It enables users to create, share, and engage with articles through a seamless interface, featuring customizable thumbnails, categories, and real-time liking and commenting. Users can follow/unfollow others to personalize their content feed, manage their profiles, edit or delete articles, and even chat instantly via an AJAX-powered messaging system. This project showcases my expertise in developing interactive web applications with real-time features and a scalable backend.",
        },
        {
            id: 3,
            dataTarget: "laundryFaith",
            title: "POS System for Laundry Administration",
            coverImage: "assets/img/portfolio/laundryFaith/laundryFaith1.png",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/laundryFaith/laundryFaith1.png",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/laundryFaith/laundryFaith2.png",
                },
                {
                    imageId: 3,
                    imageCarouselId: "2",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/laundryFaith/laundryFaith3.png",
                },
                {
                    imageId: 4,
                    imageCarouselId: "3",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/laundryFaith/laundryFaith4.png",
                },
                {
                    imageId: 5,
                    imageCarouselId: "4",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/laundryFaith/laundryFaith5.png",
                },
            ],
            category: "Web Development",
            client: "Web Programming Training at Pusat Pelatihan Kerja Daerah Jakarta Pusat",
            date: "Nov. 2024",
            url: "<li><strong>Project URL</strong>: <a href=\"https://github.com/ebenhaiser/final-ujikom-ppkd-w10\" target=\"_blank\">https://github.com/ebenhaiser/final-ujikom-ppkd-w10</a></li>",
            description: "I developed a Web-Based POS Application for laundry business administration as part of the final competency assessment in the Web Programming Training at Pusat Pelatihan Kerja Daerah Jakarta Pusat. This application enables CRUD operations, order calculations, and efficient management of customer, admin, and order data. Built using HTML, Bootstrap, jQuery, and PHP with a MySQLi database, it runs on the XAMPP server environment. This project showcases my ability to create functional and user-friendly web applications tailored for business needs.",
        },
        {
            id: 4,
            dataTarget: "tumpangSariDoa",
            title: "Tumpang Sari Doa",
            coverImage: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa1.png",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa1.png",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa2.png",
                },
                {
                    imageId: 3,
                    imageCarouselId: "2",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa3.png",
                },
                {
                    imageId: 4,
                    imageCarouselId: "3",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa4.png",
                },
                {
                    imageId: 5,
                    imageCarouselId: "4",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa5.png",
                },
                {
                    imageId: 6,
                    imageCarouselId: "5",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/tumpangSariDoa/tumpangSariDoa6.png",
                },
            ],
            category: "Web Development",
            client: "Tumpang Sari Doa",
            date: "Jun. 2024",
            url: "<li><strong>Project URL</strong>: <a href=\"https://github.com/ebenhaiser/tumpangsari.github.io\" target=\"_blank\">https://github.com/ebenhaiser/tumpangsari.github.io</a></li>",
            description: "In this project, I was assigned to be a frontend developer tasked with creating a website for Tumpang Sari Doa accommodations. The goal is to enhance the marketing efforts of this accommodation business by providing comprehensive information about the property. The website is designed to be user-friendly across various platforms, including computers and smartphones.",
        },
        {
            id: 5,
            dataTarget: "hybridWordEmbedding",
            title: "Hybrid Word Embedding",
            coverImage: "assets/img/portfolio/hybridWordEmbedding/hybridWordEmbedding.png",
            images: [{
                imageId: 1,
                imageCarouselId: "0",
                imageActive: true,
                imagePath: "assets/img/portfolio/hybridWordEmbedding/hybridWordEmbedding.png",
            }, ],
            category: "Natural Language Processing",
            client: "Binus University",
            date: "Dec. 2023 - Jan.2024",
            url: "<li><strong>Project URL</strong>: <a href=\"https://github.com/ebenhaiser/tumpangsari.github.io\" target=\"_blank\">https://github.com/ebenhaiser/Enhancing-Offensive-Text-Classification-from-Social-Media-Using-Ensemble-Embedding-Approach</a></li>",
            description: "I developed a natural language processing program aimed at text classification, specifically targeting the identification of offensive content in social media. The program implements a hybrid embedding model that combines FastText and TF-IDF techniques to enhance accuracy. Using Python and TensorFlow Keras, I built and trained the model, resulting in improved F1 Macro scores across three datasets. This achievement was made possible by leveraging the advantages of the hybrid embedding approach.",
        },
        {
            id: 6,
            dataTarget: "quickTask",
            title: "Quick Task",
            coverImage: "assets/img/portfolio/QuickTask/QuickTaskIndex.png",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/QuickTask/QuickTask1.PNG",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/QuickTask/QuickTask2.PNG",
                },
            ],
            category: "Web Design",
            client: "Binus University",
            date: "Jul. 2023",
            url: "",
            description: "We developed a simple web-based application to help users manage and monitor their daily tasks and activities. The application allows users to save tasks, categorized into three priority levels with due dates set by the user. This web-based application was built using the PHP framework Laravel.",
        },
        {
            id: 7,
            dataTarget: "ticketsId",
            title: "TicketsID",
            coverImage: "assets/img/portfolio/TicketsID/TicketsID1.JPG",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/TicketsID/TicketsID1.JPG",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/TicketsID/TicketsID2.JPG",
                },
                {
                    imageId: 3,
                    imageCarouselId: "2",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/TicketsID/TicketsID3.JPG",
                },
                {
                    imageId: 4,
                    imageCarouselId: "3",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/TicketsID/TicketsID4.JPG",
                },
                {
                    imageId: 5,
                    imageCarouselId: "4",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/TicketsID/TicketsID5.JPG",
                },
            ],
            category: "Web Design",
            client: "Binus University",
            date: "Sep. 2022",
            url: "",
            description: "In this project, I worked as a UI designer to create a mobile application called TicketsID, which allows users to book cinema tickets online while also providing information about movie highlights and news. My main goal was to create a straightforward and beautiful interface that provides a smooth and efficient user experience across all mobile operating systems. The goal is to produce a responsive and user-friendly UI design that fits the needs of the users.",
        },
        {
            id: 8,
            dataTarget: "nikkoClass",
            title: "NikkoClass",
            coverImage: "assets/img/portfolio/NikkoClass/NikkoClassIndex.png",
            images: [{
                    imageId: 1,
                    imageCarouselId: "0",
                    imageActive: true,
                    imagePath: "assets/img/portfolio/NikkoClass/NikkoClass1.PNG",
                },
                {
                    imageId: 2,
                    imageCarouselId: "1",
                    imageActive: false,
                    imagePath: "assets/img/portfolio/NikkoClass/NikkoClass2.PNG",
                },
            ],
            category: "Web Design",
            client: "Binus University",
            date: "Feb. 2021",
            url: "",
            description: "In this project, me and my team created NikkoClass, an online application designed to support and help users in learning about filmmaking for individuals interested in film production. The software attempts to teach users how to make films and how production companies work. Users can attend classes customized to the positions they want to pursue in film production. In this project, I served as UI designer, creating a basic and easy-to-understand interface for people of all backgrounds. This online application is also designed to be easily accessible across a variety of platforms and devices.",
        },
    ],
};

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatDate(dateString) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

function renderHeader() {
    const profileName = document.getElementById('profile-name');
    const profileImage = document.getElementById('profile-image');
    const socialLinks = document.getElementById('header-social-links');
    const navMenuList = document.getElementById('nav-menu-list');

    if (profileName) profileName.innerHTML = `<a href="#">${escapeHtml(siteConfig.profile.name)}</a>`;
    if (profileImage) profileImage.src = siteConfig.profile.image;
    if (socialLinks) {
        socialLinks.innerHTML = siteConfig.profile.socialLinks.map((link) => `
            <a href="${escapeHtml(link.url)}" target="_blank" class="${escapeHtml(link.className)}">
                <i class="${escapeHtml(link.icon)}"></i>
            </a>
        `).join('');
    }
    if (navMenuList) {
        navMenuList.innerHTML = siteConfig.profile.navItems.map((item) => `
            <li><a href="${escapeHtml(item.href)}" class="nav-link scrollto${item.href === '#hero' ? ' active' : ''}"><i class="${escapeHtml(item.icon)}"></i> <span>${escapeHtml(item.label)}</span></a></li>
        `).join('');
    }
}

function renderHero() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (heroTitle) heroTitle.innerHTML = siteConfig.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = siteConfig.hero.subtitle;
}

function renderAbout() {
    const aboutImage = document.getElementById('about-image');
    const aboutDetails = document.getElementById('about-details');

    if (aboutImage) aboutImage.src = siteConfig.about.image;
    if (aboutDetails) {
        aboutDetails.innerHTML = siteConfig.about.details.map((item) => {
            if (item.placeholderId) {
                return `<li><i class="bi bi-chevron-right"></i> <strong>${escapeHtml(item.label)}:</strong> <span id="${escapeHtml(item.placeholderId)}"></span></li>`;
            }

            if (item.url) {
                return `<li><i class="bi bi-chevron-right"></i> <strong>${escapeHtml(item.label)}:</strong> <a href="${escapeHtml(item.url)}" target="_blank">${escapeHtml(item.value)}</a></li>`;
            }

            return `<li><i class="bi bi-chevron-right"></i> <strong>${escapeHtml(item.label)}:</strong> <span>${escapeHtml(item.value)}</span></li>`;
        }).join('');
    }
}

function renderSkills() {
    const hardSkills = document.getElementById('hard-skills');
    const softSkills = document.getElementById('soft-skills');

    if (hardSkills) {
        hardSkills.innerHTML = siteConfig.skills.hardSkills.map((skill) => `<h3>${escapeHtml(skill)}</h3>`).join('');
    }

    if (softSkills) {
        softSkills.innerHTML = siteConfig.skills.softSkills.map((skill) => `<h3>${escapeHtml(skill)}</h3>`).join('');
    }
}

function renderResume() {
    const resumeName = document.getElementById('resume-name');
    const resumeSummary = document.getElementById('resume-summary-text');
    const summaryContacts = document.getElementById('resume-summary-contact');
    const educationItems = document.getElementById('education-items');
    const publicationItems = document.getElementById('publication-items');
    const experienceItems = document.getElementById('experience-items');
    const certificateItems = document.getElementById('certificate-items');

    if (resumeName) resumeName.textContent = siteConfig.resume.name;
    if (resumeSummary) resumeSummary.innerHTML = `<em>${escapeHtml(siteConfig.resume.summaryText)}</em>`;

    if (summaryContacts) {
        summaryContacts.innerHTML = siteConfig.resume.summaryContacts.map((item) => {
            if (item.href) {
                return `<li><a href="${escapeHtml(item.href)}" target="_blank">${escapeHtml(item.text)}</a></li>`;
            }
            return `<li>${escapeHtml(item.text)}</li>`;
        }).join('');
    }

    if (educationItems) {
        educationItems.innerHTML = siteConfig.resume.education.map((item) => `
            <div class="resume-item">
                <h4>${escapeHtml(item.title)}</h4>
                <h5>${escapeHtml(item.period)}</h5>
                <p><em>${escapeHtml(item.institution)}</em></p>
                <p>${escapeHtml(item.details)}</p>
            </div>
        `).join('');
    }

    if (publicationItems) {
        publicationItems.innerHTML = siteConfig.resume.publications.map((item) => `
            <div class="resume-item">
                <h4>${escapeHtml(item.title)}</h4>
                <h5>${escapeHtml(item.period)}</h5>
                <p>${escapeHtml(item.details)}</p>
                <a href="${escapeHtml(item.link)}" target="_blank">${escapeHtml(item.link)}</a>
            </div>
        `).join('');
    }

    if (experienceItems) {
        experienceItems.innerHTML = siteConfig.resume.workExperience.map((item) => `
            <div class="resume-item">
                <h4>${escapeHtml(item.title)}</h4>
                <h5>${escapeHtml(item.period)}</h5>
                <p><em>${escapeHtml(item.institution)}</em></p>
                <p>${escapeHtml(item.details)}</p>
                <ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
            </div>
        `).join('');
    }

    if (certificateItems) {
        certificateItems.innerHTML = siteConfig.resume.certificates.map((item) => `
            <div class="resume-item">
                <h4>${escapeHtml(item.title)}</h4>
                <h5>${escapeHtml(item.period)}</h5>
                <p><i>${escapeHtml(item.institution)}</i></p>
                <p>${escapeHtml(item.details)}</p>
            </div>
        `).join('');
    }
}

function renderContact() {
    const contactEmail = document.getElementById('contact-email');
    const contactGithub = document.getElementById('contact-github');
    const contactLinkedin = document.getElementById('contact-linkedin');
    const contactCv = document.getElementById('contact-cv');

    if (contactEmail) {
        contactEmail.innerHTML = `
            <a href="${escapeHtml(siteConfig.contact.email.href)}" target="_blank" class="email"><i class="bi bi-envelope"></i></a>
            <h4>Email:</h4>
            <p>${escapeHtml(siteConfig.contact.email.value)}</p>
        `;
    }

    if (contactGithub) {
        contactGithub.innerHTML = `
            <a href="${escapeHtml(siteConfig.contact.github.href)}" target="_blank" class="github"><i class="bx bxl-github"></i></a>
            <h4>GitHub:</h4>
            <p>${escapeHtml(siteConfig.contact.github.value)}</p>
        `;
    }

    if (contactLinkedin) {
        contactLinkedin.innerHTML = `
            <a href="${escapeHtml(siteConfig.contact.linkedin.href)}" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            <h4>Linkedin:</h4>
            <p>${escapeHtml(siteConfig.contact.linkedin.value)}</p>
        `;
    }

    if (contactCv) {
        contactCv.innerHTML = `
            <a href="${escapeHtml(siteConfig.contact.cv.href)}" target="_blank" class="download"><i class="bi bi-download"></i></a>
            <h4>Curriculum Vitae:</h4>
            <p><a href="${escapeHtml(siteConfig.contact.cv.href)}" target="_blank">${escapeHtml(siteConfig.contact.cv.value)}</a></p>
        `;
    }
}

function renderRecommendations() {
    const containerRecommendation = document.getElementById('container-recommendation');

    if (!containerRecommendation) return;

    const reccom = recommendation.people.map((person) => `
        <div class="swiper-slide">
            <div class="testimonial-item" data-aos="fade-up">
                <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    ${escapeHtml(person.words)}
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="${escapeHtml(person.image)}" class="testimonial-img" alt="${escapeHtml(person.name)}">
                <h3>${escapeHtml(person.name)}</h3>
                <h4>${escapeHtml(person.affiliation)}</h4>
            </div>
        </div>
    `).join('');

    containerRecommendation.innerHTML = reccom;
}

function renderPortfolio() {
    const portfolioItem = document.getElementById('container-portfolio');
    const portfolioModal = document.getElementById('portfolio-modal');

    if (portfolioItem) {
        portfolioItem.innerHTML = portfolio.projects.map((item) => `
            <div class="d-flex col-md-4 justify-content-center" data-aos="fade-up">
                <div class="portfolio-item">
                    <div class="image-and-title">
                        <h3>${escapeHtml(item.title)}</h3>
                        <img src="${escapeHtml(item.coverImage)}" class="img-fluid" alt="${escapeHtml(item.dataTarget)}">
                    </div>
                    <button type="button" class="btn btn-primary btn-details" data-bs-toggle="modal" data-bs-target="#portfolio-${escapeHtml(item.dataTarget)}">
                        Read More
                    </button>
                </div>
            </div>
        `).join('');
    }

    if (portfolioModal) {
        portfolioModal.innerHTML = portfolio.projects.map((item) => {
            let carouselItems = '';
            let dataDsSlideTo = '';

            item.images.forEach((image, index) => {
                const isActive = index === 0 ? 'active' : '';
                carouselItems += `<div class="carousel-item ${isActive}">
                    <img src="${escapeHtml(image.imagePath)}" class="d-block w-100" alt="Slide ${escapeHtml(image.imageId)}">
                </div>`;
                dataDsSlideTo += `<button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="${escapeHtml(image.imageCarouselId)}" class="${isActive}" aria-current="${isActive ? 'true' : ''}" aria-label="Slide ${escapeHtml(image.imageCarouselId)}"></button>`;
            });

            return `<div class="modal fade" id="portfolio-${escapeHtml(item.dataTarget)}" tabindex="-1" role="dialog" aria-labelledby="portfolio-modal-label" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="portfolio-modal-label">${escapeHtml(item.title)}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselExampleIndicators${item.id}" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">${dataDsSlideTo}</div>
                                <div class="carousel-inner">${carouselItems}</div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <br>
                            <div class="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong>: ${escapeHtml(item.category)}</li>
                                    <li><strong>Client</strong>: ${escapeHtml(item.client)}</li>
                                    <li><strong>Project Month</strong>: ${escapeHtml(item.date)}</li>
                                    ${item.url}
                                </ul>
                            </div>
                            <div class="portfolio-description">
                                <h2>Detail</h2>
                                <p>${escapeHtml(item.description)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');
    }
}

function renderSiteContent() {
    renderHeader();
    renderHero();
    renderAbout();
    renderSkills();
    renderResume();
    renderContact();
    renderRecommendations();
    renderPortfolio();
}

document.addEventListener('DOMContentLoaded', renderSiteContent);