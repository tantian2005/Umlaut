/* Extra sections appended to every grammar explanation: common mistakes, more examples, exam tip */
(function () {
  'use strict';
  var P = window.GRAMMATIK_TIPS_PLUS = {};
  function esc(s) { return s; }
  function T(id, errs, exs, tip) {
    P[id] =
      '<h4>常见错误</h4><ul class="errs">' + errs.map(function (e) {
        return '<li><s lang="de">' + esc(e[0]) + '</s><b lang="de">' + esc(e[1]) + '</b>' + (e[2] ? '<span>' + e[2] + '</span>' : '') + '</li>';
      }).join('') + '</ul>' +
      '<h4>更多例句</h4>' + exs.map(function (x) {
        return '<div class="ex"><p lang="de">' + x[0] + '</p><p class="zh">' + x[1] + '</p></div>';
      }).join('') +
      '<div class="note exam"><b>考试提示</b>' + tip + '</div>';
  }

  /* ---------- B1.1 ---------- */
  T('b1-praeteritum', [
    ['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', '位置移动用 sein'],
    ['Er gehte nach Hause.', 'Er ging nach Hause.', 'gehen 是不规则动词'],
    ['Ich habe gestern müde gewesen.', 'Ich war gestern müde.', 'sein 口语中多用 Präteritum；Perfekt 是 bin … gewesen']
  ], [
    ['Als ich ankam, war der Laden schon geschlossen.', '我到的时候，商店已经关门了。'],
    ['Früher gab es hier keinen Supermarkt.', '以前这里没有超市。'],
    ['Sie ist letztes Jahr nach Wien umgezogen.', '她去年搬到了维也纳。']
  ], 'Goethe B1 写作（邮件）中讲述经历多用 Perfekt；阅读中的新闻、故事用 Präteritum。要能认出常见不规则动词的过去式（kam, ging, fand, blieb, gab）。');

  T('b1-satzstellung', [
    ['Morgen ich fahre nach Hamburg.', 'Morgen fahre ich nach Hamburg.', '动词必须在第二位'],
    ['Ich gebe dem Mann es.', 'Ich gebe es dem Mann.', '代词在名词前'],
    ['Ich habe nicht den Film gesehen.', 'Ich habe den Film nicht gesehen.', '否定整句时 nicht 靠后']
  ], [
    ['Am Wochenende fahre ich wegen des schönen Wetters mit dem Rad an den See.', '周末因为天气好，我骑车去湖边。'],
    ['Kannst du es mir morgen zurückgeben?', '你明天能把它还给我吗？'],
    ['Deshalb habe ich meinem Chef die E-Mail sofort weitergeleitet.', '所以我立刻把邮件转给了老板。']
  ], '写作时把时间、原因、连接词（Deshalb, Trotzdem, Am Ende …）放在句首可以让文章更自然，但别忘了动词紧跟在第二位。');

  T('b1-nebensatz', [
    ['Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil ich krank bin.', 'weil 后动词放句末'],
    ['Ich weiß nicht, wenn er kommt.', 'Ich weiß nicht, ob er kommt.', '“是否”用 ob'],
    ['Weil ich müde war, ich bin früh ins Bett gegangen.', 'Weil ich müde war, bin ich früh ins Bett gegangen.', '从句在前，主句动词紧跟逗号']
  ], [
    ['Ich hoffe, dass wir uns bald wiedersehen.', '我希望我们很快再见面。'],
    ['Kannst du mir sagen, wo die nächste Apotheke ist?', '你能告诉我最近的药店在哪儿吗？'],
    ['Obwohl die Wohnung klein ist, fühle ich mich dort wohl.', '虽然公寓很小，我在那里感觉很舒服。']
  ], 'Goethe B1 写作要求“连接句子”。在每封邮件里有意识地用 weil, dass, obwohl, wenn 各一次，就能拿到“语言结构”的分数。');

  T('b1-reflexiv', [
    ['Ich wasche mich die Hände.', 'Ich wasche mir die Hände.', '已有 Akk 宾语 → 反身代词用 Dat'],
    ['Er freut ihn auf das Wochenende.', 'Er freut sich auf das Wochenende.', '第三人称一律用 sich'],
    ['Ich habe mich ein Auto gekauft.', 'Ich habe mir ein Auto gekauft.', 'sich etwas kaufen → Dat']
  ], [
    ['Ich muss mich noch um die Anmeldung kümmern.', '我还得去办理登记。'],
    ['Wir treffen uns um acht vor dem Kino.', '我们八点在电影院前见。'],
    ['Merk dir bitte die Adresse!', '请记住这个地址！']
  ], '很多常用表达是反身动词：sich bewerben, sich beschweren, sich erinnern, sich interessieren, sich entscheiden。背单词时把 sich 和介词一起背。');

  T('b1-wechselpraep', [
    ['Ich lege das Buch auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'legen = 方向 → Akk'],
    ['Das Bild hängt an die Wand.', 'Das Bild hängt an der Wand.', 'hängen（位置）→ Dat'],
    ['Ich gehe im Kino.', 'Ich gehe ins Kino.', '方向用 ins']
  ], [
    ['Stell die Flaschen bitte neben den Kühlschrank.', '请把瓶子放到冰箱旁边。'],
    ['Die Flaschen stehen neben dem Kühlschrank.', '瓶子在冰箱旁边。'],
    ['Wir haben den ganzen Tag am Strand gelegen.', '我们在海滩上躺了一整天。']
  ], '判断方法：能问 Wohin? 就用 Akk，能问 Wo? 就用 Dat。动词对 stellen/stehen、legen/liegen、setzen/sitzen、hängen/hängen 是考试常考点。');

  T('b1-adjektiv', [
    ['Ich habe einen neue Job.', 'Ich habe einen neuen Job.', 'einen → -en'],
    ['Das ist ein gutes Idee.', 'Das ist eine gute Idee.', 'Idee 是阴性'],
    ['mit freundliche Grüße', 'mit freundlichen Grüßen', 'mit + Dat 复数 → -en']
  ], [
    ['Wir suchen eine helle Wohnung mit kleinem Garten.', '我们在找一套带小花园的明亮公寓。'],
    ['Der neue Kollege kommt aus einer kleinen Stadt in Bayern.', '新同事来自巴伐利亚的一个小城。'],
    ['Bei gutem Wetter essen wir draußen.', '天气好的时候我们在外面吃饭。']
  ], '先确定名词的性、数、格，再看前面是哪种冠词。最省事的规则：Dativ 和复数（有冠词时）几乎总是 -en。');

  T('b1-komparativ', [
    ['Berlin ist größer wie München.', 'Berlin ist größer als München.', '比较级 + als'],
    ['Er ist so groß als ich.', 'Er ist so groß wie ich.', 'so … wie'],
    ['Das ist am besten Buch.', 'Das ist das beste Buch.', '名词前用冠词 + 变格，不用 am']
  ], [
    ['Die Miete ist hier doppelt so hoch wie in meiner Heimatstadt.', '这里的房租是我家乡的两倍。'],
    ['Je mehr ich übe, desto sicherer werde ich.', '我练得越多就越有把握。'],
    ['Am liebsten fahre ich mit dem Zug.', '我最喜欢坐火车。']
  ], '描述图表和比较（Goethe B2 / TestDaF 写作）需要比较级：höher als, deutlich mehr als, genauso viele wie, am stärksten。');

  T('b1-temporal', [
    ['Wenn ich ein Kind war, …', 'Als ich ein Kind war, …', '过去一次 → als'],
    ['Wann ich Zeit habe, rufe ich an.', 'Wenn ich Zeit habe, rufe ich an.', 'wann 只用于疑问'],
    ['Nachdem ich esse, gehe ich spazieren.', 'Nachdem ich gegessen habe, gehe ich spazieren.', 'nachdem 从句要“早一个时态”']
  ], [
    ['Bevor du losfährst, schau auf den Fahrplan.', '出发前看一下时刻表。'],
    ['Seitdem ich Sport mache, schlafe ich besser.', '自从我运动以来，睡得更好了。'],
    ['Während sie telefonierte, kochte er das Abendessen.', '她打电话的时候，他做了晚饭。']
  ], '讲述经历时 als / nachdem / bevor 能让时间线清楚；注意 während 也可以作介词（während des Studiums）。');

  /* ---------- B1.2 ---------- */
  T('b1-relativ', [
    ['Der Mann, der ich gesehen habe, …', 'Der Mann, den ich gesehen habe, …', '格由从句里的功能决定'],
    ['Die Kinder, den ich geholfen habe, …', 'Die Kinder, denen ich geholfen habe, …', 'Dat 复数 → denen'],
    ['Das ist alles, das ich weiß.', 'Das ist alles, was ich weiß.', 'alles 后用 was']
  ], [
    ['Das ist die Kollegin, mit der ich das Büro teile.', '这是和我共用办公室的同事。'],
    ['Ich suche eine Wohnung, die nicht weit von der Uni liegt.', '我在找一套离学校不远的公寓。'],
    ['Der Kurs, an dem ich teilnehme, dauert drei Monate.', '我参加的课程持续三个月。']
  ], '写作中用关系从句代替两句短句，能明显提升“句子结构”分。介词 + 关系代词（mit der, an dem）是 B1/B2 常考点。');

  T('b1-praepverben', [
    ['Ich warte für den Bus.', 'Ich warte auf den Bus.', 'warten auf'],
    ['Ich interessiere mich an Kunst.', 'Ich interessiere mich für Kunst.', 'interessiert an（形容词）≠ sich interessieren für'],
    ['Worüber wartest du? – Auf Tom.', 'Auf wen wartest du?', '问人用介词 + wen/wem']
  ], [
    ['Ich habe mich über den Lärm beschwert.', '我投诉了噪音。'],
    ['Es kommt darauf an, wie viel Zeit wir haben.', '这取决于我们有多少时间。'],
    ['Woran denkst du gerade?', '你现在在想什么？']
  ], '介词动词要整体背：动词 + 介词 + 格。Goethe B1 阅读和听力中，da(r)- / wo(r)- 指代经常出现。');

  T('b1-zu', [
    ['Ich habe vergessen, dich anrufen.', 'Ich habe vergessen, dich anzurufen.', '要加 zu，可分动词 zu 在中间'],
    ['Ich kann morgen zu kommen.', 'Ich kann morgen kommen.', '情态动词后不加 zu'],
    ['Ich lerne Deutsch, damit ich in Wien studieren.', 'Ich lerne Deutsch, um in Wien zu studieren.', '同一主语用 um … zu']
  ], [
    ['Es ist nicht leicht, eine bezahlbare Wohnung zu finden.', '找到一套负担得起的公寓不容易。'],
    ['Er ging, ohne sich zu verabschieden.', '他没告别就走了。'],
    ['Ich rufe dich an, damit du Bescheid weißt.', '我给你打电话，好让你知道。']
  ], 'um … zu / damit 是写作中表达目的的核心结构；Es ist wichtig / sinnvoll / schwierig, … zu … 是论证中最常用的句型之一。');

  T('b1-konjunktiv2', [
    ['Wenn ich Zeit habe, würde ich kommen.', 'Wenn ich Zeit hätte, würde ich kommen.', '非现实条件两边都用 K II'],
    ['Ich würde haben gern einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'haben 用 hätte'],
    ['Wenn ich würde reich sein, …', 'Wenn ich reich wäre, …', 'sein 用 wäre']
  ], [
    ['An Ihrer Stelle würde ich den Vertrag noch einmal lesen.', '换作是您，我会再看一遍合同。'],
    ['Könnten Sie mir bitte sagen, wie spät es ist?', '您能告诉我现在几点吗？'],
    ['Es wäre schön, wenn du mitkommen könntest.', '要是你能一起来就好了。']
  ], 'Goethe B1 写作有一封“正式邮件”，必须用礼貌形式：Könnten Sie …? Ich würde gern … Ich hätte eine Frage …');

  T('b1-passiv', [
    ['Das Haus ist 1990 gebaut worden geworden.', 'Das Haus ist 1990 gebaut worden.', '被动完成式用 worden'],
    ['Der Brief wurde von Post geschickt.', 'Der Brief wurde mit der Post geschickt.', 'von 只用于施动者'],
    ['Hier wird nicht rauchen.', 'Hier wird nicht geraucht.', 'werden + Partizip II']
  ], [
    ['In der Kantine wird jeden Tag frisch gekocht.', '食堂每天都现做饭菜。'],
    ['Die Prüfung muss bis Freitag angemeldet werden.', '考试必须在周五前报名。'],
    ['Der Täter wurde von der Polizei gefasst.', '作案者被警察抓住了。']
  ], '说明、规定和新闻里大量使用被动态。阅读时注意 wird（现在 / 将来）、wurde（过去）、ist … worden（完成）。');

  T('b1-futur', [
    ['Ich werde morgen kommen zu.', 'Ich werde morgen kommen.', 'werden + 不定式（不加 zu）'],
    ['Er ist Arzt geworden worden.', 'Er ist Arzt geworden.', '实义动词用 geworden'],
    ['Morgen ich werde arbeiten.', 'Morgen werde ich arbeiten.', '动词第二位']
  ], [
    ['Die Preise werden auch im nächsten Jahr steigen.', '明年价格还会上涨。'],
    ['Er wird wohl im Stau stehen.', '他大概堵在路上了。'],
    ['Es wird langsam dunkel.', '天渐渐黑了。']
  ], '口语里表达将来通常用现在时 + 时间词；Futur I 更多用于预测、承诺和推测（wird wohl …）。');

  T('b1-lassen', [
    ['Ich habe mein Auto reparieren gelassen.', 'Ich habe mein Auto reparieren lassen.', '+ 不定式时用双不定式'],
    ['Er lasst mich nicht gehen.', 'Er lässt mich nicht gehen.', 'er → lässt'],
    ['Ich lasse mein Auto zu reparieren.', 'Ich lasse mein Auto reparieren.', 'lassen 后不加 zu']
  ], [
    ['Wir lassen die Wohnung vor dem Einzug streichen.', '入住前我们找人粉刷公寓。'],
    ['Lass uns heute Abend zusammen kochen!', '今晚我们一起做饭吧！'],
    ['Ich habe meine Jacke im Restaurant liegen lassen.', '我把外套落在餐馆了。']
  ], 'lassen 在 B2 还会以 sich lassen（= kann … werden）的形式出现：Das lässt sich ändern.');

  T('b1-genitiv', [
    ['das Auto von meinem Vater', 'das Auto meines Vaters', '书面语用 Genitiv'],
    ['wegen dem Regen', 'wegen des Regens', '考试中用 Genitiv'],
    ['des Haus', 'des Hauses', '阳性 / 中性名词要加 -(e)s']
  ], [
    ['Trotz des schlechten Wetters fand das Konzert statt.', '尽管天气不好，音乐会照常举行。'],
    ['Während der Ferien arbeite ich in einem Café.', '假期里我在一家咖啡馆打工。'],
    ['Das ist die Meinung vieler Experten.', '这是许多专家的观点。']
  ], '阅读和写作中 wegen / trotz / während + Genitiv 很常见；B2 / C1 还会用 aufgrund, angesichts, infolge 等。');

  /* ---------- B2.1 ---------- */
  T('b2-satzverbindungen', [
    ['Ich war krank, deshalb ich bin zu Hause geblieben.', '…, deshalb bin ich zu Hause geblieben.', 'deshalb 后动词紧跟'],
    ['Er ist müde, trotzdem er arbeitet.', '…, trotzdem arbeitet er.', '连接副词占第一位'],
    ['Es war so kalt, sodass wir zu Hause blieben.', 'Es war so kalt, dass wir zu Hause blieben.', 'so … dass，不是 so … sodass']
  ], [
    ['Die Mieten steigen, folglich suchen viele Studierende eine WG.', '房租上涨，因此很多学生找合租。'],
    ['Ich habe nämlich morgen eine Prüfung.', '因为我明天有考试。'],
    ['Während in Städten die Mieten steigen, sinken sie auf dem Land.', '城市房租上涨，而乡村则在下降。']
  ], 'B2 写作的评分标准里有“衔接与连贯”：把连接副词（deshalb, trotzdem, außerdem）和从句连词（weil, obwohl, sodass）交替使用。');

  T('b2-konnektoren', [
    ['Ich habe weder Zeit noch keine Lust.', 'Ich habe weder Zeit noch Lust.', 'weder … noch 已含否定'],
    ['Je mehr ich lerne, desto ich verstehe besser.', '…, desto besser verstehe ich.', 'desto + 比较级 + 动词'],
    ['Nicht nur er, aber auch sie …', 'Nicht nur er, sondern auch sie …', 'nicht nur … sondern auch']
  ], [
    ['Das Studium ist zwar anstrengend, aber es macht mir Spaß.', '学习虽然辛苦，但很有趣。'],
    ['Wir können entweder heute oder morgen fahren.', '我们可以今天走，也可以明天走。'],
    ['Einerseits spart man Zeit, andererseits fehlt der Kontakt zu Kollegen.', '一方面节省时间，另一方面缺少与同事的接触。']
  ], 'einerseits … andererseits 和 zwar … aber 是议论文（Goethe B2 写作 / TestDaF）中平衡两方观点的标准结构。');

  T('b2-ndeklination', [
    ['Ich frage den Polizist.', 'Ich frage den Polizisten.', 'Akk 要加 -en'],
    ['Herr Müller schreibe ich.', 'Ich schreibe Herrn Müller.', 'Herr → Herrn（单数非第一格）'],
    ['die Bedeutung des Namen', 'die Bedeutung des Namens', 'Name → Gen -ns']
  ], [
    ['Wir haben einen Experten um Rat gebeten.', '我们向一位专家请教。'],
    ['Der Arzt hat mit dem Patienten gesprochen.', '医生和病人谈过了。'],
    ['Sehr geehrter Herr Schmidt, …', '尊敬的施密特先生……']
  ], '正式邮件中称呼和收件人最容易错：Sehr geehrter Herr …（第一格），但 an Herrn …、mit Herrn …。');

  T('b2-praefix', [
    ['Ich habe den Text geübersetzt.', 'Ich habe den Text übersetzt.', '“翻译”不可分，无 ge-'],
    ['Er ruft mich morgen an zurück.', 'Er ruft mich morgen zurück.', '前缀只放一次，在句末'],
    ['Ich habe vergessen, das Fenster zu aufmachen.', '…, das Fenster aufzumachen.', 'zu 插在前缀和词干之间']
  ], [
    ['Wann fährt der nächste Zug ab?', '下一班火车什么时候开？'],
    ['Er hat die Prüfung zum zweiten Mal wiederholt.', '他第二次重考了。'],
    ['Bitte füllen Sie das Formular bis Montag aus.', '请在周一前填好表格。']
  ], '听力和阅读里，可分动词的前缀在句末，很容易漏听：注意句子最后一个词（an, ab, auf, zurück …）。');

  T('b2-k2-vergangenheit', [
    ['Wenn ich das gewusst habe, …', 'Wenn ich das gewusst hätte, …', '过去非现实用 hätte/wäre + Partizip II'],
    ['Ich hätte kommen gekonnt.', 'Ich hätte kommen können.', '情态动词用双不定式'],
    ['…, ob ich das machen hätte sollen.', '…, ob ich das hätte machen sollen.', '从句中 hätte 放在双不定式前']
  ], [
    ['Wenn ich früher losgefahren wäre, hätte ich den Zug erreicht.', '如果我早点出发，就能赶上火车了。'],
    ['Du hättest mir Bescheid sagen sollen.', '你本该告诉我一声。'],
    ['Er tut so, als hätte er nichts gewusst.', '他装作什么都不知道。']
  ], '表达遗憾和批评（hätte … sollen / müssen）常出现在 B2 口语和写作的“反驳 / 表态”部分。');

  T('b2-vermutung', [
    ['Er soll krank sein.（想表达“我确定他病了”）', 'Er muss krank sein.', 'soll = 据说，muss = 肯定'],
    ['Sie muss den Zug verpasst.', 'Sie muss den Zug verpasst haben.', '对过去推测：+ Partizip II + haben/sein'],
    ['Er will das allein geschafft haben.（理解成“他想独自完成”）', 'Er will das allein geschafft haben. = 他自称是独自完成的', 'will + 完成式不定式 = 自称']
  ], [
    ['Das dürfte die richtige Lösung sein.', '这很可能是正确的解决办法。'],
    ['Der Politiker soll Steuern hinterzogen haben.', '据说这位政客逃了税。'],
    ['Bis Juni werden wir das Projekt abgeschlossen haben.', '到六月我们将已完成这个项目。']
  ], 'TestDaF 阅读常考“作者有多确定”：muss / dürfte / könnte / soll / will 表达的确定程度要分清。');

  T('b2-passiv', [
    ['Das Problem lässt sich lösen werden.', 'Das Problem lässt sich lösen.', 'sich lassen + 不定式'],
    ['Die Tür wird geschlossen. = 门是关着的', 'Die Tür ist geschlossen.', '状态用 sein'],
    ['Der Antrag ist bis Montag einreichen.', 'Der Antrag ist bis Montag einzureichen.', 'sein + zu + 不定式']
  ], [
    ['Die Gebühr ist vor Semesterbeginn zu überweisen.', '费用须在学期开始前汇款。'],
    ['Das Ergebnis lässt sich leicht überprüfen.', '这个结果很容易核实。'],
    ['Der Text ist ohne Wörterbuch kaum verständlich.', '这篇文章不查词典几乎看不懂。']
  ], '大学通知、考试规定几乎都用 sein + zu 和被动态，读懂“必须 / 可以”是 TestDaF 阅读的关键。');

  T('b2-infinitiv', [
    ['Ich freue mich, dich kennengelernt haben.', '…, dich kennengelernt zu haben.', 'zu 放在 haben/sein 前'],
    ['Er hofft, eingeladen zu sein.', 'Er hofft, eingeladen zu werden.', '被动用 werden'],
    ['Sie bedauert, zu spät gekommen zu haben.', '…, zu spät gekommen zu sein.', 'kommen 用 sein']
  ], [
    ['Er gibt zu, die Frist verpasst zu haben.', '他承认错过了期限。'],
    ['Viele Studierende hoffen, nach dem Abschluss übernommen zu werden.', '很多学生希望毕业后被录用。'],
    ['Sie ärgert sich, nicht rechtzeitig informiert worden zu sein.', '她很气恼没有及时被通知。']
  ], '完成式不定式能把“之前发生的事”压缩进一个短语，学术写作和正式信件中很常见。');

  T('b2-partikeln', [
    ['Komm denn mit!', 'Komm doch mit!', '祈使句用 doch，denn 只用于疑问句'],
    ['Du hast keine Zeit? – Ja, ich habe Zeit.', '– Doch, ich habe Zeit.', '反驳否定问句用 doch'],
    ['Wo warst du doch?', 'Wo warst du denn?', '疑问句用 denn']
  ], [
    ['Das ist ja eine schöne Überraschung!', '这真是个惊喜！'],
    ['Probier es doch einfach mal aus!', '你就试试嘛！'],
    ['So ist das halt im Leben.', '生活就是这样。']
  ], '语气词在听力（对话）中非常常见，能帮助判断说话人的态度：惊讶（ja）、着急（denn）、无奈（halt / eben）。');

  /* ---------- B2.2 ---------- */
  T('b2-k1', [
    ['Er sagt, er ist krank. （新闻中）', 'Er sagt, er sei krank.', '书面转述用 K I'],
    ['Sie sagten, sie haben keine Zeit.', 'Sie sagten, sie hätten keine Zeit.', 'K I = 直陈式时改用 K II'],
    ['Er fragte, ob ich komme würde.', 'Er fragte, ob ich käme / kommen würde.', '间接疑问用 ob']
  ], [
    ['Der Sprecher erklärte, die Verhandlungen würden fortgesetzt.', '发言人表示谈判将继续。'],
    ['Die Ärztin meinte, ich solle mich schonen.', '医生说我应该好好休息。'],
    ['Laut Bericht habe es keine Verletzten gegeben.', '据报道没有人受伤。']
  ], 'TestDaF 阅读的新闻和研究文本大量使用 K I。看到 sei / habe / werde 就知道这是“别人的说法”，不一定是作者观点。');

  T('b2-relativ', [
    ['Wer Hunger hat, er soll essen.', 'Wer Hunger hat, (der) soll essen.', 'wer … der'],
    ['Er kam zu spät, das mich ärgerte.', '…, was mich ärgerte.', '指代整句用 was'],
    ['Das ist etwas, über das ich mich freue.', '…, worüber ich mich freue.', 'etwas 后用 wo(r)-']
  ], [
    ['Wer sich bewerben möchte, sollte die Frist beachten.', '想申请的人应注意截止日期。'],
    ['Er hat die Prüfung bestanden, was niemand erwartet hatte.', '他通过了考试，这出乎所有人意料。'],
    ['Die Stadt, wo ich aufgewachsen bin, hat sich sehr verändert.', '我长大的城市变化很大。']
  ], '用 was / weshalb / wodurch 连接整句，是 C1 写作中让论证更连贯的重要手段。');

  T('b2-partizip', [
    ['die gestiegene Preise', 'die gestiegenen Preise', '分词照常变格'],
    ['das weinend Kind', 'das weinende Kind', 'Partizip I = 不定式 + d + 词尾'],
    ['der angekommende Zug（已到）', 'der angekommene Zug', '已完成用 Partizip II']
  ], [
    ['Die steigenden Mieten belasten viele Familien.', '不断上涨的房租让很多家庭不堪重负。'],
    ['Der gestern veröffentlichte Bericht sorgt für Diskussionen.', '昨天发布的报告引发了讨论。'],
    ['Das ist eine schwer zu beantwortende Frage.', '这是一个很难回答的问题。']
  ], '读长名词短语时先找冠词和名词，再把中间部分改成关系从句。这是 TestDaF 阅读第 2、3 部分的核心技能。');

  T('b2-nominal', [
    ['wegen dem Steigen der Preise', 'wegen des Anstiegs der Preise', '用固定名词 + Genitiv'],
    ['Durch regelmäßig Training …', 'Durch regelmäßiges Training …', '副词变成形容词要变格'],
    ['das Interesse für das Thema', 'das Interesse an dem Thema', '名词的介词可能与动词不同']
  ], [
    ['Nach Abschluss des Studiums möchte sie promovieren.', '毕业后她想读博士。'],
    ['Bei Nichtbestehen kann die Prüfung wiederholt werden.', '如未通过，可以重考。'],
    ['Zur Verbesserung der Lehre werden neue Stellen geschaffen.', '为了改进教学，增设了新职位。']
  ], '书面语喜欢名词化，口语喜欢动词句。写作时适度用名词化（尤其是引言和结论）会显得更正式。');

  T('b2-praep-genitiv', [
    ['aufgrund dem Wetter', 'aufgrund des Wetters', 'aufgrund + Gen'],
    ['innerhalb zwei Wochen', 'innerhalb von zwei Wochen', '无冠词时用 von + Dat'],
    ['anlässlich seinem Geburtstag', 'anlässlich seines Geburtstags', '+ Gen']
  ], [
    ['Aufgrund der hohen Nachfrage ist der Kurs ausgebucht.', '由于需求很高，课程已报满。'],
    ['Angesichts der Lage müssen wir sparen.', '鉴于形势，我们必须节约。'],
    ['Die Wohnung liegt außerhalb der Stadt.', '公寓在城外。']
  ], '这些介词在口语中很少用，但在新闻、通知和学术文本里随处可见，阅读时要能立即识别其含义。');

  T('b2-nvv', [
    ['eine Entscheidung machen', 'eine Entscheidung treffen', '固定搭配'],
    ['eine Frage machen', 'eine Frage stellen', '固定搭配'],
    ['Rücksicht geben', 'Rücksicht nehmen', '固定搭配']
  ], [
    ['Die Firma hat Maßnahmen gegen den Fachkräftemangel ergriffen.', '公司采取了应对专业人才短缺的措施。'],
    ['Das neue Gesetz tritt im Januar in Kraft.', '新法律一月生效。'],
    ['Er hat die Verantwortung für den Fehler übernommen.', '他为这个错误承担了责任。']
  ], '名词动词搭配让写作显得地道。在 TestDaF 写作中，用 einen Beitrag leisten, eine Rolle spielen, in Betracht ziehen 等能提升词汇分。');

  T('b2-adjpraep', [
    ['stolz über meine Tochter', 'stolz auf meine Tochter', 'stolz auf'],
    ['interessiert für Kunst', 'interessiert an Kunst', 'interessiert an'],
    ['abhängig an den Eltern', 'abhängig von den Eltern', 'abhängig von']
  ], [
    ['Ich bin sehr gespannt auf die Ergebnisse.', '我非常期待结果。'],
    ['Viele sind mit ihrer Wohnsituation unzufrieden.', '很多人对居住情况不满意。'],
    ['Die Region ist bekannt für ihren Wein.', '这个地区以葡萄酒著称。']
  ], '与介词动词一样，要把“形容词 + 介词 + 格”作为一个整体记忆。');

  T('b2-es', [
    ['Gibt viele Probleme.', 'Es gibt viele Probleme.', 'es gibt 的 es 不能省'],
    ['Heute es wird gefeiert.', 'Heute wird gefeiert.', '其他成分在第 1 位时填充 es 消失'],
    ['Dass du kommst, freut es mich.', 'Dass du kommst, freut mich.', '从句在前时关联词 es 消失']
  ], [
    ['Es ist wichtig, rechtzeitig mit der Prüfungsvorbereitung zu beginnen.', '及早开始备考很重要。'],
    ['In dem Artikel geht es um die Zukunft der Arbeit.', '这篇文章讲的是未来的工作。'],
    ['Mir fällt es schwer, mich zu konzentrieren.', '我很难集中注意力。']
  ], 'Es ist + 形容词 + zu / dass … 是写作中引出观点的万能句型。');

  /* ---------- C1.1 ---------- */
  T('c1-nominalstil', [
    ['Wegen die Preise stark steigen …', 'Wegen des starken Anstiegs der Preise …', '介词后是名词短语，不是从句'],
    ['die Untersuchung von den Ursachen', 'die Untersuchung der Ursachen', '宾语 → Genitiv'],
    ['die Förderung von dem Staat', 'die Förderung durch den Staat', '名词化后施动者用 durch']
  ], [
    ['Die Einführung der Gebühren führte zu Protesten.', '收费的引入引发了抗议。（= Als man Gebühren einführte, …）'],
    ['Nach eingehender Prüfung wurde der Antrag abgelehnt.', '经仔细审查，申请被拒。'],
    ['Zur Senkung des Energieverbrauchs werden neue Regeln eingeführt.', '为降低能耗，推出了新规定。']
  ], 'TestDaF 阅读：遇到名词堆砌的长句，先“动词化”还原成从句再理解。写作：引言和结论用名词化，正文论证可以混用。');

  T('c1-partizip', [
    ['die in Berlin lebende Studenten', 'die in Berlin lebenden Studenten', '分词变格不能忘'],
    ['der zu lösen Problem', 'das zu lösende Problem', 'zu + Partizip I + 词尾'],
    ['die von der Regierung beschließende Reform', 'die von der Regierung beschlossene Reform', '被动 → Partizip II']
  ], [
    ['Die von vielen Experten geforderte Reform wurde verschoben.', '许多专家要求的改革被推迟了。'],
    ['Die seit Jahren steigende Zahl der Studierenden stellt die Hochschulen vor Probleme.', '多年来不断增长的学生人数给高校带来问题。'],
    ['Die noch zu klärenden Fragen werden in der nächsten Sitzung besprochen.', '尚待澄清的问题将在下次会议上讨论。']
  ], '学术文本平均每段都有扩展分词定语。练习方法：从冠词找到对应名词，把中间的部分改写成关系从句。');

  T('c1-konnektoren', [
    ['Er lernt viel, indem er die Prüfung besteht.', 'Er lernt viel, sodass er die Prüfung besteht.', 'indem 表方式，结果用 sodass'],
    ['Wir kommen, es sei denn, es regnet nicht.', 'Wir kommen, es sei denn, es regnet.', 'es sei denn 已含“除非”'],
    ['Das Problem ist zu groß, dass man es lösen kann.', '…, als dass man es lösen könnte.', 'zu … als dass + K II']
  ], [
    ['Man kann Kosten senken, indem man Energie spart.', '可以通过节能来降低成本。'],
    ['Die Maßnahme ist sinnvoll, zumal sie kaum Kosten verursacht.', '这项措施是合理的，尤其因为它几乎不产生成本。'],
    ['In der Stadt gibt es viele Jobs, wohingegen auf dem Land Arbeitsplätze fehlen.', '城市工作机会多，而乡村缺少就业岗位。']
  ], 'TestDaF 写作要求“有条理地论证”。每段至少使用一个表示原因、对比或让步的连接词（zumal, wohingegen, dennoch）。');

  T('c1-redewiedergabe', [
    ['Laut der Studie ist das Problem gelöst.（当成作者本人的观点）', 'Laut der Studie ist das Problem gelöst. = 这是研究的说法', 'laut / zufolge 引出的是来源的观点，不是作者的'],
    ['Einer Studie laut …', 'Einer Studie zufolge … / Laut einer Studie …', 'zufolge 后置，laut 前置'],
    ['Er behauptet, dass er sei unschuldig.', 'Er behauptet, er sei unschuldig. / …, dass er unschuldig sei.', '有 dass 时动词放末尾']
  ], [
    ['Wie die Autorin betont, sind die Ergebnisse vorläufig.', '正如作者所强调的，结果是初步的。'],
    ['Kritiker bemängeln, die Reform gehe nicht weit genug.', '批评者指出改革力度不够。'],
    ['Nach Angaben des Ministeriums sei die Zahl gesunken.', '据部委称，数字有所下降。']
  ], 'TestDaF 写作描述图表和观点时要注明来源（Laut …, Wie … zeigt, … zufolge）；阅读时要分清“事实”“他人观点”和“作者观点”。');

  T('c1-modalitaet', [
    ['Der Antrag hat bis Montag einzureichen.', 'Der Antrag ist bis Montag einzureichen.', '被动含义用 sein + zu'],
    ['Das Problem lässt sich nicht lösbar.', 'Das Problem lässt sich nicht lösen. / Das Problem ist nicht lösbar.', '二选一'],
    ['Diese Frage bedarf eine Antwort.', 'Diese Frage bedarf einer Antwort.', 'bedürfen + Gen']
  ], [
    ['Die Teilnehmer haben sich bis 9 Uhr im Raum 104 einzufinden.', '参加者须于 9 点前到 104 室。'],
    ['Die Folgen sind noch nicht absehbar.', '后果尚无法预见。'],
    ['Es gilt, die Ursachen genauer zu untersuchen.', '需要更仔细地研究原因。']
  ], '考试说明、规定和学术文本常用这些形式代替 müssen / können。读到 ist … zu … 时要立刻想到“必须 / 可以被……”。');

  /* ---------- C1.2 ---------- */
  T('c1-grafik', [
    ['Die Zahl stieg um 20 auf 25 Prozent. （若从 20 到 25）', 'Die Zahl stieg von 20 auf 25 Prozent.', 'um = 差值，auf = 终值'],
    ['Der Anteil stieg um 5 Prozent. （20 % → 25 %）', '… um 5 Prozentpunkte', '百分比之差用 Prozentpunkte'],
    ['Die Grafik zeigt über die Entwicklung.', 'Die Grafik zeigt die Entwicklung. / … gibt Auskunft über …', 'zeigen + Akk']
  ], [
    ['Aus der Grafik geht hervor, dass die Zahl der Studierenden kontinuierlich gestiegen ist.', '从图表可以看出，学生人数持续增长。'],
    ['Im Vergleich zu 2010 hat sich der Anteil fast verdoppelt.', '与 2010 年相比，比例几乎翻了一番。'],
    ['Den höchsten Wert erreichte die Kurve im Jahr 2019.', '曲线在 2019 年达到最高值。']
  ], 'TestDaF 写作第一部分要描述图表：先介绍（Thema, Quelle, Zeitraum），再描述最重要的变化和对比，最后用一句话总结。动词要多样：steigen, zunehmen, zurückgehen, sich verdoppeln。');

  T('c1-praepositionen', [
    ['gemäß des Vertrags', 'gemäß dem Vertrag', 'gemäß + Dat'],
    ['dank dem Hilfe', 'dank der Hilfe', '阴性 Dat / Gen 都是 der'],
    ['zwecks die Verbesserung', 'zwecks Verbesserung', 'zwecks + Gen，常不带冠词']
  ], [
    ['Gemäß Paragraf 5 der Prüfungsordnung ist eine Wiederholung zweimal möglich.', '根据考试条例第 5 条，可以重考两次。'],
    ['Mangels Interesse wurde der Kurs abgesagt.', '由于缺乏兴趣，课程被取消了。'],
    ['Seitens der Hochschule gibt es keine Einwände.', '校方没有异议。']
  ], '这些介词多见于规章、通知和学术文本。阅读题中常要求理解句子关系：mangels = 因为缺少，zwecks = 为了，seitens = 来自。');

  T('c1-verbenpraep', [
    ['Das trägt für die Lösung bei.', 'Das trägt zur Lösung bei.', 'beitragen zu'],
    ['Die Studie befasst sich über das Thema.', '… befasst sich mit dem Thema.', 'sich befassen mit'],
    ['Das wirkt sich an die Gesundheit aus.', '… wirkt sich auf die Gesundheit aus.', 'sich auswirken auf']
  ], [
    ['Die Ergebnisse beruhen auf einer Befragung von 2000 Personen.', '结果基于对 2000 人的调查。'],
    ['Der Autor setzt sich kritisch mit der Theorie auseinander.', '作者批判性地探讨了这一理论。'],
    ['Es besteht ein Zusammenhang zwischen Bildung und Gesundheit.', '教育和健康之间存在关联。']
  ], '学术动词搭配是 TestDaF 写作的高分词汇。准备一张“表达观点”的清单：beitragen zu, führen zu, hinweisen auf, sich auswirken auf。');

  T('c1-hypothese', [
    ['Es ist wünschenswert, wenn … würde.', 'Es wäre wünschenswert, wenn …', '委婉建议主句也用 K II'],
    ['Man hätte früher handeln gesollt.', 'Man hätte früher handeln sollen.', '双不定式'],
    ['Hätte man reagiert, ist der Schaden geringer.', '…, wäre der Schaden geringer (gewesen).', '两部分都用 K II']
  ], [
    ['Man könnte einwenden, dass die Maßnahme zu teuer ist.', '有人可能会反驳说这项措施太贵。'],
    ['Ohne Stipendium wäre ein Studium im Ausland für viele kaum möglich.', '没有奖学金，很多人几乎不可能出国留学。'],
    ['Meines Erachtens wäre eine Kombination beider Ansätze sinnvoll.', '我认为结合两种方法是合理的。']
  ], 'TestDaF 写作第二部分要求表明立场并权衡利弊：用 K II 委婉表达建议和反方观点，比直接的命令语气得分更高。');

  T('c1-textverweise', [
    ['Er kam nicht, das mich ärgerte.', 'Er kam nicht, was mich ärgerte.', '指代整句用 was'],
    ['Die Kosten stiegen, wodurch viele protestierten darüber.', '…, worüber viele protestierten.', 'wo(r) + 介词与动词搭配'],
    ['Ersterer … Letzterer … （复数指代）', 'Erstere … Letztere …', '复数用 Erstere / Letztere']
  ], [
    ['Zunächst wird die Ausgangslage beschrieben, anschließend werden Lösungen diskutiert.', '先描述现状，接着讨论解决方案。'],
    ['Die Nachfrage sank, weshalb die Preise fielen.', '需求下降，因此价格下跌。'],
    ['Abschließend lässt sich festhalten, dass die Vorteile überwiegen.', '最后可以确定，利大于弊。']
  ], '一篇 TestDaF 议论文的骨架：Einleitung（Zunächst …）– Argumente（Zum einen … zum anderen … Darüber hinaus …）– Gegenargument（Demgegenüber …）– Schluss（Abschließend / Zusammenfassend …）。');
})();
