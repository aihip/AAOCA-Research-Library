import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-conservative-surveillance";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "证据分析 · 保守观察", en: "Evidence analysis · conservative management" },
  title: {
    zh: "「保守观察」不是不管：把观察写成一份可执行的监测方案",
    en: "Conservative is not passive: writing observation down as a protocol you can execute",
  },
  lede: {
    zh: "选择不手术，并不等于「等几年再看看」。文献里的保守管理是一套有间隔、有内容、有终止条件的主动监测。这篇把散落在队列研究、运动声明和影像声明里的随访做法拼成一张可以带去门诊讨论的表，并写清楚哪些情况下应该停止观察、重新讨论手术。",
    en: "Choosing not to operate is not the same as waiting a few years to see what happens. In the literature, conservative management is active surveillance with defined intervals, defined content, and defined stopping rules. This page assembles the follow-up practices scattered across cohort studies, sports statements, and imaging statements into one table you can take to a clinic visit, and states plainly when observation should stop and surgery be reconsidered.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅，不能替代医生的诊断和建议。文中的间隔与阈值来自已发表的研究与声明，但没有任何一项随访方案经过随机对照验证；具体到某个孩子的方案必须由其诊疗团队决定。凡本库未持有全文的文献，文中已标注其数字仅来自题录与摘要层面。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it and it does not replace medical diagnosis or advice. The intervals and thresholds below come from published studies and statements, but no follow-up schedule here has been validated in a randomised trial; any individual plan belongs to that child's care team. Where this library does not hold a full text, the text says so and the figure rests on metadata and abstract level only.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this analysis" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2026-d29299373d7f", title: { zh: "151 例儿童 AAORCA：解剖特征与症状的不一致", en: "151 children with AAORCA: anatomy and symptoms disagree" } },
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 220 例儿童 R-AAOCA 的缺血与结局", en: "Texas Children’s 220-child R-AAOCA ischemia cohort" } },
    { slug: "2025-bc7be47eaea1", title: { zh: "儿童连续运动试验的叙述性综述与实践调查", en: "Serial exercise testing in children: narrative review and practice survey" } },
    { slug: "2025-96ebfd17d8eb", title: { zh: "AHA/ACC 2025：心血管异常运动员的竞技运动参与", en: "AHA/ACC 2025 statement on competitive sports participation" } },
    { slug: "2026-924accf79cba", title: { zh: "AHA 2026：儿童冠状动脉缺血检测科学声明", en: "AHA 2026 statement on coronary ischemic testing in children" } },
    { slug: "2023-bdc164171ffa", title: { zh: "运动负荷试验能否用于 AAOCA 风险分层", en: "Is exercise stress testing useful for risk stratification in AAOCA?" } },
    { slug: "2019-29a21e711c7a", title: { zh: "CHSS：与心肌缺血相关的解剖特征", en: "CHSS: anatomic features associated with myocardial ischemia" } },
    { slug: "2024-b021e8a43bf9", title: { zh: "儿童冠状动脉起源异常综述", en: "Anomalous aortic origin of a coronary artery in pediatric patients" } },
    { slug: "2021-3c95a30e87b8", title: { zh: "2020 ESC 运动心脏病学与运动指南", en: "2020 ESC guidelines on sports cardiology and exercise" } },
    { slug: "2020-27b1754e3df3", title: { zh: "ASE 先天性冠状动脉异常多模态影像指南", en: "ASE guide to multimodality assessment of congenital coronary anomalies" } },
    { slug: "2021-8fa45060a5ce", title: { zh: "冠状动脉起源异常（Circulation 综述）", en: "Coronary artery anomalies (Circulation review)" } },
  ],
};

