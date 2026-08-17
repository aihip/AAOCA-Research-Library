import type { Language } from "./i18n";

export const CARE_IN_CHINA_PATH = "/care-in-china";

type Localized = Record<Language, string>;

type CareExpert = {
  name: Localized;
  role: Localized;
  relevance: Localized;
  url: string;
};

type CareSource = {
  label: Localized;
  url: string;
};

export type CareInstitution = {
  id: string;
  city: Localized;
  name: Localized;
  summary: Localized;
  experts: CareExpert[];
  sources: CareSource[];
};

export const careInstitutions: CareInstitution[] = [
  {
    id: "fuwai",
    city: { zh: "北京", en: "Beijing" },
    name: {
      zh: "中国医学科学院阜外医院 · 小儿心外科中心",
      en: "Fuwai Hospital · Pediatric Cardiac Surgery Center",
    },
    summary: {
      zh: "阜外官网将该中心列为覆盖各类先天性心脏病的团队。对 AAOCA 最直接的公开线索是芮璐的官方专长中明确写有“冠状动脉起源异常”；李守军、杨克明的官方介绍则侧重广泛、复杂和危重先心病外科。",
      en: "Fuwai describes this centre as treating the full range of congenital heart disease. The most direct public AAOCA signal is Rui Lu's official profile, which explicitly lists anomalous coronary origin; the official profiles for Li Shoujun and Yang Keming describe broad, complex, and critical congenital cardiac surgery.",
    },
    experts: [
      {
        name: { zh: "李守军", en: "Li Shoujun" },
        role: {
          zh: "主任医师；小儿心脏外科中心及小儿心外科一病区主任",
          en: "Chief physician; director of the pediatric cardiac surgery centre and Ward 1",
        },
        relevance: {
          zh: "官网列出的方向为小儿和成人先天性心脏病外科治疗。页面没有单列 AAOCA 病例量，预约时应直接询问。",
          en: "The official profile lists pediatric and adult congenital cardiac surgery. It does not publish an AAOCA case volume, so ask the centre directly when booking.",
        },
        url: "https://www.fuwaihospital.org/Doctors/Main/Detail/37",
      },
      {
        name: { zh: "杨克明", en: "Yang Keming" },
        role: {
          zh: "主任医师；小儿心外科二病区主任、小儿心外科中心副主任",
          en: "Chief physician; director of Ward 2 and deputy director of the pediatric cardiac surgery centre",
        },
        relevance: {
          zh: "官网列出的方向包括小儿和成人先心病，以及新生儿、低体重、复杂危重和再次手术病例。AAOCA 经验需预约前向团队确认。",
          en: "The official profile covers pediatric and adult congenital disease, including neonatal, low-weight, complex, critical, and repeat operations. Confirm AAOCA experience with the team before booking.",
        },
        url: "https://www.fuwaihospital.org/Hospitals/Doctors/Index/4562",
      },
      {
        name: { zh: "芮璐", en: "Rui Lu" },
        role: {
          zh: "主任医师；小儿心外科一病区",
          en: "Chief physician; Pediatric Cardiac Surgery Ward 1",
        },
        relevance: {
          zh: "官网专长明确列出“冠状动脉起源异常”，同时列有复杂先心病外科和部分简单先心病微创治疗。这是本页与 AAOCA 最直接对应的医生级公开资料。",
          en: "The official profile explicitly lists anomalous coronary origin, alongside complex congenital surgery and minimally invasive treatment for selected simpler defects. This is the clearest clinician-level AAOCA match in the public sources used here.",
        },
        url: "https://www.fuwaihospital.org/Hospitals/Doctors/Detail/2877",
      },
    ],
    sources: [
      {
        label: { zh: "阜外医院小儿心外科中心", en: "Fuwai pediatric cardiac surgery centre" },
        url: "https://www.fuwaihospital.org/Departments/Main/Detail/3",
      },
    ],
  },
  {
    id: "anzhen",
    city: { zh: "北京", en: "Beijing" },
    name: {
      zh: "首都医科大学附属北京安贞医院 · 小儿心脏中心",
      en: "Beijing Anzhen Hospital · Pediatric Heart Center",
    },
    summary: {
      zh: "安贞官网显示该中心将小儿心内、心外、重症监护和功能检查整合在同一团队。王强和吴永涛均在官方医生团队中；公开页面未把 AAOCA 单独列为专病，因此预约时要明确说明冠脉起源异常及影像情况。",
      en: "Anzhen's official site describes an integrated pediatric cardiology, cardiac surgery, intensive care, and diagnostics team. Wang Qiang and Wu Yongtao are both on the official roster; the public pages do not identify AAOCA as a separate programme, so state the coronary-origin diagnosis and imaging findings when booking.",
    },
    experts: [
      {
        name: { zh: "王强", en: "Wang Qiang" },
        role: {
          zh: "主任医师；小儿心脏中心主任",
          en: "Chief physician; director of the Pediatric Heart Center",
        },
        relevance: {
          zh: "官网专长侧重复杂、重症和新生儿先心病外科。页面没有公布 AAOCA 专项病例量或特定术式经验。",
          en: "The official profile focuses on complex, critical, and neonatal congenital cardiac surgery. It does not publish AAOCA-specific volume or technique data.",
        },
        url: "https://www.anzhen.org.cn/Html/Doctors/Main/Index_1133.html",
      },
      {
        name: { zh: "吴永涛", en: "Wu Yongtao" },
        role: {
          zh: "主任医师；小儿心脏中心",
          en: "Chief physician; Pediatric Heart Center",
        },
        relevance: {
          zh: "医院官网确认其科室、职称和出诊信息，但官网当前没有给出 AAOCA 专项说明。预约前应询问是否接诊该解剖类型及由谁主诊。",
          en: "The hospital site confirms the department, title, and clinic listing, but currently gives no AAOCA-specific description. Ask whether the team sees the relevant anatomy and who would lead the assessment.",
        },
        url: "https://www.anzhen.org.cn/Html/Doctors/Main/Index_1139.html",
      },
    ],
    sources: [
      {
        label: { zh: "安贞医院小儿心脏中心", en: "Anzhen Pediatric Heart Center" },
        url: "https://www.anzhen.org.cn/Html/Departments/Main/Index_145.html",
      },
    ],
  },
  {
    id: "chongqing",
    city: { zh: "重庆", en: "Chongqing" },
    name: {
      zh: "重庆医科大学附属儿童医院 · 胸心外科",
      en: "Children's Hospital of Chongqing Medical University · Cardiothoracic Surgery",
    },
    summary: {
      zh: "医院官网将李勇刚的方向列为儿童复杂心脏病、腋下小切口和胸腔镜先心病手术；医院还公开报道过由其主刀完成冠状动脉异常去顶术的病例。病例报道只能证明团队曾处理过这类解剖，不能代表疗效排名，也不能说明所有 AAOCA 都适合小切口。",
      en: "The hospital profile lists Li Yonggang's work in complex pediatric heart disease, axillary mini-incision, and thoracoscopic congenital surgery. The hospital has also reported an anomalous-coronary unroofing case led by him. A case report shows prior exposure to the anatomy; it is not an outcomes ranking and does not mean every AAOCA is suitable for a small incision.",
    },
    experts: [
      {
        name: { zh: "李勇刚", en: "Li Yonggang" },
        role: {
          zh: "主任医师；儿童胸心外科",
          en: "Chief physician; pediatric cardiothoracic surgery",
        },
        relevance: {
          zh: "可作为西南地区复杂先心病和微创路径的咨询线索。对 AAOCA，应先问清手术指征、拟采用的冠脉修复方式，以及切口选择是否会影响暴露和安全。",
          en: "A consultation lead in southwest China for complex congenital disease and minimally invasive approaches. For AAOCA, first clarify the indication, planned coronary repair, and whether incision choice affects exposure or safety.",
        },
        url: "https://www.chcmu.com/info/12081/409420.htm",
      },
    ],
    sources: [
      {
        label: { zh: "医院官网：冠脉异常去顶术病例", en: "Hospital case report: anomalous-coronary unroofing" },
        url: "https://www.chcmu.com/info/1011/1792.htm",
      },
    ],
  },
  {
    id: "shanghai",
    city: { zh: "上海", en: "Shanghai" },
    name: {
      zh: "上海交通大学医学院附属上海儿童医学中心 · 心脏中心",
      en: "Shanghai Children's Medical Center · Heart Center",
    },
    summary: {
      zh: "上海交通大学医学院官网将其列为三级甲等儿童专科医院，并将小儿心血管和先心病诊治列为优势方向。本页把它作为机构级的一线就医与第二诊疗意见线索；现有公开资料不足以在 AAOCA 方向指定某一位医生，因此不做个人推荐。",
      en: "Shanghai Jiao Tong University School of Medicine identifies it as a tertiary children's hospital with major pediatric cardiovascular and congenital-heart programmes. It is included as an institution-level first-line and second-opinion option; the public sources reviewed here were not sufficient to single out one AAOCA clinician.",
    },
    experts: [],
    sources: [
      {
        label: { zh: "上海交通大学医学院附属医院介绍", en: "SJTU School of Medicine hospital profile" },
        url: "https://www.shsmu.edu.cn/ylfw/fsyy1/fsshetyxzx.htm",
      },
      {
        label: { zh: "上海儿童医学中心官网", en: "Shanghai Children's Medical Center" },
        url: "https://www.scmc.com.cn/",
      },
    ],
  },
];

