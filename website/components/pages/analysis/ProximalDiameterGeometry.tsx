import type { Language } from "../../../lib/i18n";
import { AnalysisArticle, type ArticleCopy, type Section } from "./ArticleShell";

const SLUG = "aaorca-proximal-diameter-geometry";

const copy: ArticleCopy = {
  back: { zh: "← 回到分析目录", en: "← Back to the analyses" },
  label: { zh: "证据分析 · 影像定量", en: "Evidence analysis · imaging quantification" },
  title: {
    zh: "一个“最窄 1.3 mm”能说明什么，又不能说明什么",
    en: "What a single “1.3 mm minimum diameter” can and cannot tell you",
  },
  lede: {
    zh: "AAORCA 的报告里经常只留下一个数字：近端最窄多少毫米。这个数字值得重视，但它无法区分 30% 和 70% 的面积丢失，也无法说明它测的是开口、壁内段还是任意一个重建平面。本页用可复算的几何计算说明这个缺口，并列出影像报告真正应该给出的量。",
    en: "Reports on AAORCA often leave one number behind: the minimum proximal diameter in millimetres. It deserves attention, yet it cannot distinguish a 30% loss of lumen area from a 70% one, nor say whether it was measured at the ostium, in the intramural segment, or on an arbitrary reformatted plane. This page works the geometry through explicitly and lists what an imaging report should actually provide.",
  },
  method: {
    zh: "本页由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅。文中的算例是为了说明几何关系而做的公开计算，使用的是简化的圆形与椭圆模型，不代表任何一位患者的真实测量。",
    en: "This page was assembled by AI from the library records, PubMed metadata, and available full texts. No medical professional reviewed it. The worked examples are open calculations using simplified circular and elliptical models to illustrate geometry; they are not any patient's real measurements.",
  },
  toc: { zh: "本页内容", en: "On this page" },
  sourcesHeading: { zh: "本文用到的文献记录", en: "Records used in this analysis" },
  sourcesLede: {
    zh: "点击回到本站题录，可继续查看 DOI、PMID、获取状态与整理说明。",
    en: "Open a library record for its DOI, PMID, access status, and curator note.",
  },
  sources: [
    { slug: "2017-9f16603be2a8", title: { zh: "PHN 正常超声 Z 值数据库", en: "PHN normal echocardiogram Z-score database" } },
    { slug: "2026-94384acd16a9", title: { zh: "CCTA 几何参数与腺苷/多巴酚丁胺 FFR", en: "CCTA geometry versus adenosine and dobutamine FFR" } },
    { slug: "2026-d29299373d7f", title: { zh: "广东 151 例儿童 AAORCA", en: "Guangdong 151-child AAORCA cohort" } },
    { slug: "2023-6b0bf46bb67e", title: { zh: "Texas Children’s 220 例儿童 R-AAOCA", en: "Texas Children’s 220-child R-AAOCA cohort" } },
    { slug: "2026-d6beccc7969e", title: { zh: "AAOCA 标准化命名国际建议", en: "Proposed standardized nomenclature for AAOCA" } },
    { slug: "2020-27b1754e3df3", title: { zh: "ASE 先天性冠脉异常多模态评估指南", en: "ASE multimodality assessment guideline" } },
    { slug: "2024-dad8fbda391d", title: { zh: "儿童 AAOCA 风险评估与管理综述", en: "Review: AAOCA in pediatric patients" } },
  ],
  externalHeading: {
    zh: "本库未收录、但本文用到的公开资料：",
    en: "Public material used here that is not a library record:",
  },
  external: [
    {
      url: "https://www.pediatricheartnetwork.org/forresearchers/echo-z-scores/",
      title: {
        zh: "Pediatric Heart Network 公布的超声 Z 值回归方程（含近端右冠状动脉）",
        en: "Pediatric Heart Network published echo Z-score regression equations, including the proximal RCA",
      },
    },
  ],
};