const sections: Section[] = [
  {
    id: "takeaway",
    nav: { zh: "先看结论", en: "Bottom line" },
    kind: "cards",
    heading: { zh: "三句话说清楚保守观察", en: "Three sentences on conservative management" },
    items: [
      {
        title: { zh: "观察的对象是生理，不是解剖", en: "Surveillance watches physiology, not anatomy" },
        body: {
          zh: "定期重复 CTA 并不能回答保守观察最需要回答的问题。需要反复回答的是三件事：有没有新的运动相关症状、负荷时有没有诱发缺血、运动时有没有复杂室性心律失常。",
          en: "Repeating a CTA on a schedule does not answer the question surveillance exists to answer. Three things need re-asking: are there new exertional symptoms, is ischemia inducible under load, and are there complex ventricular arrhythmias with exercise.",
        },
      },
      {
        title: { zh: "没有阴性基线，就没有观察的资格", en: "Without a negative baseline there is nothing to observe" },
        body: {
          zh: "「静息心电图正常、心超正常，所以观察」是不成立的推理。保守观察成立的前提，是先有一次做到位的负荷评估，证明当前没有可诱发的缺血。基线之后，后续每一次检查才有比较对象。",
          en: "“The resting ECG and echo are normal, so we watch” is not a valid inference. Conservative management rests on one adequate stress evaluation showing no inducible ischemia now. Only after that baseline does each later test have something to be compared against.",
        },
      },
      {
        title: { zh: "必须预先写下停止观察的条件", en: "The stopping rules must be written in advance" },
        body: {
          zh: "如果「已经选择观察」变成「以后无论出现什么都继续观察」，那就不是风险管理。诱发缺血、运动性晕厥、可重复的劳力性症状、运动诱发复杂室性心律失常、客观运动能力下降——任何一条出现，都应重新打开手术讨论。",
          en: "If “we chose observation” becomes “we keep observing whatever appears next”, it is no longer risk management. Inducible ischemia, exertional syncope, a reproducible exertional symptom pattern, exercise-induced complex ventricular arrhythmia, or an objective fall in exercise capacity — any one of these should reopen the surgical discussion.",
        },
      },
    ],
  },
  {
    id: "what-literature-does",
    nav: { zh: "文献怎么随访", en: "What the literature does" },
    kind: "table",
    wide: true,
    heading: { zh: "已发表的随访做法，摆在一起看", en: "Published follow-up practices, side by side" },
    lede: {
      zh: "这些来源的间隔并不一致，而且服务的对象不同：队列研究描述的是一家中心的实际做法，声明给出的是原则。它们的共同点是间隔以年计，内容以症状与负荷检查为主。",
      en: "These sources do not agree on intervals, and they answer different questions: a cohort study describes what one centre actually did, a statement gives principles. What they share is that intervals are measured in years and that the content is symptoms plus stress testing.",
    },
    headers: [
      { zh: "来源", en: "Source" },
      { zh: "适用人群", en: "Population" },
      { zh: "随访做法", en: "Follow-up practice" },
      { zh: "本库是否持有全文", en: "Full text held here" },
    ],
    rows: [
      [
        { zh: "Texas Children’s 220 例儿童 R-AAOCA", en: "Texas Children’s 220-child R-AAOCA cohort" },
        { zh: "未进入手术路径的儿童 R-AAOCA", en: "Children with R-AAOCA not taken to surgery" },
        { zh: "每 1–2 年临床随访加 12 导联心电图；超声与负荷检查间隔 3–5 年。", en: "Clinical review with a 12-lead ECG every 1–2 years; echocardiography and stress testing at 3–5 year intervals." },
        { zh: "否，数字来自题录与摘要层面", en: "No — figure rests on metadata and abstract" },
      ],
      [
        { zh: "儿童连续运动试验综述与实践调查（2025）", en: "Serial exercise testing review and practice survey (2025)" },
        { zh: "含壁内段的 AAORCA，或有可疑症状者", en: "AAORCA with an intramural segment, or suspicious symptoms" },
        { zh: "基线心肺运动试验，此后大约每 1–3 年重复；负荷超声、负荷 CMR 或核素灌注可按相近周期重复；高水平竞技运动者倾向每年评估。", en: "A baseline cardiopulmonary exercise test, then roughly every 1–3 years; stress echo, stress CMR, or nuclear perfusion repeated on a similar cycle; annual assessment favoured for high-level competitive athletes." },
        { zh: "否，数字来自题录与摘要层面", en: "No — figure rests on metadata and abstract" },
      ],
      [
        { zh: "AHA/ACC 2025 竞技运动声明", en: "AHA/ACC 2025 competitive sports statement" },
        { zh: "主动脉—肺动脉间走行的 R-AAOCA", en: "Interarterial R-AAOCA" },
        { zh: "没有缺血症状、没有诱发缺血、没有复杂室性心律失常者，可在长期监测下继续运动；出现诱发缺血或可信的缺血症状时，应重新考虑手术。", en: "Without ischemic symptoms, inducible ischemia, or complex ventricular arrhythmia, sport may continue under long-term monitoring; inducible ischemia or credible ischemic symptoms should reopen the question of surgery." },
        { zh: "否，数字来自题录与摘要层面", en: "No — figure rests on metadata and abstract" },
      ],
      [
        { zh: "AHA 2026 儿童冠脉缺血检测声明", en: "AHA 2026 pediatric ischemic testing statement" },
        { zh: "需要重复评价缺血的儿童", en: "Children needing repeated assessment for ischemia" },
        { zh: "按临床问题选择检查方式而不是重复同一项；儿童心肌灌注评价优先考虑 CMR，其没有电离辐射，适合长期反复随访。", en: "Choose the modality from the clinical question rather than repeating one test; CMR is favoured for myocardial perfusion in children and carries no ionising radiation, which suits repeated follow-up." },
        { zh: "是", en: "Yes" },
      ],
      [
        { zh: "151 例儿童 AAORCA 真实世界队列（2026）", en: "151-child real-world AAORCA cohort (2026)" },
        { zh: "非手术组 105 例", en: "The 105 non-surgical patients" },
        { zh: "随访期间总体临床状态稳定，仅 2 例出现新发胸痛，未观察到心源性猝死或主要心血管事件；作者同时指出随访时间偏短，不足以评估长期风险。", en: "Clinical status stayed stable, only two developed new-onset chest pain, and no sudden cardiac death or major adverse cardiovascular event was observed; the authors state that the relatively short follow-up limits any long-term conclusion." },
        { zh: "是", en: "Yes" },
      ],
    ],
    note: {
      zh: "标注为「否」的行，本库只持有书目与获取状态卡，没有论文全文；这些数字来自题录与公开摘要，未逐条对照原文核实。",
      en: "Rows marked “No” are held here only as a bibliography and access card, not as full text; those figures come from metadata and public abstracts and were not checked line by line against the article.",
    },
  },
  {
    id: "baseline",
    nav: { zh: "先建立基线", en: "Build the baseline" },
    kind: "steps",
    heading: { zh: "把确诊后的第一年当作基线年", en: "Treat the first year after diagnosis as the baseline year" },
    lede: {
      zh: "保守观察的第一步不是预约下一次 CTA，而是把「现在处于什么状态」记录到足够细，让两年后的检查有比较对象。顺序有意从最便宜、无创的一端开始。",
      en: "The first step in conservative management is not booking the next CTA but recording the present state in enough detail that a test two years from now has something to be compared against. The order deliberately starts at the cheapest, least invasive end.",
    },
    steps: [
      { zh: "把已有 CTA 的原始图像重新定量，而不是重新照一次", en: "Re-measure the existing CTA from the original images instead of repeating the scan" },
      { zh: "12 导联心电图与一份高质量儿童心超，留作纵向比较的起点", en: "A 12-lead ECG and a high-quality pediatric echocardiogram as the longitudinal starting point" },
      { zh: "最大强度心肺运动试验，连续心电监测并记录症状是否复现", en: "A maximal cardiopulmonary exercise test with continuous ECG, recording whether symptoms reproduce" },
      { zh: "负荷灌注影像，优先选择负荷 CMR，并问清用的是哪一种负荷方式", en: "Stress perfusion imaging, preferring stress CMR, having asked which stressor is used" },
      { zh: "把结果写成一页纸，交给学校与家庭各一份", en: "Write the result on one page and give a copy to the school and the family" },
    ],
    quote: {
      zh: "基线的价值不在于某一次结果好看，而在于两年之后有人能指着它说：和当时相比，这里变了。",
      en: "The value of a baseline is not that one result looked good, but that two years later someone can point at it and say: compared with then, this has changed.",
    },
  },
  {
    id: "quantify-anatomy",
    nav: { zh: "解剖要量化", en: "Quantify the anatomy" },
    kind: "table",
    heading: { zh: "重新定量 CTA 时该留下的数字", en: "The numbers a CTA re-read should leave behind" },
    lede: {
      zh: "「开口偏窄」「壁内段较短」这类描述无法在两年后做比较。下面这些是可以被再次测量、也可以被别的中心复核的量。本库另一篇分析已说明为什么单一最小直径不足以定量狭窄。",
      en: "Descriptions like “the ostium looks narrow” or “a short intramural segment” cannot be compared two years later. The quantities below can be measured again and audited by another centre. A separate analysis in this library explains why a single minimum diameter cannot quantify a stenosis.",
    },
    headers: [
      { zh: "测量项", en: "Measurement" },
      { zh: "为什么要留下它", en: "Why it is worth recording" },
    ],
    rows: [
      [
        { zh: "开口短径、长径与面积", en: "Ostial minor axis, major axis, and area" },
        { zh: "同一个最小直径可以对应差别很大的面积丢失；三个数一起才能描述裂隙样开口。", en: "The same minimum diameter can correspond to very different losses of area; the three together are what describe a slit-like ostium." },
      ],
      [
        { zh: "壁内段最小截面积与长度", en: "Minimum cross-sectional area and length of the intramural segment" },
        { zh: "壁内段长度直接影响术式选择，也是负荷下受压程度的解剖基础。", en: "Intramural length drives the choice of operation and underlies how much the vessel can be compressed under load." },
      ],
      [
        { zh: "远端正常段参考面积与面积狭窄率", en: "Reference area of the normal distal segment, and percent area stenosis" },
        { zh: "以患者自身为参照，比与年龄标准比较更稳定，尤其在儿童生长期。", en: "Referencing the patient against themselves is more stable than against age norms, especially while a child is growing." },
      ],
      [
        { zh: "起始角度与主动脉瓣交界的关系", en: "Take-off angle and the relationship to the aortic valve commissure" },
        { zh: "决定壁内段在瓣交界上方还是下方，是去顶与再植之间的关键区别。", en: "This decides whether the intramural course runs above or below the commissure, the key difference between unroofing and reimplantation." },
      ],
      [
        { zh: "走行类型与冠脉优势", en: "Course type and coronary dominance" },
        { zh: "决定受累心肌的范围，也决定负荷影像该重点看哪个区域。", en: "These set how much myocardium is at stake and which territory stress imaging should scrutinise." },
      ],
    ],
  },
  {
    id: "why-stress",
    nav: { zh: "负荷是支点", en: "Stress is the pivot" },
    kind: "prose",
    heading: { zh: "为什么整套方案压在负荷检查上", en: "Why the whole plan rests on stress testing" },
    paragraphs: [
      {
        zh: "AAOCA 的机制是动态的：管腔在心率、血压和心肌收缩力上升时被压迫得更明显。因此静息状态下的任何检查——静息心电图、静息心超、CTA——都只能描述解剖，不能回答负荷时供血够不够。这也是为什么「一切正常」的静息检查不构成继续观察的理由。",
        en: "The mechanism in AAOCA is dynamic: the lumen is compressed further as heart rate, blood pressure, and contractility rise. Anything measured at rest — a resting ECG, a resting echo, a CTA — therefore describes anatomy and cannot say whether supply keeps up under load. That is why a set of normal resting tests is not by itself a reason to keep observing.",
      },
      {
        zh: "负荷方式的选择同样重要。AHA 2026 儿童冠脉缺血检测声明指出，血管扩张剂产生的是冠脉充血，并不能复制运动时心率、血压和收缩力同时上升的状态，因此对动态受压这一机制存在局限。换句话说，一次腺苷负荷阴性所排除的东西，比一次充分的运动或多巴酚丁胺负荷阴性要少。去门诊时值得问清楚的不是「能不能做心脏磁共振」，而是「你们对 AAOCA 用的是血管扩张剂、多巴酚丁胺，还是运动负荷」。",
        en: "The choice of stressor matters just as much. The AHA 2026 statement on pediatric coronary ischemic testing notes that vasodilators produce coronary hyperemia but do not reproduce the simultaneous rise in heart rate, blood pressure, and contractility that exercise creates, which limits them against a dynamic obstruction. A negative adenosine study therefore excludes less than an adequate exercise or dobutamine study does. The question worth asking in clinic is not “can you do a cardiac MRI” but “for AAOCA, do you use a vasodilator, dobutamine, or exercise”.",
      },
      {
        zh: "运动心电图本身的敏感性也不足以单独承担这个任务。本库另一篇分析梳理过：对照负荷 CMR 所发现的缺血，单纯运动心电图的敏感性明显偏低，加入心肺运动试验的生理参数后有所改善，但仍然不能单独排除缺血。所以基线里心肺运动试验与负荷灌注影像是互补关系，不是二选一。",
        en: "Exercise ECG on its own is not sensitive enough to carry this task either. As a separate analysis here sets out, measured against ischemia found on stress CMR, exercise ECG alone has clearly limited sensitivity; adding cardiopulmonary exercise parameters improves it but still does not exclude ischemia on its own. In the baseline, a CPET and stress perfusion imaging are complementary, not alternatives.",
      },
    ],
  },
  {
    id: "schedule",
    nav: { zh: "随访时间表", en: "The schedule" },
    kind: "table",
    wide: true,
    heading: { zh: "一份偏谨慎的随访时间表", en: "A cautious end of the published range" },
    lede: {
      zh: "下表取的是已发表范围里偏密集的一端，适合有壁内段或明显开口狭窄、但功能检查阴性的孩子。文献允许更宽的间隔；缩短间隔是一种取舍，代价是更多次检查与更多次麻醉或镇静的可能。",
      en: "The table below sits at the denser end of the published range, which suits a child with an intramural segment or a clearly narrowed ostium whose functional tests are negative. The literature permits wider intervals; tightening them is a trade-off paid for in more tests and more potential sedation.",
    },
    headers: [
      { zh: "项目", en: "Item" },
      { zh: "建议间隔", en: "Interval" },
      { zh: "理由与出处", en: "Rationale and source" },
    ],
    rows: [
      [
        { zh: "儿童心脏专科门诊：症状史、查体、12 导联心电图", en: "Pediatric cardiology visit: symptom history, examination, 12-lead ECG" },
        { zh: "每 12 个月", en: "Every 12 months" },
        { zh: "比 Texas Children’s 队列的 1–2 年偏密；选择偏密一端是因为症状演变是最早、最便宜的信号。", en: "Denser than the 1–2 years in the Texas Children’s cohort; the denser end is chosen because symptom change is the earliest and cheapest signal." },
      ],
      [
        { zh: "心超", en: "Echocardiography" },
        { zh: "每 1–2 年", en: "Every 1–2 years" },
        { zh: "无创、无辐射，用于心室功能与室壁运动的长期趋势；不是用来证明「没有缺血」的检查。", en: "Non-invasive and radiation-free, for the long-term trend in ventricular function and wall motion; it is not the test that proves absence of ischemia." },
      ],
      [
        { zh: "心肺运动试验", en: "Cardiopulmonary exercise test" },
        { zh: "约每 2 年", en: "About every 2 years" },
        { zh: "落在 2025 年综述给出的 1–3 年区间中段；纵向比较的价值在于与患者自己的既往值比较。", en: "Mid-range of the 1–3 years suggested by the 2025 review; its longitudinal value lies in comparison against the patient's own earlier values." },
      ],
      [
        { zh: "负荷灌注影像（优先负荷 CMR）", en: "Stress perfusion imaging, preferring stress CMR" },
        { zh: "约每 2 年", en: "About every 2 years" },
        { zh: "同一区间；优先 CMR 是因为没有电离辐射，适合长期重复，且可同时评价灌注、室壁运动、心功能与瘢痕。", en: "Same range; CMR is preferred because it carries no ionising radiation, suits repetition, and assesses perfusion, wall motion, function, and scar in one study." },
      ],
      [
        { zh: "青春期（约 10–18 岁）", en: "Adolescence, roughly ages 10–18" },
        { zh: "维持每年门诊、每 1–2 年功能评估", en: "Keep the annual visit and functional testing every 1–2 years" },
        { zh: "并非因为存在某个突变阈值，而是这一阶段运动强度、心脏尺寸与症状表达能力都在变化；151 例队列中年龄是症状表现的独立相关因素。", en: "Not because a threshold suddenly changes, but because exercise intensity, cardiac size, and the ability to describe symptoms are all changing; in the 151-child cohort age was the independent correlate of symptomatic presentation." },
      ],
      [
        { zh: "出现新症状时", en: "When a new symptom appears" },
        { zh: "不等时间表", en: "Do not wait for the schedule" },
        { zh: "时间表服务于稳定状态；症状变化本身就是提前评估的指征。", en: "The schedule serves the stable state; a change in symptoms is itself the indication to be seen early." },
      ],
    ],
  },
  {
    id: "ask-better",
    nav: { zh: "问对问题", en: "Ask better questions" },
    kind: "cards",
    heading: { zh: "每年门诊值得固定问的几个问题", en: "The questions worth asking the same way every year" },
    lede: {
      zh: "「最近有没有不舒服」很难得到有用的回答。固定用同样的问法逐年提问，才能看出症状模式是否在形成——单次偶发的针扎样胸痛，和逐渐固定下来的劳力性胸闷，意义完全不同。",
      en: "“Any problems lately?” rarely produces a usable answer. Asking the same questions in the same words each year is what reveals whether a pattern is forming — a one-off stabbing chest pain and a reproducible exertional tightness mean very different things.",
    },
    items: [
      {
        title: { zh: "运动中的胸痛或压迫感", en: "Chest pain or pressure during exertion" },
        body: {
          zh: "跑步或用力时出现、停下来几分钟缓解、再跑又出现——重点在于是否可重复，而不是痛得有多厉害。",
          en: "Comes on with running or effort, eases within minutes of stopping, returns on resuming. What matters is reproducibility, not severity.",
        },
      },
      {
        title: { zh: "运动耐量的变化", en: "A change in exercise tolerance" },
        body: {
          zh: "过去能轻松完成的活动现在明显吃力，而身高体重正常增长、没有贫血或呼吸道疾病可以解释。",
          en: "Activity that used to be easy is now clearly hard, while growth is normal and no anaemia or respiratory illness explains it.",
        },
      },
      {
        title: { zh: "运动中的头晕、眼前发黑或晕厥", en: "Dizziness, greying out, or syncope during exertion" },
        body: {
          zh: "发生在运动进行中，与运动结束后蹲下、站起引起的迷走性晕厥意义完全不同，需要分开描述。",
          en: "Occurring during exertion is a different event from a vagal faint after stopping or standing up, and the two must be described separately.",
        },
      },
      {
        title: { zh: "心悸，尤其伴随头晕或胸闷", en: "Palpitations, especially with dizziness or chest tightness" },
        body: {
          zh: "突然出现的快速心跳，如果同时伴有头晕或胸闷，是加做动态心电图的理由。",
          en: "An abrupt fast heartbeat, when it comes with dizziness or chest tightness, is the reason to add ambulatory ECG monitoring.",
        },
      },
    ],
  },
  {
    id: "red-lines",
    nav: { zh: "停止观察的红线", en: "Stopping rules" },
    kind: "cards",
    heading: { zh: "五条应该重新打开手术讨论的红线", en: "Five findings that should reopen the surgical discussion" },
    lede: {
      zh: "这几条不是「立刻手术」的指令，而是「观察这条路不能按原样继续」的信号。出现任何一条，合理的下一步是提前做负荷影像、必要时重新理解解剖，再由多学科团队讨论，而不是等到下一次预约。",
      en: "None of these is an instruction to operate tomorrow. Each is a signal that observation cannot continue unchanged. The reasonable next step is earlier stress imaging, a fresh look at the anatomy if needed, and a multidisciplinary discussion — not waiting for the next scheduled visit.",
    },
    items: [
      {
        title: { zh: "明确的诱发缺血", en: "Unequivocal inducible ischemia" },
        body: {
          zh: "负荷影像出现与受累冠脉供血区一致的可逆性灌注缺损。在现有的管理框架里，诱发缺血是最重要的手术考虑因素之一。",
          en: "A reversible perfusion defect on stress imaging that matches the territory of the anomalous artery. In current management frameworks, inducible ischemia is among the strongest arguments for repair.",
        },
      },
      {
        title: { zh: "运动中的晕厥", en: "Syncope during exertion" },
        body: {
          zh: "发生在运动进行中的晕厥，与运动后的迷走性晕厥性质不同，在 AAOCA 背景下需要立即重新评估，不能等到下一次预约。",
          en: "A faint that happens while exercising is a different event from a post-exercise vagal faint and, against a background of AAOCA, calls for immediate reassessment rather than the next appointment.",
        },
      },
      {
        title: { zh: "逐渐成形的可重复劳力性症状", en: "A reproducible exertional pattern taking shape" },
        body: {
          zh: "到某一固定强度就出现胸闷或胸痛、停下缓解、再运动再出现。可重复性比疼痛程度更有价值，也正是声明中与诱发缺血并列的那一类症状。",
          en: "Tightness or pain at a consistent workload, relief on stopping, recurrence on resuming. Reproducibility carries more weight than severity, and this is the symptom class the statements place alongside inducible ischemia.",
        },
      },
      {
        title: { zh: "运动诱发的复杂室性心律失常", en: "Exercise-induced complex ventricular arrhythmia" },
        body: {
          zh: "成对室早、非持续性室速、多形性室早明显增多，尤其同时伴有头晕或胸痛。「没有复杂室性心律失常」正是运动建议成立的前提条件之一。",
          en: "Couplets, non-sustained ventricular tachycardia, or a clear rise in polymorphic ectopy, especially alongside dizziness or chest pain. “No complex ventricular arrhythmia” is one of the conditions the sports guidance is built on.",
        },
      },
      {
        title: { zh: "客观运动能力的下降", en: "An objective fall in exercise capacity" },
        body: {
          zh: "连续心肺运动试验显示峰值摄氧量较自身既往值明显下降，而生长、贫血、肺部疾病与去训练化都不能解释。这正是连续运动试验存在的意义。",
          en: "Serial CPET showing peak oxygen uptake clearly below the patient's own earlier value, unexplained by growth, anaemia, lung disease, or deconditioning. This is precisely what serial exercise testing exists to detect.",
        },
      },
    ],
  },
  {
    id: "restraint",
    nav: { zh: "不必重复的检查", en: "What not to repeat" },
    kind: "table",
    heading: { zh: "谨慎观察不等于把所有检查都做一遍", en: "Cautious is not the same as testing everything" },
    lede: {
      zh: "过度检查有实际代价：辐射、镇静、费用，以及把家庭的注意力从真正有信息量的项目上引开。下面几项在稳定状态下不必按年重复。",
      en: "Over-testing has real costs: radiation, sedation, money, and the family's attention drawn away from the tests that actually carry information. In a stable state, the following do not need an annual slot.",
    },
    headers: [
      { zh: "项目", en: "Item" },
      { zh: "建议", en: "Suggested use" },
      { zh: "理由", en: "Rationale" },
    ],
    rows: [
      [
        { zh: "CTA", en: "CTA" },
        { zh: "不按年重复；仅在原始图像未测清关键解剖、临床风险明显变化、检查之间互相矛盾、或准备手术时重做", en: "Not on an annual cycle; repeat when the original images left key anatomy unmeasured, when clinical risk clearly changes, when tests conflict, or when preparing for surgery" },
        { zh: "解剖在几年内变化有限，而每次 CTA 都有辐射与可能的镇静；多数情况下需要的是重新测量，不是重新照。", en: "The anatomy changes little over a few years while each CTA carries radiation and possible sedation; usually what is needed is a re-measurement, not a re-scan." },
      ],
      [
        { zh: "动态心电图（Holter）", en: "Ambulatory ECG (Holter)" },
        { zh: "有心悸、运动头晕、近晕厥或运动试验中室早增多时针对性使用", en: "Use it for a reason: palpitations, exertional dizziness, near-syncope, or increased ectopy on exercise testing" },
        { zh: "监测时段应尽量覆盖体育课与日常活动；只在安静状态下记录一天，信息价值有限。", en: "The recording should cover PE lessons and ordinary activity; a day spent lying still yields little." },
      ],
      [
        { zh: "肌钙蛋白", en: "Troponin" },
        { zh: "不作为常规随访项目；急性、持续的胸痛或急性事件时另论", en: "Not part of routine surveillance; a different matter for acute prolonged chest pain or an acute event" },
        { zh: "肌钙蛋白回答的是「此刻有没有心肌损伤」，而随访要回答的是「负荷时会不会出现短暂可逆的缺血」，两者不是同一个问题。", en: "Troponin answers whether myocardium is being damaged now; surveillance asks whether brief reversible ischemia appears under load. They are not the same question." },
      ],
      [
        { zh: "核素心肌灌注显像（SPECT）", en: "Nuclear perfusion imaging (SPECT)" },
        { zh: "在可获得合适负荷 CMR 时不作为首选的年度检查", en: "Not the default annual test where an appropriate stress CMR is available" },
        { zh: "儿童需要长期反复评价，CMR 没有电离辐射，且可同时给出灌注、室壁运动与瘢痕信息。", en: "Children need repeated assessment over years; CMR carries no ionising radiation and reports perfusion, wall motion, and scar together." },
      ],
      [
        { zh: "长期用药", en: "Long-term medication" },
        { zh: "不因为「选择了保守」就自动开始阿司匹林或 β 阻滞剂", en: "Do not start aspirin or a beta-blocker merely because the plan is conservative" },
        { zh: "现有儿童 AAORCA 文献没有支持对所有无症状患儿常规长期用药的强证据；是否用药属于需要单独讨论的临床决定。", en: "The pediatric AAORCA literature does not support routine long-term medication for every asymptomatic child; whether to treat is a separate clinical decision." },
      ],
    ],
  },
  {
    id: "activity",
    nav: { zh: "运动怎么安排", en: "Activity in the meantime" },
    kind: "prose",
    heading: { zh: "评估未完成时的活动尺度", en: "How much activity while the evaluation is incomplete" },
    paragraphs: [
      {
        zh: "没有证据支持让 AAORCA 的孩子完全不运动。AHA/ACC 2025 声明的处理逻辑恰恰相反：对主动脉—肺动脉间走行的 R-AAOCA，如果没有缺血症状、没有诱发缺血、没有复杂室性心律失常，在完整评估之后甚至可以讨论竞技运动，并在长期监测下进行。永久性、一刀切的体育禁令并不是当前指南的立场。",
        en: "There is no evidence for keeping a child with AAORCA away from all activity. The logic of the AHA/ACC 2025 statement runs the other way: for interarterial R-AAOCA without ischemic symptoms, inducible ischemia, or complex ventricular arrhythmia, competitive sport can be discussed after a complete evaluation and continued under long-term monitoring. A permanent blanket ban is not the current position.",
      },
      {
        zh: "但在功能评估尚未完成、也就是还不知道负荷时会不会缺血的阶段，采取一个临时的中间尺度是合理的：日常步行、上学、轻松骑车、一般玩耍和不接近力竭的体育活动通常可以继续；暂时避开的是以成绩为目标的长跑、连续折返冲刺、正式高强度比赛、极限间歇训练、刻意冲最大心率，以及憋气类项目。这与指南在评估阶段暂缓高强度竞技的思路一致，也比「先心病，免体育」对孩子的成长更友好。",
        en: "While the functional evaluation is still incomplete — that is, while nobody yet knows whether ischemia appears under load — a temporary middle setting is reasonable: walking, school, easy cycling, ordinary play, and activity that does not approach exhaustion can usually continue; what is deferred is timed distance running, repeated sprint work, formal high-intensity competition, maximal interval training, deliberately chasing peak heart rate, and breath-hold activities. This matches how the guidelines defer high-intensity competition during evaluation, and it treats a growing child better than a blanket exemption from physical education.",
      },
      {
        zh: "给学校的说明写得具体一些会更有用：说明孩子在心脏专科随访中、需要避免哪一类活动、日常活动按耐受进行，以及出现胸痛、胸闷、明显心悸、头晕或晕厥时应立即停止活动并联系家长就医。一句「免体育」既保护不了孩子，也让老师无从判断。",
        en: "A note to the school works better when it is specific: that the child is under cardiology follow-up, which categories of activity to avoid, that ordinary activity proceeds as tolerated, and that chest pain, tightness, marked palpitations, dizziness, or fainting means stopping immediately and contacting the family. “Excused from PE” protects nobody and leaves a teacher with nothing to act on.",
      },
    ],
  },
  {
    id: "limits",
    nav: { zh: "证据到哪为止", en: "Where the evidence stops" },
    kind: "stats",
    heading: { zh: "支持这条路的最直接数据，以及它的边界", en: "The most direct data behind this path, and its edge" },
    lede: {
      zh: "下面几个数字来自本库持有全文的 151 例儿童 AAORCA 单中心队列，是目前对「非手术组过得怎么样」最直接的真实世界描述。",
      en: "These figures come from the 151-child single-centre AAORCA cohort whose full text this library holds — currently the most direct real-world description of how a non-surgical group fares.",
    },
    stats: [
      { value: "151", label: { zh: "纳入患儿总数，平均年龄 7.40 ± 4.87 岁", en: "Children included, mean age 7.40 ± 4.87 years" } },
      { value: "105", label: { zh: "未接受手术，随访期间总体临床状态稳定", en: "Managed without surgery, clinically stable through follow-up" } },
      { value: "2", label: { zh: "非手术组中出现新发胸痛的例数", en: "Non-surgical patients who developed new-onset chest pain" } },
      { value: "0", label: { zh: "随访期内观察到的心源性猝死与主要心血管事件", en: "Sudden cardiac deaths or major adverse cardiovascular events observed" } },
    ],
    note: {
      zh: "作者自己写明：这是回顾性单中心研究，存在选择偏倚，检查项目未标准化，且随访时间相对较短，不足以评估长期风险。同一研究的多因素分析里，与症状表现独立相关的是年龄（OR 1.42，95% CI 1.26–1.60，P<0.001），而主动脉—肺动脉间走行（OR 1.04，P=0.938）、壁内段（OR 0.73，P=0.496）与开口狭窄（OR 0.40，P=0.052）都没有独立相关性——这正是这套方案不以解剖为触发条件、而以症状与负荷检查为触发条件的原因。",
      en: "The authors state the limits themselves: a retrospective single-centre study with selection bias, non-standardised testing, and follow-up too short to judge long-term risk. In the same study's multivariable analysis, age was independently associated with symptomatic presentation (OR 1.42, 95% CI 1.26–1.60, P<0.001), while an interarterial course (OR 1.04, P=0.938), an intramural segment (OR 0.73, P=0.496), and ostial stenosis (OR 0.40, P=0.052) were not — which is why this plan is triggered by symptoms and stress testing rather than by anatomy.",
    },
  },
  {
    id: "closing",
    nav: { zh: "观察在赌什么", en: "What observation bets on" },
    kind: "prose",
    heading: { zh: "观察不是赌不会出事，而是赌变化能被及时发现", en: "Observation does not bet on nothing happening; it bets on change being caught in time" },
    paragraphs: [
      {
        zh: "同一份 151 例队列在讨论中写道：早期儿童阶段的「沉默期」并不能排除未来的风险，因此当患儿进入活动量更大的发育阶段时，需要纵向的持续监测。这句话准确说明了保守观察的性质——它的有效性不来自当下这次阴性结果，而来自后面每一次按时进行的复查。",
        en: "The same 151-child cohort puts it this way in its discussion: a silent period in early childhood does not preclude future risk, so longitudinal surveillance is needed as patients enter more active developmental stages. That sentence describes exactly what conservative management is — its safety comes not from today's negative result but from every scheduled reassessment that follows.",
      },
      {
        zh: "所以真正让这条路站得住的，不是「暂时不手术」这个决定，而是三件配套的事：一次做到位的基线负荷评估、一份写下来的随访时间表、以及一组事先约定好的停止条件。缺了第三件，保守观察就会慢慢退化成不再复查；缺了第一件，观察从一开始就没有可比较的起点。",
        en: "What makes this path hold up is therefore not the decision to defer surgery but three things around it: one adequate baseline stress evaluation, a written follow-up schedule, and a set of stopping rules agreed in advance. Without the third, conservative management decays into no longer being checked; without the first, it never had a comparison point to begin with.",
      },
      {
        zh: "最后要说明这份方案的性质：它取的是已发表范围里偏谨慎的一端，不是任何一份指南的原文，也没有随机对照证据证明这个间隔优于更宽的间隔。它的用途是让家庭在门诊里问出更具体的问题——用哪种负荷方式、下一次功能评估安排在什么时候、出现什么情况需要提前来——而不是替代诊疗团队为某个孩子做的判断。",
        en: "One last word on what this is: it sits at the cautious end of the published range, it is not any guideline verbatim, and no randomised evidence shows these intervals beat wider ones. Its use is to let a family ask sharper questions in clinic — which stressor, when the next functional assessment is booked, what should bring them back early — not to replace the judgement a care team makes for an individual child.",
      },
    ],
  },
];

export function ConservativeSurveillancePage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
