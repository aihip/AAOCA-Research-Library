export const TOPIC_SLUGS = [
  "what-is-it",
  "how-serious",
  "what-tests",
  "sports",
  "surgery",
  "guidelines",
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];

type TopicCopy = {
  question: string;
  blurb: string;
  intro: string;
};

export type Topic = {
  slug: TopicSlug;
  zh: TopicCopy;
  en: TopicCopy;
};

export const topics: Topic[] = [
  {
    slug: "what-is-it",
    zh: {
      question: "这是什么情况",
      blurb: "冠状动脉从哪里发出，为什么位置会有影响",
      intro:
        "冠状动脉负责给心脏本身供血。绝大多数人的两条冠状动脉从主动脉根部各自固定的位置发出；少数人其中一条的开口长在了另一侧，或者走行在主动脉和肺动脉之间。这里收集的是描述这种解剖变异、分类方式，以及它在人群中出现频率的研究。每个人的具体解剖都不一样，影像报告上的用词要请医生结合你自己的片子来解释。",
    },
    en: {
      question: "What is this condition",
      blurb: "Where the coronary arteries arise, and why position matters",
      intro:
        "The coronary arteries supply blood to the heart muscle itself. In most people both arise from their own sinus on the aortic root; in a small number of people one of them originates from the opposite side or courses between the aorta and the pulmonary artery. These records describe the anatomy, how it is classified, and how often it is found. Anatomy differs from person to person — ask your clinician to interpret your own imaging.",
    },
  },
  {
    slug: "how-serious",
    zh: {
      question: "严不严重",
      blurb: "风险分层、猝死风险、长期随访结果",
      intro:
        "这是家属最想知道、但研究给不出简单答案的问题。已有研究试图找出哪些解剖特征和症状与更高的风险相关，但不同研究纳入的人群、随访时间和判断标准差别很大，结论并不完全一致。下面的记录反映的是这种不确定性本身，不构成对任何具体病人的判断。",
    },
    en: {
      question: "How serious is it",
      blurb: "Risk stratification, sudden death, long-term follow-up",
      intro:
        "This is the question families most want answered, and the one the literature answers least cleanly. Studies have tried to identify which anatomical features and symptoms carry higher risk, but populations, follow-up length, and endpoints differ substantially between them. These records document that uncertainty; they are not a judgement about any individual.",
    },
  },
  {
    slug: "what-tests",
    zh: {
      question: "需要做什么检查",
      blurb: "CT、磁共振、超声心动图、负荷试验各能看出什么",
      intro:
        "评估通常需要不止一种检查：超声心动图常用于最初发现，CT 血管造影用于看清开口位置和血管走行，磁共振和负荷试验用于判断心肌供血是否已经受到影响。下面的研究比较了这些方法各自能看到什么、又有哪些局限。做哪些检查、什么时候做，由医生根据具体情况决定。",
    },
    en: {
      question: "Which tests are used",
      blurb: "What CT, MRI, echocardiography, and stress testing can show",
      intro:
        "Assessment usually needs more than one modality: echocardiography often makes the initial finding, CT angiography shows the ostium and course, and MRI or stress testing assess whether myocardial perfusion is affected. These studies compare what each method can and cannot show. Which tests to perform, and when, is a clinical decision.",
    },
  },
  {
    slug: "sports",
    zh: {
      question: "还能运动吗",
      blurb: "运动限制、恢复训练、竞技体育参与",
      intro:
        "运动限制往往是确诊后对日常生活影响最大的一件事。相关的专家共识在过去十年里有明显变化，不同国家和学会的建议也不完全相同。下面既包括正式的运动心脏病学指南，也包括观察运动人群结局的研究。能不能运动、运动到什么强度，必须由你的医生结合具体解剖和检查结果决定。",
    },
    en: {
      question: "Can sport continue",
      blurb: "Activity restriction, return to training, competitive participation",
      intro:
        "Activity restriction is often the change that affects daily life most after diagnosis. Consensus in this area has shifted noticeably over the past decade, and recommendations differ between societies. These records include formal sports cardiology guidance as well as studies following athletic populations. Decisions about activity belong with your clinician.",
    },
  },
  {
    slug: "surgery",
    zh: {
      question: "要不要手术",
      blurb: "手术指征、术式选择、术后结果",
      intro:
        "手术方式包括去顶术、冠状动脉移位、旁路移植等，选择取决于具体的解剖类型。下面的记录多为单中心病例系列，样本量普遍偏小，随访时间长短不一，因此不同研究报告的结果不能直接互相比较。是否手术、何时手术，是需要和心外科团队反复讨论的决定。",
    },
    en: {
      question: "Is surgery needed",
      blurb: "Indications, operative techniques, post-operative outcomes",
      intro:
        "Reported techniques include unroofing, coronary translocation, and bypass grafting, and the choice depends on the specific anatomy. Most records here are single-centre case series with small samples and varying follow-up, so results are not directly comparable between studies. Whether and when to operate is a decision to work through with a surgical team.",
    },
  },
  {
    slug: "guidelines",
    zh: {
      question: "医生依据什么",
      blurb: "专家共识与临床指南",
      intro:
        "单篇研究的结论可能互相矛盾，医生做判断时主要依据的是专家共识和临床指南——它们综合了大量研究，并标注了每条建议的证据强度。如果你只打算读几份材料，建议从这里开始。这些文件是写给专业人员看的，术语较多，可以带着具体问题请医生一起看。",
    },
    en: {
      question: "What clinicians rely on",
      blurb: "Consensus statements and clinical guidelines",
      intro:
        "Individual studies can contradict one another. Clinicians rely primarily on consensus statements and guidelines, which synthesise many studies and grade the strength of evidence behind each recommendation. If you only read a few documents, start here. They are written for professionals, so bring specific questions to your clinician.",
    },
  },
];

const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));

export function findTopic(slug: string): Topic | undefined {
  return topicBySlug.get(slug as TopicSlug);
}

export function isTopicSlug(value: string): value is TopicSlug {
  return topicBySlug.has(value as TopicSlug);
}
