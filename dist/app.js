const pages = {
  dashboard: ["今日概览", "My Sweet Home"],
  tasks: ["学习任务", "今日学习"],
  courses: ["兴趣班提醒", "本周课程"],
  pet: ["宠物成长", "小兔子"],
  collection: ["成长图鉴", "阶段收藏"],
  store: ["成长商城", "路线与道具"],
  tryon: ["路线试穿", "成长路线预览"],
  bag: ["成长背包", "我的路线"],
  profile: ["家庭设置", "我的"],
  "parent-settings": ["家长设置", "任务与权限"],
  "course-settings": ["课程提醒配置", "兴趣班"]
};

const icons = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 10v10h13V10"/><path d="M9.5 20v-6h5v6"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 0-3 3V4.5Z"/><path d="M5 4.5v15"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M7 3v4M17 3v4"/><rect x="4" y="5" width="16" height="16" rx="4"/><path d="M4 10h16"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M7 8h10l1 12H6L7 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
  person: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>',
  text: '<svg viewBox="0 0 24 24"><path d="M4 6h16M8 6v12M16 6v12M6 18h4M14 18h4"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/></svg>',
  coin: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M9 10.5c.5-1 1.5-1.5 3-1.5 2 0 3 1 3 2.3 0 1.2-1 1.9-3 2.2-1.8.3-2.7 1-3 2.5h6"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 22c4 0 7-3 7-7 0-3-2-5.5-4.5-8 .2 2-1 3-2.5 4-1.8-2-2-4-1-7-3.5 2.2-6 6-6 10.5C5 18.7 8 22 12 22Z"/></svg>',
  gift: '<svg viewBox="0 0 24 24"><path d="M4 11h16v9H4v-9Z"/><path d="M3 7h18v4H3V7Z"/><path d="M12 7v13"/><path d="M8.5 7C6.5 7 6 5.2 7 4.2c1.2-1.2 3 .2 5 2.8"/><path d="M15.5 7c2 0 2.5-1.8 1.5-2.8-1.2-1.2-3 .2-5 2.8"/></svg>',
  pencil: '<svg viewBox="0 0 24 24"><path d="m4 16 10-10 4 4L8 20H4v-4Z"/><path d="m13 7 4 4"/></svg>',
  box: '<svg viewBox="0 0 24 24"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"/><path d="m4 8.5 8 4.5 8-4.5"/><path d="M12 13v7"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icons[node.dataset.icon] || icons.spark;
});

const stageMeta = {
  stage1: { label: "Stage1", range: "Lv1-Lv9", name: "幼年体" },
  stage2: { label: "Stage2", range: "Lv10-Lv19", name: "成长体" },
  stage3: { label: "Stage3", range: "Lv20-Lv30", name: "终极体" }
};

const levelPreviewStates = [
  { level: 1, label: "Lv1", stage: "stage1" },
  { level: 10, label: "Lv10", stage: "stage2" },
  { level: 20, label: "Lv20", stage: "stage3" }
];

const xpRequirements = {
  1: 40,
  2: 50,
  3: 60,
  4: 70,
  5: 80,
  6: 90,
  7: 95,
  8: 100,
  9: 110,
  10: 120,
  11: 130,
  12: 140,
  13: 150,
  14: 160,
  15: 175,
  16: 190,
  17: 205,
  18: 220,
  19: 240,
  20: 270,
  21: 300,
  22: 330,
  23: 360,
  24: 390,
  25: 430,
  26: 470,
  27: 510,
  28: 560,
  29: 620
};

const learningTasks = [
  { id: "poem", title: "背古诗", detail: "《春晓》复习", xp: 12, points: 15, icon: "book", color: "blue-bg" },
  { id: "pen-control", title: "控笔练习", detail: "横线与曲线", xp: 10, points: 12, icon: "pencil", color: "green-bg" },
  { id: "storytelling", title: "看图讲述", detail: "讲 3 句话", xp: 12, points: 15, icon: "text", color: "purple-bg" },
  { id: "math", title: "数学思维作业", detail: "图形分类", xp: 18, points: 22, icon: "spark", color: "orange-bg" }
];

const defaultParentSettings = {
  childNickname: "悦悦",
  currentPetSpecies: "rabbit",
  miniGameEnabled: false,
  dailyReminderTime: "19:30",
  appMode: "family",
  familyInitialized: false,
  dailyTaskTemplates: learningTasks.map((task) => ({ ...task }))
};

const defaultCourseReminders = [
  { id: "course-piano", name: "钢琴课", weekday: 1, time: "17:30", remindMinutes: 30, enabled: true },
  { id: "course-english", name: "英语课", weekday: 3, time: "18:00", remindMinutes: 60, enabled: true },
  { id: "course-art", name: "画画课", weekday: 6, time: "10:00", remindMinutes: 30, enabled: true }
];

const weekdayLabels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const storageKey = "growpet.phase3b.state";
const appVersion = "GrowPet Beta 3 Family Pilot";
const saveDataVersion = "beta-3-family-pilot";
const pwaCacheName = "growpet-beta2-device-trial-v1";
const collectionSpecies = ["rabbit", "cat", "pig"];
const dailyCheckinRewards = [
  { day: 1, xp: 12, points: 15 },
  { day: 2, xp: 14, points: 18 },
  { day: 3, xp: 16, points: 22 },
  { day: 4, xp: 18, points: 25 },
  { day: 5, xp: 20, points: 30 },
  { day: 6, xp: 22, points: 35 },
  { day: 7, xp: 28, points: 45 }
];
const streakRewards = {
  3: { xp: 20, points: 30, title: "连续成长 3 天" },
  7: { xp: 45, points: 70, title: "连续成长 7 天" },
  14: { xp: 90, points: 140, title: "连续成长 14 天" },
  30: { xp: 220, points: 320, title: "连续成长 30 天" }
};
const achievementDefinitions = [
  { id: "first-task", title: "首次完成任务", description: "完成任意 1 个学习任务", reward: { xp: 8, points: 20 } },
  { id: "reach-lv10", title: "达到 Lv10", description: "宠物第一次进入成长体", reward: { xp: 0, points: 80 } },
  { id: "reach-lv20", title: "达到 Lv20", description: "宠物第一次进入终极体", reward: { xp: 0, points: 160 } },
  { id: "study-3-days", title: "连续学习 3 天", description: "连续 3 天完成学习任务", reward: { xp: 18, points: 40 } },
  { id: "study-7-days", title: "连续学习 7 天", description: "连续 7 天完成学习任务", reward: { xp: 40, points: 90 } },
  { id: "task-50", title: "完成 50 次任务", description: "累计完成 50 个学习任务", reward: { xp: 70, points: 150 } },
  { id: "task-100", title: "完成 100 次任务", description: "累计完成 100 个学习任务", reward: { xp: 120, points: 260 } }
];
const collectionRewardDefinitions = {
  "rabbit-stage2": { title: "图鉴奖励：兔子 Stage2", xp: 0, points: 45 },
  "rabbit-stage3": { title: "图鉴奖励：兔子 Stage3", xp: 0, points: 90 },
  "rabbit-complete": { title: "完整路线奖励：小兔子", xp: 0, points: 160 }
};

const fallbackEvolutionSystem = {
  assetBasePath: "./assets/pets/rabbit/default/",
  referenceBasePath: "./assets/references/gemini/",
  currentPet: {
    petSpecies: "rabbit",
    level: 9,
    xp: 98,
    points: 112,
    equippedSkinLineId: "rabbit-default"
  },
  petSpecies: [{ id: "rabbit", displayName: "小兔子" }],
  petSkinLines: [
    {
      id: "rabbit-default",
      name: "默认路线",
      petSpecies: "rabbit",
      theme: "基础成长",
      rarity: "common",
      price: 0,
      unlockCondition: "初始拥有",
      assetBasePath: "./assets/pets/rabbit/default/",
      stage1Image: "rabbit-stage1-default.png",
      stage2Image: "rabbit-stage2-default.png",
      stage3Image: "rabbit-stage3-default.png"
    },
    {
      id: "cat-default",
      name: "猫咪默认路线",
      petSpecies: "cat",
      theme: "基础成长",
      rarity: "common",
      price: 0,
      unlockCondition: "宠物种族解锁后初始拥有",
      assetBasePath: "./assets/pets/cat/default/",
      stage1Image: "cat-stage1-default.png",
      stage2Image: "cat-stage2-default.png",
      stage3Image: "cat-stage3-default.png"
    },
    {
      id: "pig-default",
      name: "小猪默认路线",
      petSpecies: "pig",
      theme: "基础成长",
      rarity: "common",
      price: 0,
      unlockCondition: "宠物种族解锁后初始拥有",
      assetBasePath: "./assets/pets/pig/default/",
      stage1Image: "pig-stage1-default.png",
      stage2Image: "pig-stage2-default.png",
      stage3Image: "pig-stage3-default.png"
    }
  ],
  inventorySkinLines: [
    { skinLineId: "rabbit-default", owned: true, equipped: true, acquiredAt: "initial" },
    { skinLineId: "cat-default", owned: false, equipped: false, acquiredAt: null },
    { skinLineId: "pig-default", owned: false, equipped: false, acquiredAt: null }
  ],
  geminiReferenceBoards: [],
  statEquipment: [
    { id: "learning-glasses", name: "学习眼镜", effect: "专注 +10", visualMounting: false },
    { id: "lucky-badge", name: "幸运徽章", effect: "积分获取 +5%", visualMounting: false },
    { id: "piano-ring", name: "钢琴指环", effect: "技巧 +20", visualMounting: false },
    { id: "empty-1", name: "空位", effect: "未装备", visualMounting: false, empty: true },
    { id: "empty-2", name: "空位", effect: "未装备", visualMounting: false, empty: true }
  ]
};

const growthStoreItems = [
  { id: "xp-small", name: "小经验药水", type: "消耗品", price: 120, icon: "bolt", description: "少量 XP" },
  { id: "xp-medium", name: "中经验药水", type: "消耗品", price: 280, icon: "bolt", description: "中量 XP" },
  { id: "growth-crystal", name: "成长结晶", type: "进化材料", price: 420, icon: "spark", description: "进化材料" },
  { id: "lucky-clover", name: "幸运四叶草", type: "进化材料", price: 360, icon: "flame", description: "幸运材料" },
  { id: "rabbit-ticket", name: "兔子转换券", type: "宠物转换", price: 600, icon: "box", description: "切换兔子养成" },
  { id: "cat-ticket", name: "猫咪转换券", type: "宠物转换", price: 600, icon: "box", description: "后续开放" }
];
const consumableEffects = {
  "xp-small": { xp: 35 },
  "xp-medium": { xp: 90 }
};
const statEquipmentShopMeta = {
  "learning-glasses": { price: 180, icon: "spark", stat: "focus", value: 10 },
  "lucky-badge": { price: 220, icon: "flame", stat: "luck", value: 5 },
  "piano-ring": { price: 260, icon: "spark", stat: "skill", value: 20 },
  "creative-brush": { price: 240, icon: "pencil", stat: "creativity", value: 15 }
};
const baseAttributes = {
  focus: 42,
  skill: 36,
  creativity: 28,
  luck: 15
};

let evolutionSystem = fallbackEvolutionSystem;
let petSkinLines = [];
let inventorySkinLines = [];
let currentStage = "stage1";
let equippedSkinLineId = "rabbit-default";
let tryOnSkinLineId = "rabbit-default";
let growthState = {
  tasks: [],
  todayXp: 0,
  todayPoints: 0,
  streakDays: 0,
  totalXp: 0,
  completedTaskTotal: 0,
  completedTaskIds: [],
  unlockedStages: {},
  growthLog: [],
  dailyCheckin: null,
  checkinStreak: 0,
  dailyTasks: null,
  lastTaskCompletionDate: null,
  achievements: {},
  rewardHistory: [],
  rewardClaims: [],
  inventoryItems: {},
  purchaseHistory: [],
  equippedStatItems: [],
  pendingShopProductId: null,
  parentSettings: { ...defaultParentSettings },
  courseReminders: defaultCourseReminders.map((item) => ({ ...item })),
  pilotStats: null,
  pilotHistory: [],
  pilotDaily: {},
  rewardClaimHistory: [],
  lastRewardMessage: "完成任意学习任务，宠物会获得 XP 并自动成长。"
};

function defaultPilotStats() {
  return {
    totalTasksCompleted: 0,
    totalXpEarned: 0,
    totalPointsEarned: 0,
    bestStudyStreak: 0,
    totalCheckins: 0,
    totalRewardsClaimed: 0,
    totalCourseCheckins: 0
  };
}

function todayKey() {
  return localDateKey(new Date());
}

function dateKeyFromOffset(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return localDateKey(date);
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function previousDateKey(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() - 1);
  return localDateKey(date);
}

