/* Interface language: German strings are the keys, Chinese translations below.
   Learning content (sentences, options, tiles) always stays German. */
(function () {
  'use strict';
  var ZH = {
    // navigation & chrome
    'Lernen': '学习', 'Wiederholen': '复习', 'Statistik': '统计', 'Einstellungen': '设置',
    'Navigation': '导航', 'Fortschritt': '进度', 'Serie': '连续天数', 'Tagesziel': '每日目标',
    'Serie: {n}': '连续 {n} 天', 'XP gesamt: {n}': '总经验 {n}', 'Heute {a} von {b} XP': '今日 {a}/{b} XP',
    '{n} Fehler fällig': '{n} 道错题待复习',
    // learning path
    'Mittelstufe I': '中级 I', 'Mittelstufe II': '中级 II',
    'Start': '开始', 'Weiter': '继续', 'Starten': '开始', 'Üben': '练习', 'Grammatik': '语法',
    'Schließen': '关闭', 'Zurück': '返回',
    '{t}, {n} von {m}': '{t}，{n}/{m}',
    '{n} von {m} Lektionen': '已完成 {n}/{m} 课',
    '{lv}-Test': '{lv} 测试',
    'Abschnittstest': '阶段测试', '{n} Fragen': '{n} 题', 'ab {p}%': '{p}% 及格', 'Bestwert {n}%': '最高 {n}%',
    'Test starten': '开始测试',
    // review
    'Fehler fällig': '道错题待复习', 'Alles erledigt': '全部完成', '{n} später': '{n} 道稍后复习',
    'Gemischtes Training': '综合练习', '{n} Einheit': '{n} 个单元', '{n} Einheiten': '{n} 个单元',
    'Einheiten': '单元', 'Fehlerheft': '错题本', 'Mehr anzeigen': '显示更多',
    'Rot: noch in der Wiederholung. Grün: inzwischen richtig beantwortet.': '红色：仍在复习中。绿色：之后已答对。',
    'Info: Rot heißt noch offen, Grün heißt gelernt': '说明：红色表示未掌握，绿色表示已掌握',
    // stats
    'Rekord': '最长连续', 'XP': '经验', 'Lektionen': '课时', 'Genauigkeit': '正确率', 'Lernzeit': '学习时长',
    'Diese Woche': '本周', '15 Wochen': '近 15 周', '{n} min': '{n} 分钟',
    // settings
    'Töne': '音效', 'Vorlesen': '朗读', 'Nach jeder Antwort vorlesen': '答题后自动朗读', 'Vibration': '振动', 'Wiederholungs-Hinweis': '复习红点',
    'Design': '外观', 'Auto': '自动', 'Hell': '浅色', 'Dunkel': '深色', 'Sprache': '界面语言',
    'Daten': '数据', 'Exportieren': '导出', 'Importieren': '导入',
    'Fortschritt wird nur in diesem Browser gespeichert. Mit Export/Import auf ein anderes Gerät übertragen.': '进度只保存在当前浏览器中。可通过导出 / 导入转移到其他设备。',
    'Info: Fortschritt wird nur in diesem Browser gespeichert': '说明：进度只保存在当前浏览器中',
    'Zurücksetzen löscht XP, Serie und den gesamten Lernfortschritt unwiderruflich.': '重置会永久删除经验、连续天数和全部学习进度，无法恢复。',
    'Fortschritt zurücksetzen': '重置进度',
    'Importieren?': '导入进度？', 'Der aktuelle Fortschritt wird durch die Datei ersetzt.': '当前进度将被文件中的数据覆盖。',
    'Ersetzen': '覆盖', 'Abbrechen': '取消', 'Importiert': '已导入', 'Ungültige Datei': '文件无效',
    'Alles zurücksetzen?': '重置全部进度？', 'XP, Serie und Lernfortschritt werden unwiderruflich gelöscht.': '经验、连续天数和学习进度将被永久删除，无法恢复。',
    'Löschen': '删除', 'Zurückgesetzt': '已重置',
    // lesson
    'Lektion beenden': '退出本课', 'Überspringen': '跳过', 'Prüfen': '检查',
    'Richtig!': '正确！', 'Super!': '太棒了！', 'Genau!': '没错！', 'Sehr gut!': '很好！', 'Klasse!': '厉害！', 'Perfekt!': '完美！',
    'Richtige Lösung:': '正确答案：', 'Fast!': '差一点！', 'Schreibweise: {a}': '注意拼写：{a}',
    'Wähle die richtige Antwort.': '选择正确答案', 'Ergänze die Lücke.': '填空', 'Bilde den Satz.': '组句', 'Finde die Paare.': '配对',
    'Antworten': '选项', 'Antwort': '答案', 'Sonderzeichen': '特殊字符', 'Dein Satz': '你的句子',
    '{lv} · Test': '{lv} · 测试',
    'Einheit gemeistert!': '单元已掌握！', 'Fehlerfrei!': '全部答对！', 'Lektion geschafft!': '本课完成！',
    '{lv} bestanden!': '{lv} 测试通过！', 'Noch nicht bestanden': '未通过',
    'Genau': '正确率', 'Zeit': '用时', '{n} Tag': '连续 {n} 天', '{n} Tage': '连续 {n} 天',
    'Tagesziel erreicht': '达成每日目标', 'Fehler': '错题',
    'Lektion beenden?': '退出本课？', 'Der Fortschritt dieser Lektion geht verloren.': '本课进度不会保存。',
    'Beenden': '退出', 'Weiterlernen': '继续学习',
    // custom exercise prompts
    'Infinitiv ↔ Präteritum': '不定式 ↔ 过去时', 'Konnektor ↔ 含义': '连词 ↔ 含义',
    'Nominativ: Was passt zusammen?': '第一格：哪些能搭配？', 'Wähle die höflichste Form.': '选择最礼貌的说法',
    'Indikativ ↔ Konjunktiv II': '直陈式 ↔ 第二虚拟式', 'Welcher Passivsatz (Präsens) passt?': '哪个被动句（现在时）正确？',
    'Zeitform ↔ Passiv': '时态 ↔ 被动形式', 'Verb ↔ Präposition': '动词 ↔ 介词',
    'Pronomen ↔ Reflexivpronomen (Akk)': '人称代词 ↔ 反身代词（第四格）', 'Präposition ↔ 含义': '介词 ↔ 含义',
    'Was bedeutet dasselbe?': '哪两句意思相同？', '„Ich bin müde.“ → indirekte Rede': '„Ich bin müde.“ → 间接引语',
    'Indikativ ↔ Konjunktiv I (er/sie)': '直陈式 ↔ 第一虚拟式（er/sie）', 'Teil 1 ↔ Teil 2': '前半部分 ↔ 后半部分',
    'Welches Partizipialattribut passt?': '哪个分词定语正确？', 'Partizip ↔ Relativsatz': '分词 ↔ 关系从句',
    'Verb ↔ Nomen': '动词 ↔ 名词', 'Vermutung: ca. 50 %': '推测：约 50% 把握', 'Modalverb ↔ Bedeutung': '情态动词 ↔ 含义',
    'Welches Nomen gehört nicht dazu?': '哪个名词不属于这一类？', 'Nominativ ↔ Akkusativ': '第一格 ↔ 第四格',
    'Nomen-Verb-Verbindung ↔ Verb': '名词动词搭配 ↔ 动词', 'Bezugswort ↔ Relativwort': '先行词 ↔ 关系词',
    'TeKaMoLo': 'TeKaMoLo（时间–原因–方式–地点）', 'Positiv ↔ Komparativ': '原级 ↔ 比较级',
    'Satz ↔ Funktion': '句子 ↔ 功能', 'Satz ↔ Bedeutung': '句子 ↔ 含义',
    'Wohin? (Akk) ↔ Wo? (Dat)': '去哪里？（第四格）↔ 在哪里？（第三格）', 'Form ↔ Infinitiv': '形式 ↔ 不定式',
    'Adjektiv ↔ Präposition': '形容词 ↔ 介词', 'Partikel ↔ Funktion': '语气词 ↔ 功能', 'Bedeutung ↔ Form': '含义 ↔ 形式',
    'Satzanfang ↔ Ende': '句首 ↔ 句尾', 'Konnektor ↔ Zeitverhältnis': '连词 ↔ 时间关系', 'Präposition + Relativpronomen': '介词 + 关系代词',
    'Artikel ↔ Endung (Nominativ)': '冠词 ↔ 词尾（第一格）', 'Funktion ↔ Satz': '功能 ↔ 句子', 'Aktiv ↔ Passiv': '主动 ↔ 被动',
    'Nominativ ↔ Genitiv': '第一格 ↔ 第二格', 'Wo steht das Verb?': '动词在哪个位置？', 'Adjektiv ↔ Superlativ': '形容词 ↔ 最高级',
    'Satz ↔ Artikel': '句子 ↔ 冠词', 'Konnektor ↔ Präposition': '连词 ↔ 介词', 'Partizipialattribut ↔ Relativsatz': '分词定语 ↔ 关系从句',
    'Konnektor ↔ Funktion': '连词 ↔ 功能', 'Verb ↔ Bedeutung': '动词 ↔ 含义', 'Ersatzform ↔ Bedeutung': '替代形式 ↔ 含义',
    'Präposition ↔ Bedeutung': '介词 ↔ 含义', 'Redemittel ↔ Funktion': '表达 ↔ 功能', 'Funktion ↔ Ausdruck': '功能 ↔ 表达',
    'Schluss eines Aufsatzes': '议论文结尾', 'Gegenargument einleiten': '引出反方观点',
    // chapters & vocabulary
    'Grundlagen festigen': '巩固基础', 'Sätze erweitern': '扩展句子', 'Argumentieren & vermuten': '论证与推测',
    'Schriftsprache': '书面语', 'Wissenschaftssprache': '学术语言', 'TestDaF-Schreiben': 'TestDaF 写作',
    'Ziel: TestDaF TDN 4': '目标：TestDaF 4 分', 'Wortschatz': '词汇', 'Wörter': '词汇', 'Tests bestanden': '通过的测试',
    'Neue Wörter üben': '练习未学词汇', '{n} Übungen mit neuen Wörtern': '{n} 道题含未学词汇', 'Suchen': '搜索',
    'Niveau wählen': '选择难度', 'Teilweise richtig': '部分正确', 'Schreibweise: {a}': '注意拼写：{a}', 'Teilweise richtig.': '部分正确。',
    'Fast richtig: Artikel oder Endung prüfen.': '差一点：检查冠词或词尾。',
    'Alle Wörter stimmen, nur die Wortstellung nicht.': '单词都对，只是语序不同。德语语序有时比较灵活，如果你确定也通顺，可以点右上角的“我的答案也对”。', 'Indirekte Rede (Schriftsprache): Was passt?': '间接引语（书面语）：哪个正确？',
    'Indirekte Rede, Konjunktiv I': '间接引语（第一虚拟式）', 'Übersetze ins Deutsche.': '翻译成德语', 'Ich hatte recht': '我的答案也对',
    'Deine Übersetzung': '你的译文', 'Lernkalender': '学习日历', '{n} Lerntage im letzten Jahr': '过去一年学习 {n} 天',
    'Weniger': '少', 'Mehr': '多', 'Nur neue': '只看未学',
    'Alle': '全部', 'Neu': '未学', 'Gelernt': '已学', 'Keine Treffer': '无结果'
  };

  // short Chinese unit names shown under the German title
  var UNIT_ZH = {
    'b1-praeteritum': '过去时', 'b1-nebensatz': '从句', 'b1-satzstellung': '语序', 'b1-temporal': '时间从句',
    'b1-relativ': '关系从句', 'b1-adjektiv': '形容词变格', 'b1-komparativ': '比较级与最高级', 'b1-konjunktiv2': '第二虚拟式',
    'b1-passiv': '被动态', 'b1-futur': '将来时与 werden', 'b1-zu': 'zu 不定式', 'b1-lassen': 'lassen 的用法',
    'b1-praepverben': '介词动词', 'b1-wechselpraep': '双向介词', 'b1-reflexiv': '反身动词', 'b1-genitiv': '第二格',
    'b2-passiv': '被动替代形式', 'b2-infinitiv': '完成式与被动不定式', 'b2-k2-vergangenheit': '过去虚拟式', 'b2-k1': '第一虚拟式',
    'b2-konnektoren': '双部连词', 'b2-partizip': '分词定语', 'b2-nominal': '名词化', 'b2-vermutung': '推测表达',
    'b2-ndeklination': '弱变化名词', 'b2-satzverbindungen': '句子连接', 'b2-praep-genitiv': '二格介词', 'b2-nvv': '名词动词搭配',
    'b2-adjpraep': '形容词介词搭配', 'b2-relativ': '扩展关系从句', 'b2-es': 'es 的用法', 'b2-partikeln': '语气词', 'b2-praefix': '前缀动词',
    'c1-nominalstil': '名词化与动词化', 'c1-partizip': '扩展分词定语', 'c1-konnektoren': '论证连接词', 'c1-redewiedergabe': '转述他人观点',
    'c1-modalitaet': '情态替代形式', 'c1-grafik': '图表描述', 'c1-praepositionen': '书面语介词', 'c1-verbenpraep': '学术动词搭配',
    'c1-hypothese': '假设与表态', 'c1-textverweise': '篇章衔接'
  };

  var WEEKDAYS = { de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'], zh: ['日', '一', '二', '三', '四', '五', '六'] };

  function lang() { return (G.store && G.store.state.settings.lang) === 'zh' ? 'zh' : 'de'; }

  var GENRE = { 'Zeitungsmeldung': '新闻短讯', 'E-Mail': '邮件', 'Forum': '论坛帖子', 'Ratgeber': '生活指南', 'Uni-Info': '大学通知',
    'Studie': '研究报告', 'Wohnungsanzeige': '租房广告', 'Stellenanzeige': '招聘广告', 'Grafikbeschreibung': '图表描述', 'Stellungnahme': '议论文' };
  var PREFIX = { 'Auflösen: ': '改写为关系从句：', 'Nominalstil: ': '改为名词化表达：', 'Verbalstil: ': '改为动词句：' };
  function t(key, vars) {
    var s = (lang() === 'zh' && ZH[key]) || key;
    var g = lang() === 'zh' && s === key && /^(.+): (Was passt\?|Ergänze\.)$/.exec(key);
    if (g && GENRE[g[1]]) s = GENRE[g[1]] + '：' + (g[2] === 'Ergänze.' ? '填空' : '哪个正确？');
    if (lang() === 'zh' && s === key) {
      for (var p in PREFIX) if (key.indexOf(p) === 0) { s = PREFIX[p] + key.slice(p.length); break; }
    }
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }

  // translate static markup marked with data-i18n / data-i18n-label
  function applyStatic() {
    document.documentElement.lang = lang() === 'zh' ? 'zh-CN' : 'de';
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-label'))); });
  }

  G.i18n = {
    lang: lang,
    t: t,
    unitZh: function (id) { return UNIT_ZH[id] || ''; },
    weekdays: function () { return WEEKDAYS[lang()]; },
    applyStatic: applyStatic
  };
  G.t = t;
})();