export const careInChinaCopy = {
  zh: {
    metaTitle: "中国就医机构与专家线索｜冠状动脉起源异常文献库",
    metaDescription: "面向 AAOCA / AAORCA 患者和家属的中国就医线索：阜外、安贞、重庆医科大学附属儿童医院和上海儿童医学中心，以及可向医院核实的医生与专业方向。",
    eyebrow: "就医准备 · 公开资料核实于 2026-08-17",
    title: "在中国，可以先找哪些团队讨论 AAOCA",
    lede: "这份清单把家属提出的医生和机构逐一对照医院官网，帮助你找到挂号入口和提问方向。它不是全国排名、转诊意见、广告或疗效保证。",
    warningTitle: "先看边界",
    warning: "是否需要手术、适合去顶术还是再植等其他修复，以及能不能采用小切口，都取决于具体冠脉开口、壁内段、走行、缺血证据和团队判断。不要只按医生姓名、城市或切口大小做决定。",
    selectionTitle: "为什么只列这些",
    selectionBody: [
      "目前只收录本项目维护者或患者家属提出、且能通过医院或医学院官方页面核实的线索。没有出现在这里，不代表医院或医生能力较弱；出现在这里，也不等于本站为其背书。",
      "医生职称、科室、院区和门诊安排会变化。下面保留官方入口，预约前应再次核对，并在挂号或电话咨询时明确说出“冠状动脉异常起源 / AAOCA / AAORCA”。",
    ],
    expertsTitle: "可核实的医生线索",
    institutionOnly: "本页暂按机构列出，不指定单一医生。预约时可请心脏中心分诊到处理先天性冠脉异常的团队。",
    sourcesTitle: "官方来源",
    openProfile: "打开官方资料",
    checklistTitle: "第一次咨询前，尽量备齐这些资料",
    checklistIntro: "不同中心能否给出有效第二意见，往往取决于是否看到了原始影像，而不只是报告结论。",
    checklist: [
      "冠状动脉 CTA 的原始 DICOM 文件、正式报告和关键重建图；",
      "超声心动图、心电图，以及已经完成的运动试验、负荷影像或其他缺血检查；",
      "症状时间线：胸痛、胸闷、心悸、晕厥是否与运动相关；",
      "年龄、身高、体重、运动项目与训练强度，以及既往疾病和手术史；",
      "正在考虑手术时，带上其他中心的诊断与方案，但不要只转述一句“建议手术/观察”。",
    ],
    questionsTitle: "向每个团队问同一组问题",
    questions: [
      "异常的是左冠还是右冠？开口形态、壁内段长度和主动脉-肺动脉间走行分别是什么？",
      "这个判断来自原始 CTA，还是只看了报告？是否还需要补充缺血或功能检查？",
      "建议观察或手术的关键依据是什么？如果暂不手术，运动限制和复查计划是什么？",
      "团队处理过多少例相近解剖？常用去顶、再植、肺动脉移位或其他哪种修复，为什么？",
      "所谓“小切口”改变的只是皮肤入口，还是会改变冠脉修复方式、暴露范围或风险？",
    ],
    emergency: "如果正在发生运动相关胸痛、晕厥、明显呼吸困难或其他急症，不要等待网上咨询或跨城预约，应立即停止运动并就近急诊；情况危急时拨打 120。",
    disclaimer: "本站没有联系上述医院或医生，也未收取费用。所有文字由非医学专业的患者家属依据公开资料整理，没有医生审阅。",
  },
  en: {
    metaTitle: "Finding AAOCA care in China | AAOCA Research Library",
    metaDescription: "China-based AAOCA and AAORCA care leads: Fuwai, Beijing Anzhen, Children's Hospital of Chongqing Medical University, and Shanghai Children's Medical Center, with official sources to verify before booking.",
    eyebrow: "Care planning · public sources checked 17 August 2026",
    title: "Teams in China to approach for an AAOCA discussion",
    lede: "This directory checks family-suggested clinicians and institutions against official hospital sources, then points you to the booking trail and questions to ask. It is not a national ranking, referral, advertisement, or promise of outcome.",
    warningTitle: "Read the boundary first",
    warning: "Whether surgery is indicated, whether unroofing, reimplantation, or another repair fits, and whether a small incision is appropriate all depend on the exact ostium, intramural segment, course, ischemia evidence, and the treating team's judgment. Do not decide from a name, city, or incision size alone.",
    selectionTitle: "Why this is a short list",
    selectionBody: [
      "For now, it includes only leads proposed by this project's maintainer or patient families that can be verified on an official hospital or medical-school page. Absence is not a negative judgment; inclusion is not an endorsement.",
      "Titles, departments, campuses, and clinics change. Use the official links below to check again before booking, and explicitly state “anomalous coronary origin / AAOCA / AAORCA” during triage.",
    ],
    expertsTitle: "Clinician leads that can be checked",
    institutionOnly: "Listed at institution level for now, without singling out one clinician. Ask the heart centre to route the case to a team that assesses congenital coronary anomalies.",
    sourcesTitle: "Official sources",
    openProfile: "Open official profile",
    checklistTitle: "Bring as much of this as possible to the first review",
    checklistIntro: "A useful second opinion often depends on seeing the original images, not just the conclusion printed in a report.",
    checklist: [
      "Original coronary CTA DICOM files, the formal report, and key reconstructions;",
      "Echocardiogram, ECG, and any exercise, stress-imaging, or other ischemia testing already completed;",
      "A symptom timeline, including whether chest pain, breathlessness, palpitations, or fainting occur with exercise;",
      "Age, height, weight, sport and training intensity, previous conditions, and operations;",
      "If surgery is being considered, bring other centres' diagnoses and proposed plans—not just a verbal summary saying “operate” or “observe”.",
    ],
    questionsTitle: "Ask every team the same core questions",
    questions: [
      "Is the left or right coronary affected, and what are the ostial shape, intramural length, and interarterial course?",
      "Was that conclusion reached from the original CTA, or only from the written report? Is more ischemia or functional testing needed?",
      "What specifically supports observation or surgery? If observing, what are the exercise limits and follow-up plan?",
      "How many similar anatomies has the team treated, and when does it use unroofing, reimplantation, pulmonary-artery translocation, or another repair?",
      "Does the proposed “small incision” change only the skin access, or could it change coronary repair, exposure, or risk?",
    ],
    emergency: "If exercise-related chest pain, fainting, marked breathlessness, or another emergency is happening now, do not wait for an online opinion or travel appointment. Stop exercise and seek local emergency care; call 120 in China if the situation is critical.",
    disclaimer: "This site has no relationship with, and has received no payment from, any listed hospital or clinician. A non-medically trained family member compiled the text from public sources; no clinician reviewed it.",
  },
} as const satisfies Record<Language, object>;