function dailyRewardForStreak(streak) {
  const dayIndex = ((Math.max(1, streak) - 1) % dailyCheckinRewards.length);
  return dailyCheckinRewards[dayIndex];
}

function hasClaimedReward(rewardId) {
  return growthState.rewardClaims.includes(rewardId) || growthState.rewardClaimHistory.some((item) => item.id === rewardId);
}

function normalizeTaskTemplate(template, index) {
  const fallback = learningTasks[index % learningTasks.length];
  return {
    id: template?.id || fallback.id,
    title: String(template?.title || fallback.title).trim() || fallback.title,
    detail: String(template?.detail || fallback.detail).trim() || fallback.detail,
    xp: Math.max(0, Number(template?.xp) || fallback.xp),
    points: Math.max(0, Number(template?.points) || fallback.points),
    icon: template?.icon || fallback.icon,
    color: template?.color || fallback.color
  };
}

function normalizeParentSettings(settings = {}) {
  const templates = Array.isArray(settings.dailyTaskTemplates) && settings.dailyTaskTemplates.length > 0
    ? settings.dailyTaskTemplates
    : defaultParentSettings.dailyTaskTemplates;
  return {
    childNickname: String(settings.childNickname || defaultParentSettings.childNickname).trim().slice(0, 12) || defaultParentSettings.childNickname,
    currentPetSpecies: collectionSpecies.includes(settings.currentPetSpecies) ? settings.currentPetSpecies : defaultParentSettings.currentPetSpecies,
    miniGameEnabled: Boolean(settings.miniGameEnabled),
    dailyReminderTime: /^\d{2}:\d{2}$/.test(settings.dailyReminderTime || "") ? settings.dailyReminderTime : defaultParentSettings.dailyReminderTime,
    appMode: settings.appMode === "dev" ? "dev" : "family",
    familyInitialized: Boolean(settings.familyInitialized),
    dailyTaskTemplates: templates.slice(0, 8).map(normalizeTaskTemplate)
  };
}

function normalizeCourseReminder(course, index = 0) {
  const fallback = defaultCourseReminders[index % defaultCourseReminders.length] || defaultCourseReminders[0];
  return {
    id: course?.id || `course-${Date.now()}-${index}`,
    name: String(course?.name || fallback.name).trim().slice(0, 18) || fallback.name,
    weekday: Math.min(6, Math.max(0, Number(course?.weekday ?? fallback.weekday) || 0)),
    time: /^\d{2}:\d{2}$/.test(course?.time || "") ? course.time : fallback.time,
    remindMinutes: Math.min(180, Math.max(0, Number(course?.remindMinutes ?? fallback.remindMinutes) || 0)),
    enabled: course?.enabled !== false
  };
}

function normalizeCourseReminders(courses) {
  const source = Array.isArray(courses) && courses.length > 0 ? courses : defaultCourseReminders;
  return source.slice(0, 12).map(normalizeCourseReminder);
}

function taskSetForDate(dateKey, settings = growthState.parentSettings || defaultParentSettings) {
  const templates = normalizeParentSettings(settings).dailyTaskTemplates;
  const rotation = Number(dateKey.replaceAll("-", "")) % templates.length;
  return templates.map((task, index) => {
    const source = templates[(index + rotation) % templates.length];
    return { ...source, completed: false };
  });
}

function normalizeDailyTasks(savedDailyTasks, settings = growthState.parentSettings || defaultParentSettings) {
  const today = todayKey();
  if (savedDailyTasks?.date === today && Array.isArray(savedDailyTasks.tasks)) {
    return {
      date: today,
      tasks: taskSetForDate(today, settings).map((task) => {
        const saved = savedDailyTasks.tasks.find((item) => item.id === task.id);
        return { ...task, completed: Boolean(saved?.completed) };
      })
    };
  }
  return {
    date: today,
    tasks: taskSetForDate(today, settings)
  };
}

function normalizePilotStats(stats = {}) {
  const base = defaultPilotStats();
  return Object.fromEntries(Object.entries(base).map(([key, value]) => [key, Math.max(0, Number(stats[key]) || value)]));
}

function normalizePilotDaily(daily = {}) {
  if (!daily || typeof daily !== "object") return {};
  return Object.fromEntries(Object.entries(daily).map(([date, item]) => [date, {
    tasksCompleted: Math.max(0, Number(item?.tasksCompleted) || 0),
    tasksAvailable: Math.max(0, Number(item?.tasksAvailable) || 0),
    xpEarned: Math.max(0, Number(item?.xpEarned) || 0),
    pointsEarned: Math.max(0, Number(item?.pointsEarned) || 0),
    courseCheckins: Math.max(0, Number(item?.courseCheckins) || 0),
    taskTypes: item?.taskTypes && typeof item.taskTypes === "object" ? item.taskTypes : {}
  }]));
}

function achievementCount() {
  return Object.values(growthState.achievements).filter((item) => item.unlocked).length;
}

function claimableRewards() {
  return growthState.rewardHistory.filter((item) => item.status === "claimable" && !hasClaimedReward(item.id));
}

function addRewardChest({ id, type, title, xp = 0, points = 0 }) {
  if (growthState.rewardHistory.some((item) => item.id === id) || hasClaimedReward(id)) return false;
  growthState.rewardHistory = [
    {
      id,
      type,
      title,
      xp,
      points,
      status: "claimable",
      createdAt: new Date().toLocaleString("zh-CN", { hour12: false })
    },
    ...growthState.rewardHistory
  ].slice(0, 80);
  return true;
}

function unlockAchievement(id) {
  const definition = achievementDefinitions.find((item) => item.id === id);
  if (!definition || growthState.achievements[id]?.unlocked) return false;
  growthState.achievements[id] = {
    id,
    title: definition.title,
    description: definition.description,
    unlocked: true,
    unlockedAt: new Date().toLocaleString("zh-CN", { hour12: false })
  };
  addRewardChest({
    id: `achievement-${id}`,
    type: "achievement",
    title: `${definition.title}奖励`,
    xp: definition.reward.xp,
    points: definition.reward.points
  });
  return true;
}

function updateStudyStreakForTaskCompletion(dateKey = todayKey()) {
  if (growthState.lastTaskCompletionDate === dateKey) return;
  const yesterday = previousDateKey(dateKey);
  growthState.streakDays = growthState.lastTaskCompletionDate === yesterday ? growthState.streakDays + 1 : 1;
  growthState.lastTaskCompletionDate = dateKey;
}

function evaluateAchievementUnlocks(pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet) {
  if (growthState.completedTaskTotal >= 1) unlockAchievement("first-task");
  if (pet.level >= 10) unlockAchievement("reach-lv10");
  if (pet.level >= 20) unlockAchievement("reach-lv20");
  if (growthState.streakDays >= 3) unlockAchievement("study-3-days");
  if (growthState.streakDays >= 7) unlockAchievement("study-7-days");
  if (growthState.completedTaskTotal >= 50) unlockAchievement("task-50");
  if (growthState.completedTaskTotal >= 100) unlockAchievement("task-100");
}

function evaluateCollectionRewards(pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet) {
  const stages = new Set(growthState.unlockedStages[pet.petSpecies] || []);
  if (pet.petSpecies !== "rabbit") return;
  if (stages.has("stage2")) {
    addRewardChest({ id: "collection-rabbit-stage2", type: "collection", ...collectionRewardDefinitions["rabbit-stage2"] });
  }
  if (stages.has("stage3")) {
    addRewardChest({ id: "collection-rabbit-stage3", type: "collection", ...collectionRewardDefinitions["rabbit-stage3"] });
  }
  if (["stage1", "stage2", "stage3"].every((stage) => stages.has(stage))) {
    addRewardChest({ id: "collection-rabbit-complete", type: "collection", ...collectionRewardDefinitions["rabbit-complete"] });
  }
}

function evaluateRewardEconomy(pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet) {
  evaluateAchievementUnlocks(pet);
  evaluateCollectionRewards(pet);
}

function totalXpForPet(pet) {
  let total = pet.xp || 0;
  for (let level = 1; level < pet.level; level += 1) {
    total += xpForNextLevel(level);
  }
  return total;
}

function stageForLevel(level) {
  if (level >= 20) return "stage3";
  if (level >= 10) return "stage2";
  return "stage1";
}

function stagesForLevel(level) {
  if (level >= 20) return ["stage1", "stage2", "stage3"];
  if (level >= 10) return ["stage1", "stage2"];
  return ["stage1"];
}

function xpForNextLevel(level) {
  return xpRequirements[level] || 0;
}

function normalizePetState(pet) {
  pet.level = Math.max(1, Math.min(30, Number(pet.level) || 1));
  pet.xp = Math.max(0, Number(pet.xp) || 0);
  pet.points = Math.max(0, Number(pet.points) || 0);
  pet.xpToNext = xpForNextLevel(pet.level);
  if (pet.level >= 30) {
    pet.xp = 0;
    pet.xpToNext = 0;
  } else if (pet.xp >= pet.xpToNext) {
    applyXpToPet(pet, 0);
  }
  return pet;
}

function initialUnlockedStages(pet) {
  const unlocked = {};
  collectionSpecies.forEach((species) => {
    unlocked[species] = ["stage1"];
  });
  unlocked[pet.petSpecies] = stagesForLevel(pet.level);
  return unlocked;
}

function mergeUnlockedStages(base, saved) {
  const merged = { ...base };
  Object.entries(saved || {}).forEach(([species, stages]) => {
    merged[species] = Array.from(new Set([...(merged[species] || []), ...(Array.isArray(stages) ? stages : [])]));
  });
  return merged;
}

function createPersistentState(pet) {
  const parentSettings = normalizeParentSettings({ currentPetSpecies: pet.petSpecies });
  return {
    saveVersion: saveDataVersion,
    currentPet: {
      petSpecies: pet.petSpecies,
      level: pet.level,
      xp: pet.xp,
      points: pet.points,
      equippedSkinLineId: pet.equippedSkinLineId
    },
    completedTasks: [],
    unlockedStages: initialUnlockedStages(pet),
    totalXp: totalXpForPet(pet),
    completedTaskTotal: 0,
    streakDays: 0,
    growthLog: [],
    dailyCheckin: null,
    checkinStreak: 0,
    dailyTasks: normalizeDailyTasks(null, parentSettings),
    lastTaskCompletionDate: null,
    achievements: {},
    rewardHistory: [],
    rewardClaims: [],
    inventoryItems: {},
    purchaseHistory: [],
    equippedStatItems: [],
    parentSettings,
    courseReminders: normalizeCourseReminders(null),
    pilotStats: defaultPilotStats(),
    pilotHistory: [],
    pilotDaily: {},
    inventorySkinLines: null,
    rewardClaimHistory: []
  };
}

function loadPersistentState(pet) {
  const initial = createPersistentState(pet);
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (!saved || typeof saved !== "object") return initial;
    const parentSettings = normalizeParentSettings({
      ...saved.parentSettings,
      currentPetSpecies: saved.parentSettings?.currentPetSpecies || saved.currentPet?.petSpecies || initial.parentSettings.currentPetSpecies
    });
    return {
      ...initial,
      saveVersion: saved.saveVersion || "legacy-localStorage",
      currentPet: {
        ...initial.currentPet,
        ...(saved.currentPet || {}),
        petSpecies: parentSettings.currentPetSpecies || saved.currentPet?.petSpecies || initial.currentPet.petSpecies,
        equippedSkinLineId: saved.currentPet?.equippedSkinLineId || initial.currentPet.equippedSkinLineId
      },
      completedTasks: Array.isArray(saved.completedTasks) ? saved.completedTasks : [],
      unlockedStages: mergeUnlockedStages(initial.unlockedStages, saved.unlockedStages),
      totalXp: Math.max(Number(saved.totalXp) || initial.totalXp, initial.totalXp),
      completedTaskTotal: Math.max(0, Number(saved.completedTaskTotal) || 0),
      streakDays: Math.max(0, Number(saved.streakDays) || initial.streakDays),
      growthLog: Array.isArray(saved.growthLog) ? saved.growthLog.slice(0, 20) : [],
      dailyCheckin: saved.dailyCheckin || null,
      checkinStreak: Math.max(0, Number(saved.checkinStreak) || 0),
      dailyTasks: normalizeDailyTasks(saved.dailyTasks, parentSettings),
      lastTaskCompletionDate: saved.lastTaskCompletionDate || null,
      achievements: saved.achievements && typeof saved.achievements === "object" ? saved.achievements : {},
      rewardHistory: Array.isArray(saved.rewardHistory) ? saved.rewardHistory.slice(0, 80) : [],
      rewardClaims: Array.isArray(saved.rewardClaims) ? saved.rewardClaims : [],
      inventoryItems: saved.inventoryItems && typeof saved.inventoryItems === "object" ? saved.inventoryItems : {},
      purchaseHistory: Array.isArray(saved.purchaseHistory) ? saved.purchaseHistory.slice(0, 120) : [],
      equippedStatItems: Array.isArray(saved.equippedStatItems) ? saved.equippedStatItems.slice(0, 4) : [],
      parentSettings,
      courseReminders: normalizeCourseReminders(saved.courseReminders),
      pilotStats: normalizePilotStats(saved.pilotStats),
      pilotHistory: Array.isArray(saved.pilotHistory) ? saved.pilotHistory.slice(0, 240) : [],
      pilotDaily: normalizePilotDaily(saved.pilotDaily),
      inventorySkinLines: Array.isArray(saved.inventorySkinLines) ? saved.inventorySkinLines : null,
      rewardClaimHistory: Array.isArray(saved.rewardClaimHistory) ? saved.rewardClaimHistory.slice(-120) : []
    };
  } catch (error) {
    console.warn("[GrowPet] localStorage state ignored", error);
    return initial;
  }
}

