import type { Language } from "./i18n";

export const EXPERIENCE_INDEX_PATH = "/experiences";
export const EXPERIENCE_SLUG = "aaorca-family-consultations";
export const EXPERIENCE_PATH = `${EXPERIENCE_INDEX_PATH}/${EXPERIENCE_SLUG}`;

type Localized = { zh: string; en: string };

export const experienceIndexCopy: Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    warning: string;
    read: string;
    sourceLabel: string;
  }
> = {
  zh: {
    metaTitle: "网友经验｜冠状动脉起源异常文献库",
    metaDescription:
      "AAOCA 患者和家属分享的就诊、检查与决策经历。个人经验经过匿名与来源边界处理，不能替代医疗建议。",
    eyebrow: "网友经验",
    title: "别人是怎样一路问下去的",
    lede: "这里保留患者和家属在就诊、检查与决策过程中的真实困惑，也把经验和研究证据分开呈现。",
    warning:
      "网友经验只说明某个人遇到了什么，不能证明同样的选择适合你。涉及医生意见的二手转述不作为医疗结论发布。",
    read: "阅读这份经验",
    sourceLabel: "家长整理 · 2026 年 8 月",
  },
  en: {
    metaTitle: "Community experiences | AAOCA Research Library",
    metaDescription:
      "De-identified experiences from people and families navigating AAOCA consultations, testing, and decisions, kept separate from medical evidence.",
    eyebrow: "Community experiences",
    title: "How other families kept asking questions",
    lede: "These accounts preserve the uncertainty families encounter during consultations, testing, and decisions while keeping personal experience separate from research evidence.",
    warning:
      "A community account only describes what happened to one person. It cannot show that the same choice is right for you, and second-hand reports of clinicians' views are not published as medical conclusions.",
    read: "Read this experience",
    sourceLabel: "Compiled by a parent · August 2026",
  },
};

