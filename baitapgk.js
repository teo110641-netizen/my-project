/* PHẦN 1 — DoodleEffect   */
const DoodleEffect = (() => {
  const init = () => {
    document.querySelectorAll(".doodle").forEach(el => {
      el.addEventListener("mouseover", () => el.style.transform = "scale(1.3)");
      el.addEventListener("mouseout", () => el.style.transform = "scale(1)");
    });
  };
  return { init };
})();


/*PHẦN 2 ProjectsToggle  */
const ProjectsToggle = (() => {
  const init = () => {
    const btn = document.getElementById("btnProjects");
    const section = document.getElementById("projects");
    if (!btn || !section) return;
    btn.addEventListener("click", () => {
      const isOpen = section.style.display === "block";
      section.style.display = isOpen ? "none" : "block";
      if (!isOpen) section.scrollIntoView({ behavior: "smooth" });
    });
  };
  return { init };
})();


/* PHẦN 3 */
const ContactPopup = (() => {
  const init = () => {
    const popup = document.getElementById("contactPopup");
    if (!popup) return;
    const contactBtn = document.getElementById("btnContact");
    const openNav = document.getElementById("openContact");
    const closeBtn = document.getElementById("closePopup");

    const open = () => popup.style.display = "flex";
    const close = () => popup.style.display = "none";

    contactBtn?.addEventListener("click", open);
    openNav?.addEventListener("click", e => { e.preventDefault(); open(); });
    closeBtn?.addEventListener("click", close);
    popup.addEventListener("click", e => { if (e.target === popup) close(); });
  };
  return { init };
})();


/* PHẦN 4  */
const HeaderSlider = (() => {
  let current = 0, slides, count;

  const move = step => {
    current = (current + step + count) % count;
    slides.style.transform = `translateX(-${current * 100}%)`;
  };

  const init = () => {
    slides = document.querySelector(".slides");
    if (!slides) return;
    count = document.querySelectorAll(".slide").length;
    document.querySelector(".next")?.addEventListener("click", () => move(1));
    document.querySelector(".prev")?.addEventListener("click", () => move(-1));
    setInterval(() => move(1), 4000);
  };

  return { init };
})();


/*  PHẦN 5 */
const ProjectDetailSlider = (() => {
  const data = [
    { image: "Mask Group.png", title: "Award winning real estate company in Dubai", description: "Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque.", stats: { projects: "34+", years: "20y", ongoing: "12" } },
    { image: "Card 2.png", title: "Luxury Villa with Sea View", description: "Phasellus vitae metus in nulla cursus sollicitudin.", stats: { projects: "28+", years: "15y", ongoing: "9" } },
    { image: "Card 3.png", title: "Modern Apartment Complex", description: "Mauris dignissim metus sit amet vehicula posuere.", stats: { projects: "40+", years: "25y", ongoing: "20" } }
  ];
  let index = 0;

  const update = () => {
    document.getElementById("project-image").src = data[index].image;
    document.getElementById("project-title").textContent = data[index].title;
    document.getElementById("project-description").textContent = data[index].description;
    document.getElementById("stat-projects").textContent = data[index].stats.projects;
    document.getElementById("stat-years").textContent = data[index].stats.years;
    document.getElementById("stat-ongoing").textContent = data[index].stats.ongoing;
  };

  const init = () => {
    if (!document.getElementById("project-image")) return;
    document.getElementById("prev-btn").addEventListener("click", () => {
      index = (index - 1 + data.length) % data.length;
      update();
    });
    document.getElementById("next-btn").addEventListener("click", () => {
      index = (index + 1) % data.length;
      update();
    });
    update();
  };

  return { init };
})();


/*  PHẦN 6 */
const AddProjectList = (() => {
  const init = () => {
    const list = document.getElementById("project-list");
    if (!list) return;
    document.querySelectorAll(".add-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const title = btn.closest(".project-card").querySelector("h4").innerText;
        const li = document.createElement("li");
        li.textContent = title;
        list.appendChild(li);
      });
    });
  };
  return { init };
})();


