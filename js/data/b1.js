/* B1 units. Exercise helpers:
   C(q, options[correct first], explanation, extra)  multiple choice; "a / b" fills two gaps
   I(q, answer|[answers], hint, explanation)         type the gap
   O(chinese, sentence, explanation, extra)          build the sentence from tiles
   M(pairs, prompt, explanation)                     match pairs */
(function () {
  'use strict';
  var U = window.GRAMMATIK_UNITS = window.GRAMMATIK_UNITS || [];
  function C(q, o, e, x) { return Object.assign({ t: 'c', q: q, o: o, e: e }, x || {}); }
  function I(q, a, h, e, x) { return Object.assign({ t: 'i', q: q, a: a, h: h, e: e }, x || {}); }
  function O(zh, a, e, x) { return Object.assign({ t: 'o', zh: zh, a: a, e: e }, x || {}); }
  function M(pairs, p, e) { return { t: 'm', pairs: pairs, p: p, e: e }; }
  function ex(de, zh) { return '<div class="ex"><p lang="de">' + de + '</p>' + (zh ? '<p class="zh">' + zh + '</p>' : '') + '</div>'; }

  /* ---------------- 1 Präteritum & Perfekt ---------------- */
  U.push({
    id: 'b1-praeteritum', level: 'B1', n: 1, icon: 'clock',
    title: 'Präteritum & Perfekt', zh: '过去时：书面与口语',
    tip:
      '<h4>什么时候用哪个？</h4>' +
      '<ul><li><b>Perfekt</b>：口语、对话、私人信件。</li>' +
      '<li><b>Präteritum</b>：书面叙述（小说、新闻、报告）。</li>' +
      '<li>例外：<b>sein, haben</b>、情态动词和 <b>es gibt</b> 在口语里也常用 Präteritum：<i>ich war, ich hatte, ich konnte, es gab</i>。</li></ul>' +
      '<h4>规则动词：词干 + -te + 词尾</h4>' +
      '<div class="tbl"><table><tr><th></th><th>machen</th><th>arbeiten</th><th>gehen</th></tr>' +
      '<tr><td>ich</td><td>machte</td><td>arbeitete</td><td>ging</td></tr>' +
      '<tr><td>du</td><td>machtest</td><td>arbeitetest</td><td>gingst</td></tr>' +
      '<tr><td>er/sie/es</td><td>machte</td><td>arbeitete</td><td>ging</td></tr>' +
      '<tr><td>wir</td><td>machten</td><td>arbeiteten</td><td>gingen</td></tr>' +
      '<tr><td>ihr</td><td>machtet</td><td>arbeitetet</td><td>gingt</td></tr>' +
      '<tr><td>sie/Sie</td><td>machten</td><td>arbeiteten</td><td>gingen</td></tr></table></div>' +
      '<p>词干以 -t/-d 结尾时加 -e-：<i>wart<b class="k">e</b>te, red<b class="k">e</b>te</i>。</p>' +
      '<h4>不规则 & 混合动词</h4>' +
      '<p>不规则动词换元音，ich/er 没有词尾：<i>kommen → kam, sehen → sah, finden → fand, bleiben → blieb</i>。</p>' +
      '<p>混合动词换元音 <b>且</b> 加 -te：<i>denken → dachte, bringen → brachte, wissen → wusste, kennen → kannte</i>。</p>' +
      '<h4>Perfekt：haben / sein + Partizip II</h4>' +
      '<p><b>sein</b> 用于：位置移动（gehen, fahren, fliegen）、状态变化（aufwachen, sterben, werden）以及 sein, bleiben, passieren。</p>' +
      ex('Wir <b>sind</b> nach Wien <b>gefahren</b>. Was <b>ist</b> passiert?', '我们去了维也纳。发生了什么？'),
    ex: [
      C('Als Kind ___ ich oft bei meiner Oma.', ['war', 'bin', 'wäre', 'sei'], 'sein 的 Präteritum：ich <b>war</b>。叙述过去状态时口语也用 war。', { zh: '小时候我经常在奶奶家。' }),
      I('Gestern ___ wir lange auf den Bus.', 'warteten', 'warten, Präteritum', '词干 wart- 以 -t 结尾 → 加 -e-：wart-e-te-n。'),
      C('Leider ___ ich seine Adresse nicht.', ['wusste', 'wisste', 'weißte', 'wusst'], 'wissen 是混合动词：换元音 + -te → wusste。'),
      I('Plötzlich ___ das Telefon.', 'klingelte', 'klingeln, Präteritum', '规则动词：klingel- + -te。'),
      C('Gestern Abend ___ der Film erst um 21 Uhr an.', ['fing', 'fängt', 'fangte', 'fingte'], 'anfangen → fing … an（不规则）。gestern 要求过去时。'),
      I('Letzte Woche ___ ich einen Brief von meinem alten Lehrer.', 'bekam', 'bekommen, Präteritum', 'bekommen → bekam（不规则，ich 无词尾）。'),
      C('Wir ___ am Wochenende nach Hamburg gefahren.', ['sind', 'haben', 'hat', 'ist'], 'fahren 表示位置移动 → Perfekt 用 sein；主语 wir → sind。'),
      C('Was ___ denn passiert?', ['ist', 'hat', 'wird', 'sind'], 'passieren 的 Perfekt 用 sein。'),
      I('Ich habe den ganzen Tag ___.', 'geschlafen', 'schlafen', 'schlafen → geschlafen（不规则，-en 结尾）。'),
      I('Hast du das Fenster ___?', 'aufgemacht', 'aufmachen', '可分动词：auf + ge + macht。'),
      C('Sie hat das Problem sofort ___.', ['verstanden', 'verstehen', 'geverstanden', 'verstand'], '以 ver-, be-, er-, ent-, zer- 等不可分前缀开头的动词，Partizip II 不加 ge-。'),
      O('我们昨天没能来。', 'Wir konnten gestern nicht kommen.', '情态动词口语中也常用 Präteritum：konnten。', { alt: ['Gestern konnten wir nicht kommen.'] }),
      O('那时我还不认识他。', 'Damals kannte ich ihn noch nicht.', 'kennen → kannte（混合动词）。', { alt: ['Ich kannte ihn damals noch nicht.'] }),
      M([['gehen', 'ging'], ['bringen', 'brachte'], ['sitzen', 'saß'], ['denken', 'dachte'], ['treffen', 'traf']], 'Infinitiv ↔ Präteritum', '常见不规则 / 混合动词。'),
      C('Früher ___ es hier viele kleine Geschäfte.', ['gab', 'gibt', 'gegeben', 'gebt'], 'es gibt → es gab。früher 表示过去。')
    ]
  });

  /* ---------------- 2 Nebensätze ---------------- */
  U.push({
    id: 'b1-nebensatz', level: 'B1', n: 2, icon: 'branch',
    title: 'Nebensätze', zh: '从句：weil, dass, ob, wenn, obwohl',
    tip:
      '<h4>核心规则：变位动词放句末</h4>' +
      ex('Ich bleibe zu Hause, weil ich krank <b class="k">bin</b>.', '我待在家里，因为我病了。') +
      '<ul><li>可分动词在从句中合写：<i>…, dass er morgen <b>anruft</b>.</i></li>' +
      '<li>情态动词 / 助动词放最后：<i>…, dass er kommen <b>kann</b>. …, dass sie gegangen <b>ist</b>.</i></li></ul>' +
      '<h4>从句在前 → 主句动词紧跟逗号</h4>' +
      ex('Wenn du Zeit hast, <b class="k">können</b> wir kochen.', '如果你有时间，我们可以做饭。') +
      '<h4>连词含义</h4>' +
      '<div class="tbl"><table><tr><th>连词</th><th>含义</th></tr>' +
      '<tr><td>weil / da</td><td>因为</td></tr><tr><td>dass</td><td>引出内容（说/想/知道…）</td></tr>' +
      '<tr><td>ob</td><td>是否（间接一般疑问）</td></tr><tr><td>wenn</td><td>如果；每当</td></tr>' +
      '<tr><td>obwohl</td><td>尽管</td></tr><tr><td>wann, wo, wie, warum…</td><td>间接特殊疑问</td></tr></table></div>' +
      '<div class="note"><b>denn</b> 也表示“因为”，但它不是从句连词：<i>…, denn ich <b>bin</b> krank.</i>（主句语序）</div>',
    ex: [
      C('Ich bleibe heute zu Hause, ___ ich krank bin.', ['weil', 'denn', 'obwohl', 'ob'], '动词 bin 在句末 → 从句连词。表示原因 → weil。denn 后要用主句语序。'),
      C('Ich weiß nicht, ___ er heute noch kommt.', ['ob', 'dass', 'wenn', 'weil'], '不确定“是否” → ob。'),
      C('___ es regnet, gehen wir spazieren.', ['Obwohl', 'Weil', 'Ob', 'Dass'], '下雨却去散步 → 让步：obwohl。'),
      O('我希望你很快就会好起来。', 'Ich hoffe, dass du bald wieder gesund bist.', 'dass 从句：bist 在句末。'),
      O('他说他明天给我打电话。', 'Er sagt, dass er mich morgen anruft.', '可分动词在从句中合写：anruft。'),
      C('Kannst du mir sagen, wann der Zug ___?', ['abfährt', 'fährt ab', 'abfahren', 'ab fährt'], '间接疑问句也是从句：可分动词合写并放句末。'),
      I('Sie lernt Deutsch, weil sie in Wien studieren ___.', 'will', 'wollen', '情态动词在从句中放最后：studieren will。'),
      C('Ich bin früh ins Bett gegangen, ___ ich war sehr müde.', ['denn', 'weil', 'obwohl', 'dass'], '后面是主句语序（ich war）→ denn。'),
      C('Er ist zur Arbeit gegangen, obwohl er Fieber ___.', ['hatte', 'haben', 'hattest', 'gehabt'], 'er → hatte，放从句末尾。'),
      O('如果你有时间，我们可以一起做饭。', 'Wenn du Zeit hast, können wir zusammen kochen.', '从句在前，主句动词 können 紧跟逗号。', { alt: ['Wir können zusammen kochen, wenn du Zeit hast.'] }),
      C('Weißt du, ___ das Konzert anfängt? – Um acht.', ['wann', 'ob', 'dass', 'wenn'], '回答是时间 → 问的是 wann。'),
      I('Ich glaube, dass sie schon nach Hause ___ ist.', 'gegangen', 'gehen', 'Perfekt 在从句中：Partizip II + ist。'),
      C('Ich weiß, dass du das ___.', ['nicht machen musstest', 'musstest nicht machen', 'nicht musstest machen', 'machen nicht musstest'], '从句末尾顺序：不定式 + 变位情态动词。'),
      O('我不知道商店是否还开着。', 'Ich weiß nicht, ob der Laden noch geöffnet ist.', 'ob 从句，ist 放句末。'),
      C('___ du Hilfe brauchst, ruf mich an!', ['Wenn', 'Ob', 'Dass', 'Obwohl'], '条件“如果” → wenn。'),
      M([['weil', '因为'], ['obwohl', '尽管'], ['ob', '是否'], ['wenn', '如果'], ['dass', '引出内容']], 'Konnektor ↔ 含义', '')
    ]
  });

  /* ---------------- 3 Temporale Nebensätze ---------------- */
  U.push({
    id: 'b1-temporal', level: 'B1', n: 3, icon: 'layers',
    title: 'Temporalsätze', zh: '时间从句与过去完成时',
    tip:
      '<h4>als 还是 wenn？</h4>' +
      '<div class="tbl"><table><tr><th></th><th>一次</th><th>多次</th></tr>' +
      '<tr><td>过去</td><td><b>als</b></td><td><b>(immer) wenn</b></td></tr>' +
      '<tr><td>现在 / 将来</td><td><b>wenn</b></td><td><b>wenn</b></td></tr></table></div>' +
      ex('Als ich ein Kind war, wohnten wir in Köln.', '我小时候我们住在科隆。') +
      ex('Immer wenn ich in Berlin war, besuchte ich Tante Eva.', '每次我在柏林都去看伊娃阿姨。') +
      '<h4>其他时间连词</h4>' +
      '<ul><li><b>während</b> 在……期间（同时）</li><li><b>bevor</b> 在……之前</li><li><b>nachdem</b> 在……之后</li>' +
      '<li><b>seit(dem)</b> 自从</li><li><b>bis</b> 直到</li></ul>' +
      '<h4>nachdem 的时态错位</h4>' +
      '<p>nachdem 从句比主句“早一个时态”：</p>' +
      '<ul><li>从句 <b>Plusquamperfekt</b> → 主句 Präteritum / Perfekt</li><li>从句 <b>Perfekt</b> → 主句 Präsens / Futur</li></ul>' +
      ex('Nachdem er gegessen <b>hatte</b>, <b>ging</b> er spazieren.', '他吃完饭后去散步了。') +
      '<p><b>Plusquamperfekt</b> = hatte / war + Partizip II。</p>',
    ex: [
      C('___ ich ein Kind war, wohnten wir in Hamburg.', ['Als', 'Wenn', 'Wann', 'Ob'], '过去、一次性的时期 → als。'),
      C('Immer ___ ich in Berlin war, besuchte ich meine Tante.', ['wenn', 'als', 'wann', 'ob'], '过去多次重复 → (immer) wenn。'),
      C('___ du morgen kommst, bring bitte Brot mit.', ['Wenn', 'Als', 'Wann', 'Ob'], '将来 → wenn。wann 只用于疑问。'),
      I('Nachdem er gegessen ___, ging er spazieren.', 'hatte', 'haben', '主句 Präteritum → nachdem 从句用 Plusquamperfekt：hatte gegessen。'),
      I('Nachdem sie angekommen ___, rief sie ihre Mutter an.', 'war', 'sein', 'ankommen 用 sein → war angekommen。'),
      C('Er telefoniert, ___ er Auto fährt. Das ist gefährlich!', ['während', 'nachdem', 'bevor', 'seit'], '两件事同时发生 → während。'),
      C('Wasch dir die Hände, ___ du isst!', ['bevor', 'nachdem', 'während', 'seit'], '吃饭之前 → bevor。'),
      C('___ er in Deutschland lebt, spricht er viel besser Deutsch.', ['Seit', 'Bis', 'Als', 'Bevor'], '从过去持续到现在 → seit(dem)。'),
      C('Warte hier, ___ ich zurückkomme.', ['bis', 'seit', 'während', 'als'], '直到 → bis。'),
      I('Als wir am Bahnhof ankamen, war der Zug schon ___.', 'abgefahren', 'abfahren', '比 ankamen 更早 → Plusquamperfekt：war abgefahren。'),
      O('吃完饭后，我们去散步了。', 'Nachdem wir gegessen hatten, gingen wir spazieren.', 'Plusquamperfekt + Präteritum。'),
      O('我小时候经常踢足球。', 'Als ich klein war, spielte ich oft Fußball.', '过去一个时期 → als。', { alt: ['Ich spielte oft Fußball, als ich klein war.'] }),
      C('Nachdem ich die Prüfung bestanden habe, ___ ich eine Party.', ['mache', 'machte', 'hatte gemacht', 'habe gemacht'], 'nachdem + Perfekt → 主句用 Präsens（将来意义）。'),
      C('Es regnete, ___ wir im Urlaub waren.', ['als', 'wenn', 'wann', 'ob'], '过去一次性的时间段 → als。'),
      M([['als', '当…时（过去一次）'], ['während', '在…期间'], ['bevor', '在…之前'], ['nachdem', '在…之后'], ['seit', '自从']], 'Konnektor ↔ 含义', '')
    ]
  });

  /* ---------------- 4 Relativsätze ---------------- */
  U.push({
    id: 'b1-relativ', level: 'B1', n: 4, icon: 'link',
    title: 'Relativsätze', zh: '关系从句',
    tip:
      '<h4>关系代词</h4>' +
      '<div class="tbl"><table><tr><th></th><th>m</th><th>f</th><th>n</th><th>Pl</th></tr>' +
      '<tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>' +
      '<tr><td>Akk</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr>' +
      '<tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td><b class="k">denen</b></td></tr>' +
      '<tr><td>Gen</td><td><b class="k">dessen</b></td><td><b class="k">deren</b></td><td><b class="k">dessen</b></td><td><b class="k">deren</b></td></tr></table></div>' +
      '<h4>两步法</h4>' +
      '<ol><li><b>性和数</b> 看先行词。</li><li><b>格</b> 看关系代词在从句里的作用。</li></ol>' +
      ex('Das ist der Mann, <b>den</b> ich gestern gesehen habe.', 'Mann → 阳性；ich sehe <u>ihn</u> → Akk → den') +
      ex('Die Kinder, <b>denen</b> wir geholfen haben, …', 'helfen + Dativ，复数 → denen') +
      '<h4>介词 + 关系代词</h4>' +
      ex('Die Stadt, <b>in der</b> ich wohne, ist schön.', '我住的城市很美。') +
      '<h4>Genitiv：dessen / deren + 名词</h4>' +
      ex('Mein Nachbar, <b>dessen</b> Hund immer bellt, …', '我那个狗总是叫的邻居……') +
      '<div class="note">alles, etwas, nichts, das 之后用 <b>was</b>：<i>Alles, was er sagt, …</i></div>',
    ex: [
      C('Das ist der Mann, ___ mir geholfen hat.', ['der', 'den', 'dem', 'dessen'], '从句中作主语 → Nom 阳性 der。'),
      C('Das ist der Mann, ___ ich gestern gesehen habe.', ['den', 'der', 'dem', 'denen'], 'ich sehe ihn → Akk 阳性 den。'),
      C('Das ist die Frau, ___ ich das Buch gegeben habe.', ['der', 'die', 'denen', 'deren'], 'geben + Dat（给谁）→ 阴性 Dat der。'),
      C('Die Kinder, ___ wir geholfen haben, waren sehr dankbar.', ['denen', 'den', 'die', 'deren'], 'helfen + Dat，复数 → denen。'),
      I('Das Auto, ___ ich gekauft habe, ist rot.', 'das', null, '中性 Akk → das。'),
      I('Die Stadt, in ___ ich wohne, ist sehr schön.', 'der', null, 'in + Dat（位置），阴性 → in der。'),
      C('Der Kollege, mit ___ ich arbeite, kommt aus Spanien.', ['dem', 'den', 'der', 'denen'], 'mit + Dat，阳性 → dem。'),
      C('Das ist meine Freundin, ___ Bruder in Köln wohnt.', ['deren', 'dessen', 'der', 'die'], '所属关系 → Genitiv；先行词阴性 → deren。'),
      C('Mein Nachbar, ___ Hund immer bellt, ist sehr nett.', ['dessen', 'deren', 'der', 'den'], '先行词阳性 → dessen。'),
      C('Alles, ___ er sagt, ist falsch.', ['was', 'das', 'der', 'wo'], 'alles 之后用 was。'),
      I('Die Freunde, mit ___ ich in Urlaub fahre, kommen aus Bonn.', 'denen', null, 'mit + Dat，复数 → denen。'),
      O('这是我送给妈妈的那本书。', 'Das ist das Buch, das ich meiner Mutter geschenkt habe.', '中性 Akk → das；助动词 habe 放最后。'),
      O('我住的那座房子很老。', 'Das Haus, in dem ich wohne, ist sehr alt.', 'in + Dat 中性 → in dem。'),
      C('Das ist das Café, ___ wir uns kennengelernt haben.', ['in dem', 'in das', 'das', 'dem'], '在哪里（位置）→ in + Dat：in dem（也可用 wo）。'),
      I('Kennst du die Leute, ___ dort drüben stehen?', 'die', null, '复数 Nom → die。')
    ]
  });

  /* ---------------- 5 Adjektivdeklination ---------------- */
  U.push({
    id: 'b1-adjektiv', level: 'B1', n: 5, icon: 'star',
    title: 'Adjektivdeklination', zh: '形容词词尾变化',
    tip:
      '<h4>① 定冠词之后（der, dieser, jeder, alle…）</h4>' +
      '<div class="tbl"><table><tr><th></th><th>m</th><th>f</th><th>n</th><th>Pl</th></tr>' +
      '<tr><td>Nom</td><td>der alt<b>e</b></td><td>die alt<b>e</b></td><td>das alt<b>e</b></td><td>die alt<b>en</b></td></tr>' +
      '<tr><td>Akk</td><td>den alt<b>en</b></td><td>die alt<b>e</b></td><td>das alt<b>e</b></td><td>die alt<b>en</b></td></tr>' +
      '<tr><td>Dat</td><td colspan="4">全部 -en</td></tr><tr><td>Gen</td><td colspan="4">全部 -en</td></tr></table></div>' +
      '<p>口诀：只有 5 个位置是 <b>-e</b>，其余都是 <b>-en</b>。</p>' +
      '<h4>② 不定冠词之后（ein, kein, mein…）</h4>' +
      '<div class="tbl"><table><tr><th></th><th>m</th><th>f</th><th>n</th><th>Pl</th></tr>' +
      '<tr><td>Nom</td><td>ein alt<b class="k">er</b></td><td>eine alt<b>e</b></td><td>ein alt<b class="k">es</b></td><td>meine alt<b>en</b></td></tr>' +
      '<tr><td>Akk</td><td>einen alt<b>en</b></td><td>eine alt<b>e</b></td><td>ein alt<b class="k">es</b></td><td>meine alt<b>en</b></td></tr>' +
      '<tr><td>Dat</td><td colspan="4">全部 -en</td></tr></table></div>' +
      '<p>冠词“没显示性别”时（ein），形容词替它显示：-er / -es。</p>' +
      '<h4>③ 无冠词</h4>' +
      '<p>形容词带上定冠词的词尾：<i>gut<b>er</b> Wein, kalt<b>e</b> Milch, frisch<b>es</b> Brot, bei schön<b>em</b> Wetter</i>。</p>' +
      ex('Mit freundlich<b>en</b> Grüßen', '此致敬礼（Dat Pl）'),
    ex: [
      C('Der ___ Mann wohnt neben mir.', ['alte', 'alten', 'alter', 'altes'], '定冠词 + Nom 阳性 → -e。'),
      C('Ich sehe den ___ Mann.', ['alten', 'alte', 'alter', 'altem'], 'Akk 阳性 den → -en。'),
      C('Das ist ein ___ Auto.', ['neues', 'neue', 'neuer', 'neuen'], 'ein + 中性 Nom → 形容词显示性别 -es。'),
      C('Ich habe einen ___ Hund.', ['kleinen', 'kleiner', 'kleine', 'kleines'], 'einen（Akk 阳性）→ -en。'),
      I('Sie trägt eine ___ Jacke.', 'rote', 'rot', 'eine + 阴性 Akk → -e。'),
      I('Wir wohnen in einem ___ Haus.', 'großen', 'groß', 'Dativ → 永远 -en。'),
      I('Ich trinke gern ___ Kaffee.', 'schwarzen', 'schwarz', '无冠词 Akk 阳性 → 带 den 的词尾 -en。'),
      C('Mit ___ Grüßen', ['freundlichen', 'freundliche', 'freundlicher', 'freundlichem'], '无冠词 Dat 复数 → -en（类比 den）。'),
      I('Er hilft der ___ Frau.', 'alten', 'alt', 'Dativ → -en。'),
      C('Das sind meine ___ Freunde.', ['besten', 'beste', 'bester', 'bestes'], 'meine + 复数 → -en。'),
      C('___ Brot schmeckt am besten.', ['Frisches', 'Frische', 'Frischer', 'Frischen'], '无冠词中性 Nom → -es（类比 das）。'),
      I('Bei ___ Wetter bleiben wir zu Hause.', 'schlechtem', 'schlecht', '无冠词 Dat 中性 → -em（类比 dem）。'),
      O('我在找一套便宜的公寓。', 'Ich suche eine billige Wohnung.', 'eine + 阴性 Akk → -e。'),
      I('Das ist das Haus meiner ___ Eltern.', 'reichen', 'reich', 'Genitiv → -en。'),
      M([['ein schöner', 'Tag'], ['eine schöne', 'Reise'], ['ein schönes', 'Wochenende'], ['schöne', 'Ferien']], 'Nominativ: Was passt zusammen?', 'Tag 阳性 -er；Reise 阴性 -e；Wochenende 中性 -es；Ferien 复数无冠词 -e。')
    ]
  });

  /* ---------------- 6 Konjunktiv II ---------------- */
  U.push({
    id: 'b1-konjunktiv2', level: 'B1', n: 6, icon: 'cloud',
    title: 'Konjunktiv II', zh: '虚拟式：愿望、假设、礼貌',
    tip:
      '<h4>构成</h4>' +
      '<p>大多数动词：<b>würde + 不定式</b>。常用动词用自身形式：</p>' +
      '<div class="tbl"><table><tr><th>原形</th><th>K II</th><th>原形</th><th>K II</th></tr>' +
      '<tr><td>sein</td><td>wäre</td><td>haben</td><td>hätte</td></tr>' +
      '<tr><td>können</td><td>könnte</td><td>müssen</td><td>müsste</td></tr>' +
      '<tr><td>dürfen</td><td>dürfte</td><td>sollen</td><td>sollte</td></tr>' +
      '<tr><td>wissen</td><td>wüsste</td><td>kommen</td><td>käme</td></tr>' +
      '<tr><td>geben</td><td>gäbe</td><td>gehen</td><td>ginge</td></tr></table></div>' +
      '<h4>用法</h4>' +
      '<ul><li><b>非现实条件</b>：' + '<i>Wenn ich Zeit hätte, würde ich dir helfen.</i></li>' +
      '<li><b>愿望</b>：<i>Wenn ich doch mehr Geld hätte! / Ich wünschte, ich könnte fliegen.</i></li>' +
      '<li><b>礼貌请求</b>：<i>Könnten Sie mir helfen? Ich hätte gern einen Tee.</i></li>' +
      '<li><b>建议</b>：<i>Du solltest mehr schlafen. An deiner Stelle würde ich …</i></li></ul>' +
      ex('Wenn ich du wäre, würde ich das Angebot annehmen.', '如果我是你，我会接受这个提议。'),
    ex: [
      C('Wenn ich mehr Zeit ___, würde ich öfter lesen.', ['hätte', 'habe', 'hatte', 'würde'], '非现实条件 → K II：hätte。'),
      C('Wenn ich du ___, würde ich das nicht machen.', ['wäre', 'bin', 'war', 'würde'], 'sein → wäre。'),
      C('___ Sie mir bitte helfen?', ['Könnten', 'Können', 'Konnten', 'Kannten'], '最礼貌：K II könnten。', { p: 'Wähle die höflichste Form.' }),
      I('Ich ___ gern einen Kaffee.', 'hätte', 'haben, Konjunktiv II', '点餐常用：Ich hätte gern …'),
      I('Du ___ mehr Wasser trinken.', 'solltest', 'sollen, Konjunktiv II', '建议 → solltest。'),
      C('Wenn das Wetter schön wäre, ___ wir an den See fahren.', ['würden', 'werden', 'wären', 'wurden'], '主句 würde + 不定式；wir → würden。'),
      I('Wenn er Geld hätte, ___ er sich ein Auto kaufen.', 'würde', 'würde-Form', 'er → würde。'),
      C('Ich wünschte, ich ___ fliegen!', ['könnte', 'kann', 'konnte', 'können'], '愿望 → K II könnte。'),
      O('如果我有时间，我会帮你。', 'Wenn ich Zeit hätte, würde ich dir helfen.', '从句 hätte 在末尾，主句 würde 紧跟逗号。', { alt: ['Ich würde dir helfen, wenn ich Zeit hätte.'] }),
      O('你能把盐递给我吗？', 'Könntest du mir das Salz geben?', '礼貌请求用 Könntest du …?'),
      C('An deiner Stelle ___ ich zum Arzt gehen.', ['würde', 'wurde', 'werde', 'wäre'], '建议：An deiner Stelle würde ich …'),
      I('Wenn ich nur mehr Geduld ___!', 'hätte', 'haben', '愿望句：Wenn ich nur … hätte!'),
      C('Es wäre schön, wenn du morgen ___.', ['kommen würdest', 'kommst würde', 'würdest kommen', 'kamst'], '从句中 würde 放最后：kommen würdest。'),
      I('___ du mir kurz dein Handy leihen?', 'Könntest', 'können, höflich', '礼貌请求：Könntest du …?'),
      M([['ist', 'wäre'], ['hat', 'hätte'], ['kann', 'könnte'], ['muss', 'müsste'], ['weiß', 'wüsste']], 'Indikativ ↔ Konjunktiv II', '')
    ]
  });

  /* ---------------- 7 Passiv ---------------- */
  U.push({
    id: 'b1-passiv', level: 'B1', n: 7, icon: 'swap',
    title: 'Passiv', zh: '被动态',
    tip:
      '<h4>werden + Partizip II</h4>' +
      '<p>被动关注<b>动作本身</b>，不关心是谁做的。主动句的 Akk 宾语变成被动句主语。</p>' +
      '<div class="tbl"><table><tr><th>时态</th><th>例句</th></tr>' +
      '<tr><td>Präsens</td><td>Das Haus <b>wird</b> gebaut.</td></tr>' +
      '<tr><td>Präteritum</td><td>Das Haus <b>wurde</b> gebaut.</td></tr>' +
      '<tr><td>Perfekt</td><td>Das Haus <b>ist</b> gebaut <b class="k">worden</b>.</td></tr>' +
      '<tr><td>mit Modalverb</td><td>Das Haus <b>muss</b> gebaut <b>werden</b>.</td></tr></table></div>' +
      '<div class="note">Perfekt 被动用 <b>worden</b>（不是 geworden）。</div>' +
      '<h4>施动者</h4>' +
      '<ul><li><b>von + Dat</b>：人或机构 —— <i>von der Polizei</i></li>' +
      '<li><b>durch + Akk</b>：手段或原因 —— <i>durch ein Erdbeben</i></li></ul>' +
      ex('Hier darf nicht geraucht werden.', '这里禁止吸烟。'),
    ex: [
      C('Das Haus ___ gerade renoviert.', ['wird', 'ist', 'hat', 'werden'], '正在进行的动作 → Präsens Passiv：wird + Partizip II。'),
      C('Das Museum ___ 1890 gebaut.', ['wurde', 'wird', 'ist', 'war'], '过去 → Präteritum Passiv：wurde gebaut。'),
      I('In Österreich ___ Deutsch gesprochen.', 'wird', 'werden', 'Präsens Passiv，主语 Deutsch → wird。'),
      I('Der Brief wurde gestern ___.', 'geschickt', 'schicken', 'wurde + Partizip II。'),
      C('Die Fenster müssen ___.', ['geputzt werden', 'werden geputzt', 'geputzt wurden', 'putzen werden'], '情态动词 + Partizip II + werden。'),
      C('Der Dieb ist von der Polizei ___ worden.', ['verhaftet', 'verhaften', 'geworden', 'verhaftete'], 'Perfekt Passiv：ist + Partizip II + worden。'),
      I('Das Paket ist schon abgeholt ___.', 'worden', null, 'Perfekt Passiv 用 worden。'),
      C('Das Fahrrad wurde ___ meinem Bruder repariert.', ['von', 'durch', 'mit', 'bei'], '人作施动者 → von + Dat。'),
      C('Die Stadt wurde ___ ein Erdbeben zerstört.', ['durch', 'von', 'mit', 'aus'], '原因 / 事件 → durch + Akk。'),
      O('这本书被翻译成了很多种语言。', 'Das Buch wurde in viele Sprachen übersetzt.', 'Präteritum Passiv。'),
      O('这里禁止吸烟。', 'Hier darf nicht geraucht werden.', '无主语被动 + 情态动词。'),
      C('Man repariert das Auto.', ['Das Auto wird repariert.', 'Das Auto wurde repariert.', 'Das Auto ist repariert worden.', 'Das Auto wird reparieren.'], 'Präsens 主动 → Präsens 被动：wird + Partizip II。', { p: 'Welcher Passivsatz (Präsens) passt?' }),
      I('Die Rechnung muss bis Freitag bezahlt ___.', 'werden', null, '情态动词被动：bezahlt werden。'),
      I('Wann ___ das Rathaus gebaut?', 'wurde', 'werden, Präteritum', 'Präteritum Passiv：wurde。'),
      M([['Präsens', 'wird gemacht'], ['Präteritum', 'wurde gemacht'], ['Perfekt', 'ist gemacht worden'], ['mit Modalverb', 'muss gemacht werden']], 'Zeitform ↔ Passiv', '')
    ]
  });

  /* ---------------- 8 Infinitiv mit zu ---------------- */
  U.push({
    id: 'b1-zu', level: 'B1', n: 8, icon: 'target',
    title: 'Infinitiv mit zu', zh: 'zu 不定式、um…zu、damit',
    tip:
      '<h4>zu + 不定式</h4>' +
      '<p>常用在以下词之后：</p>' +
      '<ul><li>动词：versuchen, vergessen, anfangen, aufhören, vorhaben, hoffen, beschließen</li>' +
      '<li>形容词：<i>Es ist wichtig / schwer / schön, …</i></li>' +
      '<li>名词：<i>Lust / Zeit / Angst haben, …</i></li></ul>' +
      ex('Ich habe vergessen, dich an<b class="k">zu</b>rufen.', '可分动词：zu 插在中间') +
      '<div class="note">情态动词后<b>不用</b> zu：<i>Ich kann kommen.</i></div>' +
      '<h4>目的：um … zu vs. damit</h4>' +
      '<ul><li><b>um … zu</b>：主从句主语相同。<i>Ich lerne, <b>um</b> in Wien <b>zu</b> studieren.</i></li>' +
      '<li><b>damit</b>：主语不同（相同时也可用）。<i>Ich erkläre es, <b>damit</b> du es verstehst.</i></li></ul>' +
      '<h4>ohne … zu / statt … zu</h4>' +
      ex('Er ging, <b>ohne</b> sich <b>zu</b> verabschieden.', '他没告别就走了。') +
      ex('<b>Statt</b> zu lernen, spielt er.', '他不学习，反而在玩。'),
    ex: [
      C('Ich habe vergessen, dich ___.', ['anzurufen', 'zu anrufen', 'anrufen', 'angerufen'], '可分动词：zu 放在前缀和词干之间。'),
      C('Er lernt Deutsch, ___ in Deutschland zu studieren.', ['um', 'damit', 'ohne', 'statt'], '目的 + 同一主语 + zu → um … zu。'),
      C('Ich erkläre es dir noch einmal, ___ du es verstehst.', ['damit', 'um', 'dass', 'ohne'], '目的 + 主语不同 → damit。'),
      I('Es ist wichtig, genug Wasser ___ trinken.', 'zu', null, 'Es ist wichtig + zu 不定式。'),
      I('Hast du Lust, heute Abend ins Kino ___?', 'zu gehen', 'gehen', 'Lust haben + zu 不定式。'),
      C('Sie ging aus dem Haus, ___ sich zu verabschieden.', ['ohne', 'um', 'damit', 'statt'], '没有做某事 → ohne … zu。'),
      C('___ zu lernen, spielt er den ganzen Tag Computer.', ['Statt', 'Um', 'Ohne', 'Damit'], '代替 / 不做…反而 → statt … zu。'),
      C('Ich kann heute nicht ___.', ['kommen', 'zu kommen', 'gekommen', 'kommen zu'], '情态动词后不用 zu。'),
      I('Wir haben vor, im Sommer nach Italien ___.', 'zu fahren', 'fahren', 'vorhaben + zu 不定式。'),
      I('Vergiss nicht, die Tür ___!', 'abzuschließen', 'abschließen', '可分动词：ab-zu-schließen。'),
      O('我开车去，以便准时到达。', 'Ich fahre mit dem Auto, um pünktlich anzukommen.', '同一主语 → um … zu。'),
      O('他试着给我打电话。', 'Er versucht, mich anzurufen.', 'versuchen + zu 不定式。'),
      C('Die Mutter spricht leise, ___ das Baby nicht aufwacht.', ['damit', 'um', 'ohne', 'statt'], '主语不同（Mutter / Baby）→ damit。'),
      C('Es fängt an ___ regnen.', ['zu', 'um zu', 'damit', 'ohne'], 'anfangen + zu 不定式。'),
      M([['um … zu', '为了（同一主语）'], ['damit', '为了（主语可不同）'], ['ohne … zu', '没有做…'], ['statt … zu', '不做…而是']], 'Konnektor ↔ 含义', '')
    ]
  });

  /* ---------------- 9 Verben mit Präpositionen ---------------- */
  U.push({
    id: 'b1-praepverben', level: 'B1', n: 9, icon: 'key',
    title: 'Verben mit Präpositionen', zh: '介词动词与 wo(r)- / da(r)-',
    tip:
      '<h4>固定搭配（需要背）</h4>' +
      '<div class="tbl"><table><tr><th>动词</th><th>介词</th></tr>' +
      '<tr><td>warten / sich freuen（期待）</td><td>auf + A</td></tr>' +
      '<tr><td>sich freuen（对已发生的）/ sich ärgern / sprechen</td><td>über + A</td></tr>' +
      '<tr><td>denken / sich erinnern</td><td>an + A</td></tr>' +
      '<tr><td>teilnehmen</td><td>an + D</td></tr>' +
      '<tr><td>sich interessieren</td><td>für + A</td></tr>' +
      '<tr><td>Angst haben</td><td>vor + D</td></tr>' +
      '<tr><td>sich kümmern / bitten</td><td>um + A</td></tr>' +
      '<tr><td>träumen / abhängen</td><td>von + D</td></tr>' +
      '<tr><td>sich beschäftigen</td><td>mit + D</td></tr></table></div>' +
      '<h4>提问与回答</h4>' +
      '<div class="tbl"><table><tr><th></th><th>提问</th><th>回答</th></tr>' +
      '<tr><td>物 / 事</td><td><b>Worauf</b> wartest du?</td><td>Ich warte <b>darauf</b>.</td></tr>' +
      '<tr><td>人</td><td><b>Auf wen</b> wartest du?</td><td>Ich warte <b>auf ihn</b>.</td></tr></table></div>' +
      '<p>介词以元音开头时加 -r-：wo<b>r</b>an, da<b>r</b>über。</p>' +
      ex('Ich freue mich darauf, dich zu sehen.', 'darauf 预指后面的 zu 不定式'),
    ex: [
      C('Ich warte schon seit einer Stunde ___ den Bus.', ['auf', 'für', 'an', 'um'], 'warten auf + Akk。'),
      C('Sie interessiert sich sehr ___ Kunst.', ['für', 'an', 'über', 'auf'], 'sich interessieren für + Akk。'),
      C('Wir freuen uns schon ___ die Ferien.', ['auf', 'über', 'an', 'für'], '对将来的事期待 → sich freuen auf。'),
      C('Ich habe mich sehr ___ dein Geschenk gefreut.', ['über', 'auf', 'an', 'für'], '对已发生 / 收到的事高兴 → sich freuen über。'),
      I('Denkst du oft ___ deine Kindheit?', 'an', null, 'denken an + Akk。'),
      I('Er hat Angst ___ Hunden.', 'vor', null, 'Angst haben vor + Dat。'),
      C('___ wartest du? – Auf meine Freundin.', ['Auf wen', 'Worauf', 'Wofür', 'Auf was'], '问人 → 介词 + wen/wem。'),
      C('___ interessierst du dich? – Für Politik.', ['Wofür', 'Woran', 'Für wen', 'Worüber'], '问事物 → wo(r) + 介词：wofür。'),
      C('Freust du dich auf den Urlaub? – Ja, ich freue mich sehr ___.', ['darauf', 'auf ihn', 'dafür', 'worauf'], '指代事物 → da(r) + 介词：darauf。'),
      I('Kümmerst du dich ___ die Katze, wenn ich weg bin?', 'um', null, 'sich kümmern um + Akk。'),
      I('Sie hat ___ dem Kurs teilgenommen.', 'an', null, 'teilnehmen an + Dat。'),
      C('Ich erinnere mich gern ___ unseren Urlaub in Spanien.', ['an', 'von', 'über', 'auf'], 'sich erinnern an + Akk。'),
      I('Es hängt ___ Wetter ab.', 'vom', null, 'abhängen von + Dat：von dem → vom。'),
      O('你在想什么？', 'Woran denkst du?', 'denken an → 问事物用 woran。', { x: ['Wo', 'An'] }),
      O('我很期待见到你。', 'Ich freue mich darauf, dich zu sehen.', 'darauf 预指后面的 zu 不定式。'),
      M([['träumen', 'von'], ['sich ärgern', 'über'], ['bitten', 'um'], ['sich beschäftigen', 'mit'], ['denken', 'an']], 'Verb ↔ Präposition', '')
    ]
  });

  /* ---------------- 10 Reflexive Verben ---------------- */
  U.push({
    id: 'b1-reflexiv', level: 'B1', n: 10, icon: 'puzzle',
    title: 'Reflexive Verben', zh: '反身动词：Akk 还是 Dat',
    tip:
      '<h4>反身代词</h4>' +
      '<div class="tbl"><table><tr><th></th><th>Akk</th><th>Dat</th></tr>' +
      '<tr><td>ich</td><td>mich</td><td><b>mir</b></td></tr><tr><td>du</td><td>dich</td><td><b>dir</b></td></tr>' +
      '<tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr><tr><td>wir</td><td>uns</td><td>uns</td></tr>' +
      '<tr><td>ihr</td><td>euch</td><td>euch</td></tr><tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr></table></div>' +
      '<h4>Akk 还是 Dat？</h4>' +
      '<p>句中<b>已经有 Akk 宾语</b>时，反身代词用 <b>Dat</b>：</p>' +
      ex('Ich wasche <b>mich</b>. → Ich wasche <b class="k">mir</b> die Hände.', '我洗澡。→ 我洗手。') +
      '<p>一些动词总是 Dat：<i>sich etwas vorstellen / wünschen / leisten / merken / ansehen / kaufen</i>。</p>' +
      ex('Das kann ich <b>mir</b> nicht leisten.', '这我负担不起。') +
      '<h4>位置</h4>' +
      '<p>反身代词尽量靠前：紧跟变位动词；从句中跟在主语后：<i>…, ob er <b>sich</b> noch erinnert.</i></p>',
    ex: [
      C('Ich freue ___ auf das Wochenende.', ['mich', 'mir', 'sich', 'mein'], '没有其他 Akk 宾语 → Akk mich。'),
      C('Ich wasche ___ die Hände.', ['mir', 'mich', 'sich', 'meine'], 'die Hände 已是 Akk 宾语 → 反身代词用 Dat：mir。'),
      C('Wir treffen ___ um acht am Kino.', ['uns', 'euch', 'sich', 'wir'], 'wir → uns。'),
      I('Hast du ___ schon angezogen?', 'dich', null, '没有其他宾语 → Akk dich。'),
      I('Kannst du ___ das vorstellen?', 'dir', null, 'sich etwas vorstellen：das 是 Akk → 反身 Dat dir。'),
      C('Ihr müsst ___ beeilen!', ['euch', 'sich', 'uns', 'ihr'], 'ihr → euch。'),
      I('Er hat ___ beim Sport verletzt.', 'sich', null, '第三人称 → sich。'),
      C('Das kann ich ___ nicht leisten.', ['mir', 'mich', 'sich', 'mein'], 'sich etwas leisten → Dat。'),
      C('Setzen Sie ___ bitte!', ['sich', 'Sie', 'ihnen', 'euch'], '尊称 Sie → sich。'),
      I('Ich habe ___ einen neuen Laptop gekauft.', 'mir', null, 'einen Laptop 是 Akk → 反身 Dat mir。'),
      O('我对历史很感兴趣。', 'Ich interessiere mich sehr für Geschichte.', 'sich interessieren für。'),
      O('你记住这个词了吗？', 'Hast du dir das Wort gemerkt?', 'sich etwas merken → Dat dir。'),
      C('Ich weiß nicht, ob er ___ noch an mich erinnert.', ['sich', 'ihn', 'ihm', 'er'], '主语 er → 反身 sich。'),
      C('Du solltest ___ die Haare kämmen.', ['dir', 'dich', 'sich', 'deine'], 'die Haare 是 Akk → 反身 Dat dir。'),
      M([['ich', 'mich'], ['du', 'dich'], ['wir', 'uns'], ['ihr', 'euch'], ['er', 'sich']], 'Pronomen ↔ Reflexivpronomen (Akk)', '')
    ]
  });

  /* ---------------- 11 Genitiv ---------------- */
  U.push({
    id: 'b1-genitiv', level: 'B1', n: 11, icon: 'pin',
    title: 'Genitiv', zh: '第二格与 wegen, trotz, während',
    tip:
      '<h4>形式</h4>' +
      '<div class="tbl"><table><tr><th>m / n</th><th>f / Pl</th></tr>' +
      '<tr><td>des / eines / meines + Nomen<b class="k">-(e)s</b></td><td>der / einer / meiner</td></tr></table></div>' +
      ex('das Auto mein<b>es</b> Vater<b>s</b> · die Tasche ein<b>er</b> Frau', '我父亲的车 · 一位女士的包') +
      '<p>单音节名词常加 -es：<i>des Mannes, des Hauses</i>。人名直接加 -s：<i>Annas Buch</i>。</p>' +
      '<p>Genitiv 后的形容词总是 <b>-en</b>：<i>wegen des stark<b>en</b> Verkehrs</i>。</p>' +
      '<h4>要求 Genitiv 的介词</h4>' +
      '<ul><li><b>wegen</b> 因为</li><li><b>trotz</b> 尽管</li><li><b>während</b> 在……期间</li><li><b>(an)statt</b> 代替</li><li><b>innerhalb / außerhalb</b> 在……之内 / 之外</li></ul>' +
      '<div class="note">口语里常用 von + Dat 或 wegen + Dat，但书面语和考试用 Genitiv。</div>',
    ex: [
      C('Das ist das Auto ___ Vaters.', ['meines', 'meinem', 'meinen', 'mein'], 'Vater 阳性 Genitiv → meines Vaters。'),
      C('Die Farbe ___ Hauses gefällt mir.', ['des', 'dem', 'der', 'den'], 'Haus 中性 Genitiv → des Hauses。'),
      C('___ des Regens sind wir zu Hause geblieben.', ['Wegen', 'Trotz', 'Während', 'Statt'], '原因 → wegen。'),
      C('___ des schlechten Wetters sind wir spazieren gegangen.', ['Trotz', 'Wegen', 'Während', 'Innerhalb'], '天气差却去散步 → trotz。'),
      I('Während ___ Urlaubs habe ich viel gelesen.', 'des', null, 'der Urlaub 阳性 Genitiv → des Urlaubs。'),
      I('Das Büro ___ Firma ist im dritten Stock.', 'der', null, 'die Firma 阴性 Genitiv → der。'),
      C('Das ist die Tasche ___ Frau.', ['einer', 'einen', 'eine', 'einem'], '阴性 Genitiv → einer。'),
      I('Wegen des ___ Verkehrs kam ich zu spät.', 'starken', 'stark', 'Genitiv 中的形容词 → -en。'),
      C('Das Ende ___ Films war überraschend.', ['des', 'dem', 'der', 'den'], 'der Film → des Films。'),
      C('Die Spielsachen ___ Kinder liegen überall.', ['der', 'den', 'des', 'die'], '复数 Genitiv → der。'),
      O('这是我姐姐的房间。', 'Das ist das Zimmer meiner Schwester.', '阴性 Genitiv → meiner。'),
      O('尽管下雨，比赛还是进行了。', 'Trotz des Regens fand das Spiel statt.', 'trotz + Genitiv。', { alt: ['Das Spiel fand trotz des Regens statt.'] }),
      I('Bitte zahlen Sie innerhalb ___ Woche.', 'einer', null, 'innerhalb + Genitiv，阴性 → einer。'),
      I('Die Meinung ___ Lehrers ist mir wichtig.', 'des', null, 'der Lehrer → des Lehrers。'),
      M([['wegen', '因为'], ['trotz', '尽管'], ['während', '在…期间'], ['statt', '代替'], ['außerhalb', '在…外面']], 'Präposition ↔ 含义', '')
    ]
  });
})();