function savePersistentState() {
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const payload = {
    saveVersion: saveDataVersion,
    currentPet: {
      petSpecies: pet.petSpecies,
      level: pet.level,
      xp: pet.xp,
      points: pet.points,
      equippedSkinLineId: pet.equippedSkinLineId
    },
    completedTasks: growthState.completedTaskIds,
    unlockedStages: growthState.unlockedStages,
    totalXp: growthState.totalXp,
    completedTaskTotal: growthState.completedTaskTotal,
    streakDays: growthState.streakDays,
    growthLog: growthState.growthLog,
    dailyCheckin: growthState.dailyCheckin,
    checkinStreak: growthState.checkinStreak,
    dailyTasks: growthState.dailyTasks,
    lastTaskCompletionDate: growthState.lastTaskCompletionDate,
    achievements: growthState.achievements,
    rewardHistory: growthState.rewardHistory,
    rewardClaims: growthState.rewardClaims,
    inventoryItems: growthState.inventoryItems,
    purchaseHistory: growthState.purchaseHistory,
    equippedStatItems: growthState.equippedStatItems,
    parentSettings: growthState.parentSettings,
    courseReminders: growthState.courseReminders,
    pilotStats: growthState.pilotStats,
    pilotHistory: growthState.pilotHistory,
    pilotDaily: growthState.pilotDaily,
    inventorySkinLines,
    rewardClaimHistory: growthState.rewardClaimHistory
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function ensurePilotDay(date = todayKey()) {
  growthState.pilotDaily = growthState.pilotDaily || {};
  growthState.pilotDaily[date] = growthState.pilotDaily[date] || {
    tasksCompleted: 0,
    tasksAvailable: growthState.tasks?.length || 0,
    xpEarned: 0,
    pointsEarned: 0,
    courseCheckins: 0,
    taskTypes: {}
  };
  growthState.pilotDaily[date].tasksAvailable = Math.max(growthState.pilotDaily[date].tasksAvailable || 0, growthState.tasks?.length || 0);
  return growthState.pilotDaily[date];
}

function addPilotHistory(type, title, detail = "", extra = {}) {
  growthState.pilotHistory = [
    {
      id: `${Date.now()}-${type}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      title,
      detail,
      date: todayKey(),
      createdAt: new Date().toLocaleString("zh-CN", { hour12: false }),
      ...extra
    },
    ...(growthState.pilotHistory || [])
  ].slice(0, 240);
}

function recordPilotTask(task) {
  const day = ensurePilotDay();
  growthState.pilotStats = normalizePilotStats(growthState.pilotStats);
  growthState.pilotStats.totalTasksCompleted += 1;
  growthState.pilotStats.totalXpEarned += task.xp;
  growthState.pilotStats.totalPointsEarned += task.points;
  growthState.pilotStats.bestStudyStreak = Math.max(growthState.pilotStats.bestStudyStreak, growthState.streakDays);
  day.tasksCompleted += 1;
  day.xpEarned += task.xp;
  day.pointsEarned += task.points;
  day.taskTypes[task.title] = (day.taskTypes[task.title] || 0) + 1;
  addPilotHistory("task", `完成任务：${task.title}`, `+${task.xp} XP · +${task.points} 积分`, { taskId: task.id, xp: task.xp, points: task.points });
}

function recordPilotReward(title, xp = 0, points = 0, rewardType = "reward") {
  const day = ensurePilotDay();
  growthState.pilotStats = normalizePilotStats(growthState.pilotStats);
  growthState.pilotStats.totalRewardsClaimed += 1;
  growthState.pilotStats.totalXpEarned += xp;
  growthState.pilotStats.totalPointsEarned += points;
  day.xpEarned += xp;
  day.pointsEarned += points;
  addPilotHistory("reward", title, `+${xp} XP · +${points} 积分`, { rewardType, xp, points });
}

function recordPilotCheckin(title) {
  growthState.pilotStats = normalizePilotStats(growthState.pilotStats);
  growthState.pilotStats.totalCheckins += 1;
  addPilotHistory("checkin", title, "每日签到完成");
}

function recordPilotCourseCheckin(course) {
  const day = ensurePilotDay();
  growthState.pilotStats = normalizePilotStats(growthState.pilotStats);
  growthState.pilotStats.totalCourseCheckins += 1;
  day.courseCheckins += 1;
  addPilotHistory("course", `课程签到：${course.name}`, `${weekdayLabels[course.weekday]} ${course.time}`, { courseId: course.id });
}

function showAppStatus(message, tone = "info") {
  const status = document.querySelector("#app-status");
  if (!status) return;
  status.hidden = false;
  status.textContent = message;
  status.dataset.tone = tone;
  window.clearTimeout(showAppStatus.timer);
  showAppStatus.timer = window.setTimeout(() => {
    status.hidden = true;
  }, 3600);
}

function localStorageUsageText() {
  const raw = localStorage.getItem(storageKey) || "";
  const bytes = new Blob([raw]).size;
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function isStandalonePwa() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function serviceWorkerStatusText() {
  if (!("serviceWorker" in navigator)) return "不支持";
  if (navigator.serviceWorker.controller) return "已控制页面";
  return "已注册/等待控制";
}

function renderDeviceReadinessInfo(cacheVersion = pwaCacheName) {
  const raw = localStorage.getItem(storageKey);
  let saveVersion = "未创建";
  try {
    saveVersion = raw ? (JSON.parse(raw).saveVersion || "legacy-localStorage") : "未创建";
  } catch {
    saveVersion = "存档 JSON 异常";
  }

  const fields = {
    "#device-version-label": appVersion,
    "#device-mode": growthState.parentSettings.appMode === "dev" ? "开发模式" : "家庭使用模式",
    "#device-standalone": isStandalonePwa() ? "是" : "否",
    "#device-sw-status": serviceWorkerStatusText(),
    "#device-cache-version": cacheVersion,
    "#device-storage-usage": localStorageUsageText(),
    "#device-save-version": saveVersion
  };
  Object.entries(fields).forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  });
}

function renderPilotViews() {
  const stats = normalizePilotStats(growthState.pilotStats);
  const insights = pilotInsights();
  const fields = {
    "#pilot-total-tasks": stats.totalTasksCompleted,
    "#pilot-total-xp": stats.totalXpEarned,
    "#pilot-total-points": stats.totalPointsEarned,
    "#pilot-best-streak": `${stats.bestStudyStreak} 天`,
    "#pilot-total-checkins": stats.totalCheckins,
    "#pilot-total-rewards": stats.totalRewardsClaimed,
    "#insight-task-rate": `${insights.taskCompletionRate}%`,
    "#insight-xp-7d": insights.xpEarned,
    "#insight-course-checkins": insights.courseCheckins,
    "#insight-top-task": insights.topTask
  };
  Object.entries(fields).forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  });

  const historyRoot = document.querySelector("#pilot-history-list");
  if (!historyRoot) return;
  const history = (growthState.pilotHistory || []).slice(0, 8);
  if (history.length === 0) {
    historyRoot.innerHTML = `<div class="empty-state">还没有试运行记录。完成任务、签到或领取奖励后会出现在这里。</div>`;
    return;
  }
  historyRoot.innerHTML = history.map((item) => `
    <article class="growth-log-item ${item.type}">
      <span class="icon ${item.type === "evolution" ? "purple-bg" : item.type === "reward" ? "orange-bg" : "blue-bg"}" data-icon="${item.type === "reward" ? "gift" : item.type === "course" ? "calendar" : "spark"}"></span>
      <div>
        <b>${item.title}</b>
        <small>${item.detail} · ${item.createdAt}</small>
      </div>
    </article>
  `).join("");
  historyRoot.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
}

async function refreshDeviceInfo() {
  renderDeviceReadinessInfo();
  if (!("serviceWorker" in navigator)) return;
  const registration = await navigator.serviceWorker.getRegistration();
  const worker = registration?.active || navigator.serviceWorker.controller;
  if (!worker) return;
  const channel = new MessageChannel();
  channel.port1.onmessage = (event) => {
    if (event.data?.type === "CACHE_VERSION") {
      renderDeviceReadinessInfo(event.data.cacheName);
    }
  };
  worker.postMessage({ type: "GET_CACHE_VERSION" }, [channel.port2]);
}

async function refreshPwaCache() {
  const status = document.querySelector("#device-status");
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key.startsWith("growpet-")).map((key) => caches.delete(key)));
    }
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      await registration?.update();
    }
    if (status) status.textContent = "PWA 缓存刷新已触发，请刷新页面或重新打开主屏幕 App。";
    showAppStatus("PWA 缓存刷新已触发。", "success");
    refreshDeviceInfo();
  } catch {
    if (status) status.textContent = "缓存刷新失败，请关闭后重新打开 GrowPet。";
    showAppStatus("缓存刷新失败，请稍后重试。", "error");
  }
}

function recentDateKeys(days = 7) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return localDateKey(date);
  }).reverse();
}

function pilotRecent7Days() {
  return recentDateKeys(7).map((date) => ({
    date,
    ...(growthState.pilotDaily?.[date] || {
      tasksCompleted: 0,
      tasksAvailable: growthState.tasks?.length || 0,
      xpEarned: 0,
      pointsEarned: 0,
      courseCheckins: 0,
      taskTypes: {}
    })
  }));
}

function pilotInsights() {
  const days = pilotRecent7Days();
  const completed = days.reduce((sum, day) => sum + (day.tasksCompleted || 0), 0);
  const available = days.reduce((sum, day) => sum + Math.max(day.tasksAvailable || 0, growthState.tasks?.length || 0), 0);
  const xp = days.reduce((sum, day) => sum + (day.xpEarned || 0), 0);
  const courseCheckins = days.reduce((sum, day) => sum + (day.courseCheckins || 0), 0);
  const taskTypes = {};
  days.forEach((day) => {
    Object.entries(day.taskTypes || {}).forEach(([title, count]) => {
      taskTypes[title] = (taskTypes[title] || 0) + Number(count || 0);
    });
  });
  return {
    taskCompletionRate: available > 0 ? Math.round((completed / available) * 100) : 0,
    xpEarned: xp,
    courseCheckins,
    topTask: Object.entries(taskTypes).sort((a, b) => b[1] - a[1])[0]?.[0] || "暂无",
    days
  };
}

function currentPetSnapshot() {
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  return {
    petSpecies: pet.petSpecies,
    displayName: speciesDisplayName(pet.petSpecies),
    level: pet.level,
    xp: pet.xp,
    xpToNext: pet.xpToNext,
    points: pet.points,
    stage: stageForLevel(pet.level),
    equippedSkinLineId: pet.equippedSkinLineId
  };
}

function pilotReportData() {
  return {
    app: "GrowPet",
    reportVersion: "beta-3-family-pilot",
    exportedAt: new Date().toISOString(),
    statistics: normalizePilotStats(growthState.pilotStats),
    growthHistory: growthState.pilotHistory || [],
    recent7Days: pilotInsights(),
    currentPet: currentPetSnapshot()
  };
}

function exportPilotReport() {
  const report = JSON.stringify(pilotReportData(), null, 2);
  const output = document.querySelector("#pilot-report-json");
  const status = document.querySelector("#pilot-report-status");
  if (output) output.value = report;
  const blob = new Blob([report], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pilot-report.json";
  link.click();
  URL.revokeObjectURL(link.href);
  if (status) status.textContent = "pilot-report.json 已生成。";
}

function exportedSaveData() {
  const raw = localStorage.getItem(storageKey);
  return JSON.stringify({
    app: "GrowPet",
    version: saveDataVersion,
    exportedAt: new Date().toISOString(),
    storageKey,
    data: raw ? JSON.parse(raw) : createPersistentState(evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet)
  }, null, 2);
}

function exportSaveData() {
  const text = exportedSaveData();
  const output = document.querySelector("#save-data-json");
  const status = document.querySelector("#save-data-status");
  if (output) output.value = text;
  const blob = new Blob([text], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `growpet-save-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  if (status) status.textContent = "存档 JSON 已导出，并已填入文本框。";
  renderDeviceReadinessInfo();
}

function importSaveData() {
  const input = document.querySelector("#save-data-json");
  const status = document.querySelector("#save-data-status");
  try {
    const parsed = JSON.parse(input?.value || "");
    const data = parsed.storageKey === storageKey && parsed.data ? parsed.data : parsed;
    if (!data || typeof data !== "object" || !data.currentPet) throw new Error("missing-current-pet");
    localStorage.setItem(storageKey, JSON.stringify(data));
    applyEvolutionSystem(evolutionSystem);
    renderGrowthLoop();
    renderAllSkinViews();
    if (status) status.textContent = "存档导入成功，页面已刷新本地状态。";
    showAppStatus("存档导入成功。", "success");
    refreshDeviceInfo();
  } catch (error) {
    if (status) status.textContent = "导入失败：请粘贴 GrowPet 导出的 JSON。";
    showAppStatus("导入失败，请检查 JSON 格式。", "error");
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("online", () => showAppStatus("网络已恢复，GrowPet 会继续更新缓存。", "success"));
  window.addEventListener("offline", () => showAppStatus("已进入离线模式，已缓存页面仍可使用。", "info"));

  navigator.serviceWorker.register("./service-worker.js").then((registration) => {
    if (!navigator.serviceWorker.controller) {
      showAppStatus("GrowPet 已准备离线缓存。", "success");
    }

    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          showAppStatus("发现新缓存版本，刷新页面后生效。", "success");
        }
      });
    });
    refreshDeviceInfo();
  }).catch(() => {
    showAppStatus("离线缓存注册失败，请通过本地服务器或 HTTPS 打开。", "error");
  });
}