/*  PHẦN 7*/
const ReviewSlider = (() => {
  const reviews = [
    { img: "images.jpg", title: "Dream house isn’t dream anymore", text: "Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque.", author: "Brooklyn Simmons", job: "Artist" },
    { img: "images (1).jpg", title: "This changed everything for us", text: "Cras fringilla convallis elit, at eleifend sapien varius sed.", author: "Esther Howard", job: "Designer" },
    { img: "teo.jpg", title: "Best decision we ever made", text: "Curabitur nec nulla quis justo lacinia viverra.", author: "Cody Fisher", job: "Musician" }
  ];
  let i = 0, auto;

  const fadeIn = el => {
    el.classList.remove("fade");
    void el.offsetWidth;
    el.classList.add("fade");
  };

  const render = () => {
    document.getElementById("review-img").src = reviews[i].img;
    document.getElementById("review-title").textContent = reviews[i].title;
    document.getElementById("review-text").textContent = reviews[i].text;
    document.getElementById("review-author").textContent = reviews[i].author;
    document.getElementById("review-job").textContent = reviews[i].job;
    fadeIn(document.querySelector(".review-card"));
  };

  const next = () => { i = (i + 1) % reviews.length; render(); };
  const prev = () => { i = (i - 1 + reviews.length) % reviews.length; render(); };
  const autoPlay = () => { auto = setInterval(next, 5000); };
  const stopAuto = () => clearInterval(auto);

  const init = () => {
    if (!document.getElementById("review-img")) return;
    document.querySelector(".left")?.addEventListener("click", prev);
    document.querySelector(".right")?.addEventListener("click", next);
    const card = document.querySelector(".review-card");
    card.addEventListener("mouseover", stopAuto);
    card.addEventListener("mouseout", autoPlay);
    render();
    autoPlay();
  };

  return { init };
})();


/*  PHẦN 8  */
const ScrollFade = (() => {
  const init = () => {
    const items = document.querySelectorAll(".fade-in");
    const check = () => {
      items.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100)
          el.classList.add("show");
      });
    };
    window.addEventListener("scroll", check);
    window.addEventListener("load", check);
  };
  return { init };
})();

/* PHẦN 9 */
const EcoApartment = (() => {
  const init = () => {
    const container = document.querySelector(".eco-slide .eco-images");
    if (!container) return;
    const imgs = ["Card 2.png", "Card 3.png", "left bg.png"];
    imgs.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Eco Apartment";
      img.classList.add("eco-img");
      container.appendChild(img);
    });
  };
  return { init };
})();

/* MASTER INIT  */
document.addEventListener("DOMContentLoaded", () => {
  DoodleEffect.init();
  ProjectsToggle.init();
  ContactPopup.init();
  HeaderSlider.init();
  ProjectDetailSlider.init();
  AddProjectList.init();
  ReviewSlider.init();
  ScrollFade.init();
  EcoApartment.init();
});
/* PHẦN 10 — Gửi Gmail & Thông báo Tiếng Việt (Hiển thị giữa màn hình) */
/* PHẦN 10 — Gửi Gmail & Log sang Admin */
const SendMailHandler = (() => {

  const saveLog = (name, email, message, status) => {
    const logs = JSON.parse(localStorage.getItem("contact_logs") || "[]");

    logs.push({
      name,
      email,
      message,
      status,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("contact_logs", JSON.stringify(logs));
  };

  const showMsg = (text, type = "success") => {
    const box = document.createElement("div");
    box.className = "message-box " + type;
    box.textContent = text;

    document.body.appendChild(box);
    setTimeout(() => box.classList.add("show"), 50);

    setTimeout(() => {
      box.classList.remove("show");
      setTimeout(() => box.remove(), 400);
    }, 2500);
  };

  const validate = (name, email, message) => {
    if (!name || name.trim().length < 2) {
      showMsg("❗ Tên quá ngắn!", "error");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      showMsg("❗ Email không hợp lệ!", "error");
      return false;
    }
    if (message.trim().length < 10) {
      showMsg("❗ Tin nhắn phải dài ít nhất 10 ký tự.", "error");
      return false;
    }
    return true;
  };

  const init = () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    emailjs.init("YOUR_PUBLIC_KEY");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.querySelector("#name, #cf_name")?.value || "";
      const email = form.querySelector("#email, #cf_email")?.value || "";
      const message = form.querySelector("#message, #cf_message")?.value || "";

      if (!validate(name, email, message)) return;

      const templateParams = { name, email, message };

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => {
        showMsg("📧 Gửi email thành công!", "success");

        // ⭐ LƯU LOG THÀNH CÔNG
        saveLog(name, email, message, "Thành công");

        form.reset();
      })
      .catch(() => {
        showMsg("❌ Gửi email thất bại!", "error");

        // ⭐ LƯU LOG THẤT BẠI
        saveLog(name, email, message, "Thất bại");
      });
    });
  };

  return { init };
})();



