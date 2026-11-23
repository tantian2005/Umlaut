/* B2 units, part 2 — same helpers as b1.js */
(function () {
  'use strict';
  var U = window.GRAMMATIK_UNITS = window.GRAMMATIK_UNITS || [];
  function C(q, o, e, x) { return Object.assign({ t: 'c', q: q, o: o, e: e }, x || {}); }
  function I(q, a, h, e, x) { return Object.assign({ t: 'i', q: q, a: a, h: h, e: e }, x || {}); }
  function O(zh, a, e, x) { return Object.assign({ t: 'o', zh: zh, a: a, e: e }, x || {}); }
  function M(pairs, p, e) { return { t: 'm', pairs: pairs, p: p, e: e }; }
  function ex(de, zh) { return '<div class="ex"><p lang="de">' + de + '</p>' + (zh ? '<p class="zh">' + zh + '</p>' : '') + '</div>'; }

  /* ---------------- Infinitiv Perfekt & Passiv ---------------- */
  U.push({
    id: 'b2-infinitiv', level: 'B2', n: 1.5, icon: 'clock',
    title: 'Infinitiv Perfekt & Passiv', zh: '完成式与被动式的 zu 不定式',
    tip:
      '<h4>四种 zu 不定式</h4>' +
      '<div class="tbl"><table><tr><th></th><th>同时 / 之后</th><th>之前（已完成）</th></tr>' +
      '<tr><td>主动</td><td>ein<b>zu</b>laden</td><td>eingeladen <b>zu haben</b></td></tr>' +
      '<tr><td>被动</td><td>eingeladen <b>zu werden</b></td><td>eingeladen <b>worden zu sein</b></td></tr></table></div>' +
      '<p>完成式：Partizip II + zu + <b>haben / sein</b>（与 Perfekt 相同的助动词）。</p>' +
      ex('Ich freue mich, Sie <b>kennengelernt zu haben</b>.', '很高兴认识了您。（认识已经发生）') +
      ex('Sie bedauert, zu spät <b>gekommen zu sein</b>.', '她很遗憾来晚了。') +
      ex('Er hofft, zur Party <b>eingeladen zu werden</b>.', '他希望被邀请参加派对。') +
      ex('Sie ging, ohne <b>gefragt zu werden</b>.', '没人问她，她就走了。') +
      '<div class="note">情态动词后不用 zu：<i>Das Kind möchte gelobt <b>werden</b>.</i></div>',
    ex: [
      C('Ich freue mich, Sie ___.', ['kennengelernt zu haben', 'kennenzulernen haben', 'zu kennengelernt haben', 'kennengelernt haben zu'], '已发生 → Partizip II + zu haben。'),
      C('Er behauptet, den Unfall nicht ___.', ['gesehen zu haben', 'zu sehen haben', 'gesehen zu sein', 'sehen zu haben'], 'sehen 用 haben → gesehen zu haben。'),
      I('Sie bedauert, so spät gekommen zu ___.', 'sein', null, 'kommen 用 sein → gekommen zu sein。'),
      I('Ich bin froh, die Prüfung bestanden zu ___.', 'haben', null, 'bestehen 用 haben → bestanden zu haben。'),
      C('Das Kind möchte gelobt ___.', ['werden', 'zu werden', 'worden', 'sein'], '情态动词 + 被动不定式（不加 zu）。'),
      C('Er hofft, zur Party eingeladen ___.', ['zu werden', 'werden', 'zu haben', 'worden zu'], '被动、同时 → Partizip II + zu werden。'),
      I('Sie ging, ohne gefragt zu ___.', 'werden', null, 'ohne + 被动 zu 不定式。'),
      C('Er ist stolz darauf, als Erster angekommen ___.', ['zu sein', 'zu haben', 'sein zu', 'worden zu sein'], 'ankommen 用 sein → angekommen zu sein。'),
      O('我很遗憾没能来。', 'Ich bedauere, nicht gekommen zu sein.', 'gekommen zu sein（已发生）。'),
      O('他希望被录用。', 'Er hofft, eingestellt zu werden.', '被动 → eingestellt zu werden。'),
      I('Sie erinnert sich nicht, das Licht ausgemacht zu ___.', 'haben', null, 'ausmachen 用 haben。'),
      C('Es ist ärgerlich, nicht informiert ___.', ['worden zu sein', 'zu werden worden', 'geworden zu sein', 'zu sein worden'], '被动 + 已发生 → Partizip II + worden zu sein。'),
      C('Ich erinnere mich, ihn schon einmal ___.', ['gesehen zu haben', 'gesehen zu sein', 'zu sehen gehabt', 'sehen zu haben'], '已发生 → gesehen zu haben。'),
      I('Der Minister bestreitet, Geld angenommen zu ___.', 'haben', null, 'annehmen 用 haben。'),
      M([['Aktiv, gleichzeitig', 'einzuladen'], ['Aktiv, vorzeitig', 'eingeladen zu haben'], ['Passiv, gleichzeitig', 'eingeladen zu werden'], ['Passiv, vorzeitig', 'eingeladen worden zu sein']], 'Form ↔ Infinitiv', '')
    ]
  });

  /* ---------------- Adjektive mit Präpositionen ---------------- */
  U.push({
    id: 'b2-adjpraep', level: 'B2', n: 11.5, icon: 'tag',
    title: 'Adjektive mit Präpositionen', zh: '形容词的固定介词',
    tip:
      '<div class="tbl"><table><tr><th>介词</th><th>形容词</th></tr>' +
      '<tr><td>auf + A</td><td>stolz, gespannt, neugierig, angewiesen, böse, eifersüchtig</td></tr>' +
      '<tr><td>mit + D</td><td>zufrieden, einverstanden, fertig, verheiratet, befreundet</td></tr>' +
      '<tr><td>von + D</td><td>abhängig, überzeugt, begeistert, enttäuscht, müde</td></tr>' +
      '<tr><td>an + D</td><td>interessiert, beteiligt, schuld, reich</td></tr>' +
      '<tr><td>für + A</td><td>bekannt, verantwortlich, dankbar, geeignet, typisch</td></tr>' +
      '<tr><td>über + A</td><td>froh, traurig, glücklich, erstaunt, verärgert</td></tr>' +
      '<tr><td>zu + D</td><td>bereit, fähig, freundlich</td></tr></table></div>' +
      '<h4>与从句连用：da(r) + 介词</h4>' +
      ex('Ich bin froh <b>darüber</b>, dass alles geklappt hat.', '一切顺利，我很高兴。') +
      ex('Bist du <b>dazu</b> bereit, mehr zu arbeiten?', ''),
    ex: [
      C('Die Eltern sind sehr stolz ___ ihre Tochter.', ['auf', 'über', 'an', 'für'], 'stolz auf + Akk。'),
      C('Bist du zufrieden ___ deinem neuen Job?', ['mit', 'über', 'von', 'für'], 'zufrieden mit + Dat。'),
      C('Wer ist ___ dem Unfall schuld?', ['an', 'für', 'über', 'von'], 'schuld an + Dat。'),
      I('Ich bin gespannt ___ das Ergebnis.', 'auf', null, 'gespannt auf + Akk。'),
      I('Viele Studenten sind finanziell ___ ihren Eltern abhängig.', 'von', null, 'abhängig von + Dat。'),
      C('Wer ist ___ das Projekt verantwortlich?', ['für', 'über', 'an', 'mit'], 'verantwortlich für + Akk。'),
      C('Sie ist sehr interessiert ___ moderner Kunst.', ['an', 'für', 'auf', 'über'], 'interessiert an + Dat（注意：sich interessieren für）。'),
      I('Wir sind ___ dem Vorschlag einverstanden.', 'mit', null, 'einverstanden mit + Dat。'),
      C('Ich bin dir sehr dankbar ___ deine Hilfe.', ['für', 'über', 'an', 'zu'], 'dankbar für + Akk。'),
      C('Ich bin froh ___, dass alles geklappt hat.', ['darüber', 'worüber', 'dafür', 'daran'], 'froh über → 接从句时用 darüber。'),
      C('Heidelberg ist bekannt ___ seine Altstadt.', ['für', 'durch', 'über', 'an'], 'bekannt für + Akk。'),
      O('我们对这个结果很失望。', 'Wir sind von dem Ergebnis enttäuscht.', 'enttäuscht von + Dat。', { alt: ['Wir sind enttäuscht von dem Ergebnis.'] }),
      O('他对自己的想法深信不疑。', 'Er ist von seiner Idee überzeugt.', 'überzeugt von + Dat。', { alt: ['Er ist überzeugt von seiner Idee.'] }),
      I('Bist du bereit ___ einem Neuanfang?', 'zu', null, 'bereit zu + Dat。'),
      M([['stolz', 'auf'], ['zufrieden', 'mit'], ['interessiert', 'an'], ['verantwortlich', 'für'], ['abhängig', 'von']], 'Adjektiv ↔ Präposition', '')
    ]
  });

  /* ---------------- Das Wort „es“ ---------------- */
  U.push({
    id: 'b2-es', level: 'B2', n: 13, icon: 'puzzle',
    title: 'Das Wort „es“', zh: 'es 的五种用法',
    tip:
      '<div class="tbl"><table><tr><th>用法</th><th>例句</th><th>能省略吗？</th></tr>' +
      '<tr><td>代词</td><td>Das Kind weint. <b>Es</b> hat Hunger.</td><td>否</td></tr>' +
      '<tr><td>无人称主语</td><td><b>Es</b> regnet. <b>Es</b> gibt … <b>Es</b> geht um …</td><td>否</td></tr>' +
      '<tr><td>位置填充（只在第 1 位）</td><td><b>Es</b> kamen viele Gäste.</td><td>其他成分在第 1 位时省略</td></tr>' +
      '<tr><td>关联词（指后面的从句）</td><td>Ich finde <b>es</b> gut, dass …</td><td>从句在前时省略</td></tr>' +
      '<tr><td>无主语被动</td><td><b>Es</b> wird getanzt.</td><td>其他成分在第 1 位时省略</td></tr></table></div>' +
      ex('Es kamen viele Gäste. → Gestern <b>kamen</b> viele Gäste.', '动词与真正的主语（Gäste，复数）一致') +
      ex('Es freut mich, dass du da bist. → Dass du da bist, freut mich.', '') +
      ex('Hier wird nicht geraucht.', '无主语被动，没有 es'),
    ex: [
      C('___ regnet seit Stunden.', ['Es', 'Er', 'Das', 'Sie'], '天气 → 无人称 es。'),
      C('Heute ___ viel gelacht.', ['wird', 'wird es', 'es wird', 'werden'], '无主语被动：Heute 在第 1 位 → es 省略。'),
      C('___ kamen viele Gäste zur Party.', ['Es', 'Sie', 'Er', 'Das'], '位置填充 es；真正主语是 viele Gäste。'),
      C('Gestern ___ viele Gäste.', ['kamen', 'kam es', 'es kamen', 'kam'], 'Gestern 在第 1 位 → 无 es；动词随主语 Gäste 用复数。'),
      I('In dem Buch geht ___ um eine Liebesgeschichte.', 'es', null, '固定表达：es geht um …'),
      C('Ich finde ___ toll, dass du mitkommst.', ['es', 'sie', 'ihn', 'er'], '关联词 es 指代后面的 dass 从句。'),
      C('Dass du gekommen bist, freut ___ sehr.', ['mich', 'es mich', 'mich es', 'es'], '从句在前 → 关联词 es 省略。'),
      I('Wie geht ___ dir?', 'es', null, '固定表达：Wie geht es dir?'),
      C('Bei diesem Problem handelt ___ sich um einen Fehler im System.', ['es', 'er', 'das', 'sie'], '固定表达：es handelt sich um …'),
      C('___ ist wichtig, regelmäßig zu üben.', ['Es', 'Sie', 'Er', 'Man'], '关联词 es 指代后面的 zu 不定式。'),
      O('这里有很多好餐厅。', 'Es gibt hier viele gute Restaurants.', 'es gibt + Akk。', { alt: ['Hier gibt es viele gute Restaurants.'] }),
      O('你来了我很高兴。', 'Es freut mich, dass du gekommen bist.', '关联词 es + dass 从句。', { alt: ['Mich freut es, dass du gekommen bist.'] }),
      I('___ klingelt an der Tür.', 'Es', null, '无人称：es klingelt。'),
      C('Hier ___ nicht geraucht.', ['wird', 'wird es', 'es wird', 'werden'], '无主语被动：Hier 在第 1 位 → 无 es。'),
      M([['Es regnet.', '无人称主语'], ['Es kamen viele Leute.', '位置填充'], ['Ich finde es gut, dass …', '关联词'], ['Das Kind weint. Es …', '代词']], 'Satz ↔ Funktion', '')
    ]
  });

  /* ---------------- Modalpartikeln ---------------- */
  U.push({
    id: 'b2-partikeln', level: 'B2', n: 14, icon: 'spark',
    title: 'Modalpartikeln', zh: '语气词：doch, mal, ja, denn, halt',
    tip:
      '<p>语气词不改变句子的事实内容，只表达说话人的态度。它们放在中场、不重读。</p>' +
      '<div class="tbl"><table><tr><th>词</th><th>语气</th><th>例句</th></tr>' +
      '<tr><td><b>denn</b></td><td>疑问句：关心、好奇</td><td>Wo warst du <b>denn</b>?</td></tr>' +
      '<tr><td><b>mal</b></td><td>缓和请求</td><td>Kannst du <b>mal</b> kommen?</td></tr>' +
      '<tr><td><b>doch</b></td><td>鼓励、催促、提醒</td><td>Komm <b>doch</b> mit! Das weißt du <b>doch</b>!</td></tr>' +
      '<tr><td><b>ja</b></td><td>惊讶；众所周知</td><td>Das ist <b>ja</b> toll! Du weißt <b>ja</b> …</td></tr>' +
      '<tr><td><b>halt / eben</b></td><td>无奈接受</td><td>Das ist <b>halt</b> so.</td></tr>' +
      '<tr><td><b>eigentlich</b></td><td>顺便一问</td><td>Wie heißt du <b>eigentlich</b>?</td></tr>' +
      '<tr><td><b>schon</b></td><td>安慰、有信心</td><td>Das klappt <b>schon</b>.</td></tr>' +
      '<tr><td><b>bloß / nur</b></td><td>警告</td><td>Mach das <b>bloß</b> nicht!</td></tr></table></div>' +
      '<h4>回答否定问句用 doch</h4>' +
      ex('Kommst du nicht mit? – <b>Doch</b>, ich komme mit.', '你不来吗？——不，我来。'),
    ex: [
      C('Wo warst du ___? Ich habe dich überall gesucht!', ['denn', 'doch', 'mal', 'eben'], '疑问句中表示关心 / 着急 → denn。'),
      C('Komm ___ mit! Es wird bestimmt lustig.', ['doch', 'denn', 'ja', 'eben'], '鼓励对方 → doch。'),
      C('Kannst du ___ kurz das Fenster aufmachen?', ['mal', 'denn', 'ja', 'eben'], '缓和请求 → mal。'),
      C('Das ist ___ eine tolle Überraschung!', ['ja', 'denn', 'mal', 'bloß'], '惊讶 → ja。'),
      C('Hast du keine Zeit? – ___, ich habe Zeit.', ['Doch', 'Ja', 'Nein', 'Schon'], '反驳否定问句 → Doch。'),
      C('Wie heißt du ___? Ich habe deinen Namen vergessen.', ['eigentlich', 'mal', 'doch', 'eben'], '顺便一问 → eigentlich。'),
      C('Ich habe den Bus verpasst. – Tja, das ist ___ so.', ['eben', 'denn', 'mal', 'ja'], '无奈接受 → eben / halt。'),
      C('Keine Sorge, das klappt ___!', ['schon', 'denn', 'mal', 'eben'], '安慰 → schon。'),
      C('Sei ___ vorsichtig! Die Straße ist glatt.', ['bloß', 'denn', 'eben', 'eigentlich'], '警告 → bloß。'),
      I('Du weißt ___, dass ich keinen Fisch esse.', ['ja', 'doch'], 'bekannt', '对方已知的事 → ja / doch。'),
      O('你到底想要什么？', 'Was willst du denn?', '疑问句 + denn。'),
      O('你过来一下嘛！', 'Komm doch mal her!', 'doch mal：友好的催促。'),
      C('Ich kann nicht kommen, ich bin ___ krank.', ['halt', 'denn', 'mal', 'bloß'], '无法改变的事实 → halt。'),
      C('Was ist ___ hier los?', ['denn', 'mal', 'eben', 'schon'], '疑问句中的惊讶 → denn。'),
      M([['denn', '疑问：关心 / 好奇'], ['mal', '缓和请求'], ['doch', '鼓励 / 反驳'], ['ja', '惊讶 / 已知'], ['halt', '无奈接受']], 'Partikel ↔ Funktion', '')
    ]
  });

  /* ---------------- Präfixverben ---------------- */
  U.push({
    id: 'b2-praefix', level: 'B2', n: 15, icon: 'layers',
    title: 'Präfixverben', zh: '可分与不可分前缀',
    tip:
      '<div class="tbl"><table><tr><th></th><th>不可分</th><th>可分</th></tr>' +
      '<tr><td>前缀</td><td>be-, ge-, er-, ver-, zer-, ent-, emp-, miss-</td><td>ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-</td></tr>' +
      '<tr><td>重音</td><td>在词干</td><td>在前缀</td></tr>' +
      '<tr><td>Partizip II</td><td>verstanden（无 ge-）</td><td>an<b>ge</b>kommen</td></tr>' +
      '<tr><td>zu 不定式</td><td>zu verstehen</td><td>an<b>zu</b>kommen</td></tr></table></div>' +
      '<h4>两可前缀：über-, um-, durch-, unter-, wieder-</h4>' +
      '<p>可分 = 重音在前缀，多为<b>字面</b>意思；不可分 = 重音在词干，多为<b>引申</b>意思。</p>' +
      '<div class="tbl"><table><tr><th>动词</th><th>可分</th><th>不可分</th></tr>' +
      '<tr><td>übersetzen</td><td>摆渡：setzt über, übergesetzt</td><td>翻译：übersetzt, übersetzt</td></tr>' +
      '<tr><td>umfahren</td><td>撞倒：fährt um, umgefahren</td><td>绕行：umfährt, umfahren</td></tr>' +
      '<tr><td>wiederholen</td><td>取回：holt wieder, wiedergeholt</td><td>重复：wiederholt, wiederholt</td></tr>' +
      '<tr><td>durchschauen</td><td>透过看：schaut durch</td><td>看穿：durchschaut</td></tr></table></div>',
    ex: [
      C('Der Lehrer hat die Frage ___.', ['wiederholt', 'wiedergeholt', 'gewiederholt', 'wiederholen'], '“重复”→ 不可分，Partizip II 无 ge-。'),
      C('Sie hat den Brief ins Englische ___.', ['übersetzt', 'übergesetzt', 'geübersetzt', 'übersetzen'], '“翻译”→ 不可分：übersetzt。'),
      I('Er ___ das Buch ins Deutsche.', 'übersetzt', 'übersetzen', '“翻译”→ 不可分，不拆开。'),
      C('Wegen der Baustelle haben wir die Stadt ___.', ['umfahren', 'umgefahren', 'geumfahren', 'umfahrt'], '“绕行”→ 不可分：umfahren。'),
      C('Der betrunkene Fahrer hat ein Verkehrsschild ___.', ['umgefahren', 'umfahren', 'geumfahren', 'umgefahrt'], '“撞倒”→ 可分：umgefahren。'),
      C('Wann ___ der Film ___?', ['fängt / an', 'an / fängt', 'anfängt / an', 'fängt / auf'], '可分动词：fängt … an。'),
      C('Er hat mir die Wahrheit ___.', ['verschwiegen', 'geverschwiegen', 'verschweigt', 'verschwieg'], 'ver- 不可分 → 无 ge-。'),
      I('Ich habe vergessen, das Licht ___.', 'auszumachen', 'ausmachen', '可分：zu 插在中间。'),
      I('Wir haben uns lange ___.', 'unterhalten', 'unterhalten', '“聊天”→ 不可分：Partizip II = unterhalten。'),
      C('Ich ___ dir den Fehler.', ['verzeihe', 'zeihe ver', 'verzeihen', 'geverzeihe'], 'ver- 不可分。'),
      O('他很快看穿了我的计划。', 'Er hat meinen Plan schnell durchschaut.', '“看穿”→ 不可分：durchschaut。'),
      O('请把门关上！', 'Mach bitte die Tür zu!', '可分动词 zumachen：前缀放句末。', { alt: ['Mach die Tür bitte zu!'] }),
      C('Der Schüler hat das Wort falsch ___.', ['ausgesprochen', 'aussprochen', 'gesprochen aus', 'ausgesprecht'], '可分 aussprechen → aus-ge-sprochen。'),
      I('Ich habe ihn am Bahnhof ___.', 'abgeholt', 'abholen', '可分：ab-ge-holt。'),
      M([['übersetzen (翻译)', 'er übersetzt'], ['übersetzen (摆渡)', 'er setzt über'], ['umfahren (绕行)', 'er umfährt'], ['umfahren (撞倒)', 'er fährt um'], ['wiederholen (取回)', 'er holt wieder']], 'Bedeutung ↔ Form', '')
    ]
  });
})();
