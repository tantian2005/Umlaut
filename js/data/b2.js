/* B2 units — same helpers as b1.js */
(function () {
  'use strict';
  var U = window.GRAMMATIK_UNITS = window.GRAMMATIK_UNITS || [];
  function C(q, o, e, x) { return Object.assign({ t: 'c', q: q, o: o, e: e }, x || {}); }
  function I(q, a, h, e, x) { return Object.assign({ t: 'i', q: q, a: a, h: h, e: e }, x || {}); }
  function O(zh, a, e, x) { return Object.assign({ t: 'o', zh: zh, a: a, e: e }, x || {}); }
  function M(pairs, p, e) { return { t: 'm', pairs: pairs, p: p, e: e }; }
  function ex(de, zh) { return '<div class="ex"><p lang="de">' + de + '</p>' + (zh ? '<p class="zh">' + zh + '</p>' : '') + '</div>'; }

  /* ---------------- 1 Passiv erweitert ---------------- */
  U.push({
    id: 'b2-passiv', level: 'B2', n: 1, icon: 'swap',
    title: 'Passiv & Ersatzformen', zh: '状态被动与被动替代形式',
    tip:
      '<h4>过程被动 vs. 状态被动</h4>' +
      '<ul><li><b>Vorgangspassiv</b>（过程）：werden + Partizip II —— <i>Die Tür <b>wird</b> geschlossen.</i></li>' +
      '<li><b>Zustandspassiv</b>（结果状态）：sein + Partizip II —— <i>Die Tür <b>ist</b> geschlossen.</i></li></ul>' +
      '<h4>情态动词被动的复杂形式</h4>' +
      ex('Das Formular muss ausgefüllt werden. → …, dass das Formular ausgefüllt werden <b>muss</b>.', '从句：变位动词最后') +
      ex('Der Termin <b>hat</b> verschoben werden <b>müssen</b>.', 'Perfekt：hat + Partizip II + werden + 情态动词不定式') +
      '<h4>被动替代形式</h4>' +
      '<div class="tbl"><table><tr><th>形式</th><th>含义</th><th>例句</th></tr>' +
      '<tr><td>sich lassen + Inf.</td><td>können</td><td>Das <b>lässt sich</b> reparieren.</td></tr>' +
      '<tr><td>sein + zu + Inf.</td><td>können / müssen</td><td>Die Rechnung <b>ist</b> sofort <b>zu</b> bezahlen.</td></tr>' +
      '<tr><td>-bar / -lich</td><td>können</td><td>Das Wasser ist trink<b>bar</b>.</td></tr>' +
      '<tr><td>man</td><td>—</td><td><b>Man</b> repariert das Auto.</td></tr></table></div>',
    ex: [
      C('Das Problem ___ sich leicht lösen.', ['lässt', 'ist', 'wird', 'hat'], 'sich lassen + 不定式 = kann gelöst werden。'),
      C('Die Rechnung ist bis Montag ___ bezahlen.', ['zu', 'um', 'am', 'zum'], 'sein + zu + 不定式 = muss bezahlt werden。'),
      C('Das Geschäft ___ seit 9 Uhr geöffnet.', ['ist', 'wird', 'wurde', 'worden'], '结果状态 → Zustandspassiv：ist geöffnet。'),
      I('Diese Aufgabe ist leicht ___ lösen.', 'zu', null, 'sein + zu + 不定式 = kann gelöst werden。'),
      C('Seine Schrift ist leider kaum ___.', ['lesbar', 'gelesen', 'lesend', 'zu lesbar'], '-bar = 可以被…：lesbar = kann gelesen werden。'),
      C('Ich weiß, dass das Formular bis morgen ausgefüllt ___.', ['werden muss', 'muss werden', 'müssen wird', 'wird müssen'], '从句中：Partizip II + werden + 变位情态动词。'),
      C('Der Termin hat leider verschoben ___.', ['werden müssen', 'müssen werden', 'worden müssen', 'gemusst werden'], 'Perfekt 情态被动：hat … verschoben werden müssen（双不定式）。'),
      I('Als wir ankamen, ___ der Tisch schon gedeckt.', 'war', 'sein, Präteritum', '过去的结果状态 → war gedeckt。'),
      O('这台洗衣机已经修不好了。', 'Die Waschmaschine lässt sich nicht mehr reparieren.', 'sich lassen = können + Passiv。'),
      O('这个问题必须马上解决。', 'Das Problem ist sofort zu lösen.', 'sein + zu = muss gelöst werden。'),
      C('Das Fenster ___ nicht öffnen.', ['lässt sich', 'ist sich', 'wird sich', 'lässt'], 'Man kann das Fenster nicht öffnen → Das Fenster lässt sich nicht öffnen。'),
      I('Das Wasser ist nicht ___.', 'trinkbar', 'trinken, -bar', 'trinkbar = kann getrunken werden。'),
      C('Die Kirche ___ im 12. Jahrhundert erbaut worden.', ['ist', 'hat', 'wird', 'wurde'], 'Perfekt Passiv：ist + Partizip II + worden。'),
      I('Hier darf nicht fotografiert ___.', 'werden', null, '情态被动：fotografiert werden。'),
      M([['Das lässt sich machen.', 'Das kann gemacht werden.'], ['Das ist sofort zu machen.', 'Das muss sofort gemacht werden.'], ['Die Tür ist geschlossen.', 'Zustand'], ['Die Tür wird geschlossen.', 'Vorgang']], 'Was bedeutet dasselbe?', '')
    ]
  });

  /* ---------------- 2 Konjunktiv II Vergangenheit ---------------- */
  U.push({
    id: 'b2-k2-vergangenheit', level: 'B2', n: 2, icon: 'cloud',
    title: 'Konjunktiv II Vergangenheit', zh: '过去虚拟、als ob',
    tip:
      '<h4>hätte / wäre + Partizip II</h4>' +
      '<p>表示过去<b>没有发生</b>的事（遗憾、责备、假设）。</p>' +
      ex('Wenn ich das gewusst <b>hätte</b>, <b>wäre</b> ich nicht gekommen.', '要是我早知道，我就不来了。') +
      '<h4>情态动词：双不定式</h4>' +
      ex('Ich <b>hätte</b> dir helfen <b class="k">können</b>.', '我本可以帮你。（不用 gekonnt）') +
      ex('Du <b>hättest</b> mich anrufen <b class="k">sollen</b>!', '你本该给我打电话！') +
      '<p>从句中 hätte 放在双不定式<b>之前</b>：<i>…, ob ich das <b>hätte</b> machen sollen.</i></p>' +
      '<h4>非现实比较：als ob / als</h4>' +
      ex('Er tut so, <b>als ob</b> er nichts gehört <b>hätte</b>. = …, <b>als hätte</b> er nichts gehört.', '他装作什么都没听见。') +
      '<p>als 直接接动词（动词第二位置），als ob 则动词在末尾。</p>' +
      '<div class="note">愿望：<i>Wäre ich doch früher losgefahren!</i> 差点：<i>Fast hätte ich den Zug verpasst.</i></div>',
    ex: [
      C('Wenn ich das gewusst ___, wäre ich nicht gekommen.', ['hätte', 'wäre', 'würde', 'hatte'], 'wissen 用 haben → hätte gewusst。'),
      C('Wenn wir früher losgefahren ___, hätten wir den Zug erreicht.', ['wären', 'hätten', 'würden', 'waren'], 'losfahren 用 sein → wären losgefahren。'),
      I('Du ___ mich anrufen sollen!', 'hättest', null, '责备：hättest … sollen（双不定式）。'),
      C('Ich hätte gestern länger arbeiten ___.', ['müssen', 'gemusst', 'muss', 'zu müssen'], '双不定式：情态动词用不定式，不用 gemusst。'),
      C('Er tut so, als ___ er nichts gehört.', ['hätte', 'wäre', 'hat', 'würde'], 'als + 动词：als hätte er … gehört。'),
      C('Sie sieht aus, als ___ sie die ganze Nacht nicht geschlafen.', ['hätte', 'wäre', 'ob', 'würde'], 'schlafen 用 haben → als hätte sie … geschlafen。'),
      I('Wenn du mir geholfen ___, wäre ich schneller fertig gewesen.', 'hättest', null, 'helfen 用 haben → hättest geholfen。'),
      I('Wenn er nicht so schnell gefahren ___, hätte er keinen Unfall gehabt.', 'wäre', null, 'fahren 用 sein → wäre gefahren。'),
      O('要是我早点出发就好了！', 'Wäre ich doch früher losgefahren!', '愿望句，动词前置 + doch。'),
      O('我本来可以帮你的。', 'Ich hätte dir helfen können.', '双不定式：helfen können。'),
      C('Ich weiß nicht, ob ich das ___.', ['hätte machen sollen', 'machen sollen hätte', 'hätte gemacht sollen', 'sollen machen hätte'], '从句中双不定式之前放 hätte。'),
      C('Fast ___ ich den Zug verpasst!', ['hätte', 'wäre', 'würde', 'habe'], '差点发生（但没发生）→ Fast hätte ich …'),
      I('Er redet, als ___ er ein Experte.', 'wäre', 'sein', '非现实比较：als wäre er …'),
      C('An deiner Stelle ___ ich das Angebot angenommen.', ['hätte', 'wäre', 'würde', 'habe'], 'annehmen 用 haben → hätte angenommen。'),
      M([['ich bin gegangen', 'ich wäre gegangen'], ['ich habe gesehen', 'ich hätte gesehen'], ['ich konnte kommen', 'ich hätte kommen können'], ['es ist passiert', 'es wäre passiert']], 'Indikativ ↔ Konjunktiv II', '')
    ]
  });

  /* ---------------- 3 Konjunktiv I ---------------- */
  U.push({
    id: 'b2-k1', level: 'B2', n: 3, icon: 'chat', cPrompt: 'Indirekte Rede (Schriftsprache): Was passt?',
    title: 'Konjunktiv I', zh: '间接引语',
    tip:
      '<h4>用途</h4>' +
      '<p>新闻、报告等书面语中转述他人的话，表示“这是别人说的，不代表我”。</p>' +
      '<h4>构成：不定式词干 + 词尾</h4>' +
      '<div class="tbl"><table><tr><th></th><th>haben</th><th>können</th><th>werden</th><th>sein</th></tr>' +
      '<tr><td>ich</td><td>habe*</td><td>könne</td><td>werde*</td><td>sei</td></tr>' +
      '<tr><td>er/sie/es</td><td><b>habe</b></td><td><b>könne</b></td><td><b>werde</b></td><td><b>sei</b></td></tr>' +
      '<tr><td>wir / sie</td><td>haben* → <b>hätten</b></td><td>können* → <b>könnten</b></td><td>werden* → <b>würden</b></td><td>seien</td></tr></table></div>' +
      '<p>* 与直陈式相同时，改用 <b>Konjunktiv II</b>：<i>Sie sagten, sie <b>hätten</b> keine Zeit.</i></p>' +
      '<h4>时态</h4>' +
      '<ul><li>现在：<i>Er sagt, er <b>sei</b> krank.</i></li>' +
      '<li>过去：<i>Er sagt, er <b>habe</b> nichts gewusst / er <b>sei</b> in Rom gewesen.</i></li>' +
      '<li>将来：<i>Er sagt, er <b>werde</b> kommen.</i></li></ul>' +
      '<h4>疑问与命令</h4>' +
      ex('„Hast du Zeit?“ → Sie fragte, <b>ob</b> ich Zeit hätte.', '') +
      ex('„Sei pünktlich!“ → Er sagte, ich <b>solle</b> pünktlich sein.', '') +
      '<div class="note">别忘了换人称：„Ich bin müde.“ → Sie sagt, <b>sie</b> sei müde.</div>',
    ex: [
      C('Der Minister sagte, er ___ zufrieden.', ['sei', 'ist', 'war', 'seien'], '间接引语第三人称单数 → K I sei。'),
      I('Sie sagt, sie ___ keine Zeit.', 'habe', 'haben, Konjunktiv I', 'er/sie → habe。'),
      I('Er behauptet, er ___ nichts davon gewusst.', 'habe', 'haben', '过去 → habe + Partizip II。'),
      C('Die Kinder sagten, sie ___ keinen Hunger.', ['hätten', 'haben', 'habe', 'hatten'], 'sie haben（K I）= 直陈式 → 改用 K II hätten。'),
      C('Der Zeuge erklärte, er ___ den Täter gesehen.', ['habe', 'sei', 'hat', 'würde'], 'sehen 用 haben → habe gesehen。'),
      I('Laut Polizei ___ der Täter mit dem Auto geflohen.', 'sei', 'sein', 'fliehen 用 sein → sei geflohen。'),
      C('Sie fragte, ___ ich morgen Zeit hätte.', ['ob', 'dass', 'wenn', 'als'], '一般疑问的间接引语 → ob。'),
      C('Er sagte, ich ___ pünktlich sein.', ['solle', 'soll', 'sollen', 'sei'], '命令的间接引语 → sollen 的 K I：solle。'),
      I('Die Firma teilte mit, sie ___ 200 neue Mitarbeiter einstellen.', 'werde', 'werden', '将来 → werde + 不定式（die Firma = sie 单数）。'),
      C('Er meinte, das ___ kein Problem.', ['sei', 'ist', 'seie', 'seien'], 'das（单数）→ sei。'),
      O('她说她明天会来。', 'Sie sagte, sie werde morgen kommen.', '将来时间接引语：werde + 不定式。'),
      C('Sie sagt, ___ müde.', ['sie sei', 'ich sei', 'sie ist', 'ich bin'], '换人称 + K I：sie sei。', { p: '„Ich bin müde.“ → indirekte Rede' }),
      I('Der Sprecher sagte, man ___ die Lage genau prüfen.', 'müsse', 'müssen', 'man → müsse。'),
      C('Er erzählte, er ___ letztes Jahr in Kanada gewesen.', ['sei', 'habe', 'war', 'ist'], 'sein 的 Perfekt 用 sein → sei gewesen。'),
      M([['ist', 'sei'], ['hat', 'habe'], ['kann', 'könne'], ['wird', 'werde'], ['muss', 'müsse']], 'Indikativ ↔ Konjunktiv I (er/sie)', '')
    ]
  });

  /* ---------------- 4 Zweiteilige Konnektoren ---------------- */
  U.push({
    id: 'b2-konnektoren', level: 'B2', n: 4, icon: 'link',
    title: 'Zweiteilige Konnektoren', zh: '双部连词：weder…noch, je…desto',
    tip:
      '<div class="tbl"><table><tr><th>连词</th><th>含义</th></tr>' +
      '<tr><td>sowohl … als auch</td><td>既……也……</td></tr>' +
      '<tr><td>weder … noch</td><td>既不……也不……</td></tr>' +
      '<tr><td>entweder … oder</td><td>要么……要么……</td></tr>' +
      '<tr><td>nicht nur … sondern auch</td><td>不仅……而且……</td></tr>' +
      '<tr><td>zwar … aber</td><td>虽然……但是……</td></tr>' +
      '<tr><td>einerseits … andererseits</td><td>一方面……另一方面……</td></tr>' +
      '<tr><td>je … desto / umso</td><td>越……越……</td></tr></table></div>' +
      '<h4>je … desto 的语序</h4>' +
      ex('<b>Je</b> mehr ich lerne, <b>desto</b> besser <b class="k">verstehe</b> ich.', 'je + 比较级 … 动词在末尾，desto + 比较级 + 动词 + 主语') +
      '<h4>weder … noch 已含否定</h4>' +
      ex('Ich habe <b>weder</b> Zeit <b>noch</b> Lust.', '不要再加 nicht / kein') +
      '<h4>zwar … aber</h4>' +
      ex('Die Wohnung ist <b>zwar</b> klein, <b>aber</b> sehr gemütlich.', '公寓虽小，但很舒适。'),
    ex: [
      C('Er spricht ___ Englisch ___ Französisch.', ['sowohl / als auch', 'weder / oder', 'entweder / noch', 'zwar / sondern'], '两者都 → sowohl … als auch。'),
      C('Ich habe ___ Zeit ___ Lust.', ['weder / noch', 'sowohl / noch', 'entweder / als auch', 'nicht nur / aber'], '两者都没有 → weder … noch。'),
      C('___ mehr ich lerne, ___ besser verstehe ich.', ['Je / desto', 'Wenn / desto', 'Desto / je', 'Umso / desto'], '越……越…… → je … desto。'),
      C('Die Wohnung ist ___ klein, ___ sie ist sehr gemütlich.', ['zwar / aber', 'weder / noch', 'sowohl / als auch', 'entweder / oder'], '让步 + 转折 → zwar … aber。'),
      I('Wir fahren entweder ans Meer ___ in die Berge.', 'oder', null, 'entweder … oder。'),
      I('Sie ist nicht nur intelligent, ___ auch sehr fleißig.', 'sondern', null, 'nicht nur … sondern auch。'),
      I('Je früher wir losfahren, ___ weniger Stau gibt es.', ['desto', 'umso'], null, 'je … desto / umso。'),
      C('Je länger ich warte, ___.', ['desto nervöser werde ich', 'desto ich werde nervöser', 'desto nervöser ich werde', 'nervöser desto werde ich'], 'desto + 比较级 + 变位动词 + 主语。'),
      O('他既不喝咖啡也不喝茶。', 'Er trinkt weder Kaffee noch Tee.', 'weder … noch 本身就是否定。'),
      O('一方面我想留下，另一方面我想旅行。', 'Einerseits möchte ich bleiben, andererseits möchte ich reisen.', 'einerseits / andererseits 占第一位，动词紧随。'),
      O('你越早来越好。', 'Je früher du kommst, desto besser.', 'je + 比较级 … desto + 比较级。'),
      C('Ich komme ___ heute ___ morgen – das weiß ich noch nicht genau.', ['entweder / oder', 'weder / noch', 'sowohl / als auch', 'zwar / aber'], '二选一 → entweder … oder。'),
      I('Wir haben ___ den Bus als auch den Zug verpasst.', 'sowohl', null, 'sowohl … als auch。'),
      C('Das Hotel war zwar teuer, ___ das Essen war ausgezeichnet.', ['aber', 'sondern', 'oder', 'noch'], 'zwar … aber。'),
      M([['sowohl', 'als auch'], ['weder', 'noch'], ['entweder', 'oder'], ['nicht nur', 'sondern auch'], ['je', 'desto']], 'Teil 1 ↔ Teil 2', '')
    ]
  });

  /* ---------------- 5 Partizipialattribute ---------------- */
  U.push({
    id: 'b2-partizip', level: 'B2', n: 5, icon: 'layers',
    title: 'Partizipialattribute', zh: '分词作定语',
    tip:
      '<h4>Partizip I：主动、同时</h4>' +
      '<p>不定式 + <b>d</b>，再加形容词词尾。</p>' +
      ex('das wein<b>end</b>e Kind = das Kind, das weint', '正在哭的孩子') +
      '<h4>Partizip II：被动 / 已完成</h4>' +
      ex('das reparier<b>t</b>e Auto = das Auto, das repariert wurde', '被修好的车') +
      ex('der angekommen<b>e</b> Zug = der Zug, der angekommen ist', '已到达的火车（sein 动词 → 主动完成）') +
      '<h4>扩展分词定语</h4>' +
      '<p>修饰成分放在冠词和分词之间：</p>' +
      ex('die <b>seit Jahren in Berlin</b> lebende Familie', '多年来住在柏林的那家人') +
      '<h4>zu + Partizip I（必须 / 可以被…）</h4>' +
      ex('die <b>zu</b> lösende Aufgabe = die Aufgabe, die gelöst werden muss', '需要解决的任务') +
      '<div class="note">分词按普通形容词变格：<i>mit zitternd<b>er</b> Stimme, die steigend<b>en</b> Preise</i>。</div>',
    ex: [
      C('Das ___ Kind sucht seine Mutter.', ['weinende', 'geweinte', 'weinend', 'weinendes'], '主动、正在进行 → Partizip I；das + Nom → -e。'),
      C('Wir haben das ___ Auto abgeholt.', ['reparierte', 'reparierende', 'repariert', 'reparierten'], '被修 → Partizip II；das + Akk 中性 → -e。'),
      I('Die ___ Preise ärgern viele Kunden.', 'steigenden', 'steigen, Partizip I', 'die + 复数 → -en。'),
      I('Wir brauchen eine ___ Lösung.', 'überzeugende', 'überzeugen, Partizip I', 'eine + 阴性 Akk → -e。'),
      I('Das ___ Fenster muss repariert werden.', 'zerbrochene', 'zerbrechen, Partizip II', '已碎的 → Partizip II zerbrochen + -e。'),
      C('Die seit Jahren in Berlin ___ Familie zieht nach München.', ['lebende', 'gelebte', 'lebenden', 'leben'], '主动 → Partizip I；die + 阴性 Nom → -e。'),
      C('Der im letzten Jahr ___ Roman ist ein Bestseller.', ['erschienene', 'erscheinende', 'erschienen', 'erschienenen'], '已出版 → Partizip II；der + Nom → -e。'),
      C('Das ist eine sofort zu ___ Aufgabe.', ['erledigende', 'erledigte', 'erledigen', 'erledigenden'], 'zu + Partizip I = muss erledigt werden；eine + Nom → -e。'),
      C('der Zug, der gerade ankommt', ['der gerade ankommende Zug', 'der gerade angekommene Zug', 'der ankommend gerade Zug', 'der gerade ankommenden Zug'], '正在发生 → Partizip I。', { p: 'Welches Partizipialattribut passt?' }),
      C('die Briefe, die gestern geschrieben wurden', ['die gestern geschriebenen Briefe', 'die gestern schreibenden Briefe', 'die geschriebenen gestern Briefe', 'die gestern geschriebene Briefe'], '被动 → Partizip II；die + 复数 → -en。', { p: 'Welches Partizipialattribut passt?' }),
      O('我读了那本被推荐的书。', 'Ich habe das empfohlene Buch gelesen.', 'empfehlen → empfohlen → das empfohlene Buch。'),
      O('那只正在睡觉的猫很可爱。', 'Die schlafende Katze ist sehr süß.', 'Partizip I：schlafend + -e。'),
      I('Mit ___ Stimme sagte er Nein.', 'zitternder', 'zittern, Partizip I', '无冠词 Dat 阴性 → -er。'),
      I('Bitte beachten Sie die ___ Hinweise.', 'folgenden', 'folgen, Partizip I', 'die + 复数 → -en。'),
      M([['die lachenden Kinder', 'die Kinder, die lachen'], ['die gelobten Kinder', 'die Kinder, die gelobt wurden'], ['das kochende Wasser', 'das Wasser, das kocht'], ['das gekochte Wasser', 'das Wasser, das gekocht wurde']], 'Partizip ↔ Relativsatz', '')
    ]
  });

  /* ---------------- 6 Nominalisierung ---------------- */
  U.push({
    id: 'b2-nominal', level: 'B2', n: 6, icon: 'quote',
    title: 'Nominalisierung', zh: '名词化与书面语风格',
    tip:
      '<h4>动词 / 形容词 → 名词</h4>' +
      '<ul><li>-ung：entwickeln → die Entwick<b>lung</b>, planen → die Plan<b>ung</b></li>' +
      '<li>不定式：lesen → das Lesen</li>' +
      '<li>词干 / 变元音：besuchen → der Besuch, ankommen → die Ankunft, verlieren → der Verlust</li>' +
      '<li>-heit / -keit：krank → die Krank<b>heit</b>, ehrlich → die Ehrlich<b>keit</b></li></ul>' +
      '<h4>从句 ↔ 介词短语</h4>' +
      '<div class="tbl"><table><tr><th>从句</th><th>名词短语</th></tr>' +
      '<tr><td>weil / da</td><td><b>wegen</b> + Gen</td></tr>' +
      '<tr><td>obwohl</td><td><b>trotz</b> + Gen</td></tr>' +
      '<tr><td>wenn（条件）/ als, während（时间）</td><td><b>bei</b> + Dat</td></tr>' +
      '<tr><td>nachdem</td><td><b>nach</b> + Dat</td></tr>' +
      '<tr><td>bevor</td><td><b>vor</b> + Dat</td></tr>' +
      '<tr><td>während</td><td><b>während</b> + Gen</td></tr>' +
      '<tr><td>um … zu / damit</td><td><b>zum / zur</b> + 名词</td></tr></table></div>' +
      ex('Nachdem er angekommen war, … → <b>Nach seiner Ankunft</b> …', '') +
      '<p>主语 → 物主代词或 Genitiv / von；宾语 → Genitiv；副词 → 形容词。</p>',
    ex: [
      C('___ des starken Regens fiel der Unterricht aus.', ['Wegen', 'Trotz', 'Bei', 'Nach'], 'weil es stark regnete → wegen + Gen。'),
      C('___ seiner Krankheit arbeitete er weiter.', ['Trotz', 'Wegen', 'Zur', 'Vor'], 'obwohl er krank war → trotz + Gen。'),
      C('___ seiner Ankunft rief er sofort an.', ['Nach', 'Vor', 'Während', 'Seit'], 'nachdem er angekommen war → nach + Dat。'),
      I('___ unserer Abreise müssen wir noch packen.', 'Vor', 'bevor wir abreisen', 'bevor → vor + Dat。'),
      I('___ Regen fällt das Spiel aus.', 'Bei', 'wenn es regnet', 'wenn（条件）→ bei + Dat。'),
      I('Die ___ der Qualität ist unser Ziel.', 'Verbesserung', 'verbessern', 'verbessern → die Verbesserung（-ung）。'),
      I('Die ___ des Projekts dauerte zwei Jahre.', 'Planung', 'planen', 'planen → die Planung。'),
      I('Seine ___ hat alle überrascht.', 'Ehrlichkeit', 'ehrlich', '形容词 → -keit。'),
      C('___ Sparen von Energie schalten wir das Licht aus.', ['Zum', 'Zur', 'Beim', 'Vom'], 'um Energie zu sparen → zum Sparen（das Sparen 中性）。'),
      C('Während ___ hat er in Wien gewohnt.', ['seines Studiums', 'seinem Studium', 'seinen Studium', 'sein Studium'], 'während + Gen：das Studium → seines Studiums。'),
      O('由于天气不好，航班被取消了。', 'Wegen des schlechten Wetters wurde der Flug abgesagt.', 'wegen + Gen；名词短语占第一位 → 动词 wurde 紧随。'),
      O('工作时我听音乐。', 'Bei der Arbeit höre ich Musik.', 'wenn / während ich arbeite → bei der Arbeit。'),
      I('Die ___ der Mitarbeiter ist sehr wichtig.', 'Zufriedenheit', 'zufrieden', 'zufrieden → die Zufriedenheit。'),
      C('die ___ der Preise durch die Firma', ['Erhöhung', 'Erhöhen', 'Erhöhtheit', 'Erhöhte'], 'Die Firma hat die Preise erhöht → die Erhöhung der Preise。'),
      M([['entscheiden', 'die Entscheidung'], ['ankommen', 'die Ankunft'], ['besuchen', 'der Besuch'], ['verlieren', 'der Verlust'], ['beginnen', 'der Beginn']], 'Verb ↔ Nomen', '')
    ]
  });

  /* ---------------- 7 Modalverben subjektiv & Futur ---------------- */
  U.push({
    id: 'b2-vermutung', level: 'B2', n: 7, icon: 'target',
    title: 'Vermutungen', zh: '情态动词主观用法与将来完成时',
    tip:
      '<h4>推测的确定程度</h4>' +
      '<div class="tbl"><table><tr><th>形式</th><th>确定度</th></tr>' +
      '<tr><td><b>muss</b> / kann nicht</td><td>几乎确定（~95%）</td></tr>' +
      '<tr><td><b>wird</b> (wohl)</td><td>很有把握（~90%）</td></tr>' +
      '<tr><td><b>dürfte</b></td><td>很可能（~75%）</td></tr>' +
      '<tr><td><b>könnte</b> / kann</td><td>可能（~50%）</td></tr></table></div>' +
      '<h4>转述他人说法</h4>' +
      '<ul><li><b>soll</b>：据说（别人说的）—— <i>Er soll sehr reich sein.</i></li>' +
      '<li><b>will</b>：他自称（本人说的，说话者怀疑）—— <i>Er will alles allein gemacht haben.</i></li></ul>' +
      '<h4>对过去的推测：情态动词 + Partizip II + haben / sein</h4>' +
      ex('Der Zug <b>muss</b> schon abgefahren <b>sein</b>.', '火车肯定已经开走了。') +
      '<h4>Futur I / II</h4>' +
      ex('Er <b>wird</b> wohl noch im Büro <b>sein</b>.', 'Futur I：对现在的推测') +
      ex('Sie <b>wird</b> den Zug verpasst <b>haben</b>.', 'Futur II：对过去的推测') +
      ex('Morgen <b>werde</b> ich die Prüfung geschrieben <b>haben</b>.', 'Futur II：将来某时已完成'),
    ex: [
      C('Das Licht ist an. Er ___ zu Hause sein.', ['muss', 'soll', 'will', 'darf'], '有明确证据 → 几乎确定：muss。'),
      C('Der Schauspieler ___ sehr reich sein. Das habe ich in der Zeitung gelesen.', ['soll', 'muss', 'will', 'kann'], '从别处得知 → 据说：soll。'),
      C('Er ___ den Text allein geschrieben haben – das behauptet er jedenfalls.', ['will', 'soll', 'muss', 'dürfte'], '本人声称 → will。'),
      C('Sie ist nicht gekommen. Sie ___ krank sein.', ['könnte', 'muss', 'will', 'soll'], '只是一种可能（约 50%）→ könnte。', { p: 'Vermutung: ca. 50 %' }),
      I('Er hat nicht geantwortet. Er ___ die Nachricht noch nicht gelesen haben.', 'dürfte', 'Vermutung: ca. 75 %', '很可能 → dürfte。'),
      C('Morgen um diese Zeit ___ ich die Prüfung schon geschrieben haben.', ['werde', 'würde', 'wurde', 'habe'], '将来某时已完成 → Futur II：werde … haben。'),
      I('Wo ist Tom? – Er wird wohl noch im Büro ___.', 'sein', null, 'Futur I 推测：wird … sein。'),
      C('Sie wird den Zug wohl verpasst ___.', ['haben', 'sein', 'hatte', 'werden'], 'verpassen 用 haben → Futur II：wird verpasst haben。'),
      C('Der Zug ___ schon abgefahren sein.', ['muss', 'muss haben', 'hat müssen', 'müsste haben'], '对过去的推测：muss + Partizip II + sein。'),
      I('Er wird gestern sehr müde gewesen ___.', 'sein', null, 'Futur II：wird … gewesen sein。'),
      O('她肯定已经回家了。', 'Sie muss schon nach Hause gegangen sein.', 'muss + Partizip II + sein。'),
      O('据说这家餐厅非常好。', 'Das Restaurant soll sehr gut sein.', 'soll = 据说。'),
      I('Bis Ende des Jahres ___ wir das Haus fertig gebaut haben.', 'werden', null, 'Futur II：werden … gebaut haben。'),
      C('Das kann nicht stimmen! Er ___ nicht in Paris gewesen sein – ich habe ihn gestern hier gesehen.', ['kann', 'soll', 'hat', 'will'], '确定不可能 → kann nicht。'),
      M([['muss', 'ziemlich sicher'], ['dürfte', 'wahrscheinlich'], ['könnte', 'vielleicht'], ['soll', 'man sagt'], ['will', 'er behauptet']], 'Modalverb ↔ Bedeutung', '')
    ]
  });

  /* ---------------- 8 n-Deklination ---------------- */
  U.push({
    id: 'b2-ndeklination', level: 'B2', n: 8, icon: 'star',
    title: 'n-Deklination', zh: '弱变化阳性名词',
    tip:
      '<h4>规则</h4>' +
      '<p>部分阳性名词除了单数 Nom 以外，所有格都加 <b>-(e)n</b>。</p>' +
      '<div class="tbl"><table><tr><th></th><th>Singular</th><th>Plural</th></tr>' +
      '<tr><td>Nom</td><td>der Student</td><td>die Student<b>en</b></td></tr>' +
      '<tr><td>Akk</td><td>den Student<b class="k">en</b></td><td>die Student<b>en</b></td></tr>' +
      '<tr><td>Dat</td><td>dem Student<b class="k">en</b></td><td>den Student<b>en</b></td></tr>' +
      '<tr><td>Gen</td><td>des Student<b class="k">en</b></td><td>der Student<b>en</b></td></tr></table></div>' +
      '<h4>哪些名词？</h4>' +
      '<ul><li>-e 结尾的阳性（多指人 / 动物）：der Junge, Kollege, Kunde, Neffe, Löwe, Franzose, Experte</li>' +
      '<li>外来词 -ent, -ant, -ist, -at, -oge, -graf：Student, Präsident, Praktikant, Polizist, Journalist, Soldat, Biologe, Fotograf</li>' +
      '<li>其他：der Mensch, Nachbar, Bauer, Held, Bär, Prinz, <b>Herr</b>（单数 Herr<b>n</b>，复数 Herr<b>en</b>）</li></ul>' +
      '<h4>特殊：-ns</h4>' +
      '<p>der Name, Gedanke, Glaube, Buchstabe, Wille：Gen 加 <b>-ns</b>（des Name<b>ns</b>），其他格加 -n。das Herz → des Herzens, dem Herzen。</p>' +
      '<div class="note">信件抬头：<i>Sehr geehrter Herr Müller</i>（Nom）；但 <i>an Herrn Müller</i>。</div>',
    ex: [
      C('Ich habe den ___ nach dem Weg gefragt.', ['Polizisten', 'Polizist', 'Polizists', 'Polizistes'], '-ist → n-Deklination：Akk den Polizisten。'),
      C('Kennst du den neuen ___?', ['Kollegen', 'Kollege', 'Kolleges', 'Kollegs'], '-e 结尾阳性 → Akk -n。'),
      I('Ich habe gestern mit meinem ___ gesprochen.', 'Nachbarn', 'Nachbar', 'der Nachbar → Dat dem Nachbarn。'),
      I('Das ist das Büro des ___.', 'Präsidenten', 'Präsident', '-ent → Gen des Präsidenten。'),
      C('Sehr geehrter ___ Müller, …', ['Herr', 'Herrn', 'Herren', 'Herrens'], '称呼是 Nom → Herr。'),
      C('Ich schreibe ___ Müller eine E-Mail.', ['Herrn', 'Herr', 'Herren', 'Herrem'], 'Dat 单数 → Herrn。'),
      I('Wir haben dem ___ den Weg erklärt.', 'Touristen', 'Tourist', '-ist → Dat dem Touristen。'),
      C('Wie ist die Bedeutung dieses ___?', ['Namens', 'Namen', 'Name', 'Names'], 'der Name → Gen des Namens（特殊 -ns）。'),
      C('Der Arzt untersucht den ___.', ['Patienten', 'Patient', 'Patients', 'Patiente'], '-ent → Akk den Patienten。'),
      C('Welches Nomen gehört nicht zur n-Deklination?', ['der Lehrer', 'der Junge', 'der Student', 'der Kunde'], 'der Lehrer 是普通阳性名词：den Lehrer, des Lehrers。', { p: 'Welches Nomen gehört nicht dazu?' }),
      I('Die Firma hat einen neuen ___ eingestellt.', 'Praktikanten', 'Praktikant', '-ant → Akk -en。'),
      O('我们采访了一位记者。', 'Wir haben einen Journalisten interviewt.', 'der Journalist → Akk den Journalisten。'),
      O('你帮那个男孩了吗？', 'Hast du dem Jungen geholfen?', 'helfen + Dat：dem Jungen。'),
      I('Er hat keinen ___ an Gott.', 'Glauben', 'Glaube', 'der Glaube → Akk den Glauben。'),
      M([['der Mensch', 'den Menschen'], ['der Herr', 'den Herrn'], ['der Kunde', 'den Kunden'], ['der Bär', 'den Bären'], ['der Name', 'den Namen']], 'Nominativ ↔ Akkusativ', '')
    ]
  });

  /* ---------------- 9 Konnektoren: kausal, konzessiv, konsekutiv ---------------- */
  U.push({
    id: 'b2-satzverbindungen', level: 'B2', n: 9, icon: 'branch',
    title: 'Satzverbindungen', zh: '因果、让步、结果连接词与语序',
    tip:
      '<h4>三种语序</h4>' +
      '<div class="tbl"><table><tr><th>类型</th><th>例词</th><th>语序</th></tr>' +
      '<tr><td>从句连词</td><td>weil, da, obwohl, sodass, während, falls</td><td>动词在末尾</td></tr>' +
      '<tr><td>并列连词（第 0 位）</td><td>denn, aber, und, oder, sondern</td><td>主语 + 动词</td></tr>' +
      '<tr><td>连接副词（第 1 位）</td><td>deshalb, deswegen, trotzdem, dennoch, folglich</td><td>动词 + 主语</td></tr></table></div>' +
      ex('Es regnete, <b>deshalb blieben</b> wir zu Hause.', '下雨了，所以我们待在家。') +
      ex('Er war krank. <b>Trotzdem ging</b> er zur Arbeit.', '他病了，但还是去上班。') +
      '<h4>含义</h4>' +
      '<ul><li>原因：weil, da, denn, <b>nämlich</b>（放句中：<i>Ich habe nämlich …</i>）</li>' +
      '<li>结果：deshalb, daher, <b>sodass</b>, <b>so … dass</b></li>' +
      '<li>让步：obwohl, trotzdem, dennoch</li>' +
      '<li>对比：<b>während</b>（而）, dagegen</li><li>条件：falls, sofern</li></ul>' +
      ex('Der Vortrag war <b>so</b> langweilig, <b>dass</b> viele eingeschlafen sind.', '报告无聊到很多人都睡着了。'),
    ex: [
      C('Es regnete stark, ___ blieben wir zu Hause.', ['deshalb', 'weil', 'denn', 'obwohl'], '后接“动词 + 主语” → 连接副词；表示结果 → deshalb。'),
      C('Er war krank. ___ ging er zur Arbeit.', ['Trotzdem', 'Obwohl', 'Weil', 'Denn'], '让步 + 动词紧随 → trotzdem。'),
      C('Der Vortrag war so langweilig, ___ viele eingeschlafen sind.', ['dass', 'sodass', 'damit', 'weil'], 'so + 形容词 … dass。'),
      C('Es war glatt, ___ er hingefallen ist.', ['sodass', 'deshalb', 'trotzdem', 'damit'], '结果 + 动词在末尾 → sodass。'),
      I('Ich muss heute früh ins Bett, ich habe ___ morgen eine Prüfung.', 'nämlich', null, '补充解释原因，放在句中 → nämlich。'),
      C('___ du Fragen hast, kannst du mich anrufen.', ['Falls', 'Obwohl', 'Sodass', 'Trotzdem'], '条件 → falls。'),
      C('Mein Bruder liebt Sport, ___ ich lieber lese.', ['während', 'trotzdem', 'deshalb', 'sodass'], '对比 → während（而）。'),
      O('他学得很努力，所以通过了考试。', 'Er hat viel gelernt, deshalb hat er die Prüfung bestanden.', 'deshalb 占第一位，动词 hat 紧随。'),
      O('她很累，但还是继续工作。', 'Sie war müde, trotzdem arbeitete sie weiter.', 'trotzdem + 动词 + 主语。'),
      C('Da ich kein Auto habe, ___ mit dem Bus.', ['fahre ich', 'ich fahre', 'fahre', 'ich fahren'], '从句在前 → 主句动词紧跟逗号。'),
      I('Er hatte keine Zeit. ___ kam er zur Party.', ['Trotzdem', 'Dennoch'], '尽管如此', '让步连接副词：Trotzdem / Dennoch。'),
      C('Die Prüfung war schwer, ___ haben alle bestanden.', ['dennoch', 'obwohl', 'sodass', 'weil'], '后接“动词 + 主语” + 让步 → dennoch。'),
      I('Ich bin ___ müde, dass ich sofort einschlafen könnte.', 'so', null, 'so … dass。'),
      C('Wir nehmen einen Schirm mit, ___ es regnen könnte.', ['da', 'trotzdem', 'deshalb', 'sodass'], '动词在末尾 + 原因 → da。'),
      M([['deshalb', '因此'], ['trotzdem', '尽管如此'], ['nämlich', '因为（解释）'], ['falls', '万一 / 如果'], ['sodass', '以致']], 'Konnektor ↔ 含义', '')
    ]
  });

  /* ---------------- 10 Präpositionen mit Genitiv ---------------- */
  U.push({
    id: 'b2-praep-genitiv', level: 'B2', n: 10, icon: 'pin',
    title: 'Präpositionen mit Genitiv', zh: '书面语中的二格介词',
    tip:
      '<div class="tbl"><table><tr><th>介词</th><th>含义</th><th>例</th></tr>' +
      '<tr><td>aufgrund</td><td>由于</td><td>aufgrund eines Unfalls</td></tr>' +
      '<tr><td>infolge</td><td>由于（后果）</td><td>infolge des Regens</td></tr>' +
      '<tr><td>angesichts</td><td>鉴于</td><td>angesichts der Lage</td></tr>' +
      '<tr><td>anlässlich</td><td>值……之际</td><td>anlässlich des Jubiläums</td></tr>' +
      '<tr><td>bezüglich / hinsichtlich</td><td>关于</td><td>bezüglich Ihrer Anfrage</td></tr>' +
      '<tr><td>mithilfe</td><td>借助</td><td>mithilfe eines Wörterbuchs</td></tr>' +
      '<tr><td>innerhalb / außerhalb</td><td>之内 / 之外</td><td>außerhalb der Stadt</td></tr>' +
      '<tr><td>oberhalb / unterhalb</td><td>上方 / 下方</td><td>oberhalb des Dorfes</td></tr>' +
      '<tr><td>zugunsten</td><td>有利于</td><td>zugunsten der Kinder</td></tr>' +
      '<tr><td>ungeachtet</td><td>不顾</td><td>ungeachtet aller Warnungen</td></tr></table></div>' +
      '<div class="note">名词前没有冠词时（无法显示 Genitiv）改用 <b>von + Dat</b>：<i>innerhalb <b>von</b> zwei Wochen</i>。</div>' +
      '<p><b>entlang</b> 后置时接 Akk：<i>den Fluss entlang</i>。</p>',
    ex: [
      C('___ eines Unfalls ist die Straße gesperrt.', ['Aufgrund', 'Trotz', 'Anlässlich', 'Mithilfe'], '原因 → aufgrund。'),
      C('___ seines 60. Geburtstags gab es ein großes Fest.', ['Anlässlich', 'Aufgrund', 'Angesichts', 'Infolge'], '值……之际 → anlässlich。'),
      C('___ eines Wörterbuchs habe ich den Text übersetzt.', ['Mithilfe', 'Infolge', 'Anlässlich', 'Bezüglich'], '借助 → mithilfe。'),
      C('___ Ihrer Anfrage teilen wir Ihnen Folgendes mit.', ['Bezüglich', 'Infolge', 'Mithilfe', 'Außerhalb'], '关于 → bezüglich（商务信函常用）。'),
      I('Angesichts ___ hohen Kosten wurde das Projekt gestoppt.', 'der', null, 'die Kosten（复数）→ Gen der。'),
      I('Die Lieferung erfolgt innerhalb ___ zwei Wochen.', 'von', null, '没有冠词 → innerhalb von + Dat。'),
      C('Das Hotel liegt ___ der Stadt.', ['außerhalb', 'angesichts', 'anlässlich', 'bezüglich'], '位置：在城外 → außerhalb。'),
      I('Infolge ___ starken Regens kam es zu Überschwemmungen.', 'des', null, 'der Regen → Gen des Regens。'),
      C('Wir gingen den Fluss ___.', ['entlang', 'längs', 'neben', 'durch'], '后置 entlang + Akk。'),
      O('鉴于目前的形势，我们必须节约。', 'Angesichts der aktuellen Lage müssen wir sparen.', 'angesichts + Gen；短语占第一位，动词紧随。'),
      O('由于天气原因，航班延误了。', 'Aufgrund des Wetters hatte der Flug Verspätung.', 'aufgrund + Gen。'),
      I('Die Firma spendet zugunsten ___ Kinder in Not.', 'der', null, '复数 Gen → der。'),
      C('___ aller Warnungen ging er bei Sturm segeln.', ['Ungeachtet', 'Aufgrund', 'Anlässlich', 'Mithilfe'], '不顾 → ungeachtet。'),
      C('Oberhalb ___ Dorfes gibt es eine alte Burg.', ['des', 'dem', 'das', 'der'], 'das Dorf → Gen des Dorfes。'),
      M([['aufgrund', '由于'], ['anlässlich', '值…之际'], ['mithilfe', '借助'], ['bezüglich', '关于'], ['angesichts', '鉴于']], 'Präposition ↔ 含义', '')
    ]
  });

  /* ---------------- 11 Nomen-Verb-Verbindungen ---------------- */
  U.push({
    id: 'b2-nvv', level: 'B2', n: 11, icon: 'key',
    title: 'Nomen-Verb-Verbindungen', zh: '名词动词固定搭配',
    tip:
      '<p>名词承载意义，动词几乎“失去”自身含义。书面语、考试（尤其写作）中非常常见。</p>' +
      '<div class="tbl"><table><tr><th>搭配</th><th>≈ 动词</th></tr>' +
      '<tr><td>eine Entscheidung <b>treffen</b></td><td>entscheiden</td></tr>' +
      '<tr><td>eine Frage <b>stellen</b></td><td>fragen</td></tr>' +
      '<tr><td>einen Antrag <b>stellen</b></td><td>beantragen</td></tr>' +
      '<tr><td>Kritik <b>üben</b></td><td>kritisieren</td></tr>' +
      '<tr><td>in Kraft <b>treten</b></td><td>gültig werden</td></tr>' +
      '<tr><td>zur Verfügung <b>stehen / stellen</b></td><td>verfügbar sein / geben</td></tr>' +
      '<tr><td>Rücksicht <b>nehmen</b> auf</td><td>berücksichtigen</td></tr>' +
      '<tr><td>Bescheid <b>geben / sagen</b></td><td>informieren</td></tr>' +
      '<tr><td>eine Rolle <b>spielen</b></td><td>wichtig sein</td></tr>' +
      '<tr><td>Maßnahmen <b>ergreifen</b></td><td>handeln</td></tr>' +
      '<tr><td>in Betracht <b>ziehen</b></td><td>berücksichtigen</td></tr>' +
      '<tr><td>in Frage <b>kommen</b></td><td>möglich sein</td></tr>' +
      '<tr><td>unter Druck <b>setzen</b></td><td>drängen</td></tr>' +
      '<tr><td>Verantwortung <b>übernehmen</b></td><td>verantwortlich sein</td></tr>' +
      '<tr><td>zum Ausdruck <b>bringen</b></td><td>ausdrücken</td></tr>' +
      '<tr><td>Abschied <b>nehmen</b></td><td>sich verabschieden</td></tr></table></div>',
    ex: [
      C('Wir müssen bald eine Entscheidung ___.', ['treffen', 'machen', 'stellen', 'nehmen'], 'eine Entscheidung treffen。'),
      C('Darf ich Ihnen eine Frage ___?', ['stellen', 'machen', 'geben', 'fragen'], 'eine Frage stellen。'),
      C('Das neue Gesetz ___ im Januar in Kraft.', ['tritt', 'kommt', 'geht', 'steht'], 'in Kraft treten = 生效。'),
      C('Der Raum ___ Ihnen ab Montag zur Verfügung.', ['steht', 'stellt', 'ist', 'liegt'], 'jdm. zur Verfügung stehen。'),
      I('Gib mir bitte ___, wenn du ankommst.', 'Bescheid', null, 'Bescheid geben = 告知。'),
      C('Bitte ___ Sie Rücksicht auf die Nachbarn.', ['nehmen', 'geben', 'machen', 'haben'], 'Rücksicht nehmen auf + Akk。'),
      C('Geld ___ für mich keine große Rolle.', ['spielt', 'macht', 'hat', 'gibt'], 'eine Rolle spielen。'),
      I('Die Regierung hat Maßnahmen gegen die Inflation ___.', 'ergriffen', 'ergreifen', 'Maßnahmen ergreifen → Partizip II ergriffen。'),
      C('Diese Lösung kommt für uns nicht in ___.', ['Frage', 'Verfügung', 'Kraft', 'Ordnung'], 'in Frage kommen = 可以考虑。'),
      I('Wir sollten auch diese Möglichkeit in Betracht ___.', 'ziehen', null, 'in Betracht ziehen。'),
      C('Er hat einen Antrag auf ein Stipendium ___.', ['gestellt', 'gemacht', 'getroffen', 'gegeben'], 'einen Antrag stellen。'),
      O('他为这个错误承担了责任。', 'Er hat die Verantwortung für den Fehler übernommen.', 'Verantwortung übernehmen。'),
      O('我们必须做出决定。', 'Wir müssen eine Entscheidung treffen.', 'eine Entscheidung treffen。'),
      C('Der Chef setzt seine Mitarbeiter ständig unter ___.', ['Druck', 'Kraft', 'Frage', 'Ordnung'], 'unter Druck setzen。'),
      M([['eine Entscheidung treffen', 'entscheiden'], ['Kritik üben', 'kritisieren'], ['eine Frage stellen', 'fragen'], ['Abschied nehmen', 'sich verabschieden'], ['zum Ausdruck bringen', 'ausdrücken']], 'Nomen-Verb-Verbindung ↔ Verb', '')
    ]
  });

  /* ---------------- 12 Relativsätze erweitert ---------------- */
  U.push({
    id: 'b2-relativ', level: 'B2', n: 12, icon: 'quote',
    title: 'Relativsätze erweitert', zh: 'wer, was, wo(r)-, dessen/deren',
    tip:
      '<h4>wer … (der) —— 泛指“凡是……的人”</h4>' +
      ex('<b>Wer</b> zu spät kommt, (der) muss draußen warten.', '谁迟到谁就得在外面等。') +
      ex('<b>Wen</b> ich nicht kenne, <b>dem</b> öffne ich nicht.', '格不同时第二部分不能省略') +
      '<h4>was</h4>' +
      '<p>用于 alles, nichts, etwas, vieles, 最高级中性（das Beste），以及<b>指代整个句子</b>：</p>' +
      ex('Er hat bestanden, <b>was</b> alle überrascht hat.', '他通过了，这让所有人都很惊讶。') +
      '<h4>wo(r) + 介词</h4>' +
      '<p>先行词是 was / alles / etwas 或整句时，介词与 wo(r)- 合并：</p>' +
      ex('Das ist etwas, <b>worüber</b> ich mich freue.', '') +
      '<h4>wo / woher / wohin —— 地点</h4>' +
      ex('die Stadt, <b>wo</b> (= in der) er aufgewachsen ist', '') +
      '<h4>Genitiv</h4>' +
      ex('die Autorin, <b>deren</b> Roman ich lese · der Professor, mit <b>dessen</b> Hilfe …', ''),
    ex: [
      C('___ zu spät kommt, muss draußen warten.', ['Wer', 'Der', 'Was', 'Wen'], '泛指人 + 从句中作主语 → wer。'),
      C('Das Beste, ___ du tun kannst, ist schlafen.', ['was', 'das', 'dem', 'wo'], '中性最高级后 → was。'),
      C('Er hat die Prüfung bestanden, ___ alle überrascht hat.', ['was', 'das', 'die', 'der'], '指代整个句子 → was。'),
      C('Es gibt nichts, ___ ich mehr hasse.', ['was', 'das', 'wo', 'worüber'], 'nichts 后 → was。'),
      C('Das ist etwas, ___ ich mich sehr freue.', ['worüber', 'wovon', 'was', 'darüber'], 'sich freuen über + etwas → worüber。'),
      I('Die Stadt, ___ ich komme, liegt am Rhein.', ['woher', 'aus der'], 'kommen aus', '来自某地 → woher / aus der。'),
      C('Die Autorin, ___ Roman ich gerade lese, kommt aus Graz.', ['deren', 'dessen', 'der', 'die'], '阴性先行词 + 所属 → deren。'),
      C('Der Professor, mit ___ Hilfe ich die Arbeit geschrieben habe, …', ['dessen', 'deren', 'dem', 'der'], '阳性先行词 + 所属 → dessen。'),
      I('___ einmal gelogen hat, dem glaubt man nicht.', 'Wer', null, '泛指人，从句主语 → Wer。'),
      C('Wen ich nicht kenne, ___ öffne ich die Tür nicht.', ['dem', 'den', 'der', 'wem'], 'jdm. die Tür öffnen → Dat dem。'),
      O('我们去他长大的那个城市。', 'Wir fahren in die Stadt, wo er aufgewachsen ist.', '地点 → wo。'),
      O('他说的一切都是真的。', 'Alles, was er gesagt hat, ist wahr.', 'alles → was。'),
      I('Die Nachbarn, ___ Kinder sehr laut sind, ziehen bald aus.', 'deren', null, '复数先行词 + 所属 → deren。'),
      C('Ich habe viel gelernt, ___ ich dankbar bin.', ['wofür', 'für das', 'was', 'dafür'], 'dankbar sein für + 整句 → wofür。'),
      M([['alles, …', 'was'], ['die Stadt, …', 'wo'], ['der Mann, …', 'der'], ['etwas, … ich mich freue', 'worüber'], ['Wer …,', 'der …']], 'Bezugswort ↔ Relativwort', '')
    ]
  });
})();
