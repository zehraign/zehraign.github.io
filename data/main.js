const makeTag = (text) => `<span class="tag">${text}</span>`;

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");

  if (skillsGrid) {
    const groups = Array.isArray(skillGroups) && skillGroups.length
      ? skillGroups
      : [{ title: "Toolkit", items: skills }];

    skillsGrid.innerHTML = groups
      .map(
        (group) => `
          <article class="skill-group reveal">
            <h3>${group.title}</h3>
            <div class="skill-chips">
              ${group.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
            </div>
          </article>
        `
      )
      .join("");
  }
}

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  const featuredMount = document.getElementById("project-featured");
  if (!projectsGrid || !featuredMount) return;

  const featuredProject = projects.find((project) => project.featured) || projects[0];
  const otherProjects = projects.filter((project) => project !== featuredProject);

  const renderCard = (project, variant = "default") => {
    const imageClass = project.imageFit === "contain" ? "contain" : "";
    const mediaClass = variant === "compact" ? "project-media compact" : "project-media";
    const cardClass = variant === "compact"
      ? "project-card compact reveal"
      : variant === "featured"
        ? "project-card featured reveal"
        : "project-card reveal";
    const imageBlock = project.model
      ? `
        <div class="${mediaClass} project-3d" data-model="${project.model}">
          <div class="model-fallback">3D Preview</div>
        </div>
      `
      : Array.isArray(project.gallery) && project.gallery.length
        ? `
          <div class="${mediaClass} project-gallery">
            ${project.gallery
              .map(
                (image, index) =>
                  `<img src="${image}" alt="${project.title} screen ${index + 1}" loading="lazy" />`
              )
              .join("")}
          </div>
        `
      : project.video
        ? `
          <div class="${mediaClass} project-video">
            <img class="${imageClass}" src="${project.image}" alt="${project.title}" loading="lazy" />
            <video class="project-video-el" muted loop playsinline preload="metadata">
              <source src="${project.video}" type="video/mp4" />
            </video>
          </div>
        `
        : project.image
          ? `
            <div class="${mediaClass}">
              <img class="${imageClass}" src="${project.image}" alt="${project.title}" loading="lazy" />
            </div>
          `
          : `
            <div class="${mediaClass}">
              <div class="project-placeholder">${project.title}</div>
            </div>
          `;

    const liveLink = project.live && project.live !== "#"
      ? `<a href="${project.live}" target="_blank" rel="noreferrer">Website</a>`
      : "";

    const githubLink = project.github && project.github !== "#"
      ? `<a class="secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>`
      : "";

    return `
      <article class="${cardClass}">
        ${imageBlock}
        <div class="project-body">
          ${project.note ? `<span class="project-note">${project.note}</span>` : ""}
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          ${Array.isArray(project.features) ? `
            <ul class="project-features">
              ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          ` : ""}
          <div class="project-tags">
            ${project.tags.map(makeTag).join("")}
          </div>
          ${liveLink || githubLink ? `
            <div class="project-actions">
              ${liveLink}
              ${githubLink}
            </div>
          ` : ""}
        </div>
      </article>
    `;
  };

  featuredMount.innerHTML = featuredProject ? renderCard(featuredProject, "featured") : "";
  projectsGrid.innerHTML = otherProjects.map((project) => renderCard(project, "compact")).join("");
}

function renderExperience() {
  const experienceList = document.getElementById("experience-list");
  if (!experienceList) return;

  experienceList.innerHTML = experiences
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-year">${item.year}</div>
          <h3>${item.title}</h3>
          <div class="timeline-place">${item.place}</div>
          <p class="timeline-text">${item.text}</p>
        </article>
      `
    )
    .join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupNoriHover() {
  const img = document.getElementById("nori-gif");
  if (!img) return;

  const staticSrc = img.dataset.static;
  const animatedSrc = img.dataset.animated;
  if (!staticSrc || !animatedSrc) return;

  const play = () => { img.src = animatedSrc; };
  const stop = () => { img.src = staticSrc; };

  img.addEventListener("mouseenter", play);
  img.addEventListener("mouseleave", stop);
  img.addEventListener("focus", play);
  img.addEventListener("blur", stop);
}

function setupVideoHover() {
  document.querySelectorAll(".project-video").forEach((container) => {
    const video = container.querySelector("video");
    if (!video) return;

    const play = () => {
      container.classList.add("is-playing");
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    const stop = () => {
      container.classList.remove("is-playing");
      video.pause();
      video.currentTime = 0;
    };

    container.addEventListener("mouseenter", play);
    container.addEventListener("mouseleave", stop);
    container.addEventListener("focusin", play);
    container.addEventListener("focusout", stop);
  });
}

function setupFlipWord() {
  const target = document.getElementById("flip-word");
  if (!target) return;

  const words = ["GROW", "LEARN", "ADAPT", "IMPROVE"];
  let index = words.indexOf(target.textContent.trim());
  if (index < 0) index = 0;

  window.setInterval(() => {
    target.classList.add("is-flip");
    const nextIndex = (index + 1) % words.length;
    window.setTimeout(() => {
      target.textContent = words[nextIndex];
      index = nextIndex;
    }, 350);
    window.setTimeout(() => {
      target.classList.remove("is-flip");
    }, 700);
  }, 2000);
}

function setupViewportLayout() {
  const setHeaderHeight = () => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
  };

  setHeaderHeight();
  window.addEventListener("resize", setHeaderHeight, { passive: true });
}

function runChecks() {
  console.assert(Array.isArray(skills) && skills.length > 0, "skills missing");
  console.assert(Array.isArray(skillGroups) && skillGroups.length > 0, "skill groups missing");
  console.assert(
    Array.isArray(projects) && projects.every((project) => project.title && Array.isArray(project.tags)),
    "projects invalid"
  );
  console.assert(
    Array.isArray(experiences) && experiences.every((item) => item.year && item.title),
    "experience invalid"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  runChecks();
  renderSkills();
  renderProjects();
  renderExperience();
  setupReveal();
  setupNoriHover();
  setupVideoHover();
  setupFlipWord();
  setupViewportLayout();
});
