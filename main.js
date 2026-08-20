// ==========================================================================
// HIBIKI IZAWA PORTFOLIO - MAIN LOGIC
// ==========================================================================
import { projectsData, commonValues } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initProjectsGrid();
  initCommonValues();
  initMobileMenu();
});

/* 1. Render Projects Showcase (2作品) with Realistic Light Mode UI Previews */
function initProjectsGrid() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  projectsData.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'card project-card';

    const realUI = idx === 0 ? generateTaskAppUI() : generateSkillLogAppUI();

    const techTags = [
      ...project.techStack.frontend,
      ...project.techStack.backend,
      ...project.techStack.database
    ];

    card.innerHTML = `
      <div class="project-badge">${project.badge}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-subtitle">${project.subtitle}</p>

      <!-- Realistic UI Mockup -->
      ${realUI}

      <div class="project-block">
        <div class="project-block-title">■ 解決した課題</div>
        <div class="project-block-desc">${project.problems[0]}</div>
      </div>

      <div class="project-block">
        <div class="project-block-title">■ 使用技術</div>
        <div class="tag-cloud">
          ${techTags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>

      <button class="btn-detail" style="margin-top: 16px;">
        作品詳細・工夫点・課題と改善を見る →
      </button>
    `;

    card.querySelector('.btn-detail')?.addEventListener('click', (e) => {
      e.stopPropagation();
      openProjectModal(project);
    });

    card.addEventListener('click', () => openProjectModal(project));
    container.appendChild(card);
  });
}

/* UI Mockups */
function generateTaskAppUI() {
  return `
    <div class="real-ui-preview">
      <div class="ui-bar">
        <span>📋 TaskFlow (課題管理)</span>
        <span>高度専門士情報技術科 3年</span>
      </div>
      <div class="ui-row">
        <span>[アルゴリズム演習] 課題レポート #3</span>
        <span class="ui-status status-todo">締切: あと2日</span>
      </div>
      <div class="ui-row">
        <span>[データベース論] SQL正規化の課題提出</span>
        <span class="ui-status status-done">提出完了</span>
      </div>
      <div class="ui-row">
        <span>[Web制作実習] ポートフォリオ制作</span>
        <span class="ui-status status-todo">締切: 8/30</span>
      </div>
    </div>
  `;
}

function generateSkillLogAppUI() {
  return `
    <div class="real-ui-preview">
      <div class="ui-bar">
        <span>📊 SkillLog (スキル・制作物管理)</span>
        <span>自己PR自動生成</span>
      </div>
      <div class="ui-row">
        <span>Python / Unity</span>
        <span class="ui-status status-match">★★★★☆</span>
      </div>
      <div class="ui-row">
        <span>FastAPI / MySQL / React</span>
        <span class="ui-status status-match">★★★☆☆</span>
      </div>
      <div class="ui-row">
        <span>[制作物] 課題・提出物管理アプリ</span>
        <span class="ui-status status-done">GitHub 登録済</span>
      </div>
    </div>
  `;
}

/* 2. Common Values Section */
function initCommonValues() {
  const container = document.getElementById('common-values-container');
  if (!container) return;

  container.innerHTML = '';

  commonValues.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card value-card';
    card.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    `;
    container.appendChild(card);
  });
}

/* 3. Full Modal Details Display */
function openProjectModal(project) {
  const modalBackdrop = document.getElementById('project-modal');
  if (!modalBackdrop) return;

  const modalContent = modalBackdrop.querySelector('.modal-content');
  const allTech = [
    ...project.techStack.frontend,
    ...project.techStack.backend,
    ...project.techStack.database,
    ...project.techStack.tools
  ];

  modalContent.innerHTML = `
    <button class="modal-close" id="modal-close">✕</button>
    
    <div style="margin-bottom: 20px;">
      <span class="project-badge" style="margin-bottom: 8px;">${project.badge}</span>
      <h2 style="font-size: 1.6rem; margin-bottom: 4px;">${project.title}</h2>
      <p style="color: var(--text-muted); font-size: 0.92rem;">${project.subtitle}</p>
    </div>

    <!-- 概要 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 作品概要</div>
      <p style="color: var(--text-main); font-size: 0.92rem;">${project.overview}</p>
    </div>

    <!-- 課題背景 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 課題背景（学校生活・学習の悩み）</div>
      <ul class="modal-ul">
        ${project.problems.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>

    <!-- 解決策 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 解決策（制作物）</div>
      <p style="color: var(--text-main); font-size: 0.92rem;">${project.solution}</p>
    </div>

    <!-- 主な機能 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 主な機能</div>
      <ul class="modal-ul">
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <!-- 使用技術 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 使用技術</div>
      <div class="tag-cloud" style="margin-top: 6px;">
        ${allTech.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>

    <!-- 工夫した点 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 工夫した点</div>
      <ul class="modal-ul">
        ${project.keyPoints.map(k => `<li>${k}</li>`).join('')}
      </ul>
    </div>

    <!-- 課題と改善 -->
    <div class="modal-section">
      <div class="modal-section-title">■ 課題と改善（今後の展望）</div>
      <ul class="modal-ul">
        ${project.improvements.map(imp => `<li>${imp}</li>`).join('')}
      </ul>
    </div>

    <!-- リンク -->
    <div style="display: flex; gap: 12px; margin-top: 24px;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn-detail" style="text-decoration: none; text-align: center;">
        GitHub リポジトリを見る
      </a>
      <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-detail" style="text-decoration: none; text-align: center; background: var(--accent-primary); color: #ffffff;">
        デモページを見る
      </a>
    </div>
  `;

  modalBackdrop.classList.add('active');

  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}

function closeModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
}