const sections: Section[] = [
  {
    id: "takeaway",
    nav: { zh: "先看结论", en: "Bottom line" },
    kind: "cards",
    heading: { zh: "问题不是这个数字小不小，而是它没有定义", en: "The problem is not that the number is small, but that it is undefined" },
    items: [
      {
        title: { zh: "同一个直径可以对应完全不同的面积", en: "One diameter maps to very different areas" },
        body: {
          zh: "壁内段常呈扁平椭圆。1.3 × 1.3 mm 与 1.3 × 3.5 mm 都可以被写成“最窄 1.3 mm”，但截面积相差接近三倍。",
          en: "An intramural lumen is often a flattened ellipse. Both 1.3 × 1.3 mm and 1.3 × 3.5 mm can be written up as “1.3 mm at its narrowest,” yet their cross-sectional areas differ almost threefold.",
        },
      },
      {
        title: { zh: "正常值数据库不是合适的参照", en: "A normal-values database is the wrong reference" },
        body: {
          zh: "儿童正常冠脉 Z 值模型测的是标准切面下的正常管腔，与异常开口或壁内段的最小径不是同一个物理量，硬套会得出看似精确、实则无效的结论。",
          en: "Pediatric coronary Z-score models describe a normal lumen in a standard view. That is not the same physical quantity as the minimum diameter of an anomalous ostium or intramural segment, and forcing the comparison yields a precise-looking but invalid result.",
        },
      },
      {
        title: { zh: "最好的参照是患者自己的远端血管", en: "The best reference is the patient's own distal vessel" },
        body: {
          zh: "用离开异常段之后的正常 RCA 作参考面积，计算面积狭窄率，天然校正了年龄、体表面积、供血范围和个体血管粗细。",
          en: "Taking the normal RCA beyond the anomalous segment as the reference area, and computing an area stenosis, automatically adjusts for age, body surface area, territory size, and individual vessel calibre.",
        },
      },
    ],
  },
  {
    id: "scale",
    nav: { zh: "量级感", en: "A sense of scale" },
    kind: "prose",
    heading: { zh: "先建立量级感：这个年龄段的正常近端右冠大约多粗", en: "First, a sense of scale: how wide is a normal proximal RCA at this age" },
    paragraphs: [
      {
        zh: "Pediatric Heart Network 公布的儿童超声 Z 值回归方程中，近端右冠状动脉的预测均值为：RCA(近端) = 0.012047694 + 2.301336377 × BSA^0.45，单位为毫米。它来自 PHN 正常超声数据库项目，描述的是正常儿童在标准切面下的冠脉内径。",
        en: "Among the Pediatric Heart Network's published echocardiographic Z-score regressions, the predicted mean for the proximal right coronary artery is RCA(prox) = 0.012047694 + 2.301336377 × BSA^0.45, in millimetres. It comes from the PHN normal echocardiogram database and describes coronary internal diameter in normal children in a standard view.",
      },
      {
        zh: "代入体表面积 1.12 m²（大致相当于身高 143 cm、体重 32 kg 的学龄儿童），预测值约为 2.43 mm。把它当成一个圆形管腔，截面积约 4.65 mm²。这两个数字只用来建立量级感。",
        en: "For a body surface area of 1.12 m² — roughly a school-age child of about 143 cm and 32 kg — the predicted value is about 2.43 mm. Treated as a circular lumen, that is a cross-sectional area of about 4.65 mm². These two figures exist only to set the scale.",
      },
      {
        zh: "必须立刻加上限制条件。这个方程建立在正常儿童的标准测量上，而 AAORCA 报告中的“最窄 1.3 mm”很可能测自异常开口或壁内段的短轴。把二者相除得到的比例或 Z 值，看上去精确，实际上把两个不同的测量对象放进了同一个公式。",
        en: "The caveats have to follow immediately. The equation is built on standard measurements in normal children, whereas “1.3 mm at its narrowest” in an AAORCA report is most likely the minor axis of an anomalous ostium or intramural segment. Dividing one by the other, or deriving a Z score, looks precise while putting two different measurands into one formula.",
      },
    ],
  },
  {
    id: "ellipse",
    nav: { zh: "椭圆的算术", en: "The arithmetic of an ellipse" },
    kind: "table",
    heading: { zh: "同一个 1.3 mm，面积丢失可以从 23% 到 71%", en: "The same 1.3 mm can mean anywhere from a 23% to a 71% loss of area" },
    lede: {
      zh: "以上面的 4.65 mm² 作为参考面积，把最窄处按不同形状计算，可以直接看出单一直径的信息量有多有限。计算用的是椭圆面积 π × (短轴/2) × (长轴/2)，所有数字都可以自行复算。",
      en: "Taking the 4.65 mm² above as the reference area and computing the narrowest point under different shapes shows directly how little a single diameter conveys. The calculation is the ellipse area π × (minor/2) × (major/2); every figure can be re-derived.",
    },
    headers: [
      { zh: "最窄处形状", en: "Shape at the narrowest point" },
      { zh: "截面积", en: "Cross-sectional area" },
      { zh: "相对 4.65 mm² 的面积丢失", en: "Area lost against 4.65 mm²" },
      { zh: "临床印象", en: "Clinical impression" },
    ],
    rows: [
      [
        { zh: "圆形 1.3 × 1.3 mm", en: "Circle, 1.3 × 1.3 mm" },
        { zh: "约 1.33 mm²", en: "About 1.33 mm²" },
        { zh: "约 71%", en: "About 71%" },
        { zh: "非常严重", en: "Severe" },
      ],
      [
        { zh: "椭圆 1.3 × 2.0 mm", en: "Ellipse, 1.3 × 2.0 mm" },
        { zh: "约 2.04 mm²", en: "About 2.04 mm²" },
        { zh: "约 56%", en: "About 56%" },
        { zh: "明显", en: "Marked" },
      ],
      [
        { zh: "椭圆 1.3 × 3.0 mm", en: "Ellipse, 1.3 × 3.0 mm" },
        { zh: "约 3.06 mm²", en: "About 3.06 mm²" },
        { zh: "约 34%", en: "About 34%" },
        { zh: "中等", en: "Moderate" },
      ],
      [
        { zh: "椭圆 1.3 × 3.5 mm", en: "Ellipse, 1.3 × 3.5 mm" },
        { zh: "约 3.57 mm²", en: "About 3.57 mm²" },
        { zh: "约 23%", en: "About 23%" },
        { zh: "轻中度", en: "Mild to moderate" },
      ],
    ],
    note: {
      zh: "这是一次纯几何演示，用来说明信息缺口；真实血管不是理想椭圆，参考面积也应取自患者自己的远端血管，而不是人群预测值。",
      en: "This is a purely geometric demonstration of the information gap. Real vessels are not ideal ellipses, and the reference area should come from the patient's own distal vessel rather than a population prediction.",
    },
  },
  {
    id: "which-measure",
    nav: { zh: "它测的是哪里", en: "Where was it measured" },
    kind: "prose",
    heading: { zh: "第二个缺口：这个毫米数测自哪一个位置、哪一个平面", en: "The second gap: at which location and on which plane was that millimetre taken" },
    paragraphs: [
      {
        zh: "同样写作“近端最窄 1.3 mm”，可能来自异常开口的短轴、壁内段的最小短轴、主动脉-肺动脉间段的最小径，或者某一张纵向重建图像上目测最窄的宽度。前三者是不同的解剖位置，最后一种连测量平面都不固定。",
        en: "The same phrase can come from the minor axis of the anomalous ostium, the smallest minor axis within the intramural segment, the narrowest point of the interarterial segment, or a visually narrowest width on one longitudinal reformat. The first three are different anatomic locations; the last does not even fix the measuring plane.",
      },
      {
        zh: "只有垂直于血管走行的真横断面上的测量，才能同时给出短轴、长轴和面积。这也是为什么可比性要求报告注明测量平面，而不只是给一个数字。近年推动 AAOCA 标准化命名的工作，正是针对这种同词不同义的问题。",
        en: "Only a true cross-section perpendicular to the vessel yields minor axis, major axis, and area together. That is why comparability requires the plane to be stated, not just a number. Recent work proposing standardized nomenclature for AAOCA addresses exactly this kind of same-word-different-meaning problem.",
      },
    ],
  },
  {
    id: "self-reference",
    nav: { zh: "用自己作参照", en: "Use the patient as reference" },
    kind: "prose",
    heading: { zh: "面积狭窄率比绝对直径更能被解释", en: "An area stenosis ratio is more interpretable than an absolute diameter" },
    paragraphs: [
      {
        zh: "把“离开异常段之后的正常 RCA 截面积”作为参考，把“壁内段最小截面积”作为病变，两者相除得到面积狭窄率。这一步天然校正了年龄、体表面积、冠脉优势型带来的供血范围差异以及个体血管粗细，因此比与人群正常值比较更稳。",
        en: "Take the cross-sectional area of the normal RCA beyond the anomalous segment as the reference and the minimum area within the intramural segment as the lesion, and divide. This adjusts inherently for age, body surface area, the territory differences that follow from coronary dominance, and individual vessel calibre, so it is more robust than comparison against population norms.",
      },
      {
        zh: "举例说明这一步的价值：如果远端参考面积 4.0 mm²、最窄壁内段 2.0 mm²，面积狭窄约 50%；这句话可以被另一位医生复核、可以随时间重复测量、也可以在术前术后比较。相比之下，“最窄约 1.3 mm”这句话做不到其中任何一项。",
        en: "The value shows in an example: a distal reference area of 4.0 mm² and a narrowest intramural area of 2.0 mm² gives an area stenosis of about 50%. That statement can be checked by another reader, repeated over time, and compared before and after surgery. “About 1.3 mm at its narrowest” supports none of those.",
      },
      {
        zh: "冠脉优势型在这里也找到了它合适的位置。左冠优势意味着右冠远端供血范围可能较小，因此其正常口径本身可能偏细。这正说明不应把人群平均值当作个体的“应该值”，但它不足以作为不手术的理由——目前没有针对优势型分层的儿童 AAORCA 风险数据。",
        en: "Coronary dominance also finds its proper place here. Left dominance implies a smaller distal right-coronary territory, so that vessel's normal calibre may legitimately be narrower. That is a reason not to treat a population mean as an individual's expected value; it is not a reason to forgo surgery, since no pediatric AAORCA risk data are stratified by dominance.",
      },
    ],
  },
  {
    id: "geometry-and-flow",
    nav: { zh: "几何与血流", en: "Geometry and flow" },
    kind: "prose",
    heading: { zh: "几何参数与实测血流的关系，是目前少数有直接数据的环节", en: "Geometry versus measured flow is one of the few links with direct data" },
    paragraphs: [
      {
        zh: "一项纳入 81 名成人 R-AAOCA 的研究同时采集 CCTA 几何参数与侵入性 FFR。结果显示，用于预测运动样负荷（多巴酚丁胺）下血流异常时，开口短轴等几何量比“是否存在壁内段”这一二分类更有信息量；液压直径、阻力相关的综合指标还能进一步补充。",
        en: "A study of 81 adults with R-AAOCA collected CCTA geometry and invasive FFR together. For predicting abnormal flow under exercise-like (dobutamine) stress, geometric quantities such as the ostial minor axis were more informative than the binary presence of an intramural course, with hydraulic diameter and resistance-type composite indices adding further information.",
      },
      {
        zh: "同一项研究中，腺苷 FFR 异常约 6.2%，多巴酚丁胺 FFR 异常约 19.8%。这提示固定几何与动态几何不是同一件事：静态影像上的一个断面，无法涵盖运动时主动脉扩张与心率上升带来的进一步变形。",
        en: "In the same study, adenosine FFR was abnormal in about 6.2% and dobutamine FFR in about 19.8%. Fixed and dynamic geometry are therefore not the same thing: one cross-section on a static scan cannot capture the further deformation that comes with aortic distension and a rising heart rate during exercise.",
      },
      {
        zh: "这些结果来自平均年龄约 52 岁的成人，属于新兴研究方向，目前没有可以直接用于儿童临床分层的阈值。它能支持的结论只有一条：值得测量的是几何，而不是一个孤立的直径。",
        en: "These results come from adults with a mean age of about 52 and represent an emerging line of work; they provide no threshold usable for pediatric stratification. The one conclusion they support is that geometry, not an isolated diameter, is what is worth measuring.",
      },
    ],
  },
  {
    id: "ostial-signal",
    nav: { zh: "开口狭窄的信号", en: "The ostial-stenosis signal" },
    kind: "prose",
    heading: { zh: "在儿童队列里，开口狭窄的信号强于主动脉-肺动脉间走行", en: "In pediatric cohorts, ostial stenosis signals more strongly than an interarterial course" },
    paragraphs: [
      {
        zh: "2026 年广东省的 151 例儿童 AAORCA 队列（平均诊断年龄 7.40 ± 4.87 岁）中，有 CTA 资料的 129 人里，主动脉-肺动脉间走行占 48.8%，开口狭窄占 39.5%。该研究把裂隙样开口、开口变窄和管腔直径减少统一归为“开口狭窄”。",
        en: "In the 2026 Guangdong cohort of 151 children with AAORCA (mean age at diagnosis 7.40 ± 4.87 years), among the 129 with CTA data an interarterial course appeared in 48.8% and ostial stenosis in 39.5%. The study grouped a slit-like ostium, ostial narrowing, and reduced luminal diameter together as “ostial stenosis.”",
      },
      {
        zh: "开口狭窄与症状的单因素关联最强：OR 4.30（95% CI 2.14–8.65，P<0.001）。但在多因素校正后，估计值变为 OR 0.40（95% CI 0.15–1.01，P=0.052），方向甚至发生反转。这不能读成“开口狭窄使风险增加 4.3 倍”，只能读成：在这份数据里，开口狭窄与症状的表面关联很大程度上被年龄等因素解释掉了。",
        en: "Ostial stenosis carried the strongest univariable association with symptoms: OR 4.30 (95% CI 2.14–8.65, P<0.001). After multivariable adjustment the estimate became OR 0.40 (95% CI 0.15–1.01, P=0.052), with the direction reversing. This cannot be read as “ostial stenosis multiplies risk 4.3-fold”; it reads as an apparent association that adjustment for age and other factors largely explains away.",
      },
      {
        zh: "外科端的资料指向同一个方向。46 人接受手术（30.5%），其中 44 例为去顶；45 例有完整术中资料的患者中，壁内段 44/45（97.8%）、开口狭窄 40/45（88.9%），而主动脉-肺动脉间走行只有 13/45（28.9%）。也就是说，实际被送上手术台的，主要是开口与壁内段有问题的人，而不是单纯“夹在两根大动脉之间”的人。",
        en: "The surgical side points the same way. Forty-six patients (30.5%) had surgery, 44 of them unroofing; among the 45 with complete intraoperative data, 44/45 (97.8%) had an intramural course and 40/45 (88.9%) ostial stenosis, while only 13/45 (28.9%) had an interarterial course. In practice, the patients reaching the operating room were those with ostial and intramural problems, not those defined by running between the great arteries.",
      },
      {
        zh: "把它与 Texas Children's 的 220 例队列并列会更完整：那份数据里，有缺血与无缺血者的壁内段长度完全相同（中位 5 mm，四分位 4–7，P=0.65）。两组数据合起来说明，重心正在从“走行分类”移向“开口与近端几何”，但没有任何一项已经强到可以单独决定手术。",
        en: "Placing this next to the Texas Children's cohort of 220 completes the picture: there, intramural length was identical in patients with and without ischemia (median 5 mm, IQR 4–7, P=0.65). Together the two datasets show the centre of gravity moving from course classification toward ostial and proximal geometry — without any single measure yet being strong enough to decide surgery alone.",
      },
    ],
  },
  {
    id: "checklist",
    nav: { zh: "该报告什么", en: "What to report" },
    kind: "table",
    heading: { zh: "一份可用于决策的 AAORCA 影像报告应该包含什么", en: "What an AAORCA imaging report needs to contain to support a decision" },
    lede: {
      zh: "下表把散落在各项研究里的量集中起来。它的用途是把“再照一次 CT”换成“把已有的原始数据重新量化”，因为大多数条目并不需要新的辐射暴露。",
      en: "The table gathers the quantities scattered across these studies. Its purpose is to replace “scan again” with “re-quantify the data already acquired,” since most entries need no new radiation exposure.",
    },
    headers: [
      { zh: "测量项", en: "Measurement" },
      { zh: "为什么需要它", en: "Why it is needed" },
    ],
    rows: [
      [
        { zh: "开口短轴与长轴", en: "Ostial minor and major axis" },
        { zh: "判断是否裂隙样，并给出椭圆程度", en: "Identifies a slit-like shape and quantifies ellipticity" },
      ],
      [
        { zh: "开口面积", en: "Ostial area" },
        { zh: "比单一直径更能反映入口容量", en: "Reflects inlet capacity better than any single diameter" },
      ],
      [
        { zh: "壁内段最小截面积", en: "Minimum lumen area within the intramural segment" },
        { zh: "定位真正的瓶颈所在", en: "Locates the actual bottleneck" },
      ],
      [
        { zh: "离开异常段后的参考面积", en: "Reference area beyond the anomalous segment" },
        { zh: "提供患者自身的分母", en: "Supplies the patient's own denominator" },
      ],
      [
        { zh: "面积狭窄率", en: "Area stenosis" },
        { zh: "可复核、可随访、可术前术后比较", en: "Verifiable, repeatable, and comparable before and after surgery" },
      ],
      [
        { zh: "壁内段长度", en: "Intramural length" },
        { zh: "作为风险因子较弱，但直接影响术式选择", en: "Weak as a risk factor, decisive for choosing the operation" },
      ],
      [
        { zh: "起源角", en: "Take-off angle" },
        { zh: "与近端折角和阻力相关", en: "Relates to proximal kinking and resistance" },
      ],
      [
        { zh: "开口与主动脉瓣交界的关系", en: "Relationship of the ostium to the aortic valve commissure" },
        { zh: "决定去顶是否需要处理瓣交界", en: "Determines whether unroofing must involve the commissure" },
      ],
      [
        { zh: "是否经过增厚的冠脉间嵴", en: "Whether the course passes a thickened intercoronary pillar" },
        { zh: "与去顶后的残留压迫有关", en: "Relates to residual compression after unroofing" },
      ],
      [
        { zh: "测量平面是否垂直于血管", en: "Whether the plane is perpendicular to the vessel" },
        { zh: "决定以上所有数字是否可比", en: "Determines whether all of the above are comparable at all" },
      ],
    ],
  },
  {
    id: "closing",
    nav: { zh: "结论", en: "Conclusion" },
    kind: "prose",
    heading: { zh: "把“1.3 mm 危险不危险”换成两个可回答的问题", en: "Replace “is 1.3 mm dangerous?” with two answerable questions" },
    paragraphs: [
      {
        zh: "第一个问题：这个最窄处的短轴、长轴和面积各是多少，相对患者自己的远端参考面积丢失了多少百分比。这一步不需要新的检查，只需要把原始影像交给熟悉冠脉异常的影像团队重新量化。",
        en: "The first question: what are the minor axis, major axis, and area at the narrowest point, and what percentage of the patient's own distal reference area is lost. This requires no new study, only re-quantification of the original images by a team familiar with coronary anomalies.",
      },
      {
        zh: "第二个问题：在接近真实运动的负荷下，右冠供血区是否出现缺血。几何量能提示概率，不能替代这个答案。",
        en: "The second: under stress that approaches real exertion, does the right coronary territory become ischemic. Geometry can indicate probability; it cannot substitute for that answer.",
      },
      {
        zh: "在这两个问题得到回答之前，围绕一个孤立毫米数的争论既无法证实也无法证伪，因此也无法推进决策。",
        en: "Until both are answered, an argument about one isolated millimetre figure can be neither confirmed nor refuted, and therefore cannot move the decision forward.",
      },
    ],
  },
];

export function ProximalDiameterGeometryPage({ lang }: { lang: Language }) {
  return <AnalysisArticle lang={lang} slug={SLUG} copy={copy} sections={sections} />;
}
