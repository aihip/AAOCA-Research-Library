/**
 * Maps the words patients and families actually type onto the vocabulary that
 * appears in the record metadata. Without this, a search for "开刀" or "猝死"
 * returns nothing even though a third of the collection is about surgery.
 *
 * Keys are matched case-insensitively against whole query terms.
 */
const SYNONYMS: Record<string, string[]> = {
  // What it is
  异常: ["anomalous", "anomaly"],
  起源异常: ["anomalous", "origin", "aaoca"],
  冠脉: ["coronary"],
  冠状动脉: ["coronary"],
  先天: ["congenital"],
  先天性: ["congenital"],
  解剖: ["anatomy", "anatomic", "origin", "course"],
  壁内: ["intramural"],
  动脉间: ["interarterial"],

  // How serious
  危险: ["risk", "sudden", "death"],
  风险: ["risk", "stratification"],
  猝死: ["sudden", "death", "cardiac arrest"],
  死亡: ["death", "mortality"],
  预后: ["outcome", "prognosis", "long-term"],
  症状: ["symptom", "chest pain", "syncope"],
  胸痛: ["chest pain", "symptom"],
  晕厥: ["syncope", "symptom"],
  儿童: ["pediatric", "paediatric", "child", "children"],
  小孩: ["pediatric", "paediatric", "child", "children"],
  孩子: ["pediatric", "paediatric", "child", "children"],
  成人: ["adult"],

  // Tests
  检查: ["imaging", "evaluation", "assessment", "diagnosis"],
  影像: ["imaging", "ct", "mri", "echocardiography"],
  心脏: ["cardiac", "heart", "coronary"],
  心脏ct: ["ct", "computed tomography", "angiography"],
  ct: ["computed tomography", "cta", "angiography"],
  核磁: ["mri", "magnetic resonance"],
  磁共振: ["mri", "magnetic resonance"],
  超声: ["echocardiography", "echocardiogram"],
  心超: ["echocardiography", "echocardiogram"],
  造影: ["angiography"],
  负荷试验: ["stress", "exercise test", "ischemia"],
  缺血: ["ischemia", "ischaemia", "perfusion"],

  // Sports
  运动: ["sport", "sports", "exercise", "athlete", "activity", "participation"],
  锻炼: ["exercise", "activity", "training"],
  体育: ["sport", "sports", "athlete", "competitive"],
  比赛: ["competitive", "sports", "participation"],
  上体育课: ["sport", "sports", "activity", "participation"],

  // Surgery
  手术: ["surgery", "surgical", "repair", "operation", "operative"],
  开刀: ["surgery", "surgical", "repair", "operation"],
  去顶: ["unroofing"],
  去顶术: ["unroofing"],
  移位: ["translocation", "reimplantation"],
  搭桥: ["bypass", "graft"],
  术后: ["postoperative", "outcome", "follow-up"],
  效果: ["outcome", "result", "results"],

  // Guidance
  指南: ["guideline", "guidelines", "recommendations"],
  共识: ["consensus", "statement"],
  专家共识: ["consensus", "statement", "guideline"],
  建议: ["recommendations", "guideline"],
  随访: ["follow-up", "long-term", "management"],
  治疗: ["management", "treatment", "therapy"],

  // English lay terms
  sport: ["sports", "exercise", "athlete", "participation"],
  exercise: ["sport", "sports", "activity", "stress"],
  surgery: ["surgical", "repair", "operative", "unroofing"],
  operation: ["surgery", "surgical", "operative"],
  scan: ["ct", "mri", "imaging", "angiography"],
  test: ["imaging", "evaluation", "stress", "assessment"],
  tests: ["imaging", "evaluation", "stress", "assessment"],
  danger: ["risk", "sudden", "death"],
  dangerous: ["risk", "sudden", "death"],
  kids: ["pediatric", "paediatric", "child", "children"],
  child: ["pediatric", "paediatric", "children"],
  children: ["pediatric", "paediatric", "child"],
  guideline: ["guidelines", "consensus", "recommendations"],
  guidelines: ["guideline", "consensus", "recommendations"],
};

/**
 * Returns the term itself plus every known alias, all lowercased.
 * A record matches the term if it contains any one of them.
 */
export function expandTerm(term: string): string[] {
  const normalized = term.toLocaleLowerCase();
  const aliases = SYNONYMS[normalized] ?? [];
  return [normalized, ...aliases.map((alias) => alias.toLocaleLowerCase())];
}
