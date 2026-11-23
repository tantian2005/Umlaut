/* B1 units, part 2 — same helpers as b1.js. Fractional n places a unit between existing ones. */
(function () {
  'use strict';
  var U = window.GRAMMATIK_UNITS = window.GRAMMATIK_UNITS || [];
  function C(q, o, e, x) { return Object.assign({ t: 'c', q: q, o: o, e: e }, x || {}); }
  function I(q, a, h, e, x) { return Object.assign({ t: 'i', q: q, a: a, h: h, e: e }, x || {}); }
  function O(zh, a, e, x) { return Object.assign({ t: 'o', zh: zh, a: a, e: e }, x || {}); }
  function M(pairs, p, e) { return { t: 'm', pairs: pairs, p: p, e: e }; }
  function ex(de, zh) { return '<div class="ex"><p lang="de">' + de + '</p>' + (zh ? '<p class="zh">' + zh + '</p>' : '') + '</div>'; }

  /* ---------------- Satzstellung ---------------- */
  U.push({
    id: 'b1-satzstellung', level: 'B1', n: 2.5, icon: 'sort',
    title: 'Satzstellung', zh: '语序：动词第二位、TeKaMoLo、宾语顺序',
    tip:
      '<h4>主句：变位动词永远在第二位</h4>' +
      ex('Ich <b class="k">fahre</b> morgen nach Berlin. → Morgen <b class="k">fahre</b> ich nach Berlin.', '第一位可以是任何成分，主语就移到动词后') +
      '<h4>句框（Satzklammer）</h4>' +
      '<p>情态动词、完成时、可分动词：第二部分放句末。</p>' +
      ex('Ich <b>habe</b> gestern einen Film <b>gesehen</b>. Der Zug <b>fährt</b> um acht <b>ab</b>.', '') +
      '<h4>中场顺序：TeKaMoLo</h4>' +
      '<div class="tbl"><table><tr><th>Te</th><th>Ka</th><th>Mo</th><th>Lo</th></tr>' +
      '<tr><td>何时</td><td>为何</td><td>如何</td><td>何地</td></tr>' +
      '<tr><td>morgen</td><td>wegen der Arbeit</td><td>mit dem Zug</td><td>nach Berlin</td></tr></table></div>' +
      '<h4>两个宾语</h4>' +
      '<ul><li>两个名词：<b>Dat 在 Akk 前</b> —— <i>Ich gebe dem Mann das Buch.</i></li>' +
      '<li>两个代词：<b>Akk 在 Dat 前</b> —— <i>Ich gebe es ihm.</i></li>' +
      '<li>代词 + 名词：<b>代词在前</b> —— <i>Ich gebe ihm das Buch.</i></li></ul>' +
      '<h4>nicht 的位置</h4>' +
      '<p>否定整句时 nicht 靠后，但在句框第二部分和方式 / 地点补足语之前：<i>Ich habe den Film <b>nicht</b> gesehen.</i></p>',
    ex: [
      O('我明天坐火车去柏林。', 'Ich fahre morgen mit dem Zug nach Berlin.', 'TeKaMoLo：morgen（Te）– mit dem Zug（Mo）– nach Berlin（Lo）。', { alt: ['Morgen fahre ich mit dem Zug nach Berlin.'] }),
      O('昨天我在家看了一部电影。', 'Gestern habe ich zu Hause einen Film gesehen.', 'gestern 在第一位 → 动词 habe 第二位，主语 ich 紧随。', { alt: ['Ich habe gestern zu Hause einen Film gesehen.'] }),
      C('Ich gebe ___.', ['dem Mann das Buch', 'das Buch dem Mann', 'der Mann das Buch', 'dem Mann dem Buch'], '两个名词宾语：Dat 在 Akk 前。'),
      C('Das Buch? Ich gebe ___ morgen.', ['es ihm', 'ihm es', 'es er', 'ihn es'], '两个代词：Akk 在 Dat 前。'),
      C('Kannst du ___ zeigen?', ['mir den Weg', 'den Weg mir', 'mich den Weg', 'den Weg mich'], '代词在名词前。'),
      C('Morgen ___ nach Hamburg.', ['fahren wir', 'wir fahren', 'fahren', 'wir fahrt'], 'Morgen 占第一位 → 动词第二位，主语随后。'),
      C('Ich habe ___.', ['den Film nicht gesehen', 'den nicht Film gesehen', 'den Film gesehen nicht', 'gesehen den Film nicht'], '否定整句：nicht 放在 Partizip II 之前。'),
      O('他今天因为生病不能来。', 'Er kann heute wegen einer Krankheit nicht kommen.', 'heute（Te）在 wegen…（Ka）前；nicht 在不定式前。', { alt: ['Heute kann er wegen einer Krankheit nicht kommen.'] }),
      C('Der Zug ___ um acht Uhr ___.', ['fährt / ab', 'ab / fährt', 'abfährt / los', 'fahrt / ab'], '可分动词：变位部分第二位，前缀放句末。'),
      I('Wann ___ du morgen an?', 'kommst', 'ankommen', '特殊疑问句：疑问词第一位，动词第二位，前缀 an 在句末。'),
      O('你能把书给我吗？', 'Kannst du mir das Buch geben?', '代词 mir 在名词 das Buch 前。'),
      O('我已经告诉他了。', 'Ich habe es ihm schon gesagt.', '两个代词：es（Akk）在 ihm（Dat）前。'),
      C('Leider ___.', ['habe ich heute keine Zeit', 'ich habe heute keine Zeit', 'heute ich habe keine Zeit', 'habe heute ich keine Zeit'], 'Leider 占第一位 → 动词 + 主语。'),
      O('我们周末不去看父母。', 'Am Wochenende besuchen wir unsere Eltern nicht.', '否定整句：nicht 放在句末。', { alt: ['Wir besuchen am Wochenende unsere Eltern nicht.'] }),
      M([['Te', 'wann? – morgen'], ['Ka', 'warum? – wegen des Regens'], ['Mo', 'wie? – mit dem Bus'], ['Lo', 'wo / wohin? – nach Hause']], 'TeKaMoLo', '中场顺序：时间 – 原因 – 方式 – 地点。')
    ]
  });

  /* ---------------- Komparativ & Superlativ ---------------- */
  U.push({
    id: 'b1-komparativ', level: 'B1', n: 5.5, icon: 'trend',
    title: 'Komparativ & Superlativ', zh: '比较级与最高级',
    tip:
      '<h4>构成</h4>' +
      '<div class="tbl"><table><tr><th>原级</th><th>比较级</th><th>最高级</th></tr>' +
      '<tr><td>schnell</td><td>schnell<b>er</b></td><td>am schnell<b>sten</b></td></tr>' +
      '<tr><td>alt</td><td><b>ä</b>lter</td><td>am <b>ä</b>lt<b>esten</b></td></tr>' +
      '<tr><td>groß</td><td>gr<b>ö</b>ßer</td><td>am gr<b>ö</b>ßten</td></tr>' +
      '<tr><td><b class="k">gut</b></td><td>besser</td><td>am besten</td></tr>' +
      '<tr><td><b class="k">viel</b></td><td>mehr</td><td>am meisten</td></tr>' +
      '<tr><td><b class="k">gern</b></td><td>lieber</td><td>am liebsten</td></tr>' +
      '<tr><td><b class="k">hoch</b></td><td>höher</td><td>am höchsten</td></tr>' +
      '<tr><td><b class="k">nah</b></td><td>näher</td><td>am nächsten</td></tr></table></div>' +
      '<p>单音节形容词 a/o/u 常变元音：alt, jung, kurz, lang, warm, kalt, arm。以 -t, -d, -s, -ß, -z 结尾时最高级加 -est-：<i>am kürzesten</i>。</p>' +
      '<h4>比较</h4>' +
      '<ul><li>相同：<b>so … wie</b> —— <i>Anna ist so groß wie Eva.</i></li>' +
      '<li>不同：<b>-er als</b> —— <i>Berlin ist größer als München.</i></li>' +
      '<li>越来越：<b>immer + 比较级</b> —— <i>Es wird immer kälter.</i></li></ul>' +
      '<h4>作定语时照常加词尾</h4>' +
      ex('der ältere Bruder · ein schnelleres Auto · das beste Buch', ''),
    ex: [
      C('Mein Bruder ist zwei Jahre ___ als ich.', ['älter', 'alter', 'mehr alt', 'ältere'], 'alt → älter（变元音）。'),
      C('Berlin ist größer ___ München.', ['als', 'wie', 'so', 'dann'], '不同程度 → 比较级 + als。'),
      C('Anna ist so groß ___ ihre Schwester.', ['wie', 'als', 'so', 'wenn'], '相同程度 → so … wie。'),
      I('Ich trinke gern Tee, aber ___ trinke ich Kaffee.', 'lieber', 'gern, Komparativ', 'gern → lieber → am liebsten。'),
      I('Das ist das ___ Buch, das ich je gelesen habe.', 'beste', 'gut, Superlativ', 'gut → best-；das + Nom → -e。'),
      C('Im Sommer sind die Tage am ___.', ['längsten', 'langsten', 'längste', 'längstem'], '谓语最高级：am + -sten。'),
      I('Die Zugspitze ist der ___ Berg Deutschlands.', 'höchste', 'hoch, Superlativ', 'hoch → höchst-；der + Nom → -e。'),
      C('Ich habe ein ___ Auto gekauft.', ['schnelleres', 'schneller', 'schnellere', 'schnellerer'], '比较级作定语仍加词尾：ein + 中性 Akk → -es。'),
      I('Es wird ___ kälter.', 'immer', '越来越', 'immer + 比较级 = 越来越……'),
      C('Wer läuft ___?', ['am schnellsten', 'der schnellste', 'am schnellste', 'schnellsten'], '修饰动词的最高级 → am …sten。'),
      O('今天比昨天暖和。', 'Heute ist es wärmer als gestern.', 'warm → wärmer + als。', { alt: ['Es ist heute wärmer als gestern.'] }),
      O('我最喜欢吃面条。', 'Am liebsten esse ich Nudeln.', 'gern → am liebsten。', { alt: ['Ich esse am liebsten Nudeln.'] }),
      I('Ich habe ___ Geld als du.', 'mehr', 'viel', 'viel → mehr（不变格）。'),
      C('Die ___ Haltestelle ist dort drüben.', ['nächste', 'nahste', 'nähere', 'nächsten'], 'nah → nächst-；die + Nom → -e。'),
      M([['gut', 'besser'], ['viel', 'mehr'], ['gern', 'lieber'], ['hoch', 'höher'], ['nah', 'näher']], 'Positiv ↔ Komparativ', '不规则比较级。')
    ]
  });

  /* ---------------- Futur I & werden ---------------- */
  U.push({
    id: 'b1-futur', level: 'B1', n: 7.5, icon: 'forward',
    title: 'Futur I & werden', zh: '将来时与 werden 的三种用法',
    tip:
      '<h4>Futur I = werden + 不定式</h4>' +
      '<div class="tbl"><table><tr><td>ich werde</td><td>wir werden</td></tr><tr><td>du <b>wirst</b></td><td>ihr werdet</td></tr><tr><td>er/sie/es <b>wird</b></td><td>sie/Sie werden</td></tr></table></div>' +
      '<ul><li>计划 / 承诺：<i>Ich werde dir helfen.</i></li><li>预测：<i>Morgen wird es regnen.</i></li>' +
      '<li>对现在的推测：<i>Er wird wohl krank sein.</i></li></ul>' +
      '<div class="note">口语中表示将来更常用 <b>Präsens + 时间词</b>：<i>Morgen fahre ich nach Wien.</i></div>' +
      '<h4>werden 的三种身份</h4>' +
      '<div class="tbl"><table><tr><th>用法</th><th>结构</th><th>例句</th></tr>' +
      '<tr><td>实义动词（变成）</td><td>werden + 名词/形容词</td><td>Er wird Arzt. Es wird dunkel.</td></tr>' +
      '<tr><td>将来时</td><td>werden + 不定式</td><td>Er wird kommen.</td></tr>' +
      '<tr><td>被动态</td><td>werden + Partizip II</td><td>Er wird gefragt.</td></tr></table></div>' +
      '<p>Perfekt：实义动词用 <b>geworden</b>，被动用 <b>worden</b>。</p>',
    ex: [
      C('Morgen ___ es regnen.', ['wird', 'werdet', 'wirst', 'werden'], 'es → wird + 不定式。'),
      I('Ich ___ dich morgen anrufen.', 'werde', 'werden', 'ich → werde。'),
      I('___ du mir helfen?', 'Wirst', 'werden', 'du → wirst。'),
      C('Wir werden im Sommer nach Spanien ___.', ['fliegen', 'geflogen', 'fliegt', 'zu fliegen'], 'Futur：werden + 不定式（不加 zu）。'),
      C('Ich glaube, dass er bald ___.', ['kommen wird', 'wird kommen', 'kommt wird', 'werden kommt'], '从句中 wird 放最后。'),
      C('Sie ___ nächstes Jahr Ärztin.', ['wird', 'werdet', 'wirst', 'werden'], 'werden 作实义动词 = 成为。'),
      C('Das Haus wird gerade ___.', ['renoviert', 'renovieren', 'renovierte', 'zu renovieren'], 'werden + Partizip II = 被动。'),
      I('Wo ist Paul? – Er ___ wohl noch schlafen.', 'wird', 'Vermutung', 'wird wohl + 不定式 = 推测。'),
      O('我明年要学德语。', 'Ich werde nächstes Jahr Deutsch lernen.', 'werde … lernen。', { alt: ['Nächstes Jahr werde ich Deutsch lernen.'] }),
      O('你会后悔的！', 'Du wirst das bereuen!', 'du → wirst + 不定式。'),
      I('Ihr ___ sehen, alles wird gut.', 'werdet', null, 'ihr → werdet。'),
      C('Es ___ langsam dunkel.', ['wird', 'werdet', 'würde', 'werden'], '实义动词：变得 → wird dunkel。'),
      C('Ich verspreche dir, dass ich pünktlich ___.', ['sein werde', 'werde sein', 'bin werde', 'sein wird'], '从句：不定式 + werde。'),
      I('Mein Sohn ist letztes Jahr Vater ___.', 'geworden', 'werden', '实义动词 werden 的 Partizip II 是 geworden（被动才用 worden）。'),
      M([['Er wird Lehrer.', '实义动词（成为）'], ['Er wird kommen.', 'Futur I'], ['Er wird gefragt.', 'Passiv'], ['Er würde kommen.', 'Konjunktiv II']], 'Satz ↔ Funktion', '')
    ]
  });

  /* ---------------- lassen ---------------- */
  U.push({
    id: 'b1-lassen', level: 'B1', n: 8.5, icon: 'tool',
    title: 'lassen', zh: '让、允许、留下',
    tip:
      '<h4>变位</h4>' +
      '<p>ich lasse, du <b>lässt</b>, er <b>lässt</b>, wir lassen, ihr lasst, sie lassen · Präteritum <b>ließ</b> · 命令式 Lass! / Lasst! / Lassen Sie!</p>' +
      '<h4>四种常见意思</h4>' +
      '<div class="tbl"><table><tr><th>含义</th><th>例句</th></tr>' +
      '<tr><td>委托别人做</td><td>Ich <b>lasse</b> mein Auto reparieren.</td></tr>' +
      '<tr><td>允许 / 不阻止</td><td>Meine Eltern <b>lassen</b> mich ausgehen.</td></tr>' +
      '<tr><td>留在某处 / 不动</td><td>Ich <b>lasse</b> das Handy zu Hause.</td></tr>' +
      '<tr><td>提议（我们…吧）</td><td><b>Lass</b> uns gehen!</td></tr></table></div>' +
      '<h4>Perfekt：两种形式</h4>' +
      ex('Ich habe mein Auto reparieren <b class="k">lassen</b>.', '+ 不定式 → 用不定式 lassen（双不定式）') +
      ex('Ich habe den Schirm im Bus <b class="k">gelassen</b>.', '单独使用 → gelassen'),
    ex: [
      C('Ich ___ mein Auto in der Werkstatt reparieren.', ['lasse', 'lässt', 'lassen', 'lasst'], 'ich → lasse。'),
      I('Er ___ sich die Haare schneiden.', 'lässt', 'lassen', 'er → lässt（变元音）。'),
      C('Ich habe mein Fahrrad reparieren ___.', ['lassen', 'gelassen', 'gelasst', 'zu lassen'], 'lassen + 不定式的 Perfekt → 双不定式：reparieren lassen。'),
      C('Ich habe meinen Schirm im Bus ___.', ['gelassen', 'lassen', 'gelasst', 'lässt'], '单独使用（留下）→ Partizip II gelassen。'),
      C('___ uns ins Kino gehen, Anna!', ['Lass', 'Lässt', 'Lasst', 'Lassen'], '对一个人（du）的提议 → Lass uns …'),
      I('Meine Eltern ___ mich nie lange fernsehen.', 'ließen', 'lassen, Präteritum', 'lassen → ließ；sie → ließen。'),
      C('___ Sie mich bitte ausreden!', ['Lassen', 'Lass', 'Lasst', 'Lässt'], '尊称命令式：Lassen Sie …'),
      I('Wo hast du die Schlüssel ___?', 'gelassen', 'lassen', '留在某处 → gelassen。'),
      O('我请人打扫我的公寓。', 'Ich lasse meine Wohnung putzen.', '委托别人做 → lassen + 不定式。'),
      O('别烦我！', 'Lass mich in Ruhe!', '固定表达：jdn. in Ruhe lassen。'),
      C('Wir lassen uns ein Haus ___.', ['bauen', 'gebaut', 'zu bauen', 'baut'], 'lassen + 不定式（不加 zu）。'),
      I('Hast du dir die Haare schneiden ___?', 'lassen', null, '双不定式：schneiden lassen。'),
      C('Sie ___ ihre Kinder allein spielen.', ['lässt', 'lasst', 'lassen', 'lasse'], 'sie（单数）→ lässt。'),
      O('我们去吃饭吧！', 'Lass uns essen gehen!', 'Lass uns … = 我们…吧。'),
      M([['Ich lasse mein Auto waschen.', '委托别人做'], ['Ich lasse dich nicht gehen.', '不允许'], ['Ich lasse das Handy zu Hause.', '留在某处'], ['Lass uns gehen!', '提议']], 'Satz ↔ Bedeutung', '')
    ]
  });

  /* ---------------- Wechselpräpositionen ---------------- */
  U.push({
    id: 'b1-wechselpraep', level: 'B1', n: 9.5, icon: 'cube',
    title: 'Wechselpräpositionen', zh: '双向介词：Wo? 与 Wohin?',
    tip:
      '<p><b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b></p>' +
      '<div class="tbl"><table><tr><th>问题</th><th>格</th><th>例句</th></tr>' +
      '<tr><td><b>Wo?</b> 位置</td><td>Dativ</td><td>Das Buch liegt auf <b>dem</b> Tisch.</td></tr>' +
      '<tr><td><b>Wohin?</b> 方向 / 移动</td><td>Akkusativ</td><td>Ich lege das Buch auf <b>den</b> Tisch.</td></tr></table></div>' +
      '<h4>成对动词</h4>' +
      '<div class="tbl"><table><tr><th>Wohin? + Akk（及物，规则）</th><th>Wo? + Dat（不及物，不规则）</th></tr>' +
      '<tr><td>stellen</td><td>stehen</td></tr><tr><td>legen</td><td>liegen</td></tr>' +
      '<tr><td>(sich) setzen</td><td>sitzen</td></tr><tr><td>hängen (hängte)</td><td>hängen (hing)</td></tr></table></div>' +
      '<h4>缩写</h4>' +
      '<p>in dem → <b>im</b> · in das → <b>ins</b> · an dem → <b>am</b> · an das → <b>ans</b></p>',
    ex: [
      C('Das Buch liegt auf ___ Tisch.', ['dem', 'den', 'der', 'das'], 'liegen = Wo? → Dativ：dem Tisch。'),
      C('Ich lege das Buch auf ___ Tisch.', ['den', 'dem', 'der', 'des'], 'legen = Wohin? → Akkusativ：den Tisch。'),
      C('Wir gehen heute ___ Kino.', ['ins', 'im', 'in', 'in den'], '方向 → in das Kino = ins Kino。'),
      C('Die Lampe hängt über ___ Sofa.', ['dem', 'das', 'den', 'der'], 'hängen (hing) = 位置 → Dativ。'),
      I('Ich hänge das Bild an ___ Wand.', 'die', null, '方向 → Akk：die Wand。'),
      I('Das Bild hängt an ___ Wand.', 'der', null, '位置 → Dat：der Wand。'),
      C('Er ___ die Flasche in den Kühlschrank.', ['stellt', 'steht', 'stellen', 'liegt'], 'in den（Akk，方向）→ stellen。'),
      C('Die Flasche ___ im Kühlschrank.', ['steht', 'stellt', 'legt', 'setzt'], 'im（Dat，位置）→ stehen。'),
      C('Das Kind ___ sich auf den Stuhl.', ['setzt', 'sitzt', 'sitzen', 'setzen'], 'sich setzen + Akk（动作）。'),
      I('Die Katze schläft unter ___ Bett.', 'dem', null, '位置 → Dat：dem Bett。'),
      I('Wir fahren am Wochenende ___ Meer.', ['ans', 'an das'], 'an + das', '方向 → an das Meer = ans Meer。'),
      O('我把钥匙放到桌子上了。', 'Ich habe den Schlüssel auf den Tisch gelegt.', 'legen + 方向 → Akk。'),
      O('车停在房子前面。', 'Das Auto steht vor dem Haus.', 'stehen + 位置 → Dat。'),
      C('Zwischen ___ Fenstern steht ein Schrank.', ['den', 'die', 'der', 'dem'], '位置 → Dat 复数：den Fenstern。'),
      M([['stellen', 'stehen'], ['legen', 'liegen'], ['setzen', 'sitzen'], ['hängen (hängte)', 'hängen (hing)']], 'Wohin? (Akk) ↔ Wo? (Dat)', '')
    ]
  });
})();