export const familyConsultationExperience = {
  slug: EXPERIENCE_SLUG,
  date: "2026-08",
  title: {
    zh: "问了很多医生，却得到不同答案：一位家长的 AAORCA 问诊整理",
    en: "Many consultations, different answers: one family's AAORCA notes",
  } satisfies Localized,
  summary: {
    zh: "一位家长把群友转述的多院问诊意见和运动问题整理成表格。它最有价值的地方，不是给出“手术还是随访”的答案，而是清楚呈现不同医生关注的条件并不相同。",
    en: "A parent collected community reports from consultations at multiple hospitals, including questions about surgery and exercise. Its value is not an answer of surgery versus surveillance, but a clear view of how clinicians may focus on different conditions.",
  } satisfies Localized,
  sourceBoundary: {
    zh: "原始表格含 39 条问诊或转述记录和 3 张聊天截图，表内多为群友的二手转述。本站没有看到病历、影像或完整检查报告，也无法独立核实医生原话。为保护当事人并避免形成未经证实的医生背书，本页不公开头像、群昵称，也不按医生姓名逐条转载意见。",
    en: "The source workbook contains 39 consultation or second-hand reports and three chat screenshots. This site has not seen the medical records, imaging, or complete test reports and cannot independently verify what any clinician said. To protect contributors and avoid implying unverified endorsement, this page publishes no avatars or chat names and does not reproduce views under clinicians' names.",
  } satisfies Localized,
  facts: [
    { value: "39", label: { zh: "条问诊或转述记录", en: "consultation or reported entries" } },
    { value: "33", label: { zh: "条心外科相关记录", en: "cardiac-surgery entries" } },
    { value: "5", label: { zh: "条心内科相关记录", en: "cardiology entries" } },
    { value: "1", label: { zh: "条心脏康复相关记录", en: "cardiac-rehabilitation entry" } },
  ],
  sections: [
    {
      heading: {
        zh: "这份整理最先暴露的，是意见不一致",
        en: "The first thing the notes reveal is disagreement",
      },
      paragraphs: [
        {
          zh: "表格里的意见大致落在三类：无症状且运动负荷检查阴性时继续随访；出现症状、负荷试验提示缺血或某些解剖高危特征时再考虑手术；以及更倾向预防性手术的意见。即使方向相同，医生对什么算“阳性”、什么算“高危”、多大年龄适合干预，也未必使用同一个标准。",
          en: "The reports broadly fall into three groups: continued surveillance when a person is asymptomatic and exercise testing is negative; consideration of surgery when symptoms, inducible ischemia, or particular high-risk anatomical features are present; and a more preventive approach to surgery. Even within one direction, clinicians may not use the same definitions of a positive test, high-risk anatomy, or suitable age for intervention.",
        },
        {
          zh: "这不是谁对谁错的排名。表格没有每位问诊者的完整解剖、症状、年龄和检查背景，把一句话从具体病例里抽出来横向比较，很容易失真。",
          en: "This is not a ranking of who is right. The workbook does not contain each person's full anatomy, symptoms, age, and testing context; comparing one sentence stripped from its case can easily distort its meaning.",
        },
      ],
    },
    {
      heading: {
        zh: "“随访”不是一个完整方案",
        en: "Surveillance is not a complete plan by itself",
      },
      paragraphs: [
        {
          zh: "多条记录只写了“随访”，但没有同时写清复查项目、间隔、运动边界或提前复诊的触发条件。对家长来说，真正需要带走的不是这两个字，而是一份可以执行的计划。",
          en: "Many entries say only “follow-up” without recording the tests, interval, exercise boundaries, or triggers for an earlier review. What a family needs to leave with is not that one word but an actionable plan.",
        },
      ],
      prompts: [
        {
          zh: "下一次复查在什么时候，需要重复哪些检查？",
          en: "When is the next review, and which tests need repeating?",
        },
        {
          zh: "哪些新症状或检查变化需要提前回来？",
          en: "Which new symptoms or test changes should bring the review forward?",
        },
        {
          zh: "学校体育、休闲运动和竞技训练分别限制到什么程度？",
          en: "What are the separate limits for school PE, recreational activity, and competitive training?",
        },
      ],
    },
    {
      heading: {
        zh: "运动问题尤其容易得到一句话答案",
        en: "Exercise questions are especially prone to one-line answers",
      },
      paragraphs: [
        {
          zh: "随表格保存的聊天截图里，有人转述负荷试验阴性后可以活动，也有人转述应限制竞技体育，还有家庭提到即使不手术也可能在运动后出现不适。它们说明家长最关心的是“到底能动到什么程度”，但二手聊天无法替代个体化风险评估。",
          en: "The saved chat screenshots include reports that activity was allowed after a negative exercise test, that competitive sport should be restricted, and that symptoms may still occur with exertion without surgery. They show that families want a practical limit, but second-hand chats cannot replace individual risk assessment.",
        },
        {
          zh: "把“能不能运动”拆成运动类型、强度、持续时间、症状停止规则和复查条件，通常比只问一个“能不能”更容易得到可执行的回答。",
          en: "Breaking “Can I exercise?” into activity type, intensity, duration, symptom stop-rules, and review conditions is more likely to produce an actionable answer.",
        },
      ],
    },
    {
      heading: {
        zh: "这位家长的整理可以变成五个追问",
        en: "The notes can be turned into five follow-up questions",
      },
      prompts: [
        {
          zh: "具体是哪一段解剖被认为有风险？能否在 CTA 图像上指出来？",
          en: "Which exact anatomical feature is considered risky, and can it be shown on the CTA images?",
        },
        {
          zh: "这项检查怎样改变方案？阳性和阴性的判定标准是什么？",
          en: "How would this test change the plan, and what counts as positive or negative?",
        },
        {
          zh: "如果暂不手术，复查什么、多久一次、什么变化会改变决定？",
          en: "If surgery is deferred, what will be followed, how often, and which change would alter the decision?",
        },
        {
          zh: "运动建议能否分别说明学校体育、日常活动和竞技运动？",
          en: "Can exercise advice be separated into school PE, daily activity, and competitive sport?",
        },
        {
          zh: "如果建议手术，准备修复哪一处结构，预期收益、手术风险和残余风险分别是什么？",
          en: "If surgery is advised, which structure is being repaired, and what are the expected benefit, operative risk, and residual risk?",
        },
      ],
    },
  ],
  related: [
    {
      path: "/analysis/aaorca-decision-model",
      label: { zh: "分析：把分歧变成决策变量", en: "Analysis: turning disagreement into decision variables" },
    },
    {
      path: "/analysis/aaorca-ischemia-testing",
      label: { zh: "分析：怎样才算证明缺血", en: "Analysis: what counts as demonstrating ischemia" },
    },
    {
      path: "/topics/sports",
      label: { zh: "相关文献：还能不能运动", en: "Related evidence: can sport continue?" },
    },
    {
      path: "/topics/surgery",
      label: { zh: "相关文献：要不要手术", en: "Related evidence: when is surgery considered?" },
    },
  ],
};