/* PHẦN 11 — Chuyển đến Admin Page */
const AdminPageLink = (() => {
  const init = () => {
    const link = document.getElementById("adminLink");
    if (!link) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      window.location.href = "admin.html"; // Đảm bảo bạn có file admin.html
    });
  };
  return { init };
})();
SendMailHandler.init();
(function () {
  const tableBody = document.querySelector('#logTable tbody');
  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const exportBtn = document.getElementById('exportBtn');

  function loadLogs() {
    return JSON.parse(localStorage.getItem('contact_logs') || '[]');
  }
  function saveLogs(logs) { localStorage.setItem('contact_logs', JSON.stringify(logs)); }

  function render() {
    const keyword = (searchInput.value || '').toLowerCase();
    const status = statusFilter.value;
    const logs = loadLogs();
    tableBody.innerHTML = '';

    logs.forEach((log, idx) => {
      if (keyword) {
        const textToSearch = (log.name + ' ' + log.email + ' ' + log.message + ' ' + log.time).toLowerCase();
        if (!textToSearch.includes(keyword)) return;
      }
      if (status !== 'all' && log.status !== status) return;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx+1}</td>
        <td class="small">${log.time}</td>
        <td>${escapeHtml(log.name)}</td>
        <td>${escapeHtml(log.email)}</td>
        <td>${escapeHtml(log.message)}</td>
        <td class="${log.status === 'Thành công' ? 'status-success' : (log.status === 'Thất bại' ? 'status-fail' : '')}">${log.status}</td>
        <td>
          <button class="action-btn" data-idx="${idx}" onclick="deleteLog(${idx})">Xóa</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Delete single (exposed to window to be callable from inline onclick)
  window.deleteLog = function (index) {
    if (!confirm('Xác nhận xóa bản ghi này?')) return;
    const logs = loadLogs();
    logs.splice(index,1);
    saveLogs(logs);
    render();
  };

  clearAllBtn.addEventListener('click', () => {
    if (!confirm('Bạn có chắc muốn xóa toàn bộ nhật ký?')) return;
    localStorage.removeItem('contact_logs');
    render();
  });

  searchInput.addEventListener('input', render);
  statusFilter.addEventListener('change', render);

  // Export CSV
  exportBtn.addEventListener('click', () => {
    const logs = loadLogs();
    if (!logs.length) { alert('Không có nhật ký để xuất'); return; }
    const header = ['time','name','email','message','status'];
    const rows = logs.map(l => [l.time, l.name, l.email, l.message, l.status]);
    let csv = header.join(',') + '\n' + rows.map(r => r.map(cell => '"' + (String(cell||'').replace(/"/g,'""')) + '"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact_logs_' + (new Date().toISOString().slice(0,10)) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  });

  // small util
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]; });
  }

  // initial render
  render();
})();