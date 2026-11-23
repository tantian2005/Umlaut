/* Extra B2 exercises, written around Goethe-Zertifikat B2 topics and word list */
(function () {
  'use strict';
  var X = G.dsl.extend;

  X('b2-passiv', `
c Der Fehler lässt sich leicht ___. | beheben | behoben | zu beheben | behebt # sich lassen + 不定式 = kann behoben werden。
i Die Aufgabe ist bis Freitag ___ erledigen. | zu # sein + zu = muss erledigt werden。
c Das Problem ist leider nicht ___. (= kann nicht gelöst werden) | lösbar | gelöst | lösend | lösbare # -bar = 可以被……
i Das Museum ___ montags geschlossen. | ist # 状态被动：ist geschlossen。
c Die neue Software muss noch ___ werden. | getestet | testen | getestet worden | zu testen # 情态被动：getestet werden。
o 这个问题必须尽快解决。 | Das Problem muss so schnell wie möglich gelöst werden. # 情态动词被动。
o 这种材料可以回收。 | Dieses Material lässt sich recyceln. # sich lassen = 可以被……
c Die Anträge ___ bereits geprüft worden. | sind | haben | werden | wurden # Perfekt 被动：sind … worden。
i Der Vertrag hätte schon letzte Woche unterschrieben werden ___. | müssen # 双不定式：unterschrieben werden müssen。
c Die Unterlagen sind bis zum 30. Juni ___. | einzureichen | eingereicht werden | zu eingereicht | einreichen # sein + zu + 不定式（可分：ein-zu-reichen）。
i Der Raum ist nicht ___. (heizen, -bar) | heizbar | heizen, -bar # heizbar = kann geheizt werden。
c Als ich ankam, ___ die Tür schon abgeschlossen. | war | wurde | hatte | ist # 过去的结果状态 → war。
`);

  X('b2-infinitiv', `
c Ich bin froh, die Wohnung endlich ___. | gefunden zu haben | gefunden zu sein | zu finden haben | finden zu haben # 已完成 → Partizip II + zu haben。
i Er gibt zu, einen Fehler gemacht zu ___. | haben # machen 用 haben。
c Sie hofft, für das Stipendium ___. | ausgewählt zu werden | ausgewählt werden | auszuwählen werden | ausgewählt zu haben # 被动 → Partizip II + zu werden。
i Ich erinnere mich, die Tür abgeschlossen zu ___. | haben # abschließen 用 haben。
c Er ist enttäuscht, nicht befördert ___. | worden zu sein | zu werden worden | geworden zu sein | worden sein # 被动 + 已发生 → worden zu sein。
o 很高兴认识了你。 | Ich freue mich, dich kennengelernt zu haben. # kennengelernt zu haben。
o 她抱怨没有被告知。 | Sie beschwert sich, nicht informiert worden zu sein. # 被动完成式。
i Nach dem Umzug glaubte er, alles erledigt zu ___. | haben # erledigen 用 haben。
c Er wurde entlassen, ohne vorher gewarnt zu ___. | werden | haben | sein | worden # 被动、同时 → gewarnt zu werden。
i Es tut mir leid, so spät gekommen zu ___. | sein # kommen 用 sein。
c Viele Bewerber hoffen, zu einem Gespräch ___. | eingeladen zu werden | einzuladen | eingeladen zu haben | einladen zu werden # 被动 → eingeladen zu werden。
`);

  X('b2-k2-vergangenheit', `
c Wenn ich früher aufgestanden ___, hätte ich den Bus nicht verpasst. | wäre | hätte | würde | war # aufstehen 用 sein → wäre aufgestanden。
i Wenn du mich gefragt ___, hätte ich dir geholfen. | hättest # fragen 用 haben。
c Das ___ ich nie gedacht! | hätte | wäre | würde | wurde # 惊讶 / 非现实 → hätte gedacht。
i Ohne deine Hilfe ___ ich die Prüfung nicht bestanden. | hätte # ohne + 名词 + K II。
c Du hättest den Vertrag genauer lesen ___. | sollen | gesollt | sollten | zu sollen # 双不定式：lesen sollen。
o 要是我早知道就好了！ | Hätte ich das doch früher gewusst! # 愿望句。
o 我们本可以坐火车去的。 | Wir hätten mit dem Zug fahren können. # 双不定式：fahren können。
c Er tat so, als ___ er die E-Mail nie bekommen. | hätte | wäre | würde | hat # als + K II（Plusquamperfekt 形式）。
i An Ihrer Stelle ___ ich mich früher beworben. | hätte # sich bewerben 用 haben。
c Fast ___ wir den Flug verpasst. | hätten | wären | würden | haben # 差点 → Fast hätten wir …
i Wenn es nicht geregnet ___, wären wir an den See gefahren. | hätte # regnen 用 haben。
c Ich wäre gern mitgekommen, aber ich ___ arbeiten müssen. | hätte | wäre | würde | habe # 过去的必要性 → hätte … müssen。
`);

  X('b2-k1', `
c Die Ministerin erklärte, die Regierung ___ die Steuern nicht erhöhen. | werde | wird | würde | wurde # 间接引语将来 → werde。
i Der Sprecher sagte, das Unternehmen ___ keine Probleme. | habe # haben → habe。
c Laut Bericht ___ die Zahl der Arbeitslosen gesunken. | sei | habe | seien | hätte # sinken 用 sein → sei gesunken。
i Die Forscher behaupten, sie ___ eine neue Methode entwickelt. | hätten # sie haben = 直陈式 → K II hätten。
c Er fragte, ob ich ihm helfen ___. | könne | kann | konnte | können # 间接引语 → K I könne。
i Die Polizei teilte mit, der Fahrer ___ zu schnell gefahren. | sei # fahren 用 sein → sei。
o 他说他没有时间。 | Er sagte, er habe keine Zeit. # K I：habe。
o 老板说，项目将在三月完成。 | Der Chef sagte, das Projekt werde im März abgeschlossen. # werde + Partizip II（被动将来）。
c Sie behauptete, sie ___ den ganzen Abend zu Hause gewesen. | sei | habe | war | hätte # sein 用 sein → sei gewesen。
i Die Studenten sagten, sie ___ mehr Zeit für die Hausarbeit. | bräuchten;brauchten | brauchen # sie brauchen（K I = 直陈式）→ K II bräuchten / brauchten。
c Der Arzt meinte, ich ___ mehr Sport treiben. | solle | soll | sollen | sollst # 建议 / 要求的转述 → solle。
`);

  X('b2-konnektoren', `
c Wir können ___ mit dem Zug ___ mit dem Bus fahren. | entweder / oder | weder / noch | nicht nur / auch | zwar / aber # 二选一 → entweder … oder。
i Je mehr man übt, ___ sicherer wird man. | desto;umso # je … desto / umso。
c Das Angebot ist ___ günstig, ___ die Qualität ist schlecht. | zwar / aber | weder / noch | sowohl / als auch | je / desto # zwar … aber。
i Er spricht weder Englisch ___ Französisch. | noch # weder … noch。
c Die Stelle bietet nicht nur ein gutes Gehalt, ___ auch flexible Arbeitszeiten. | sondern | aber | und | oder # nicht nur … sondern auch。
o 这座城市既漂亮又便宜。 | Die Stadt ist sowohl schön als auch günstig. # sowohl … als auch。
o 一方面我想要高工资，另一方面我想要更多空闲时间。 | Einerseits möchte ich ein hohes Gehalt, andererseits möchte ich mehr Freizeit. # einerseits … andererseits。
c Je länger ich in Deutschland lebe, ___. | desto besser verstehe ich die Kultur | desto ich verstehe die Kultur besser | desto die Kultur besser verstehe ich | besser desto verstehe ich die Kultur # desto + 比较级 + 动词 + 主语。
c Sowohl die Studenten ___ die Professoren waren zufrieden. | als auch | noch | oder | sondern auch # sowohl … als auch。
i Wir haben zwar wenig Zeit, ___ wir schaffen das. | aber # zwar … aber。
c ___ du hilfst mir, ___ ich mache es allein. | Entweder / oder | Weder / noch | Je / desto | Zwar / sondern # entweder … oder。
`);

  X('b2-partizip', `
c Die ___ Kosten bereiten vielen Familien Sorgen. | steigenden | gestiegene | steigende | gestiegen # 主动、正在进行 → Partizip I；die + 复数 → -en。
i Der vor kurzem ___ Vertrag gilt ab Januar. | unterschriebene | unterschreiben, Partizip II # 被动、已完成 → Partizip II；der + Nom → -e。
c Das ist eine schwer zu ___ Frage. | beantwortende | beantwortete | beantworten | beantwortenden # zu + Partizip I = 可以 / 必须被……
i Die in der Studie ___ Daten sind sehr aktuell. | verwendeten | verwenden, Partizip II # die + 复数 → -en。
c Der seit Monaten ___ Streik ist endlich vorbei. | andauernde | angedauerte | andauernden | andauern # Partizip I；der + Nom → -e。
o 正在学习的学生需要安静。 | Die lernenden Studenten brauchen Ruhe. # Partizip I。
o 我们讨论了被提出的计划。 | Wir haben den vorgeschlagenen Plan diskutiert. # vorschlagen → vorgeschlagen。
c {Welches Partizipialattribut passt?} die Probleme, die noch gelöst werden müssen | die noch zu lösenden Probleme | die noch gelösten Probleme | die noch lösenden Probleme | die noch zu gelösten Probleme # 必须被解决 → zu + Partizip I。
i Die ___ Nachfrage nach Wohnungen treibt die Mieten hoch. | wachsende | wachsen, Partizip I # die + Nom → -e。
c Der im Jahr 2020 ___ Bericht zeigt deutliche Veränderungen. | veröffentlichte | veröffentlichende | veröffentlicht | veröffentlichten # 被发表 → Partizip II；der + Nom → -e。
i Wir suchen eine ___ Lösung. (überzeugen, Partizip I) | überzeugende | überzeugen # eine + Akk → -e。
`);

  X('b2-nominal', `
c ___ der Erhöhung der Preise kaufen viele weniger. | Wegen | Trotz | Bei | Zur # weil die Preise erhöht wurden → wegen。
i Die ___ des Antrags dauert etwa vier Wochen. | Bearbeitung | bearbeiten # bearbeiten → die Bearbeitung。
i Nach ___ Ankunft in Berlin suchte sie eine Wohnung. | ihrer # nachdem sie angekommen war → nach ihrer Ankunft。
c ___ Verbesserung der Luftqualität wurden Fahrverbote eingeführt. | Zur | Zum | Bei der | Wegen # um … zu verbessern → zur Verbesserung。
i Der ___ der Umwelt ist eine wichtige Aufgabe. | Schutz | schützen # schützen → der Schutz。
c Bei ___ des Vertrags müssen Sie Ihren Ausweis vorlegen. | Unterzeichnung | Unterzeichnen | Unterzeichnet | Unterschreibung # unterzeichnen → die Unterzeichnung。
o 由于时间不够，项目被推迟了。 | Wegen Zeitmangels wurde das Projekt verschoben. # weil die Zeit fehlte → wegen Zeitmangels。
o 毕业后他找到了一份工作。 | Nach dem Studium fand er eine Stelle. # nachdem er studiert hatte → nach dem Studium。
i Die ___ der Mieten belastet viele Studenten. | Erhöhung | erhöhen # erhöhen → die Erhöhung。
c Trotz ___ Bemühungen blieb das Ergebnis schlecht. | großer | großen | große | großem # 无冠词 Gen 复数 → -er。
m Verb ↔ Nomen | wachsen=das Wachstum;zunehmen=die Zunahme;abnehmen=die Abnahme;verbrauchen=der Verbrauch;ansteigen=der Anstieg # 统计与数据描述的常用名词。
`);

  X('b2-vermutung', `
c Das Paket ___ bald ankommen – es wurde vor drei Tagen verschickt. | müsste | muss nicht | will | darf # 有根据的推测 → müsste。
i Sie geht nicht ans Telefon. Sie ___ schon schlafen. | dürfte;könnte | Vermutung # 推测 → dürfte / könnte。
c Der Politiker ___ von dem Skandal nichts gewusst haben. Das sagt er jedenfalls. | will | soll | muss | dürfte # 本人声称 → will。
i Er ___ die Nachricht inzwischen gelesen haben. | dürfte;müsste;wird | Vermutung # 对过去的推测：dürfte / müsste … gelesen haben。
c In zehn Jahren ___ wir das Problem hoffentlich gelöst haben. | werden | würden | wurden | haben # Futur II：werden … gelöst haben。
o 据说新老板很严格。 | Der neue Chef soll sehr streng sein. # soll = 据说。
o 他一定是忘了约会。 | Er muss den Termin vergessen haben. # muss + Partizip II + haben。
c Das ___ nicht stimmen! Ich habe ihn eben noch gesehen. | kann | muss | soll | will # 不可能 → kann nicht。
i Wo ist mein Schlüssel? – Du ___ ihn wohl im Auto gelassen haben. | wirst # Futur II 推测：wirst … gelassen haben。
c Bis morgen ___ ich den Bericht fertig geschrieben haben. | werde | wurde | würde | habe # Futur II：werde … haben。
c Die Firma ___ im letzten Jahr hohe Verluste gemacht haben, heißt es in der Zeitung. | soll | will | muss | kann # 据报道 → soll。
`);

  X('b2-ndeklination', `
c Der Chef hat mit dem neuen ___ gesprochen. | Kollegen | Kollege | Kollegs | Kolleges # Dat → Kollegen。
i Wir haben einen ___ um Rat gefragt. | Experten | Experte # Akk → Experten。
c Die Wohnung gehört einem älteren ___. | Herrn | Herr | Herren | Herrens # Dat 单数 → Herrn。
i Kennst du den Namen des ___? | Studenten | Student # Gen → Studenten。
c Die Ärztin untersucht den ___ gründlich. | Patienten | Patient | Patients | Patiente # Akk → Patienten。
o 我们必须帮助这位客户。 | Wir müssen dem Kunden helfen. # Dat → Kunden。
o 你认识那个摄影师吗？ | Kennst du den Fotografen? # -graf → Fotografen。
i Die Polizei hat den ___ befragt. | Zeugen | Zeuge # der Zeuge → den Zeugen。
c Sie hat den ___ an eine Lösung nicht verloren. | Glauben | Glaube | Glaubens | Glaub # der Glaube → den Glauben。
c Das ist der Wunsch jedes ___. | Menschen | Mensch | Menschs | Menschens # der Mensch → des Menschen。
i Der Präsident begrüßt den ___ aus Frankreich. | Franzosen | Franzose # der Franzose → den Franzosen。
`);

  X('b2-satzverbindungen', `
c Die Mieten steigen, ___ ziehen viele an den Stadtrand. | deshalb | weil | obwohl | denn # 动词 + 主语 → 连接副词 deshalb。
c Er hatte gute Noten. ___ bekam er die Stelle nicht. | Trotzdem | Obwohl | Deshalb | Denn # 让步 + 动词紧随 → Trotzdem。
c Es hat stark geregnet, ___ das Fest abgesagt wurde. | sodass | deshalb | trotzdem | damit # 结果 + 动词在末尾 → sodass。
i ___ du Hilfe brauchst, melde dich. | Falls;Wenn # 条件 → falls / wenn。
c ___ ich krank war, konnte ich nicht kommen. | Da | Denn | Deshalb | Trotzdem # 原因从句在前 → da。
o 天气很冷，所以我们待在家里。 | Es war kalt, deshalb blieben wir zu Hause. # deshalb + 动词 + 主语。
o 尽管很贵，她还是买了这辆车。 | Obwohl das Auto teuer war, kaufte sie es. # obwohl 从句在前。
c Ich lerne viel, ___ ich die Prüfung bestehen will. | weil | deshalb | trotzdem | sodass # 原因 + 动词在末尾 → weil。
i Er ist ___ müde, dass er kaum die Augen offen halten kann. | so # so … dass。
c Viele Studenten jobben neben dem Studium, ___ sie die Miete bezahlen können. | damit | trotzdem | deshalb | obwohl # 目的 → damit。
c Die Wohnung ist schön, ___ sie ist zu teuer. | aber | trotzdem | deshalb | obwohl # 主句语序 + 转折 → aber。
`);

  X('b2-praep-genitiv', `
c ___ der hohen Nachfrage wurden die Preise erhöht. | Aufgrund | Trotz | Anlässlich | Mithilfe # 原因 → aufgrund。
i Innerhalb ___ Jahres wurde das Gebäude fertig. | eines # 阳性 Gen → eines Jahres。
c ___ des Jubiläums gibt es ein großes Fest. | Anlässlich | Aufgrund | Angesichts | Infolge # 值……之际 → anlässlich。
i ___ der steigenden Kosten muss gespart werden. | Angesichts;Aufgrund;Wegen # 鉴于 / 由于 + Gen。
c Die Wohnung liegt ___ des Stadtzentrums. | außerhalb | anlässlich | aufgrund | mithilfe # 位置 → außerhalb。
o 借助这个应用，你可以学单词。 | Mithilfe dieser App kannst du Vokabeln lernen. # mithilfe + Gen。
o 由于罢工，许多航班被取消了。 | Aufgrund des Streiks wurden viele Flüge gestrichen. # aufgrund + Gen。
c ___ Ihrer Bewerbung möchten wir Sie zu einem Gespräch einladen. | Bezüglich | Infolge | Mithilfe | Außerhalb # 关于 → bezüglich。
i Infolge ___ Unfalls war die Straße gesperrt. | eines # 阳性 Gen → eines Unfalls。
c Wir gingen das Ufer ___. | entlang | entlangs | längs | neben # 后置 entlang + Akk。
c Die Prüfung findet ___ der Ferien statt. | außerhalb | anlässlich | angesichts | mithilfe # 在假期之外 → außerhalb。
`);

  X('b2-nvv', `
c Die Firma hat beschlossen, neue Maßnahmen zu ___. | ergreifen | machen | geben | nehmen # Maßnahmen ergreifen。
i Wir müssen auf die Umwelt Rücksicht ___. | nehmen # Rücksicht nehmen auf。
c Der Lehrer ___ uns die Erlaubnis, früher zu gehen. | gab | machte | stellte | nahm # die Erlaubnis geben。
i Kannst du mir bitte ___ sagen, ob du kommst? | Bescheid # Bescheid sagen / geben。
c Das Thema wurde in der Sitzung zur Sprache ___. | gebracht | gestellt | gemacht | genommen # zur Sprache bringen。
o 健康在我的生活中起着重要作用。 | Gesundheit spielt in meinem Leben eine wichtige Rolle. # eine Rolle spielen。
o 我们必须考虑所有的可能性。 | Wir müssen alle Möglichkeiten in Betracht ziehen. # in Betracht ziehen。
c Ich möchte einen Antrag auf Wohngeld ___. | stellen | machen | geben | treffen # einen Antrag stellen。
i Das neue Gesetz ist am 1. Januar in Kraft ___. | getreten # in Kraft treten → ist getreten。
c Nach der Kritik ___ der Minister Stellung. | nahm | gab | machte | stellte # Stellung nehmen。
c Ich muss eine wichtige Entscheidung ___. | treffen | machen | nehmen | stellen # eine Entscheidung treffen。
`);

  X('b2-adjpraep', `
c Bist du ___ dem Ergebnis zufrieden? | mit | über | von | für # zufrieden mit + Dat。
i Die Stadt ist bekannt ___ ihre Museen. | für # bekannt für + Akk。
c Viele Menschen sind ___ ihr Auto angewiesen. | auf | an | von | mit # angewiesen auf + Akk。
i Ich bin sehr gespannt ___ deine Antwort. | auf # gespannt auf + Akk。
c Er ist ___ seiner Arbeit unzufrieden. | mit | über | von | an # unzufrieden mit + Dat。
o 我对这个结果很高兴。 | Ich bin froh über das Ergebnis. # froh über + Akk。
o 学生们对这个题目很感兴趣。 | Die Studenten sind an dem Thema sehr interessiert. # interessiert an + Dat。
i Wer ist ___ den Fehler verantwortlich? | für # verantwortlich für + Akk。
c Sie ist ___ ihrem Freund verheiratet. | mit | an | zu | von # verheiratet mit + Dat。
c Dieses Buch ist ___ Anfänger nicht geeignet. | für | zu | an | mit # geeignet für + Akk。
i Die Region ist reich ___ Bodenschätzen. | an # reich an + Dat。
`);

  X('b2-relativ', `
c ___ Interesse hat, kann sich gern melden. | Wer | Der | Was | Wem # 泛指人，从句主语 → wer。
i Das Schönste, ___ ich je gesehen habe, war das Meer. | was # 中性最高级后 → was。
c Er hat die Stelle abgelehnt, ___ niemand verstand. | was | das | die | wo # 指代整句 → was。
c Die Stadt, ___ ich umziehe, ist sehr teuer. | wohin | wo | woher | worin # 方向 → wohin。
i Das ist alles, ___ ich weiß. | was # alles 后 → was。
c Die Kollegin, ___ Hilfe ich sehr dankbar bin, geht in Rente. | für deren | für dessen | deren | für die # dankbar für + Genitiv 关系代词 deren。
o 他说的话没有一句合乎逻辑。 | Nichts, was er sagt, ist logisch. # nichts 后 → was。
o 谁努力学习，谁就能成功。 | Wer fleißig lernt, hat Erfolg. # wer … (der) …
c Das ist etwas, ___ ich nicht gerechnet habe. | womit | mit dem | was | damit # rechnen mit + etwas → womit。
i Die Studenten, ___ Hausarbeiten noch fehlen, müssen sich melden. | deren # 复数 + 所属 → deren。
c Ich ziehe nach Hamburg, ___ meine Familie lebt. | wo | wohin | woher | was # 地点 → wo。
`);

  X('b2-es', `
c ___ gibt viele Gründe für den Klimawandel. | Es | Da | Das | Er # 固定表达：es gibt。
c Für den Klimawandel ___ viele Gründe. | gibt es | es gibt | gibt | geben es # es gibt 中的 es 不能省略，位置在动词后。
i Mir geht ___ heute viel besser. | es # es geht + Dat。
c ___ ist bekannt, dass Rauchen schädlich ist. | Es | Sie | Er | Man # 关联词 es 指代 dass 从句。
c Dass Rauchen schädlich ist, ___ bekannt. | ist | ist es | es ist | sind # 从句在前 → es 省略。
o 这涉及一个重要问题。 | Es handelt sich um eine wichtige Frage. # es handelt sich um。
o 我觉得在德国读书很好。 | Ich finde es gut, in Deutschland zu studieren. # 关联词 es 指代 zu 不定式。
c Am Sonntag ___ nicht gearbeitet. | wird | wird es | es wird | werden # 无主语被动：es 省略。
c Es ___ viele Menschen zur Demonstration. | kamen | kam | kommen es | kommt # 动词与真正的主语（复数）一致。
i ___ fällt mir schwer, früh aufzustehen. | Es # 关联词 es。
`);

  X('b2-partikeln', `
c Hast du ___ eine Idee, wie das funktioniert? | vielleicht | doch | halt | bloß # 礼貌地询问 → vielleicht。
c Mach ___ das Fenster zu, es ist kalt! | doch mal | denn mal | ja mal | halt denn # 友好催促 → doch mal。
c Was machst du ___ hier? | denn | doch | mal | halt # 疑问句中的惊讶 → denn。
c Das ist ___ unglaublich! | ja | denn | mal | bloß # 惊讶 → ja。
i Dann nimm ___ den Bus, wenn das Auto kaputt ist. | halt;eben;doch # 无奈的建议 → halt / eben。
c Du hast ___ recht, das sehe ich ein. | ja | denn | mal | bloß # 认同已知事实 → ja。
c Ruf mich ___ an, wenn du Zeit hast. | mal | denn | bloß | eben # 缓和请求 → mal。
o 你到底去哪儿了？ | Wo warst du denn? # denn。
o 千万别迟到！ | Komm bloß nicht zu spät! # 警告 → bloß。
c Bist du nicht müde? – ___, sehr sogar. | Doch | Ja | Nein | Schon # 反驳否定问句 → Doch。
`);

  X('b2-praefix', `
c Bitte ___ Sie das Formular bis Freitag ___. | füllen / aus | ausfüllen / aus | aus / füllen | füllen / ein # 可分动词 ausfüllen。
i Ich habe das Formular schon ___. | ausgefüllt | ausfüllen # 可分：aus-ge-füllt。
c Er hat die Prüfung ___. | bestanden | gebestanden | bestehen | besteht # be- 不可分，无 ge-。
c Wann kommt der Zug in Berlin ___? | an | auf | aus | ein # ankommen。
c Der Lehrer hat die Hausaufgaben ___. | kontrolliert | gekontrolliert | kontrollieren | kontrolliern # -ieren 动词 Partizip II 无 ge-。
i Er hat mir das Geld ___. | zurückgegeben | zurückgeben # 可分：zurück-ge-geben。
c Kannst du mich am Bahnhof ___? | abholen | holen ab | abgeholt | abzuholen # 情态动词 + 不定式（合写）。
o 请把手机关掉！ | Mach bitte dein Handy aus! # ausmachen：前缀放句末。
o 我很快就理解了这个问题。 | Ich habe das Problem schnell verstanden. # ver- 不可分。
c Der Text muss noch ___ werden. | übersetzt | übergesetzt | geübersetzt | übersetzen # “翻译”→ 不可分。
i Der Vermieter hat mir die Wohnung ___. | gekündigt | kündigen # kündigen 没有前缀，正常加 ge-。
`);
})();
