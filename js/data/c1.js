/* C1 units: grammar for TestDaF TDN 4+ (reading academic texts, writing the Schriftlicher Ausdruck) */
(function () {
  'use strict';
  var D = G.dsl, ex = D.ex;

  /* ---------------- Nominal- und Verbalstil ---------------- */
  D.unit({
    id: 'c1-nominalstil', level: 'C1', icon: 'quote',
    title: 'Nominal- & Verbalstil', zh: '名词化与动词化：学术文本的核心转换',
    tip:
      '<h4>为什么重要</h4><p>TestDaF 阅读和写作中，学术文本大量使用名词化（Nominalstil）。读懂需要“拆开”，写作需要“压缩”。</p>' +
      '<h4>转换规则</h4>' +
      '<div class="tbl"><table><tr><th>动词句</th><th>名词短语</th></tr>' +
      '<tr><td>动词</td><td>名词（-ung, -heit, 动词词干, 不定式名词化）</td></tr>' +
      '<tr><td>主语</td><td>Genitiv 或 durch + Akk（被动）</td></tr>' +
      '<tr><td>Akk 宾语</td><td>Genitiv</td></tr>' +
      '<tr><td>副词</td><td>形容词</td></tr>' +
      '<tr><td>介词宾语</td><td>保留介词（有时会变：sich interessieren für → das Interesse <b>an</b>）</td></tr></table></div>' +
      ex('Die Preise steigen stark. → der starke Anstieg der Preise', '') +
      ex('Der Staat fördert die Forschung. → die Förderung der Forschung durch den Staat', '') +
      '<h4>从句 ↔ 介词</h4>' +
      '<div class="tbl"><table><tr><th>从句</th><th>介词</th></tr>' +
      '<tr><td>weil, da</td><td>wegen, aufgrund + Gen</td></tr><tr><td>obwohl</td><td>trotz + Gen</td></tr>' +
      '<tr><td>wenn, falls</td><td>bei + Dat</td></tr><tr><td>indem</td><td>durch + Akk</td></tr>' +
      '<tr><td>um … zu, damit</td><td>zu(r) / zum + Dat</td></tr><tr><td>nachdem / bevor</td><td>nach / vor + Dat</td></tr>' +
      '<tr><td>ohne dass</td><td>ohne + Akk</td></tr></table></div>',
    ex: D.parse(`
c {Nominalstil: Weil die Mieten stark gestiegen sind, …} ___ des starken Anstiegs der Mieten … | Aufgrund | Trotz | Bei | Durch # weil → aufgrund + Gen。
c {Nominalstil: Indem man die Steuern senkt, …} ___ eine Senkung der Steuern … | Durch | Bei | Zur | Trotz # indem → durch + Akk。
c {Nominalstil: Obwohl die Regierung Maßnahmen ergriffen hat, …} ___ der Maßnahmen der Regierung … | Trotz | Wegen | Bei | Nach # obwohl → trotz + Gen。
c {Nominalstil: Um die Qualität zu sichern, …} ___ Sicherung der Qualität … | Zur | Zum | Bei der | Durch die # um … zu → zur + 名词（die Sicherung）。
c {Nominalstil: Wenn man den Antrag stellt, …} ___ Antragstellung … | Bei | Nach | Vor | Zur # wenn → bei + Dat。
i {Nominalstil: Nachdem die Studie veröffentlicht worden war, …} ___ der Veröffentlichung der Studie … | Nach # nachdem → nach + Dat。
i {Nominalstil: Bevor die Kandidaten geprüft werden, …} ___ der Prüfung der Kandidaten … | Vor # bevor → vor + Dat。
i {Man untersucht die Ursachen.} die ___ der Ursachen | Untersuchung | untersuchen # Akk 宾语 → Genitiv。
i {Die Bevölkerung wächst schnell.} das schnelle ___ der Bevölkerung | Wachstum | wachsen # 副词 schnell → 形容词；主语 → Genitiv。
i {Die Preise steigen deutlich.} der deutliche ___ der Preise | Anstieg | steigen # steigen → der Anstieg。
c {Viele interessieren sich für das Thema.} das Interesse vieler ___ dem Thema | an | für | über | auf # sich interessieren für → das Interesse an。
c {Die Arbeitslosigkeit nimmt ab.} die ___ der Arbeitslosigkeit | Abnahme | Abnehmen | Abnahmung | Abgenommenheit # abnehmen → die Abnahme。
c {Man entwickelt neue Technologien.} die Entwicklung ___ Technologien | neuer | neue | neuen | neues # 无冠词 Gen 复数 → -er。
c {Der Staat fördert die Forschung.} die Förderung der Forschung ___ den Staat | durch | mit | bei | für # 施动者 → durch + Akk。
c {Verbalstil: Bei steigender Nachfrage erhöhen sich die Preise.} ___ die Nachfrage steigt, erhöhen sich die Preise. | Wenn | Weil | Obwohl | Bevor # bei → wenn。
c {Verbalstil: Trotz intensiver Bemühungen scheiterte das Projekt.} ___ man sich intensiv bemühte, scheiterte das Projekt. | Obwohl | Weil | Wenn | Nachdem # trotz → obwohl。
c {Verbalstil: Durch regelmäßiges Training verbessert man seine Leistung.} ___ man regelmäßig trainiert, verbessert man seine Leistung. | Indem | Damit | Sodass | Obwohl # durch → indem。
o 由于能源价格上涨，许多企业陷入困境。 | Aufgrund der gestiegenen Energiepreise geraten viele Unternehmen in Schwierigkeiten. # aufgrund + Gen；名词短语占第一位。
o 在申请时必须出示护照。 | Bei der Antragstellung muss ein Pass vorgelegt werden. # bei + Dat。
o 为了保护环境，必须减少垃圾。 | Zum Schutz der Umwelt muss Müll reduziert werden. # zum Schutz = um … zu schützen。
i {Die Regierung hat beschlossen, die Steuern zu erhöhen.} der ___ der Regierung zur Erhöhung der Steuern | Beschluss | beschließen # beschließen → der Beschluss。
c {Verbalstil: Vor Beginn der Vorlesung …} ___ die Vorlesung beginnt, … | Bevor | Nachdem | Während | Seit # vor → bevor。
m Konnektor ↔ Präposition | weil=aufgrund;obwohl=trotz;indem=durch;um … zu=zur / zum;nachdem=nach #
`)
  });

  /* ---------------- Erweiterte Partizipialattribute ---------------- */
  D.unit({
    id: 'c1-partizip', level: 'C1', icon: 'layers',
    title: 'Erweiterte Partizipialattribute', zh: '扩展分词定语：读懂长名词短语',
    tip:
      '<h4>结构</h4><p>冠词 + <b>[扩展成分]</b> + 分词 + 名词。扩展成分可以很长，读的时候先找冠词，再找名词。</p>' +
      ex('die <b>seit Jahren ständig</b> steigend<b>en</b> Mieten', '多年来持续上涨的房租') +
      '<h4>三种分词</h4>' +
      '<div class="tbl"><table><tr><th>形式</th><th>含义</th><th>改写</th></tr>' +
      '<tr><td>Partizip I</td><td>主动、同时</td><td>die Preise, die steigen</td></tr>' +
      '<tr><td>Partizip II</td><td>被动、已完成</td><td>der Bericht, der veröffentlicht wurde</td></tr>' +
      '<tr><td>Partizip II（sein 动词）</td><td>主动、已完成</td><td>der Zug, der angekommen ist</td></tr>' +
      '<tr><td>zu + Partizip I</td><td>必须 / 可以被……</td><td>die Aufgabe, die gelöst werden muss</td></tr></table></div>' +
      '<h4>拆解步骤</h4><ol><li>找到冠词和它对应的名词。</li><li>分词决定关系从句的动词（主动 / 被动 / 情态）。</li><li>冠词与分词之间的成分放进从句。</li></ol>' +
      '<div class="note">形容词也能这样扩展：<i>die für viele Studierende zu hohen Mieten</i>。</div>',
    ex: D.parse(`
c {die Studie, die im letzten Jahr veröffentlicht wurde} die ___ Studie | im letzten Jahr veröffentlichte | im letzten Jahr veröffentlichende | veröffentlichte im letzten Jahr | im letzten Jahr veröffentlichten # 被动、已完成 → Partizip II；die + Nom → -e。
c {die Zahl der Studierenden, die ständig wächst} die ___ Zahl der Studierenden | ständig wachsende | ständig gewachsene | ständig wachsenden | wachsende ständig # 主动、同时 → Partizip I。
c {Maßnahmen, die sofort ergriffen werden müssen} sofort zu ___ Maßnahmen | ergreifende | ergriffene | ergreifenden | ergreifen # 必须被…… → zu + Partizip I；无冠词复数 Nom → -e。
c {ein Problem, das sich nicht lösen lässt} ein nicht zu ___ Problem | lösendes | lösende | gelöstes | lösen # zu + Partizip I；ein + 中性 → -es。
i die von der Regierung ___ Reformen | beschlossenen | beschließen, Partizip II # 被决定 → Partizip II；die + 复数 → -en。
i die in Deutschland ___ Studierenden | lebenden | leben, Partizip I # 主动 → Partizip I。
i der seit Jahren ___ Konflikt | andauernde | andauern, Partizip I # der + Nom → -e。
i die bereits ___ Ergebnisse | erwähnten | erwähnen, Partizip II # 已被提到 → Partizip II。
c Die für viele Studierende zu ___ Mieten sind ein großes Problem. | hohen | hohe | hoher | hoch # 扩展形容词定语；die + 复数 → -en。
c {Auflösen: die von Experten geforderten Maßnahmen} die Maßnahmen, ___ | die von Experten gefordert werden | die Experten fordern lassen | die von Experten fordern | die Experten gefordert werden # Partizip II + von → 被动关系从句。
c {Auflösen: der in Berlin geborene Autor} der Autor, ___ | der in Berlin geboren wurde | der in Berlin gebärt | der in Berlin geboren hat | der in Berlin geboren wird # geboren → wurde geboren。
c {Auflösen: die stark steigenden Preise} die Preise, ___ | die stark steigen | die stark gestiegen sind | die stark gesteigert werden | die stark gestiegen haben # Partizip I → 主动、现在。
o 那篇经常被引用的文章是 2015 年发表的。 | Der häufig zitierte Artikel wurde 2015 veröffentlicht. # 被引用 → Partizip II。
o 不断增长的需求导致价格上涨。 | Die ständig wachsende Nachfrage führt zu höheren Preisen. # Partizip I。
o 这是一个必须立即解决的问题。 | Das ist ein sofort zu lösendes Problem. # zu + Partizip I。
i die in der Tabelle ___ Werte | dargestellten | darstellen, Partizip II # 可分动词：dar-ge-stellt。
c {der Forscher, der nach Deutschland zurückgekehrt ist} der nach Deutschland ___ Forscher | zurückgekehrte | zurückkehrende | zurückgekehrten | zurückgekehrt # sein 动词 → Partizip II 表主动完成。
c {Der Bericht, der gestern vorgestellt wurde, enthält neue Daten.} Der ___ Bericht enthält neue Daten. | gestern vorgestellte | gestern vorstellende | vorgestellte gestern | gestern vorgestellten # Partizip II；der + Nom → -e。
i Die ___ Arbeitslosenquote überrascht viele Experten. | sinkende | sinken, Partizip I # 正在下降 → Partizip I。
c Die ___ Ergebnisse müssen noch überprüft werden. | vorliegenden | vorgelegenen | vorliegende | vorlegenden # vorliegen → vorliegend（现有的）；die + 复数 → -en。
m Partizipialattribut ↔ Relativsatz | die steigenden Kosten=die Kosten, die steigen;die gestiegenen Kosten=die Kosten, die gestiegen sind;die zu senkenden Kosten=die Kosten, die gesenkt werden müssen;die gesenkten Kosten=die Kosten, die gesenkt wurden #
`)
  });

  /* ---------------- Konnektoren der Argumentation ---------------- */
  D.unit({
    id: 'c1-konnektoren', level: 'C1', icon: 'link',
    title: 'Konnektoren der Argumentation', zh: '论证连接词：indem, sofern, zumal …',
    tip:
      '<div class="tbl"><table><tr><th>连接词</th><th>含义</th><th>语序</th></tr>' +
      '<tr><td>indem / dadurch, dass</td><td>通过……（方式）</td><td>从句</td></tr>' +
      '<tr><td>sofern / soweit / solange</td><td>只要、在……条件下</td><td>从句</td></tr>' +
      '<tr><td>zumal</td><td>尤其是因为</td><td>从句</td></tr>' +
      '<tr><td>wohingegen / während</td><td>而（对比）</td><td>从句</td></tr>' +
      '<tr><td>ohne dass / anstatt dass</td><td>没有 / 不……而</td><td>从句</td></tr>' +
      '<tr><td>zu … , als dass</td><td>太……以至于不能</td><td>从句 + K II</td></tr>' +
      '<tr><td>es sei denn</td><td>除非</td><td>后接主句语序</td></tr>' +
      '<tr><td>folglich, infolgedessen, demnach</td><td>因此</td><td>第一位 + 动词</td></tr>' +
      '<tr><td>dennoch, nichtsdestotrotz</td><td>尽管如此</td><td>第一位 + 动词</td></tr>' +
      '<tr><td>hingegen, dagegen</td><td>相反</td><td>第一位或中场</td></tr>' +
      '<tr><td>zum einen … zum anderen</td><td>一方面……另一方面</td><td>第一位 + 动词</td></tr>' +
      '<tr><td>geschweige denn</td><td>更不用说</td><td>否定句之后</td></tr></table></div>' +
      ex('Das Problem ist zu komplex, als dass man es schnell lösen könnte.', '问题太复杂，无法很快解决。') +
      ex('Wir fahren morgen, es sei denn, es regnet.', '除非下雨，否则我们明天出发。'),
    ex: D.parse(`
c Man kann Energie sparen, ___ man die Heizung herunterdreht. | indem | sodass | damit | obwohl # 方式 → indem。
c Die Mieten sind gestiegen, ___ viele Studierende in WGs ziehen. | sodass | indem | zumal | sofern # 结果 → sodass。
c Ich komme gern, ___ ich nicht arbeiten muss. | sofern | indem | zumal | ohne dass # 条件 → sofern。
c Er wird die Prüfung kaum bestehen, ___ er nie gelernt hat. | zumal | sofern | indem | es sei denn # 补充原因 → zumal。
c Wir fahren morgen los, ___ es regnet stark. | es sei denn, | sofern | zumal | indem # 除非 → es sei denn + 主句语序。
c In Städten steigen die Mieten, ___ sie auf dem Land eher sinken. | wohingegen | indem | sofern | zumal # 对比 → wohingegen。
c Die Aufgabe ist zu schwierig, ___ man sie in einer Stunde lösen könnte. | als dass | sodass | damit | ohne dass # zu … als dass + K II。
c Er hat das Projekt beendet, ___ ihm jemand geholfen hat. | ohne dass | als dass | sodass | indem # 主语不同 → ohne dass。
i Die Kosten sind gestiegen. ___ müssen die Gebühren erhöht werden. | Folglich;Infolgedessen;Deshalb;Daher;Demnach | 因此 # 结果副词占第一位，动词紧随。
i Das Konzept ist teuer. ___ überzeugt es viele Experten. | Dennoch;Trotzdem;Nichtsdestotrotz | 尽管如此 # 让步副词。
c Er spricht kein Englisch, ___ denn Chinesisch. | geschweige | sondern | sowie | zumal # 更不用说 → geschweige denn。
c ___ ist das Studium teuer, zum anderen fehlt die Zeit. | Zum einen | Einerseits | Erstens | Zwar # zum einen … zum anderen。
c Viele Menschen fahren gern Fahrrad. Autofahrer ___ beschweren sich über fehlende Parkplätze. | hingegen | indem | sofern | zumal # 对比 → hingegen（可在中场）。
c ___ man die Daten genau analysiert, erkennt man einen klaren Trend. | Wenn | Zumal | Ohne dass | Als dass # 条件 → wenn。
c Die Zahl der Unfälle ging zurück, ___ strengere Regeln eingeführt worden waren. | nachdem | indem | als dass | sofern # 时间先后 → nachdem。
c ___ die Ergebnisse nicht vorliegen, kann man noch nichts sagen. | Solange | Zumal | Indem | Sodass # 只要还没…… → solange。
i Das Angebot gilt nur, ___ der Vorrat reicht. | solange;sofern;soweit # 条件 / 期限。
c ___ zu protestieren, sollte man konkrete Vorschläge machen. | Anstatt | Ohne | Um | Indem # 不……而 → anstatt … zu。
o 他通过每天练习提高了德语水平。 | Er verbesserte sein Deutsch, indem er jeden Tag übte. # indem。
o 除非下雨，否则我们明天去郊游。 | Wir machen morgen einen Ausflug, es sei denn, es regnet. # es sei denn。
o 这个问题太复杂了，一个人无法解决。 | Das Problem ist zu komplex, als dass man es allein lösen könnte. # zu … als dass + K II。
o 他一句话没说就走了。 | Er ging, ohne ein Wort zu sagen. # ohne … zu。
m Konnektor ↔ Funktion | indem=Art und Weise;sofern=Bedingung;zumal=zusätzlicher Grund;wohingegen=Gegensatz;es sei denn=Ausnahme #
`)
  });

  /* ---------------- Redewiedergabe ---------------- */
  D.unit({
    id: 'c1-redewiedergabe', level: 'C1', icon: 'chat',
    title: 'Redewiedergabe', zh: '学术写作中的转述：laut, zufolge, K I',
    tip:
      '<h4>转述的手段</h4>' +
      '<div class="tbl"><table><tr><th>手段</th><th>例句</th></tr>' +
      '<tr><td>laut + Dat / Gen</td><td><b>Laut</b> der Studie / dem Bericht …</td></tr>' +
      '<tr><td>zufolge + Dat（后置）</td><td>Der Studie <b>zufolge</b> …</td></tr>' +
      '<tr><td>nach / gemäß + Dat</td><td><b>Nach</b> Angaben der Polizei …</td></tr>' +
      '<tr><td>wie-从句</td><td><b>Wie</b> der Autor betont, …</td></tr>' +
      '<tr><td>Konjunktiv I</td><td>Die Forscher erklären, die Daten <b>seien</b> eindeutig.</td></tr>' +
      '<tr><td>sollen / wollen</td><td>Er <b>soll</b> … (据说) / Er <b>will</b> … (自称)</td></tr></table></div>' +
      '<h4>常用引述动词</h4>' +
      '<p>behaupten（声称）, betonen / hervorheben（强调）, erklären（说明）, einräumen（承认）, bezweifeln（怀疑）, kritisieren（批评）, warnen（警告）, fordern（要求）, widersprechen（反驳）</p>' +
      '<h4>转述问题和要求</h4>' +
      ex('Sie fragte, <b>ob</b> die Daten aktuell <b>seien</b>.', '') +
      ex('Er forderte, man <b>solle</b> die Quellen angeben.', ''),
    ex: D.parse(`
c ___ einer Studie schlafen Jugendliche zu wenig. | Laut | Zufolge | Seitens | Wie # laut + Gen / Dat，前置。
c Einer Umfrage ___ sind 60 Prozent der Befragten zufrieden. | zufolge | laut | wegen | seitens # zufolge 后置 + Dat。
c ___ der Bericht zeigt, nimmt die Armut zu. | Wie | Was | Als | Laut # wie-从句引出来源。
i Die Forscherin betont, die Ergebnisse ___ eindeutig. | seien | sein, Konjunktiv I # 复数 → seien。
i Der Autor behauptet, er ___ die Daten selbst erhoben. | habe | haben, Konjunktiv I # er → habe。
c Kritiker bezweifeln, ___ die Maßnahme wirksam ist. | dass | wenn | wie | als # bezweifeln, dass …
c Der Minister räumte ein, Fehler gemacht zu ___. | haben | sein | werden | hatten # einräumen = 承认；完成式不定式。
i Die Studierenden fragten, wann die Ergebnisse veröffentlicht ___. | würden;werden | werden, Konjunktiv # werden（K I = 直陈式）→ würden。
c Die Professorin forderte, man ___ die Quellen genau angeben. | solle | soll | sollen | sollst # 要求的转述 → solle。
c {Die Regierung soll von dem Problem gewusst haben. – Was bedeutet das?} Die Regierung soll von dem Problem gewusst haben. | Man sagt, die Regierung habe davon gewusst. | Die Regierung behauptet, davon gewusst zu haben. | Die Regierung musste davon wissen. | Die Regierung wollte davon wissen. # sollen = 据说（他人所说）。
c Der Angeklagte ___ unschuldig sein. Das behauptet er jedenfalls. | will | soll | muss | dürfte # 本人声称 → will。
c Den Angaben ___ Polizei zufolge gab es keine Verletzten. | der | die | des | den # die Polizei → Gen der。
o 根据这项研究，越来越多的人在家工作。 | Laut der Studie arbeiten immer mehr Menschen von zu Hause. # laut + Gen / Dat。
o 作者认为这个理论已经过时了。 | Der Autor meint, die Theorie sei veraltet. # K I：sei。
o 专家警告说，形势可能会恶化。 | Experten warnen, die Lage könne sich verschlechtern. # K I：könne。
i Wie die Zeitung ___, wurde der Vertrag unterschrieben. | berichtet;berichtete | berichten # wie-从句：直陈式即可。
c {Indirekte Rede, Konjunktiv I} Er erklärte, er ___ morgen nach Berlin. | fahre | fahren | fahrt | gefahren # K I：fahre（口语中也说 fährt / führe，书面转述用 K I）。
i Sie sagten, sie ___ keine Ahnung gehabt. | hätten | haben, Konjunktiv # sie haben = 直陈式 → K II hätten。
c Laut ___ Bericht der Regierung ist die Lage stabil. | dem | den | der | die # laut + Dat：dem Bericht。
c Der Autor ___ hervor, dass die Ergebnisse vorläufig sind. | hebt | stellt | bringt | weist # hervorheben = 强调。
m Verb ↔ Bedeutung | betonen=hervorheben;einräumen=zugeben;bezweifeln=nicht glauben;widersprechen=eine andere Meinung vertreten;behaupten=als wahr darstellen #
`)
  });

  /* ---------------- Modalität ohne Modalverben ---------------- */
  D.unit({
    id: 'c1-modalitaet', level: 'C1', icon: 'key',
    title: 'Modalität ohne Modalverben', zh: 'sein / haben + zu、-bar、bedürfen …',
    tip:
      '<div class="tbl"><table><tr><th>形式</th><th>相当于</th><th>例句</th></tr>' +
      '<tr><td>sein + zu + Inf</td><td>muss / kann <b>被</b>……（被动）</td><td>Der Antrag <b>ist</b> bis Montag einzureichen.</td></tr>' +
      '<tr><td>haben + zu + Inf</td><td>muss（主动）</td><td>Sie <b>haben</b> den Antrag einzureichen.</td></tr>' +
      '<tr><td>sich lassen + Inf</td><td>kann 被……</td><td>Das Problem <b>lässt sich</b> lösen.</td></tr>' +
      '<tr><td>-bar / -lich</td><td>kann 被……</td><td>lösbar, trinkbar, erklärlich</td></tr>' +
      '<tr><td>-wert / -würdig</td><td>值得被……</td><td>sehenswert, empfehlenswert</td></tr>' +
      '<tr><td>bedürfen + Gen</td><td>brauchen</td><td>Das <b>bedarf</b> einer Erklärung.</td></tr>' +
      '<tr><td>es gilt + zu + Inf</td><td>man muss</td><td><b>Es gilt</b>, Lösungen zu finden.</td></tr>' +
      '<tr><td>nicht brauchen + zu</td><td>nicht müssen</td><td>Du <b>brauchst</b> nicht <b>zu</b> kommen.</td></tr></table></div>' +
      '<div class="note">TestDaF 的考试说明、规章和学术文本大量使用 sein + zu。</div>',
    ex: D.parse(`
c Die Bewerbung ___ bis zum 15. März einzureichen. | ist | hat | wird | muss # 被动含义 → sein + zu。
c Die Studierenden ___ eine Hausarbeit zu schreiben. | haben | sind | werden | müssen # 主动含义 → haben + zu。
i Der Antrag ___ schriftlich zu stellen. | ist # = muss schriftlich gestellt werden。
i Sie ___ morgen um acht im Büro zu sein. | hat # haben + zu = muss。
c Das Problem ist kaum ___. (= kann kaum gelöst werden) | lösbar | löslich | gelöst | lösend # lösbar = kann gelöst werden（löslich = 可溶解的）。
c Das Gerät ist nicht mehr ___. (= kann nicht mehr repariert werden) | reparierbar | repariert | reparierend | reparierlich # -bar。
c Diese Frage ___ einer genauen Untersuchung. | bedarf | braucht | bedürft | bedarft # bedürfen + Gen。
i Du ___ nicht zu kommen, wenn du keine Zeit hast. | brauchst # nicht brauchen + zu = nicht müssen。
c Es ___, die Ursachen des Problems zu klären. | gilt | gibt | geht | handelt # es gilt + zu = man muss。
c Das Wasser ist ___. (= kann getrunken werden) | trinkbar | getrunken | trinkend | trinklich # -bar。
c Der Vorschlag ist ___. (= sollte man unterstützen) | unterstützenswert | unterstützbar | unterstützt | unterstützend # -wert = 值得……
o 所有表格都必须用德语填写。 | Alle Formulare sind auf Deutsch auszufüllen. # sein + zu；可分动词 aus-zu-füllen。
o 这个任务很容易完成。 | Die Aufgabe lässt sich leicht erledigen. # sich lassen。
o 你不必担心。 | Du brauchst dir keine Sorgen zu machen. # nicht brauchen + zu。
i Die Kosten sind kaum ___. | vorhersehbar | vorhersehen, -bar # vorhersehbar = kann vorhergesehen werden。
c Die Ergebnisse ___ sich nicht verallgemeinern. | lassen | sind | haben | werden # sich lassen + 不定式。
c Der Text ist ohne Wörterbuch kaum zu ___. | verstehen | verstanden | verständlich | versteht # sein + zu + 不定式。
i Die Situation ist ernst, aber nicht ___. | hoffnungslos | Hoffnung, -los # -los = 没有……
c Die Altstadt ist wirklich ___. (= man sollte sie sehen) | sehenswert | sehbar | gesehen | sichtbar # -wert = 值得。
c Bei Fragen ___ sich die Teilnehmer an das Sekretariat zu wenden. | haben | sind | lassen | werden # haben + zu = müssen（主动）。
m Ersatzform ↔ Bedeutung | ist zu erledigen=muss erledigt werden;lässt sich erledigen=kann erledigt werden;hat zu erledigen=muss erledigen;braucht nicht zu erledigen=muss nicht erledigen #
`)
  });

  /* ---------------- Grafikbeschreibung ---------------- */
  D.unit({
    id: 'c1-grafik', level: 'C1', icon: 'trend',
    title: 'Grafikbeschreibung', zh: 'TestDaF 写作：描述图表的语法',
    tip:
      '<h4>介绍图表</h4>' +
      ex('Die Grafik <b>zeigt</b> / <b>gibt Auskunft über</b> … · <b>Aus</b> der Grafik <b>geht hervor</b>, dass …', '') +
      ex('Die Daten <b>stammen vom</b> Statistischen Bundesamt. · Die Grafik <b>stützt sich auf</b> …', '') +
      '<h4>变化：um 与 auf</h4>' +
      '<div class="tbl"><table><tr><th></th><th>含义</th><th>例句</th></tr>' +
      '<tr><td><b>um</b></td><td>变化量（差值）</td><td>Die Zahl stieg <b>um</b> 10 Prozent.</td></tr>' +
      '<tr><td><b>auf</b></td><td>终值</td><td>Die Zahl stieg <b>auf</b> 2 Millionen.</td></tr>' +
      '<tr><td><b>von … auf</b></td><td>从……到</td><td>… <b>von</b> 20 <b>auf</b> 25 Prozent</td></tr></table></div>' +
      '<p>上升：steigen, ansteigen, zunehmen, wachsen, sich verdoppeln · 下降：sinken, fallen, abnehmen, zurückgehen, sich halbieren · 不变：konstant / stabil bleiben</p>' +
      '<p>名词：der Anstieg, die Zunahme, der Rückgang, die Abnahme（+ um / auf）</p>' +
      '<h4>比较与比例</h4>' +
      ex('<b>Im Vergleich zu</b> 2010 … · <b>Verglichen mit</b> … · <b>Gegenüber</b> dem Vorjahr …', '') +
      ex('Der <b>Anteil</b> der Frauen <b>an</b> den Studierenden liegt <b>bei</b> 51 Prozent.', '') +
      '<div class="note">20 % → 25 %：上升了 5 个<b>百分点</b>（Prozentpunkte），而不是 5 %。</div>',
    ex: D.parse(`
c Die Zahl der Studierenden stieg von 2 ___ 2,9 Millionen. | auf | um | bis | zu # 终值 → von … auf。
c Die Zahl stieg ___ 900.000, also um fast 50 Prozent. | um | auf | von | bis # 变化量 → um。
c Die Grafik gibt Auskunft ___ die Entwicklung der Mieten. | über | von | auf | an # Auskunft geben über + Akk。
c ___ der Grafik geht hervor, dass immer mehr Menschen online einkaufen. | Aus | Von | Nach | Laut # aus … geht hervor。
i Der Anteil der Frauen ___ den Studierenden liegt bei 51 Prozent. | an # der Anteil an + Dat。
c Die Arbeitslosigkeit ging ___ 2015 und 2020 deutlich zurück. | zwischen | von | seit | bis # zwischen … und …
c Die Preise haben sich innerhalb von zehn Jahren ___. | verdoppelt | doppelt | verdoppelten | gedoppelt # sich verdoppeln → verdoppelt。
i Im Jahr 2019 erreichte die Zahl ihren ___. | Höchststand;Höhepunkt | höchster Wert # den Höchststand erreichen。
c Der Anteil stieg von 20 auf 25 Prozent, also um fünf ___. | Prozentpunkte | Prozent | Punkte | Prozente # 百分比之差 → Prozentpunkte。
c ___ 2010 ist der Anteil um ein Drittel gestiegen. | Gegenüber | Laut | Aus | Zwischen # 与……相比 → gegenüber。
i Die Zahl der Fahrgäste blieb nahezu ___. | konstant;gleich;stabil | 不变 # konstant bleiben。
c Die Zahl der Geburten ist ___ gesunken. | leicht | leichte | leichter | leicht gesenkt # 副词修饰动词，不变格。
c Es ist ein deutlicher ___ der Zahlen zu erkennen. | Rückgang | Rückgehen | Zurückgang | Zurückgehen # zurückgehen → der Rückgang。
o 图表显示了 2000 年到 2020 年间能源消耗的变化。 | Die Grafik zeigt die Entwicklung des Energieverbrauchs zwischen 2000 und 2020. # zeigen + Akk。
o 失业率下降到了 5%。 | Die Arbeitslosenquote sank auf fünf Prozent. # 终值 → auf。
o 与男性相比，女性更常使用公共交通。 | Im Vergleich zu Männern nutzen Frauen häufiger öffentliche Verkehrsmittel. # im Vergleich zu + Dat。
i Mehr als die ___ der Befragten (über 50 %) ist dafür. | Hälfte # die Hälfte = 一半。
c Knapp ein ___ der Befragten (etwa 24 %) lehnt den Vorschlag ab. | Viertel | Drittel | Fünftel | Halb # 约四分之一 → ein Viertel。
c Die Ausgaben sind ___ 3 Prozent auf 120 Millionen Euro gestiegen. | um | auf | von | bei # 变化量 → um；终值 → auf。
i Die Zahl der Einwohner hat sich ___. (nur noch halb so viele) | halbiert | sich halbieren # sich halbieren → halbiert。
c Die Grafik ___ sich auf Daten des Statistischen Bundesamtes. | stützt | basiert | beruht | stellt # sich stützen auf（basieren / beruhen 不带 sich）。
c Der Wert lag 2020 ___ 4,2 Prozent. | bei | auf | um | von # liegen bei + 数值。
m Verb ↔ Nomen | zunehmen=die Zunahme;abnehmen=die Abnahme;ansteigen=der Anstieg;zurückgehen=der Rückgang;sich verdoppeln=die Verdopplung #
`)
  });

  /* ---------------- Präpositionen C1 ---------------- */
  D.unit({
    id: 'c1-praepositionen', level: 'C1', icon: 'pin',
    title: 'Präpositionen der Schriftsprache', zh: 'gemäß, mangels, dank, zwecks …',
    tip:
      '<div class="tbl"><table><tr><th>介词</th><th>格</th><th>含义</th></tr>' +
      '<tr><td>gemäß / entsprechend</td><td>Dat</td><td>根据、按照</td></tr>' +
      '<tr><td>zufolge（后置）</td><td>Dat</td><td>据……所说</td></tr>' +
      '<tr><td>dank</td><td>Dat / Gen</td><td>多亏</td></tr>' +
      '<tr><td>mangels</td><td>Gen</td><td>由于缺乏</td></tr>' +
      '<tr><td>zwecks</td><td>Gen</td><td>为了</td></tr>' +
      '<tr><td>seitens</td><td>Gen</td><td>来自……方面</td></tr>' +
      '<tr><td>hinsichtlich / bezüglich</td><td>Gen</td><td>关于</td></tr>' +
      '<tr><td>anhand / mittels</td><td>Gen</td><td>借助、根据</td></tr>' +
      '<tr><td>im Rahmen / im Auftrag</td><td>Gen</td><td>在……框架内 / 受……委托</td></tr>' +
      '<tr><td>zugunsten / ungeachtet</td><td>Gen</td><td>有利于 / 不顾</td></tr>' +
      '<tr><td>einschließlich / zuzüglich</td><td>Gen</td><td>包括 / 另加</td></tr></table></div>' +
      '<div class="note">名词没有冠词和形容词时，Genitiv 往往看不出来，常直接接名词：<i>mangels Zeit, zwecks Verbesserung</i>。</div>',
    ex: D.parse(`
c ___ der neuen Regelung müssen alle Studierenden eine Gebühr zahlen. | Gemäß | Mangels | Zwecks | Dank # 按照规定 → gemäß + Dat。
c ___ Beweisen wurde der Angeklagte freigesprochen. | Mangels | Dank | Gemäß | Zwecks # 由于缺乏 → mangels。
c ___ seiner Hilfe konnten wir das Projekt abschließen. | Dank | Mangels | Seitens | Zwecks # 多亏 → dank。
c ___ der Universität gibt es noch keine Stellungnahme. | Seitens | Zwecks | Mangels | Gemäß # 来自……方面 → seitens。
c ___ einer Umfrage wurden 1000 Personen befragt. | Im Rahmen | Im Hinblick | Mangels | Seitens # 在……框架内 → im Rahmen + Gen。
c Die Daten wurden ___ eines Fragebogens erhoben. | anhand | mangels | seitens | zwecks # 借助 / 根据 → anhand。
i Der Preis versteht sich ___ Mehrwertsteuer. | inklusive;einschließlich;zuzüglich | 含税 / 另加税 # 商务文本常用。
c ___ des Klimawandels müssen wir umdenken. | Angesichts | Mangels | Dank | Zwecks # 鉴于 → angesichts。
c Das Gesetz wurde ___ der Mieter geändert. | zugunsten | angesichts | mangels | anhand # 有利于 → zugunsten。
i Den Vorschriften ___ ist das Rauchen verboten. | entsprechend;gemäß;zufolge | 后置 # 后置 + Dat。
c ___ der Kosten gibt es noch offene Fragen. | Hinsichtlich | Zwecks | Mangels | Dank # 关于 → hinsichtlich。
o 由于缺少时间，会议被取消了。 | Mangels Zeit wurde die Sitzung abgesagt. # mangels + 无冠词名词。
o 多亏了你的帮助，我通过了考试。 | Dank deiner Hilfe habe ich die Prüfung bestanden. # dank。
o 按照规定，申请必须在月底前提交。 | Gemäß den Vorschriften muss der Antrag bis Monatsende eingereicht werden. # gemäß + Dat 复数。
i ___ Verbesserung der Lehre werden neue Mitarbeiter eingestellt. | Zwecks;Zur | 为了 # zwecks + Gen（无冠词）。
c ___ aller Bemühungen konnte der Termin nicht gehalten werden. | Ungeachtet | Dank | Gemäß | Zwecks # 不顾 → ungeachtet。
c Die Studie wurde ___ des Ministeriums durchgeführt. | im Auftrag | mangels | anhand | gemäß # 受……委托 → im Auftrag + Gen。
i Er gewann den Prozess ___ eines guten Anwalts. | mithilfe;mit Hilfe | 借助 # mithilfe + Gen。
c Die Kosten werden ___ der Teilnehmer getragen. | seitens | von | durch | mit # Genitiv 复数 der Teilnehmer → seitens。
c Die Teilnehmer wurden ___ ihres Alters in Gruppen eingeteilt. | anhand | zwecks | dank | ungeachtet # 根据 → anhand。
m Präposition ↔ Bedeutung | mangels=weil etwas fehlt;dank=mit positiver Hilfe von;zwecks=mit dem Ziel;seitens=von … aus;gemäß=in Übereinstimmung mit #
`)
  });

  /* ---------------- Verben & Nomen mit Präpositionen (C1) ---------------- */
  D.unit({
    id: 'c1-verbenpraep', level: 'C1', icon: 'tag',
    title: 'Wissenschaftliche Verben mit Präposition', zh: 'beitragen zu, beruhen auf, sich auswirken auf …',
    tip:
      '<div class="tbl"><table><tr><th>动词</th><th>介词</th><th>含义</th></tr>' +
      '<tr><td>beitragen</td><td>zu + Dat</td><td>有助于</td></tr>' +
      '<tr><td>beruhen / basieren</td><td>auf + Dat</td><td>基于</td></tr>' +
      '<tr><td>sich auswirken / Einfluss haben</td><td>auf + Akk</td><td>影响</td></tr>' +
      '<tr><td>führen</td><td>zu + Dat</td><td>导致</td></tr>' +
      '<tr><td>sich beziehen / hinweisen / verweisen</td><td>auf + Akk</td><td>涉及 / 指出 / 参见</td></tr>' +
      '<tr><td>sich befassen / sich auseinandersetzen</td><td>mit + Dat</td><td>研究 / 探讨</td></tr>' +
      '<tr><td>bestehen</td><td>aus + Dat / in + Dat</td><td>由……组成 / 在于</td></tr>' +
      '<tr><td>eingehen</td><td>auf + Akk</td><td>回应、探讨</td></tr>' +
      '<tr><td>zusammenhängen</td><td>mit + Dat</td><td>与……有关</td></tr></table></div>' +
      '<h4>名词搭配</h4>' +
      '<p>der Einfluss / die Auswirkung <b>auf</b> · der Bedarf / der Mangel / das Interesse / die Kritik <b>an</b> · der Zusammenhang <b>zwischen / mit</b> · der Grund / die Voraussetzung <b>für</b></p>' +
      ex('Die Aufgabe besteht <b>darin</b>, die Daten zu analysieren.', 'da(r) + 介词 指向后面的 zu 不定式或从句'),
    ex: D.parse(`
c Der Tourismus trägt stark ___ Wirtschaft der Region bei. | zur | an die | für die | auf die # beitragen zu + Dat。
c Die Theorie beruht ___ falschen Annahmen. | auf | an | von | mit # beruhen auf + Dat。
c Der Lärm wirkt sich negativ ___ die Gesundheit aus. | auf | an | für | über # sich auswirken auf + Akk。
c Die Studie befasst sich ___ den Ursachen der Armut. | mit | über | an | von # sich befassen mit + Dat。
i Ich beziehe mich ___ Ihr Schreiben vom 3. Mai. | auf # sich beziehen auf + Akk。
i Rauchen kann ___ schweren Krankheiten führen. | zu # führen zu + Dat。
c Die Aufgabe besteht ___, die Daten zu analysieren. | darin | daraus | darauf | dazu # bestehen in → darin + zu 不定式。
c Das Team besteht ___ fünf Personen. | aus | in | von | mit # bestehen aus + Dat。
i Es gibt einen großen Bedarf ___ Fachkräften. | an # der Bedarf an + Dat。
c Es gibt einen engen Zusammenhang ___ Bildung und Einkommen. | zwischen | mit | von | über # der Zusammenhang zwischen A und B。
i Die Industrie hat großen Einfluss ___ die Politik. | auf # der Einfluss auf + Akk。
c Die Kritik ___ der Reform wird immer lauter. | an | über | gegen | zu # die Kritik an + Dat。
c Der Professor ging nicht ___ meine Frage ein. | auf | an | zu | über # eingehen auf + Akk。
o 这项研究探讨了年轻人的媒体使用。 | Die Studie befasst sich mit der Mediennutzung junger Menschen. # sich befassen mit。
o 缺乏睡眠会影响注意力。 | Schlafmangel wirkt sich auf die Konzentration aus. # sich auswirken auf。
o 这与我们的问题有关。 | Das hängt mit unserem Problem zusammen. # zusammenhängen mit。
i Die Ergebnisse weisen ___ ein ernstes Problem hin. | auf # hinweisen auf + Akk。
c ___ handelt es sich bei diesem Text? | Worum | Wovon | Worüber | Woran # es handelt sich um → worum。
c Er setzt sich kritisch ___ der Theorie auseinander. | mit | über | an | gegen # sich auseinandersetzen mit。
i Eine gute Ausbildung ist eine Voraussetzung ___ beruflichen Erfolg. | für # die Voraussetzung für + Akk。
c Die Firma leidet ___ einem Mangel an Fachkräften. | unter | auf | von | mit # leiden unter + Dat（外部情况）。
m Verb ↔ Präposition | beitragen=zu;beruhen=auf;sich befassen=mit;abhängen=von;bestehen (Inhalt)=in #
`)
  });

  /* ---------------- Hypothesen & Stellungnahme ---------------- */
  D.unit({
    id: 'c1-hypothese', level: 'C1', icon: 'cloud',
    title: 'Hypothesen & Stellungnahme', zh: '议论文中的第二虚拟式',
    tip:
      '<h4>委婉地表达观点（TestDaF 写作常用）</h4>' +
      '<ul><li>Es <b>wäre</b> sinnvoll / wünschenswert, …</li><li>Man <b>könnte</b> einwenden, dass …</li>' +
      '<li>Es <b>ließe sich</b> argumentieren, dass …</li><li>Meines Erachtens <b>wäre</b> … die beste Lösung.</li>' +
      '<li>Die Maßnahme <b>dürfte</b> … (谨慎推测)</li></ul>' +
      '<h4>批评过去：hätte … müssen / sollen</h4>' +
      ex('Man <b>hätte</b> früher handeln <b>sollen</b>.', '') +
      ex('Das Problem <b>hätte</b> früher erkannt werden <b>müssen</b>.', '被动 + 情态') +
      '<h4>省略 wenn 的假设</h4>' +
      ex('<b>Hätte</b> die Regierung schneller reagiert, <b>wäre</b> der Schaden geringer.', '') +
      ex('<b>Ohne</b> staatliche Förderung <b>wären</b> viele Projekte nicht möglich.', 'ohne + 名词 + K II'),
    ex: D.parse(`
c Es ___ sinnvoll, mehr in Bildung zu investieren. | wäre | ist gewesen | würde | hätte # 委婉建议 → Es wäre …
c Man ___ einwenden, dass die Kosten zu hoch sind. | könnte | konnte | kann gewesen | würde gekonnt # 反方观点 → Man könnte einwenden …
i Ohne staatliche Förderung ___ viele Projekte nicht möglich. | wären # ohne + 名词 + K II。
c Das Problem ___ früher erkannt werden müssen. | hätte | wäre | würde | hatte # 过去的必要性 → hätte … müssen。
c ___ die Regierung schneller reagiert, wäre der Schaden geringer. | Hätte | Wäre | Würde | Hatte # 省略 wenn → 动词前置。
i Es ___ sich argumentieren, dass die Reform zu spät kam. | ließe # sich lassen 的 K II → ließe。
c Meines Erachtens ___ eine Kombination beider Ansätze am besten. | wäre | würde | hätte | sei # 观点 → wäre。
c Die Maßnahme ___ den Verkehr deutlich reduzieren. (vorsichtige Vermutung) | dürfte | darf | durfte | dürfen # 谨慎推测 → dürfte。
o 没有互联网，现代生活难以想象。 | Ohne Internet wäre das moderne Leben kaum vorstellbar. # ohne + 名词 + K II。
o 人们本该早点行动。 | Man hätte früher handeln sollen. # hätte … sollen。
o 最好能更多地投资公共交通。 | Es wäre wünschenswert, mehr in den öffentlichen Verkehr zu investieren. # Es wäre wünschenswert + zu 不定式。
i Wenn alle Menschen weniger Fleisch essen würden, ___ das dem Klima helfen. | würde;könnte # 主句 K II。
c Selbst wenn die Kosten sinken ___, bliebe das Problem bestehen. | würden | werden | wären | hätten # 让步假设：selbst wenn + K II。
c An Ihrer Stelle ___ ich die Quelle genauer prüfen. | würde | wäre | hätte | werde # 建议 → würde。
i Die Ergebnisse ___ anders ausgefallen, wenn man mehr Personen befragt hätte. | wären # ausfallen 用 sein → wären ausgefallen。
c Der Text liest sich, als ___ er von einem Laien geschrieben worden. | wäre | hätte | würde | ist # als + K II（被动完成式 wäre … worden）。
i Das Projekt hätte nicht gestoppt ___ dürfen. | werden # 被动 + 情态：gestoppt werden dürfen。
c Ich ___ vorschlagen, das Thema zu vertiefen. | würde | wurde | wäre | hätte # 委婉提议 → Ich würde vorschlagen …
c Nicht auszudenken, was passiert ___, wenn der Damm gebrochen wäre. | wäre | hätte | würde | war # passieren 用 sein → wäre passiert。
m Redemittel ↔ Funktion | Man könnte einwenden …=Gegenargument;Es wäre wünschenswert …=Vorschlag;Man hätte … sollen.=Kritik an der Vergangenheit;Es dürfte …=vorsichtige Vermutung #
`)
  });

  /* ---------------- Textkohärenz ---------------- */
  D.unit({
    id: 'c1-textverweise', level: 'C1', icon: 'sort',
    title: 'Textverweise & Kohärenz', zh: '篇章衔接：weshalb, wodurch, Ersterer …',
    tip:
      '<h4>关系连接（指代整句）</h4>' +
      '<div class="tbl"><table><tr><th>词</th><th>例句</th></tr>' +
      '<tr><td>was</td><td>Er kam nicht, <b>was</b> mich ärgerte.</td></tr>' +
      '<tr><td>weshalb / weswegen</td><td>…, <b>weshalb</b> viele umziehen.（因此）</td></tr>' +
      '<tr><td>wodurch</td><td>…, <b>wodurch</b> die Kosten stiegen.（由此）</td></tr>' +
      '<tr><td>wobei</td><td>…, <b>wobei</b> er … betonte.（同时、其中）</td></tr>' +
      '<tr><td>wo(r) + 介词</td><td>…, <b>worüber</b> sich alle freuten.</td></tr></table></div>' +
      '<h4>指代与排序</h4>' +
      '<p><b>Ersterer / Letzterer</b>（前者 / 后者）· <b>dies</b>（这一点）· <b>dabei, dadurch, darin</b>（指前文）</p>' +
      '<h4>篇章结构词（TestDaF 写作）</h4>' +
      '<p>开头：Zunächst … · 补充：Darüber hinaus / Außerdem / Zudem … · 对比：Demgegenüber / Hingegen … · 结论：Demnach / Folglich … · 结尾：Abschließend / Zusammenfassend lässt sich sagen, dass …</p>',
    ex: D.parse(`
c Die Mieten steigen, ___ viele Studierende Probleme haben. | weshalb | womit | worauf | woran # 指代整句 + 结果 → weshalb。
c Es gibt Busse und Bahnen. ___ sind günstiger, Letztere sind schneller. | Erstere | Ersterer | Letztere | Jener # 前者（复数）→ Erstere。
c Er hat die Prüfung bestanden, ___ er sehr glücklich ist. | worüber | wodurch | womit | wofür # glücklich sein über → worüber。
i ___ hinaus gibt es weitere Argumente. | Darüber # darüber hinaus = 此外。
c {Schluss eines Aufsatzes} ___ möchte ich die wichtigsten Ergebnisse zusammenfassen. | Abschließend | Zunächst | Erstens | Anfangs # 结尾 → abschließend。
c Die Preise stiegen um zehn Prozent, ___ die Nachfrage sank. | wodurch | worüber | woran | wofür # 由此导致 → wodurch。
i Zuerst wird das Problem beschrieben, ___ werden Lösungen vorgeschlagen. | anschließend;danach;dann # 先后顺序。
c Viele Menschen nutzen soziale Medien. ___ entstehen neue Probleme. | Dadurch | Darauf | Daran | Darin # 由此 → dadurch。
c Die Studie hat zwei Schwächen: ___ ist die Stichprobe zu klein. | Zum einen | Zuletzt | Dabei | Wobei # 列举第一点 → zum einen。
i Er sprach über die Wirtschaft, ___ er besonders die Inflation betonte. | wobei # 同时、其中 → wobei。
c ___ zeigt sich, dass das Thema sehr komplex ist. | Insgesamt | Wobei | Worüber | Weshalb # 总结 → insgesamt。
o 首先我想介绍这个话题。 | Zunächst möchte ich das Thema vorstellen. # 开头 → zunächst。
o 此外，这个方案还很贵。 | Darüber hinaus ist das Konzept sehr teuer. # 补充 → darüber hinaus。
o 他没有来，这让我很失望。 | Er ist nicht gekommen, was mich sehr enttäuscht hat. # 指代整句 → was。
c Die Ergebnisse sind eindeutig. ___ muss die Theorie überarbeitet werden. | Demnach | Dabei | Darin | Wobei # 结论 → demnach。
i Zusammenfassend lässt sich ___, dass die Vorteile überwiegen. | sagen;feststellen # 结尾套句。
c Die Kosten stiegen, ___ der Umsatz gleich blieb. | während | weshalb | worauf | womit # 对比 → während。
c Das ist der Grund, ___ ich mich beworben habe. | weshalb | wobei | womit | worauf # der Grund, weshalb …
i Er hat sein Studium abgebrochen, ___ seine Eltern nicht einverstanden waren. | womit # einverstanden sein mit → womit。
c {Gegenargument einleiten} ___ wird oft behauptet, dass … | Demgegenüber | Darüber hinaus | Zunächst | Folglich # 对比观点 → demgegenüber。
m Funktion ↔ Ausdruck | Einleitung=Zunächst …;Ergänzung=Darüber hinaus …;Gegensatz=Demgegenüber …;Schluss=Abschließend … #
`)
  });
})();
