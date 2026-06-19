const CONFIG = {
  siteUrl: "https://co-leyusports.com.cn",
  keyword: "乐鱼体育",
  seed: "aa50188fb08dc032",
};

const siteHelper = {
  data: {
    tips: [
      { id: 1, text: "欢迎来到乐鱼体育官方平台，尽享精彩赛事！" },
      { id: 2, text: "实时比分、专业数据，乐鱼体育为您呈现。" },
      { id: 3, text: "乐鱼体育——您的体育娱乐首选。" },
    ],
    badges: ["体育赛事", "竞技数据", "乐鱼体育", "赛事直播", "专业分析"],
    notice: `访问 ${CONFIG.siteUrl} 获取更多乐鱼体育信息。`,
  },

  init() {
    this.renderTipCard();
    this.renderBadges();
    this.renderAccessNotice();
  },

  renderTipCard() {
    const container = document.getElementById("tip-card-container");
    if (!container) return;
    container.innerHTML = "";
    const card = document.createElement("div");
    card.className = "tip-card";
    const randomTip =
      this.data.tips[Math.floor(Math.random() * this.data.tips.length)];
    card.innerHTML = `<p>${randomTip.text}</p>`;
    container.appendChild(card);
  },

  renderBadges() {
    const container = document.getElementById("badge-container");
    if (!container) return;
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
    this.data.badges.forEach((badge) => {
      const span = document.createElement("span");
      span.className = "badge";
      span.textContent = badge;
      fragment.appendChild(span);
    });
    container.appendChild(fragment);
  },

  renderAccessNotice() {
    const container = document.getElementById("access-notice");
    if (!container) return;
    container.innerHTML = `<p>${this.data.notice}</p>`;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  siteHelper.init();
});