function addGrowthLog(type, title, detail) {
  growthState.growthLog = [
    {
      id: `${Date.now()}-${type}`,
      type,
      title,
      detail,
      createdAt: new Date().toLocaleString("zh-CN", { hour12: false })
    },
    ...growthState.growthLog
  ].slice(0, 20);
  if (type === "level" || type === "evolution") {
    addPilotHistory(type, title, detail);
  }
}

function syncUnlockedStages(pet) {
  const stages = stagesForLevel(pet.level);
  const current = new Set(growthState.unlockedStages[pet.petSpecies] || []);
  const newlyUnlocked = [];
  stages.forEach((stage) => {
    if (!current.has(stage)) {
      current.add(stage);
      newlyUnlocked.push(stage);
    }
  });
  growthState.unlockedStages[pet.petSpecies] = Array.from(current);
  return newlyUnlocked;
}

function grantReward({ xp, points, source, logType = "reward" }) {
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const result = applyXpToPet(pet, xp);
  pet.points += points;
  growthState.todayXp += xp;
  growthState.todayPoints += points;
  growthState.totalXp += xp;
  const newlyUnlocked = syncUnlockedStages(pet);

  if (result.evolved) {
    addGrowthLog("evolution", `进化到 ${stageMeta[result.afterStage].label}`, `${source} 提供 ${xp} XP`);
    if (result.afterLevel >= 10) {
      addRewardChest({ id: "evolution-lv10", type: "evolution", title: "Lv10 进化奖励", xp: 0, points: 100 });
    }
    if (result.afterLevel >= 20) {
      addRewardChest({ id: "evolution-lv20", type: "evolution", title: "Lv20 进化奖励", xp: 0, points: 220 });
    }
  } else if (result.leveledUp) {
    addGrowthLog("level", `升级到 Lv${result.afterLevel}`, `${source} 提供 ${xp} XP`);
  } else {
    addGrowthLog(logType, source, `+${xp} XP · +${points} 积分`);
  }

  evaluateRewardEconomy(pet);
  return { result, newlyUnlocked };
}

function claimDailyReward() {
  const today = todayKey();
  if (growthState.dailyCheckin?.lastClaimedDate === today) {
    showRewardModal("今日已领取", "明天再来领取新的成长能量。", "每日签到");
    return;
  }

  const yesterday = dateKeyFromOffset(1);
  const previousDate = growthState.dailyCheckin?.lastClaimedDate;
  const nextStreak = previousDate === yesterday ? growthState.checkinStreak + 1 : 1;
  const dailyReward = dailyRewardForStreak(nextStreak);
  const dailyRewardId = `daily-${today}`;
  const rewardEvents = [];

  const dailyGrant = grantReward({
    xp: dailyReward.xp,
    points: dailyReward.points,
    source: `每日签到 第${dailyReward.day}天`
  });

  growthState.checkinStreak = nextStreak;
  growthState.streakDays = Math.max(growthState.streakDays, nextStreak);
  growthState.dailyCheckin = {
    lastClaimedDate: today,
    cycleDay: dailyReward.day,
    xp: dailyReward.xp,
    points: dailyReward.points
  };
  growthState.rewardClaimHistory.push({
    id: dailyRewardId,
    type: "dailyCheckin",
    date: today,
    streak: nextStreak,
    xp: dailyReward.xp,
    points: dailyReward.points
  });
  recordPilotCheckin(`每日签到 第${dailyReward.day}天`);
  recordPilotReward(`每日首次登录奖励 第${dailyReward.day}天`, dailyReward.xp, dailyReward.points, "dailyCheckin");
  growthState.rewardClaims.push(dailyRewardId);
  growthState.rewardHistory.unshift({
    id: dailyRewardId,
    type: "dailyCheckin",
    title: `每日首次登录奖励 第${dailyReward.day}天`,
    xp: dailyReward.xp,
    points: dailyReward.points,
    status: "claimed",
    claimedAt: new Date().toLocaleString("zh-CN", { hour12: false })
  });
  rewardEvents.push(`今日签到成功：+${dailyReward.xp} XP，+${dailyReward.points} 积分。`);

  const streakReward = streakRewards[nextStreak];
  let streakGrant = null;
  if (streakReward && !hasClaimedReward(`streak-${nextStreak}`)) {
    streakGrant = grantReward({
      xp: streakReward.xp,
      points: streakReward.points,
      source: streakReward.title
    });
    growthState.rewardClaimHistory.push({
      id: `streak-${nextStreak}`,
      type: "streakReward",
      date: today,
      streak: nextStreak,
      xp: streakReward.xp,
      points: streakReward.points
    });
    recordPilotReward(streakReward.title, streakReward.xp, streakReward.points, "streakReward");
    growthState.rewardClaims.push(`streak-${nextStreak}`);
    growthState.rewardHistory.unshift({
      id: `streak-${nextStreak}`,
      type: "streakReward",
      title: streakReward.title,
      xp: streakReward.xp,
      points: streakReward.points,
      status: "claimed",
      claimedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    });
    rewardEvents.push(`${streakReward.title}达成：+${streakReward.xp} XP，+${streakReward.points} 积分。`);
  }

  growthState.rewardClaims = Array.from(new Set(growthState.rewardClaims)).slice(-160);
  growthState.rewardHistory = growthState.rewardHistory.slice(0, 80);
  growthState.rewardClaimHistory = growthState.rewardClaimHistory.slice(-120);
  growthState.lastRewardMessage = rewardEvents.join(" ");
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();

  const evolvedGrant = streakGrant?.result.evolved ? streakGrant : dailyGrant;
  if (evolvedGrant.result.evolved && evolvedGrant.newlyUnlocked.includes(evolvedGrant.result.afterStage) && [10, 20].includes(evolvedGrant.result.afterLevel)) {
    showEvolutionModal(evolvedGrant.result.afterStage);
  }

  if (streakReward) {
    showRewardModal(streakReward.title, rewardEvents.join(" "), "连续成长达成");
  } else {
    showRewardModal("今日签到成功", rewardEvents[0], "每日签到");
  }
}

function showRewardModal(title, copy, eyebrow = "每日奖励") {
  const modal = document.querySelector("#reward-modal");
  if (!modal) return;
  document.querySelector("#reward-modal-eyebrow").textContent = eyebrow;
  document.querySelector("#reward-modal-title").textContent = title;
  document.querySelector("#reward-modal-copy").textContent = copy;
  modal.hidden = false;
}

function hideRewardModal() {
  const modal = document.querySelector("#reward-modal");
  if (modal) modal.hidden = true;
}

function claimRewardChest(rewardId) {
  const reward = growthState.rewardHistory.find((item) => item.id === rewardId);
  if (!reward || reward.status !== "claimable" || hasClaimedReward(rewardId)) return;
  const grant = grantReward({
    xp: reward.xp,
    points: reward.points,
    source: reward.title,
    logType: "reward"
  });
  reward.status = "claimed";
  reward.claimedAt = new Date().toLocaleString("zh-CN", { hour12: false });
  growthState.rewardClaims.push(rewardId);
  growthState.rewardClaims = Array.from(new Set(growthState.rewardClaims)).slice(-160);
  growthState.rewardClaimHistory.push({
    id: rewardId,
    type: reward.type,
    date: todayKey(),
    xp: reward.xp,
    points: reward.points
  });
  recordPilotReward(reward.title, reward.xp, reward.points, reward.type);
  growthState.rewardClaimHistory = growthState.rewardClaimHistory.slice(-120);
  growthState.lastRewardMessage = `${reward.title}已领取：+${reward.xp} XP，+${reward.points} 积分。`;
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
  showRewardModal("奖励领取成功", growthState.lastRewardMessage, "奖励宝箱");
  if (grant.result.evolved && grant.newlyUnlocked.includes(grant.result.afterStage) && [10, 20].includes(grant.result.afterLevel)) {
    showEvolutionModal(grant.result.afterStage);
  }
}

function applyXpToPet(pet, xpAmount) {
  const beforeLevel = pet.level;
  const beforeStage = stageForLevel(beforeLevel);
  pet.xp += Math.max(0, xpAmount);

  while (pet.level < 30) {
    const needed = xpForNextLevel(pet.level);
    if (!needed || pet.xp < needed) break;
    pet.xp -= needed;
    pet.level += 1;
  }

  if (pet.level >= 30) {
    pet.xp = 0;
  }
  pet.xpToNext = xpForNextLevel(pet.level);

  return {
    beforeLevel,
    afterLevel: pet.level,
    beforeStage,
    afterStage: stageForLevel(pet.level),
    leveledUp: pet.level > beforeLevel,
    evolved: stageForLevel(pet.level) !== beforeStage
  };
}

function applyEvolutionSystem(data) {
  evolutionSystem = data;
  petSkinLines = data.petSkinLines || [];
  inventorySkinLines = data.inventorySkinLines || [];
  const pet = normalizePetState(data.currentPet || fallbackEvolutionSystem.currentPet);
  const persistentState = loadPersistentState(pet);
  if (persistentState.inventorySkinLines) {
    inventorySkinLines = inventorySkinLines.map((item) => {
      const saved = persistentState.inventorySkinLines.find((skin) => skin.skinLineId === item.skinLineId);
      return saved ? { ...item, ...saved } : item;
    });
  }
  Object.assign(pet, persistentState.currentPet);
  pet.petSpecies = persistentState.parentSettings.currentPetSpecies;
  pet.equippedSkinLineId = defaultSkinLineIdForSpecies(pet.petSpecies);
  normalizePetState(pet);
  currentStage = stageForLevel(pet.level);
  equippedSkinLineId = pet.equippedSkinLineId || inventorySkinLines.find((item) => item.equipped)?.skinLineId || petSkinLines[0]?.id;
  inventorySkinLines.forEach((item) => {
    if (item.skinLineId === equippedSkinLineId) {
      item.owned = true;
      item.equipped = true;
      item.acquiredAt = item.acquiredAt || "parent-settings";
    } else {
      item.equipped = false;
    }
  });
  pet.equippedSkinLineId = equippedSkinLineId;
  tryOnSkinLineId = equippedSkinLineId;
  resetGrowthState(persistentState);
  syncUnlockedStages(pet);
  growthState.totalXp = Math.max(growthState.totalXp, totalXpForPet(pet));
  evaluateRewardEconomy(pet);
}

async function loadEvolutionSystem() {
  try {
    const response = await fetch("./data/evolution-system.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    applyEvolutionSystem(await response.json());
  } catch (error) {
    console.warn("[GrowPet] using fallback evolution system", error);
    applyEvolutionSystem(fallbackEvolutionSystem);
  }
}

function skinLineById(id) {
  return petSkinLines.find((skinLine) => skinLine.id === id) || petSkinLines[0];
}

function defaultSkinLineIdForSpecies(speciesId) {
  return petSkinLines.find((skinLine) => skinLine.id === `${speciesId}-default`)?.id || petSkinLines.find((skinLine) => skinLine.petSpecies === speciesId)?.id || "rabbit-default";
}

function inventoryBySkinLine(id) {
  return inventorySkinLines.find((item) => item.skinLineId === id);
}

function speciesDisplayName(speciesId) {
  return evolutionSystem.petSpecies?.find((species) => species.id === speciesId)?.displayName || "小兔子";
}

function skinLinesForSpecies(speciesId) {
  return petSkinLines.filter((skinLine) => skinLine.petSpecies === speciesId);
}

function skinLineImage(skinLine, stage = currentStage) {
  const imageName = skinLine[`${stage}Image`];
  const basePath = skinLine.assetBasePath || evolutionSystem.assetBasePath || "./assets/pets/rabbit/default/";
  return imageName.includes("/") ? imageName : `${basePath}${imageName}`;
}

function shopProducts() {
  const growthProducts = growthStoreItems.map((item) => ({
    ...item,
    category: consumableEffects[item.id] ? "consumable" : item.type === "宠物转换" ? "petTicket" : "evolutionMaterial",
    effect: consumableEffects[item.id] ? `使用后获得 ${consumableEffects[item.id].xp} XP` : item.description
  }));
  const skinProducts = petSkinLines
    .filter((skinLine) => skinLine.id !== "rabbit-default")
    .map((skinLine) => ({
      id: `skin-${skinLine.id}`,
      refId: skinLine.id,
      name: skinLine.name,
      type: "皮肤路线",
      category: "skinLine",
      price: skinLine.price || 0,
      icon: "spark",
      description: skinLine.unlockCondition,
      effect: "购买后进入背包，可切换完整皮肤路线"
    }));
  const statProducts = (evolutionSystem.statEquipment || [])
    .filter((item) => !item.empty && statEquipmentShopMeta[item.id])
    .map((item) => ({
      id: `stat-${item.id}`,
      refId: item.id,
      name: item.name,
      type: "数值装备",
      category: "statEquipment",
      price: statEquipmentShopMeta[item.id].price,
      icon: statEquipmentShopMeta[item.id].icon,
      description: item.effect,
      effect: `${item.effect}，只影响属性，不显示在宠物身上`
    }));
  return [...growthProducts, ...skinProducts, ...statProducts];
}

function shopProductById(productId) {
  return shopProducts().find((item) => item.id === productId);
}

function inventoryQuantity(productId) {
  return growthState.inventoryItems[productId]?.quantity || 0;
}

function addInventoryProduct(product, quantity = 1) {
  const current = growthState.inventoryItems[product.id] || {
    productId: product.id,
    name: product.name,
    category: product.category,
    quantity: 0,
    acquiredAt: null
  };
  current.quantity += quantity;
  current.acquiredAt = current.acquiredAt || new Date().toLocaleString("zh-CN", { hour12: false });
  growthState.inventoryItems[product.id] = current;
}

function openShopDetail(productId) {
  const product = shopProductById(productId);
  const modal = document.querySelector("#shop-modal");
  if (!product || !modal) return;
  growthState.pendingShopProductId = productId;
  document.querySelector("#shop-modal-eyebrow").textContent = product.type;
  document.querySelector("#shop-modal-title").textContent = product.name;
  document.querySelector("#shop-modal-copy").textContent = `${product.effect} · 价格 ${product.price} 积分`;
  document.querySelector("#shop-modal-confirm").textContent = product.price === 0 ? "免费领取" : "确认购买";
  modal.hidden = false;
}

function hideShopModal() {
  const modal = document.querySelector("#shop-modal");
  if (modal) modal.hidden = true;
  growthState.pendingShopProductId = null;
}

function confirmShopPurchase() {
  if (!growthState.pendingShopProductId) return;
  buyProduct(growthState.pendingShopProductId);
}

function buyProduct(productId) {
  const product = shopProductById(productId);
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  if (!product) return;
  if (pet.points < product.price) {
    showRewardModal("积分不足", `当前积分 ${pet.points}，购买 ${product.name} 需要 ${product.price} 积分。`, "商城提示");
    hideShopModal();
    return;
  }
  pet.points -= product.price;
  if (product.category === "skinLine") {
    const inventory = inventoryBySkinLine(product.refId);
    if (inventory) {
      inventory.owned = true;
      inventory.acquiredAt = "points-shop";
    }
  } else {
    addInventoryProduct(product);
  }
  growthState.purchaseHistory = [
    {
      id: `${Date.now()}-${product.id}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      purchasedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    },
    ...growthState.purchaseHistory
  ].slice(0, 120);
  growthState.lastRewardMessage = `${product.name}购买成功，已进入背包。`;
  savePersistentState();
  hideShopModal();
  renderGrowthLoop();
  renderAllSkinViews();
  showRewardModal("购买成功", growthState.lastRewardMessage, "积分商城");
}

function useInventoryItem(productId) {
  const product = shopProductById(productId);
  const item = growthState.inventoryItems[productId];
  if (!product || !item || item.quantity <= 0) return;
  if (product.category !== "consumable") {
    showRewardModal("暂不可使用", `${product.name} 已在背包中，第一版仅支持使用经验药水。`, "背包");
    return;
  }
  const effect = consumableEffects[product.id];
  item.quantity -= 1;
  if (item.quantity <= 0) delete growthState.inventoryItems[productId];
  const grant = grantReward({ xp: effect.xp, points: 0, source: product.name, logType: "reward" });
  growthState.lastRewardMessage = `${product.name}已使用：+${effect.xp} XP。`;
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
  showRewardModal("使用成功", growthState.lastRewardMessage, "背包");
  if (grant.result.evolved && grant.newlyUnlocked.includes(grant.result.afterStage) && [10, 20].includes(grant.result.afterLevel)) {
    showEvolutionModal(grant.result.afterStage);
  }
}

function equipStatItem(productId) {
  const product = shopProductById(productId);
  const item = growthState.inventoryItems[productId];
  if (!product || product.category !== "statEquipment" || !item || item.quantity <= 0) return;
  if (growthState.equippedStatItems.includes(product.refId)) {
    growthState.equippedStatItems = growthState.equippedStatItems.filter((id) => id !== product.refId);
    growthState.lastRewardMessage = `${product.name}已卸下，宠物外观不变。`;
  } else {
    growthState.equippedStatItems = [...growthState.equippedStatItems, product.refId].slice(-4);
    growthState.lastRewardMessage = `${product.name}已装备，只影响属性，不显示在宠物身上。`;
  }
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
}

function currentAttributes() {
  const attrs = { ...baseAttributes };
  growthState.equippedStatItems.forEach((id) => {
    const meta = statEquipmentShopMeta[id];
    if (meta) attrs[meta.stat] += meta.value;
  });
  return attrs;
}

function resetTodayTasksFromTemplates() {
  growthState.dailyTasks = normalizeDailyTasks(null, growthState.parentSettings);
  growthState.tasks = growthState.dailyTasks.tasks;
  growthState.completedTaskIds = [];
  growthState.todayXp = 0;
  growthState.todayPoints = 0;
  growthState.lastRewardMessage = "今日任务已按家长模板重置。";
  savePersistentState();
  renderGrowthLoop();
  renderParentSettings();
}

function clearTestData() {
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const parentSettings = normalizeParentSettings(growthState.parentSettings);
  const courseReminders = normalizeCourseReminders(growthState.courseReminders);
  pet.level = 1;
  pet.xp = 0;
  pet.points = 0;
  pet.petSpecies = parentSettings.currentPetSpecies;
  pet.equippedSkinLineId = defaultSkinLineIdForSpecies(pet.petSpecies);
  normalizePetState(pet);
  const fresh = createPersistentState(pet);
  fresh.parentSettings = parentSettings;
  fresh.courseReminders = courseReminders;
  fresh.dailyTasks = normalizeDailyTasks(null, parentSettings);
  resetGrowthState(fresh);
  equippedSkinLineId = pet.equippedSkinLineId;
  tryOnSkinLineId = equippedSkinLineId;
  currentStage = stageForLevel(pet.level);
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
  renderParentSettings("测试数据已清空，家长设置和课程提醒已保留。");
  renderCourseSettings();
}

function applyParentSettingsFromForm() {
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const templates = Array.from(document.querySelectorAll("[data-task-template-id]")).map((row, index) => {
    const fallback = growthState.parentSettings.dailyTaskTemplates[index] || learningTasks[index % learningTasks.length];
    return normalizeTaskTemplate({
      id: row.dataset.taskTemplateId,
      title: row.querySelector("[data-template-title]").value,
      detail: fallback.detail,
      xp: row.querySelector("[data-template-xp]").value,
      points: row.querySelector("[data-template-points]").value,
      icon: fallback.icon,
      color: fallback.color
    }, index);
  });
  const nextSettings = normalizeParentSettings({
    ...growthState.parentSettings,
    childNickname: document.querySelector("#setting-child-nickname").value,
    currentPetSpecies: document.querySelector("#setting-current-pet").value,
    miniGameEnabled: document.querySelector("#setting-mini-game-enabled").checked,
    dailyReminderTime: document.querySelector("#setting-daily-reminder-time").value,
    dailyTaskTemplates: templates
  });
  growthState.parentSettings = nextSettings;
  pet.petSpecies = nextSettings.currentPetSpecies;
  pet.equippedSkinLineId = defaultSkinLineIdForSpecies(pet.petSpecies);
  equippedSkinLineId = pet.equippedSkinLineId;
  tryOnSkinLineId = equippedSkinLineId;
  inventorySkinLines.forEach((item) => {
    item.equipped = item.skinLineId === equippedSkinLineId;
    if (item.equipped) item.owned = true;
  });
  growthState.unlockedStages[pet.petSpecies] = Array.from(new Set([...(growthState.unlockedStages[pet.petSpecies] || []), ...stagesForLevel(pet.level)]));
  growthState.dailyTasks = normalizeDailyTasks(null, nextSettings);
  growthState.tasks = growthState.dailyTasks.tasks;
  growthState.completedTaskIds = [];
  growthState.lastRewardMessage = "家长设置已保存，今日任务已按新模板刷新。";
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
  renderParentSettings("家长设置已保存。");
}

function sortedCourseReminders() {
  return normalizeCourseReminders(growthState.courseReminders).sort((a, b) => {
    if (a.weekday !== b.weekday) return a.weekday - b.weekday;
    return a.time.localeCompare(b.time);
  });
}

function nextEnabledCourse() {
  const enabled = sortedCourseReminders().filter((course) => course.enabled);
  if (enabled.length === 0) return null;
  const now = new Date();
  const currentMinutes = now.getDay() * 1440 + now.getHours() * 60 + now.getMinutes();
  return enabled
    .map((course) => {
      const [hour, minute] = course.time.split(":").map(Number);
      const minutes = course.weekday * 1440 + hour * 60 + minute;
      const distance = minutes >= currentMinutes ? minutes - currentMinutes : minutes + 7 * 1440 - currentMinutes;
      return { ...course, distance };
    })
    .sort((a, b) => a.distance - b.distance)[0];
}

function fillCourseForm(course = null) {
  document.querySelector("#course-edit-id").value = course?.id || "";
  document.querySelector("#course-name").value = course?.name || "";
  document.querySelector("#course-weekday").value = String(course?.weekday ?? 1);
  document.querySelector("#course-time").value = course?.time || "17:30";
  document.querySelector("#course-remind-minutes").value = String(course?.remindMinutes ?? 30);
  document.querySelector("#course-enabled").checked = course?.enabled !== false;
  document.querySelector("#course-form-mode").textContent = course ? "编辑" : "新增";
}

function saveCourseReminderFromForm() {
  const editId = document.querySelector("#course-edit-id").value;
  const course = normalizeCourseReminder({
    id: editId || `course-${Date.now()}`,
    name: document.querySelector("#course-name").value,
    weekday: document.querySelector("#course-weekday").value,
    time: document.querySelector("#course-time").value,
    remindMinutes: document.querySelector("#course-remind-minutes").value,
    enabled: document.querySelector("#course-enabled").checked
  });
  if (!course.name) return;
  const existingIndex = growthState.courseReminders.findIndex((item) => item.id === editId);
  if (existingIndex >= 0) growthState.courseReminders[existingIndex] = course;
  else growthState.courseReminders = [...growthState.courseReminders, course];
  growthState.courseReminders = normalizeCourseReminders(growthState.courseReminders);
  savePersistentState();
  fillCourseForm();
  renderCourseSettings("课程提醒已保存。");
  renderCourseViews();
}

function deleteCourseReminder(courseId) {
  growthState.courseReminders = growthState.courseReminders.filter((course) => course.id !== courseId);
  savePersistentState();
  renderCourseSettings("课程提醒已删除。");
  renderCourseViews();
}

function courseCheckedToday(courseId) {
  return (growthState.pilotHistory || []).some((item) => item.type === "course" && item.courseId === courseId && item.date === todayKey());
}

function checkInCourse(courseId) {
  const course = growthState.courseReminders.find((item) => item.id === courseId);
  if (!course || courseCheckedToday(courseId)) return;
  recordPilotCourseCheckin(course);
  savePersistentState();
  renderCourseViews();
  renderPilotViews();
  showAppStatus(`${course.name}签到已记录。`, "success");
}

function renderInitializationForm() {
  const petSelect = document.querySelector("#init-current-pet");
  if (!petSelect) return;
  petSelect.innerHTML = collectionSpecies.map((speciesId) => `<option value="${speciesId}">${speciesDisplayName(speciesId)}</option>`).join("");
  petSelect.value = growthState.parentSettings.currentPetSpecies;
}

function maybeShowInitialization() {
  if (growthState.parentSettings.familyInitialized) return;
  renderInitializationForm();
  const modal = document.querySelector("#init-modal");
  if (modal) modal.hidden = false;
}

function finishInitialization() {
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const firstTask = normalizeTaskTemplate({
    ...learningTasks[0],
    title: document.querySelector("#init-task-title").value,
    xp: document.querySelector("#init-task-xp").value,
    points: document.querySelector("#init-task-points").value
  }, 0);
  const templates = [firstTask, ...defaultParentSettings.dailyTaskTemplates.slice(1)];
  const parentSettings = normalizeParentSettings({
    ...growthState.parentSettings,
    childNickname: document.querySelector("#init-child-nickname").value,
    currentPetSpecies: document.querySelector("#init-current-pet").value,
    familyInitialized: true,
    dailyTaskTemplates: templates
  });
  growthState.parentSettings = parentSettings;
  pet.petSpecies = parentSettings.currentPetSpecies;
  pet.equippedSkinLineId = defaultSkinLineIdForSpecies(pet.petSpecies);
  equippedSkinLineId = pet.equippedSkinLineId;
  tryOnSkinLineId = equippedSkinLineId;
  growthState.courseReminders = normalizeCourseReminders([{
    id: "course-initial",
    name: document.querySelector("#init-course-name").value,
    weekday: new Date().getDay(),
    time: document.querySelector("#init-course-time").value,
    remindMinutes: 30,
    enabled: true
  }]);
  growthState.dailyTasks = normalizeDailyTasks(null, parentSettings);
  growthState.tasks = growthState.dailyTasks.tasks;
  growthState.completedTaskIds = [];
  const modal = document.querySelector("#init-modal");
  if (modal) modal.hidden = true;
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
  showAppStatus("家庭数据初始化完成。", "success");
}

function setAppMode(mode) {
  growthState.parentSettings = normalizeParentSettings({ ...growthState.parentSettings, appMode: mode });
  document.documentElement.dataset.mode = growthState.parentSettings.appMode;
  savePersistentState();
  renderModeViews();
}

function toggleAppMode() {
  setAppMode(growthState.parentSettings.appMode === "dev" ? "family" : "dev");
}

function resetGrowthState(persistentState = createPersistentState(evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet)) {
  const parentSettings = normalizeParentSettings(persistentState.parentSettings);
  const dailyTasks = normalizeDailyTasks(persistentState.dailyTasks, parentSettings);
  const completedTaskIds = dailyTasks.tasks.filter((task) => task.completed).map((task) => task.id);
  growthState = {
    tasks: dailyTasks.tasks,
    todayXp: 0,
    todayPoints: 0,
    streakDays: persistentState.streakDays,
    totalXp: persistentState.totalXp,
    completedTaskTotal: persistentState.completedTaskTotal,
    completedTaskIds,
    unlockedStages: persistentState.unlockedStages,
    growthLog: persistentState.growthLog,
    dailyCheckin: persistentState.dailyCheckin,
    checkinStreak: persistentState.checkinStreak,
    dailyTasks,
    lastTaskCompletionDate: persistentState.lastTaskCompletionDate,
    achievements: persistentState.achievements,
    rewardHistory: persistentState.rewardHistory,
    rewardClaims: persistentState.rewardClaims,
    inventoryItems: persistentState.inventoryItems,
    purchaseHistory: persistentState.purchaseHistory,
    equippedStatItems: persistentState.equippedStatItems,
    pendingShopProductId: null,
    parentSettings,
    courseReminders: normalizeCourseReminders(persistentState.courseReminders),
    pilotStats: normalizePilotStats(persistentState.pilotStats),
    pilotHistory: Array.isArray(persistentState.pilotHistory) ? persistentState.pilotHistory : [],
    pilotDaily: normalizePilotDaily(persistentState.pilotDaily),
    rewardClaimHistory: persistentState.rewardClaimHistory,
    lastRewardMessage: completedTaskIds.length > 0 ? "已恢复本地成长记录，继续完成剩余任务。" : "完成任意学习任务，宠物会获得 XP 并自动成长。"
  };
}

function completedTaskCount() {
  return growthState.tasks.filter((task) => task.completed).length;
}

function completeTask(taskId) {
  const task = growthState.tasks.find((item) => item.id === taskId);
  if (!task || task.completed) return;

  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const result = applyXpToPet(pet, task.xp);
  pet.points += task.points;
  task.completed = true;
  growthState.dailyTasks = {
    date: todayKey(),
    tasks: growthState.tasks.map((item) => ({ ...item, completed: item.completed }))
  };
  growthState.completedTaskIds = growthState.tasks.filter((item) => item.completed).map((item) => item.id);
  growthState.todayXp += task.xp;
  growthState.todayPoints += task.points;
  growthState.totalXp += task.xp;
  growthState.completedTaskTotal += 1;
  updateStudyStreakForTaskCompletion();
  recordPilotTask(task);
  const newlyUnlocked = syncUnlockedStages(pet);

  if (result.evolved) {
    growthState.lastRewardMessage = `${task.title}完成：+${task.xp} XP，宠物进化到 ${stageMeta[result.afterStage].label}。`;
    addGrowthLog("evolution", `进化到 ${stageMeta[result.afterStage].label}`, `Lv${result.afterLevel} 解锁 ${stageMeta[result.afterStage].name}`);
    if (result.afterLevel >= 10) {
      addRewardChest({ id: "evolution-lv10", type: "evolution", title: "Lv10 进化奖励", xp: 0, points: 100 });
    }
    if (result.afterLevel >= 20) {
      addRewardChest({ id: "evolution-lv20", type: "evolution", title: "Lv20 进化奖励", xp: 0, points: 220 });
    }
  } else if (result.leveledUp) {
    growthState.lastRewardMessage = `${task.title}完成：+${task.xp} XP，宠物升到 Lv${result.afterLevel}。`;
    addGrowthLog("level", `升级到 Lv${result.afterLevel}`, `${task.title} 提供 ${task.xp} XP`);
  } else {
    growthState.lastRewardMessage = `${task.title}完成：+${task.xp} XP，+${task.points} 积分。`;
  }

  evaluateRewardEconomy(pet);
  savePersistentState();
  renderGrowthLoop();
  renderAllSkinViews();
  if (result.evolved && newlyUnlocked.includes(result.afterStage) && (result.afterLevel === 10 || result.afterLevel === 20)) {
    showEvolutionModal(result.afterStage);
  }
}

function showEvolutionModal(stage) {
  const modal = document.querySelector("#evolution-modal");
  if (!modal) return;
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const skinLine = skinLineById(equippedSkinLineId);
  document.querySelector("#evolution-modal-title").textContent = `${speciesDisplayName(pet.petSpecies)}进化到 ${stageMeta[stage].label}`;
  document.querySelector("#evolution-modal-copy").textContent = `${stageMeta[stage].name} 已加入成长图鉴。`;
  document.querySelector("#evolution-modal-image").src = skinLineImage(skinLine, stage);
  modal.hidden = false;
}

function hideEvolutionModal() {
  const modal = document.querySelector("#evolution-modal");
  if (modal) modal.hidden = true;
}

function navigateTo(id) {
  if (!pages[id]) return;
  document.querySelectorAll(".nav-item").forEach((item) => {
    const active = item.dataset.page === id;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  document.querySelectorAll(".page").forEach((page) => page.classList.toggle("active", page.id === id));
  document.querySelector("#page-eyebrow").textContent = pages[id][0];
  document.querySelector("#page-title").textContent = pages[id][1];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.page));
});

document.querySelectorAll("[data-page-jump]").forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.pageJump));
});

function updateCurrentSkinViews() {
  const skinLine = skinLineById(equippedSkinLineId);
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  normalizePetState(pet);
  currentStage = stageForLevel(pet.level);
  const stage = stageMeta[currentStage];
  const progressPercent = pet.xpToNext > 0 ? Math.min(100, Math.round((pet.xp / pet.xpToNext) * 100)) : 100;
  document.querySelector("#current-pet-name").textContent = speciesDisplayName(pet.petSpecies);
  document.querySelector("#current-pet-summary").textContent = `Lv${pet.level} · ${stage.label} ${stage.name}`;
  document.querySelector("#hero-pet-level").textContent = `Lv ${pet.level}`;
  document.querySelector("#pet-xp-text").textContent = `${pet.xp}/${pet.xpToNext}`;
  document.querySelector("#pet-xp-bar").style.width = `${progressPercent}%`;
  document.querySelector("#hero-xp-bar").style.width = `${progressPercent}%`;
  document.querySelectorAll(".js-current-skin").forEach((img) => {
    img.src = skinLineImage(skinLine);
    img.alt = `${skinLine.name} 当前阶段完整成长形态`;
  });
  document.querySelectorAll(".js-current-skin-name").forEach((node) => {
    node.textContent = skinLine.name;
  });
}

function renderStagePreview(rootId, skinLineId) {
  const root = document.querySelector(rootId);
  if (!root) return;
  const skinLine = skinLineById(skinLineId);
  root.innerHTML = Object.entries(stageMeta).map(([stageId, meta]) => `
    <article>
      <img class="pet-image" src="${skinLineImage(skinLine, stageId)}" alt="${skinLine.name} ${meta.label}" />
      <span>${meta.label}</span>
      <small>${meta.range}</small>
    </article>
  `).join("");
}

function renderStageSwitcher() {
  const root = document.querySelector("#stage-switcher");
  if (!root) return;
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  root.innerHTML = levelPreviewStates.map((state) => `
    <button class="${state.level === pet.level ? "active" : ""}" data-preview-level="${state.level}">${state.label} · ${stageMeta[state.stage].label}</button>
  `).join("");
  root.querySelectorAll("[data-preview-level]").forEach((button) => {
    button.addEventListener("click", () => {
      pet.level = Number(button.dataset.previewLevel);
      pet.xp = 0;
      normalizePetState(pet);
      currentStage = stageForLevel(pet.level);
      growthState.unlockedStages[pet.petSpecies] = stagesForLevel(pet.level);
      growthState.lastRewardMessage = `已切换到 ${button.textContent} 验证状态。`;
      growthState.totalXp = totalXpForPet(pet);
      savePersistentState();
      renderGrowthLoop();
      renderAllSkinViews();
    });
  });
}

function renderPetSwitcher() {
  const root = document.querySelector("#pet-skin-switcher");
  if (!root) return;
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  root.innerHTML = skinLinesForSpecies(pet.petSpecies).map((skinLine) => {
    const inventory = inventoryBySkinLine(skinLine.id);
    const disabled = !inventory?.owned;
    const active = skinLine.id === equippedSkinLineId;
    return `<button class="${active ? "active" : ""}" data-equip-skin="${skinLine.id}" ${disabled ? "disabled" : ""}>${active ? "当前路线" : "切换"} ${skinLine.name}</button>`;
  }).join("");
  root.querySelectorAll("[data-equip-skin]").forEach((button) => {
    button.addEventListener("click", () => equipSkinLine(button.dataset.equipSkin));
  });
}

function renderStore() {
  const root = document.querySelector("#skin-store-grid");
  if (!root) return;
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  document.querySelector("#store-points-label").textContent = `当前积分 ${pet.points}`;
  root.innerHTML = petSkinLines.map((skinLine) => {
    const inventory = inventoryBySkinLine(skinLine.id);
    const owned = inventory?.owned;
    const productId = `skin-${skinLine.id}`;
    const product = shopProductById(productId);
    const price = product?.price ?? skinLine.price ?? 0;
    return `
      <article class="store-card skin-card">
        <img class="pet-image skin-card-image" src="${skinLineImage(skinLine, "stage1")}" alt="${skinLine.name}商城预览" />
        <div class="skin-card-copy">
          <span class="rarity ${skinLine.rarity}">${skinLine.rarity}</span>
          <h3>${skinLine.name}</h3>
          <p>${skinLine.theme} · ${skinLine.unlockCondition}</p>
          <b>${price === 0 ? "免费" : `${price} 积分`}</b>
        </div>
        <div class="skin-card-actions">
          <button data-try-skin="${skinLine.id}">预览路线</button>
          <button data-shop-detail="${productId}" ${owned || skinLine.id === "rabbit-default" ? "disabled" : ""}>${owned || skinLine.id === "rabbit-default" ? "已拥有" : "购买"}</button>
        </div>
      </article>
    `;
  }).join("");
  root.querySelectorAll("[data-try-skin]").forEach((button) => {
    button.addEventListener("click", () => openTryOn(button.dataset.trySkin));
  });
  root.querySelectorAll("[data-shop-detail]").forEach((button) => {
    button.addEventListener("click", () => openShopDetail(button.dataset.shopDetail));
  });
}

function renderGrowthStore() {
  const root = document.querySelector("#growth-store-grid");
  if (!root) return;
  const products = shopProducts().filter((item) => ["consumable", "evolutionMaterial", "petTicket", "statEquipment"].includes(item.category));
  root.innerHTML = products.map((item) => `
    <article class="store-card growth-item-card">
      <span class="icon blue-bg" data-icon="${item.icon}"></span>
      <span class="rarity">${item.type}</span>
      <h3>${item.name}</h3>
      <p>${item.effect}</p>
      <b>${item.price} 积分</b>
      <button data-shop-detail="${item.id}">查看详情</button>
    </article>
  `).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
  root.querySelectorAll("[data-shop-detail]").forEach((button) => {
    button.addEventListener("click", () => openShopDetail(button.dataset.shopDetail));
  });
}

function renderBag() {
  const root = document.querySelector("#skin-bag-grid");
  if (!root) return;
  renderInventoryItems();
  root.innerHTML = petSkinLines.map((skinLine) => {
    const inventory = inventoryBySkinLine(skinLine.id);
    const owned = inventory?.owned;
    const equipped = skinLine.id === equippedSkinLineId;
    return `
      <article class="store-card skin-card ${!owned ? "locked" : ""}">
        <img class="pet-image skin-card-image" src="${skinLineImage(skinLine, "stage1")}" alt="${skinLine.name}背包预览" />
        <div class="skin-card-copy">
          <span class="rarity ${skinLine.rarity}">${owned ? "已拥有" : skinLine.unlockCondition}</span>
          <h3>${skinLine.name}</h3>
          <p>${equipped ? "当前成长路线" : "完整三阶段 PNG 路线"}</p>
        </div>
        <div class="skin-card-actions">
          <button data-try-skin="${skinLine.id}">预览</button>
          <button data-equip-skin="${skinLine.id}" ${!owned || equipped ? "disabled" : ""}>${equipped ? "使用中" : "切换路线"}</button>
        </div>
      </article>
    `;
  }).join("");
  root.querySelectorAll("[data-try-skin]").forEach((button) => {
    button.addEventListener("click", () => openTryOn(button.dataset.trySkin));
  });
  root.querySelectorAll("[data-equip-skin]").forEach((button) => {
    button.addEventListener("click", () => equipSkinLine(button.dataset.equipSkin));
  });
}

function renderInventoryItems() {
  const root = document.querySelector("#inventory-item-grid");
  const label = document.querySelector("#inventory-count-label");
  if (!root || !label) return;
  const items = Object.values(growthState.inventoryItems).filter((item) => item.quantity > 0);
  label.textContent = `${items.reduce((sum, item) => sum + item.quantity, 0)} 件`;
  if (items.length === 0) {
    root.innerHTML = `<div class="empty-state">背包里还没有可使用道具。</div>`;
    return;
  }
  root.innerHTML = items.map((item) => {
    const product = shopProductById(item.productId);
    const equipped = product?.category === "statEquipment" && growthState.equippedStatItems.includes(product.refId);
    const action = product?.category === "consumable" ? "使用" : product?.category === "statEquipment" ? (equipped ? "卸下" : "装备") : "查看";
    return `
      <article class="store-card growth-item-card">
        <span class="icon ${equipped ? "green-bg" : "blue-bg"}" data-icon="${product?.icon || "box"}"></span>
        <span class="rarity">${product?.type || item.category}</span>
        <h3>${item.name}</h3>
        <p>${product?.effect || "已进入背包"}</p>
        <b>数量 ${item.quantity}${equipped ? " · 装备中" : ""}</b>
        <button data-use-item="${item.productId}">${action}</button>
      </article>
    `;
  }).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
  root.querySelectorAll("[data-use-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = shopProductById(button.dataset.useItem);
      if (product?.category === "statEquipment") equipStatItem(button.dataset.useItem);
      else useInventoryItem(button.dataset.useItem);
    });
  });
}

function openTryOn(skinLineId) {
  tryOnSkinLineId = skinLineId;
  const skinLine = skinLineById(skinLineId);
  document.querySelector("#tryon-title").textContent = skinLine.name;
  document.querySelector("#tryon-copy").textContent = `${skinLine.theme} · ${skinLine.unlockCondition} · ${skinLine.price === 0 ? "免费" : `${skinLine.price} 积分`} · 完整 PNG 路线`;
  document.querySelector("#tryon-main-image").src = skinLineImage(skinLine);
  document.querySelector("#tryon-main-image").alt = `${skinLine.name} 当前阶段预览`;
  renderStagePreview("#tryon-stage-preview", tryOnSkinLineId);
  navigateTo("tryon");
}

function equipSkinLine(skinLineId) {
  const inventory = inventoryBySkinLine(skinLineId);
  if (!inventory?.owned) return;
  equippedSkinLineId = skinLineId;
  inventorySkinLines.forEach((item) => item.equipped = item.skinLineId === skinLineId);
  evolutionSystem.currentPet.equippedSkinLineId = skinLineId;
  savePersistentState();
  renderAllSkinViews();
}

function renderAllSkinViews() {
  updateCurrentSkinViews();
  renderStagePreview("#pet-stage-preview", equippedSkinLineId);
  renderStagePreview("#tryon-stage-preview", tryOnSkinLineId);
  renderStageSwitcher();
  renderPetSwitcher();
  renderStore();
  renderGrowthStore();
  renderBag();
  renderCollection();
  renderGrowthLog();
  renderStatEquipment();
  renderAttributes();
  renderProfileSummary();
  renderModeViews();
  renderPilotViews();
  renderParentSettings();
  renderCourseSettings();
  renderReferenceBoards();
}

function renderGrowthMetrics() {
  const totalTasks = growthState.tasks.length;
  const done = completedTaskCount();
  const pet = evolutionSystem.currentPet || fallbackEvolutionSystem.currentPet;
  const claimedToday = growthState.dailyCheckin?.lastClaimedDate === todayKey();
  document.querySelector("#dashboard-task-status").textContent = `今日 ${done}/${totalTasks} 个任务`;
  document.querySelector("#dashboard-growth-title").textContent = done > 0 ? "成长能量已经送达" : `${speciesDisplayName(pet.petSpecies)}正在等成长能量`;
  document.querySelector("#metric-total-xp").textContent = growthState.totalXp;
  document.querySelector("#metric-current-level").textContent = `Lv ${pet.level}`;
  document.querySelector("#metric-completed").textContent = growthState.completedTaskTotal;
  document.querySelector("#metric-streak").textContent = `${growthState.streakDays} 天`;
  document.querySelector("#metric-reward-ready").textContent = claimedToday ? "已领取" : "可领取";
  document.querySelector("#metric-checkin-streak").textContent = `${growthState.checkinStreak} 天`;
  document.querySelector("#metric-achievements").textContent = achievementCount();
  document.querySelector("#metric-claimable-rewards").textContent = claimableRewards().length;
}

function renderDashboardTasks() {
  const root = document.querySelector("#dashboard-task-list");
  if (!root) return;
  if (growthState.tasks.length === 0) {
    root.innerHTML = `<div class="empty-state">今天还没有任务。请在家长设置中初始化每日任务模板。</div>`;
    return;
  }
  root.innerHTML = growthState.tasks.slice(0, 3).map((task) => `
    <div class="list-row">
      <span class="icon ${task.completed ? "green-bg" : task.color}" data-icon="${task.completed ? "check" : task.icon}"></span>
      <div><b>${task.title}</b><small>${task.completed ? `+${task.xp} XP · +${task.points} 积分` : task.detail}</small></div>
      <em class="${task.completed ? "done" : ""}">${task.completed ? "完成" : "待完成"}</em>
    </div>
  `).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
}

function renderTaskCards() {
  const root = document.querySelector("#task-grid");
  if (!root) return;
  if (growthState.tasks.length === 0) {
    root.innerHTML = `<div class="empty-state">暂无学习任务。请进入家长设置添加每日任务模板。</div>`;
    return;
  }
  root.innerHTML = growthState.tasks.map((task) => `
    <article class="task-card ${task.completed ? "completed" : ""}">
      <span class="icon ${task.completed ? "green-bg" : task.color}" data-icon="${task.completed ? "check" : task.icon}"></span>
      <h3>${task.title}</h3>
      <p>${task.detail}</p>
      <small>奖励：${task.xp} XP · ${task.points} 积分</small>
      <button data-complete-task="${task.id}" ${task.completed ? "disabled" : ""}>${task.completed ? "已完成" : "完成打卡"}</button>
    </article>
  `).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
  root.querySelectorAll("[data-complete-task]").forEach((button) => {
    button.addEventListener("click", () => completeTask(button.dataset.completeTask));
  });
}

function renderGrowthFeedback() {
  const root = document.querySelector("#growth-feedback");
  if (!root) return;
  root.textContent = growthState.lastRewardMessage;
}

function renderGrowthLoop() {
  renderGrowthMetrics();
  renderDailyRewardCenter();
  renderRewardChests();
  renderDashboardTasks();
  renderTaskCards();
  renderGrowthFeedback();
  renderCourseViews();
}

function renderRewardChests() {
  const root = document.querySelector("#reward-chest-list");
  const status = document.querySelector("#reward-chest-status");
  if (!root || !status) return;
  const rewards = claimableRewards();
  status.textContent = `${rewards.length} 个可领取`;
  if (rewards.length === 0) {
    root.innerHTML = `<div class="empty-state">暂无可领取宝箱。</div>`;
    return;
  }
  root.innerHTML = rewards.slice(0, 4).map((reward) => `
    <article class="reward-chest-item">
      <span class="icon orange-bg" data-icon="gift"></span>
      <div><b>${reward.title}</b><small>+${reward.xp} XP · +${reward.points} 积分</small></div>
      <button data-claim-reward="${reward.id}" type="button">领取</button>
    </article>
  `).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
  root.querySelectorAll("[data-claim-reward]").forEach((button) => {
    button.addEventListener("click", () => claimRewardChest(button.dataset.claimReward));
  });
}

function renderDailyRewardCenter() {
  const claimedToday = growthState.dailyCheckin?.lastClaimedDate === todayKey();
  const nextStreak = claimedToday ? growthState.checkinStreak : (growthState.dailyCheckin?.lastClaimedDate === dateKeyFromOffset(1) ? growthState.checkinStreak + 1 : 1);
  const reward = dailyRewardForStreak(nextStreak);
  const cycle = document.querySelector("#daily-reward-cycle");
  const title = document.querySelector("#daily-reward-title");
  const copy = document.querySelector("#daily-reward-copy");
  const button = document.querySelector("#claim-daily-reward");
  if (!cycle || !title || !copy || !button) return;

  cycle.textContent = claimedToday ? `第 ${growthState.dailyCheckin.cycleDay} 天已领` : `第 ${reward.day} 天`;
  title.textContent = claimedToday ? "今日奖励已领取" : "今日可领取奖励";
  copy.textContent = claimedToday ? "明天继续打开 App，可以延续连续签到。" : `领取后获得 ${reward.xp} XP 和 ${reward.points} 积分。`;
  button.textContent = claimedToday ? "今日已领取" : "领取今日奖励";
  button.disabled = claimedToday;

  const grid = document.querySelector("#streak-reward-grid");
  if (!grid) return;
  grid.innerHTML = Object.entries(streakRewards).map(([day, item]) => {
    const rewardId = `streak-${day}`;
    const claimed = hasClaimedReward(rewardId);
    const ready = !claimed && growthState.checkinStreak >= Number(day);
    return `
      <article class="streak-reward ${claimed ? "claimed" : ready ? "ready" : ""}">
        <b>${day}天</b>
        <small>${claimed ? "已达成" : ready ? "可领取" : `+${item.xp} XP`}</small>
      </article>
    `;
  }).join("");
}

function renderGrowthLog() {
  const root = document.querySelector("#growth-log-list");
  if (!root) return;
  if (growthState.growthLog.length === 0) {
    root.innerHTML = `<div class="empty-state">还没有升级或进化记录。</div>`;
    return;
  }
  root.innerHTML = growthState.growthLog.map((item) => `
    <article class="growth-log-item ${item.type}">
      <span class="icon ${item.type === "evolution" ? "purple-bg" : "blue-bg"}" data-icon="${item.type === "evolution" ? "spark" : "bolt"}"></span>
      <div>
        <b>${item.title}</b>
        <small>${item.detail} · ${item.createdAt}</small>
      </div>
    </article>
  `).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
}

function renderCollection() {
  const root = document.querySelector("#collection-grid");
  if (!root) return;
  root.innerHTML = collectionSpecies.map((speciesId) => {
    const skinLine = petSkinLines.find((line) => line.id === `${speciesId}-default`);
    if (!skinLine) return "";
    const unlocked = new Set(growthState.unlockedStages[speciesId] || []);
    const stages = Object.entries(stageMeta).map(([stageId, meta]) => {
      const isUnlocked = unlocked.has(stageId);
      return `
        <article class="collection-stage ${isUnlocked ? "unlocked" : "locked"}">
          <img class="pet-image" src="${skinLineImage(skinLine, stageId)}" alt="${skinLine.name} ${meta.label}" />
          <b>${meta.label}</b>
          <small>${isUnlocked ? "已解锁" : `${meta.range} 解锁`}</small>
        </article>
      `;
    }).join("");
    return `
      <section class="collection-card card">
        <div class="section-title"><h3>${speciesDisplayName(speciesId)}</h3><span>${skinLine.name}</span></div>
        <div class="collection-stage-grid">${stages}</div>
      </section>
    `;
  }).join("");
}

function renderStatEquipment() {
  const root = document.querySelector("#stat-equipment-grid");
  if (!root) return;
  const equipment = growthState.equippedStatItems.map((id) => (evolutionSystem.statEquipment || []).find((item) => item.id === id)).filter(Boolean);
  while (equipment.length < 5) {
    equipment.push({ id: `empty-${equipment.length}`, name: "空位", effect: "未装备", empty: true });
  }
  root.innerHTML = equipment.slice(0, 5).map((item) => `
    <article class="equipment-slot ${item.empty ? "empty" : ""}">
      <span class="icon ${item.empty ? "" : "purple-bg"}" data-icon="${item.icon || "spark"}"></span>
      <b>${item.name}</b>
      <small>${item.effect}</small>
    </article>
  `).join("");
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || icons.spark;
  });
}

function renderAttributes() {
  const attrs = currentAttributes();
  document.querySelector("#attr-focus").textContent = attrs.focus;
  document.querySelector("#attr-skill").textContent = attrs.skill;
  document.querySelector("#attr-creativity").textContent = attrs.creativity;
  document.querySelector("#attr-luck").textContent = `${attrs.luck}%`;
}

function renderProfileSummary() {
  const nickname = growthState.parentSettings.childNickname || "悦悦";
  const avatar = document.querySelector("#profile-avatar");
  const title = document.querySelector("#profile-title");
  const copy = document.querySelector("#profile-mode-copy");
  if (avatar) avatar.textContent = nickname.slice(0, 1);
  if (title) title.textContent = `${nickname}的成长空间`;
  if (copy) copy.textContent = `${growthState.parentSettings.appMode === "dev" ? "开发模式" : "家庭使用模式"} · 本地数据`;
}

function renderModeViews() {
  const mode = growthState.parentSettings.appMode;
  document.documentElement.dataset.mode = mode;
  const pill = document.querySelector("#app-mode-pill");
  const copy = document.querySelector("#mode-setting-copy");
  const taskLabel = document.querySelector("#task-source-label");
  if (pill) pill.textContent = mode === "dev" ? "开发模式" : "家庭使用模式";
  if (copy) copy.textContent = mode === "dev" ? "开发模式：显示测试入口" : "家庭使用模式：隐藏测试入口";
  if (taskLabel) taskLabel.textContent = mode === "dev" ? "开发 Mock / 家庭任务" : "家庭任务";
  renderProfileSummary();
  renderDeviceReadinessInfo();
}

function renderParentSettings(message = "") {
  const settings = normalizeParentSettings(growthState.parentSettings);
  const nickname = document.querySelector("#setting-child-nickname");
  const petSelect = document.querySelector("#setting-current-pet");
  const miniGame = document.querySelector("#setting-mini-game-enabled");
  const reminderTime = document.querySelector("#setting-daily-reminder-time");
  const taskList = document.querySelector("#task-template-list");
  const status = document.querySelector("#parent-settings-status");
  if (!nickname || !petSelect || !miniGame || !reminderTime || !taskList || !status) return;

  nickname.value = settings.childNickname;
  petSelect.innerHTML = collectionSpecies.map((speciesId) => `<option value="${speciesId}">${speciesDisplayName(speciesId)}</option>`).join("");
  petSelect.value = settings.currentPetSpecies;
  miniGame.checked = settings.miniGameEnabled;
  reminderTime.value = settings.dailyReminderTime;
  taskList.innerHTML = settings.dailyTaskTemplates.map((task) => `
    <article class="task-template-row" data-task-template-id="${task.id}">
      <label><span>任务</span><input data-template-title type="text" value="${task.title}" maxlength="18" /></label>
      <label><span>XP</span><input data-template-xp type="number" min="0" max="120" value="${task.xp}" /></label>
      <label><span>积分</span><input data-template-points type="number" min="0" max="160" value="${task.points}" /></label>
    </article>
  `).join("");
  status.textContent = message || `每日 ${settings.dailyReminderTime} 提醒 · 小游戏入口${settings.miniGameEnabled ? "开启" : "关闭"}`;
}

function renderCourseViews() {
  const dashboardCallout = document.querySelector(".course-callout");
  const timeline = document.querySelector("#course-timeline-list");
  const nextCourse = nextEnabledCourse();
  if (dashboardCallout) {
    dashboardCallout.innerHTML = nextCourse ? `
      <span class="icon orange-bg" data-icon="calendar"></span>
      <div><b>${nextCourse.name}</b><p>${weekdayLabels[nextCourse.weekday]} ${nextCourse.time} · 课前 ${nextCourse.remindMinutes} 分钟提醒</p></div>
    ` : `
      <span class="icon orange-bg" data-icon="calendar"></span>
      <div><b>暂无启用课程</b><p>家长可在课程提醒配置页添加兴趣班。</p></div>
    `;
    dashboardCallout.querySelectorAll("[data-icon]").forEach((node) => {
      node.innerHTML = icons[node.dataset.icon] || icons.calendar;
    });
  }
  if (timeline) {
    const courses = sortedCourseReminders();
    timeline.innerHTML = courses.length ? courses.map((course) => `
      <div class="timeline-row">
        <time>${weekdayLabels[course.weekday]} ${course.time}</time>
        <div><b>${course.name}</b><p>课前 ${course.remindMinutes} 分钟提醒</p></div>
        <span class="status-pill">${course.enabled ? "开启" : "关闭"}</span>
        <button class="inline-action" type="button" data-course-checkin="${course.id}" ${courseCheckedToday(course.id) ? "disabled" : ""}>${courseCheckedToday(course.id) ? "已签到" : "签到"}</button>
      </div>
    `).join("") : `<div class="empty-state">还没有配置兴趣班。</div>`;
    timeline.querySelectorAll("[data-course-checkin]").forEach((button) => {
      button.addEventListener("click", () => checkInCourse(button.dataset.courseCheckin));
    });
  }
}

function renderCourseSettings(message = "") {
  const weekday = document.querySelector("#course-weekday");
  const list = document.querySelector("#course-config-list");
  const label = document.querySelector("#course-count-label");
  const status = document.querySelector("#course-settings-status");
  if (!weekday || !list || !label || !status) return;
  weekday.innerHTML = weekdayLabels.map((name, index) => `<option value="${index}">${name}</option>`).join("");
  if (!document.querySelector("#course-edit-id").value) fillCourseForm();
  const courses = sortedCourseReminders();
  label.textContent = `${courses.length} 门`;
  status.textContent = message || "课程提醒配置会保存在本机。";
  list.innerHTML = courses.length ? courses.map((course) => `
    <article class="course-config-row">
      <div>
        <b>${course.name}</b>
        <small>${weekdayLabels[course.weekday]} ${course.time} · 提前 ${course.remindMinutes} 分钟 · ${course.enabled ? "启用" : "关闭"}</small>
      </div>
      <button type="button" data-edit-course="${course.id}">修改</button>
      <button type="button" data-delete-course="${course.id}">删除</button>
    </article>
  `).join("") : `<div class="empty-state">还没有配置兴趣班。</div>`;
  list.querySelectorAll("[data-edit-course]").forEach((button) => {
    button.addEventListener("click", () => {
      const course = growthState.courseReminders.find((item) => item.id === button.dataset.editCourse);
      if (course) fillCourseForm(course);
    });
  });
  list.querySelectorAll("[data-delete-course]").forEach((button) => {
    button.addEventListener("click", () => deleteCourseReminder(button.dataset.deleteCourse));
  });
}

function renderReferenceBoards() {
  const root = document.querySelector("#reference-board-grid");
  if (!root) return;
  const boards = evolutionSystem.geminiReferenceBoards || [];
  root.innerHTML = boards.map((board) => `
    <article class="reference-card">
      <img src="${evolutionSystem.referenceBasePath || "./assets/references/gemini/"}${board.imageName}" alt="${board.name}" />
      <div>
        <h3>${board.name}</h3>
        <p>${board.usage}</p>
      </div>
    </article>
  `).join("");
}

document.querySelector("#theme-button").addEventListener("click", () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
});

document.querySelector("#font-button").addEventListener("click", () => {
  const root = document.documentElement;
  root.dataset.font = root.dataset.font === "large" ? "normal" : "large";
});

document.querySelector("#evolution-modal-close").addEventListener("click", hideEvolutionModal);
document.querySelector("#evolution-modal").addEventListener("click", (event) => {
  if (event.target.id === "evolution-modal") hideEvolutionModal();
});
document.querySelector("#reward-modal-close").addEventListener("click", hideRewardModal);
document.querySelector("#reward-modal").addEventListener("click", (event) => {
  if (event.target.id === "reward-modal") hideRewardModal();
});
document.querySelector("#claim-daily-reward").addEventListener("click", claimDailyReward);
document.querySelector("#shop-modal-cancel").addEventListener("click", hideShopModal);
document.querySelector("#shop-modal").addEventListener("click", (event) => {
  if (event.target.id === "shop-modal") hideShopModal();
});
document.querySelector("#shop-modal-confirm").addEventListener("click", confirmShopPurchase);
document.querySelector("#save-parent-settings").addEventListener("click", applyParentSettingsFromForm);
document.querySelector("#reset-today-tasks").addEventListener("click", resetTodayTasksFromTemplates);
document.querySelector("#clear-test-data").addEventListener("click", clearTestData);
document.querySelector("#save-course-reminder").addEventListener("click", saveCourseReminderFromForm);
document.querySelector("#cancel-course-edit").addEventListener("click", () => {
  fillCourseForm();
  renderCourseSettings("已取消编辑。");
});
document.querySelector("#toggle-app-mode").addEventListener("click", toggleAppMode);
document.querySelector("#export-save-data").addEventListener("click", exportSaveData);
document.querySelector("#import-save-data").addEventListener("click", importSaveData);
document.querySelector("#refresh-device-info").addEventListener("click", refreshDeviceInfo);
document.querySelector("#refresh-pwa-cache").addEventListener("click", refreshPwaCache);
document.querySelector("#export-pilot-report").addEventListener("click", exportPilotReport);
document.querySelector("#finish-initialization").addEventListener("click", finishInitialization);

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.dataset.theme = "dark";
}

const params = new URLSearchParams(window.location.search);
const requestedTheme = params.get("theme");
const requestedFont = params.get("font");
const requestedPage = params.get("page");
const requestedTrySkin = params.get("trySkin");
const requestedMode = params.get("mode");

if (requestedTheme === "light" || requestedTheme === "dark") {
  document.documentElement.dataset.theme = requestedTheme;
}

if (requestedFont === "large" || requestedFont === "normal") {
  document.documentElement.dataset.font = requestedFont;
}

async function bootstrap() {
  await loadEvolutionSystem();
  if (requestedMode === "dev" || requestedMode === "family") {
    setAppMode(requestedMode);
  }
  if (requestedPage && pages[requestedPage]) {
    navigateTo(requestedPage);
  }
  renderGrowthLoop();
  renderAllSkinViews();
  maybeShowInitialization();
  if (requestedTrySkin && petSkinLines.some((skinLine) => skinLine.id === requestedTrySkin)) {
    openTryOn(requestedTrySkin);
  }
  registerServiceWorker();
}

bootstrap();
