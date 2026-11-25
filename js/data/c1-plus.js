/* C1: long, TestDaF-style sentences (academic reading and writing). Written for this app; no real sources are quoted.
   W() adds the "why the other options are wrong" notes for the new choice items. */
(function () {
  'use strict';
  var X = G.dsl.extend;
  G.WHY = G.WHY || {};
  function W(q, ok, reasons) { G.WHY[q + '|' + ok] = reasons; }

  X('c1-nominalstil', `
c {Langer Satz: Was passt?} ___ der seit Jahren steigenden Zahl ausländischer Studierender haben mehrere Hochschulen ihre Beratungsangebote nicht nur ausgebaut, sondern auch stärker digitalisiert. | Angesichts | Trotz | Mangels | Zwecks # angesichts + Gen = 鉴于（weil die Zahl … steigt）。
c {Langer Satz: Was passt?} Die von der Kommission geforderte ___ der Zulassungsverfahren soll nicht nur Kosten sparen, sondern auch zu einer größeren Chancengleichheit beitragen. | Vereinfachung | Vereinfachen | Vereinfachtheit | Einfachheit # vereinfachen → die Vereinfachung（动作名词）。
c {Langer Satz: Was passt?} Erst nach ___ sämtlicher Unterlagen durch das Prüfungsamt kann über die Zulassung zur Abschlussarbeit entschieden werden. | Eingang | Eingehen | Eingängigkeit | Eingabe # eingehen（寄达）→ der Eingang；nach + Dat。
i {Nominalstil: Weil die Rohstoffpreise unerwartet stark gestiegen sind, mussten viele Betriebe ihre Produktion drosseln.} Wegen des unerwartet starken ___ der Rohstoffpreise mussten viele Betriebe ihre Produktion drosseln. | Anstiegs | Anstieg, Genitiv # wegen + Gen：der Anstieg → des Anstiegs。
i {Nominalstil: Indem man die Lehrkräfte gezielt fortbildet, lässt sich die Unterrichtsqualität verbessern.} Durch eine gezielte ___ der Lehrkräfte lässt sich die Unterrichtsqualität verbessern. | Fortbildung;Weiterbildung | fortbilden → ? # indem → durch + 名词化：fortbilden → die Fortbildung；副词 gezielt → 形容词 gezielte。
o 由于住房供应不足，许多大学生被迫在离校园很远的地方租房。 | Aufgrund des knappen Wohnungsangebots sind viele Studierende gezwungen, weit entfernt vom Campus zu wohnen. # aufgrund + Gen 占第一位 → 动词 sind 第二位；gezwungen + zu 不定式。
`);
  W('Angesichts der seit Jahren steigenden Zahl ausländischer Studierender haben mehrere Hochschulen ihre Beratungsangebote nicht nur ausgebaut, sondern auch stärker digitalisiert.'.replace('Angesichts', '___'), 'Angesichts',
    ['Trotz 表让步：“尽管人数增加所以扩充咨询”逻辑不通。', 'Mangels 表示“由于缺少”，与“人数增加”矛盾。', 'Zwecks 表目的（为了……），人数增加不是目的。']);
  W('Die von der Kommission geforderte ___ der Zulassungsverfahren soll nicht nur Kosten sparen, sondern auch zu einer größeren Chancengleichheit beitragen.', 'Vereinfachung',
    ['Vereinfachen 是名词化不定式，不能和 die 及 Genitiv 宾语这样搭配。', 'Vereinfachtheit 不是规范德语。', 'Einfachheit 是“简单性”（状态），这里需要“简化”这个动作。']);
  W('Erst nach ___ sämtlicher Unterlagen durch das Prüfungsamt kann über die Zulassung zur Abschlussarbeit entschieden werden.', 'Eingang',
    ['Eingehen 是名词化不定式，正式文本中用 der Eingang。', 'Eingängigkeit 是“易懂、上口”，意思不对。', 'Eingabe 是“输入、呈文”，不表示文件寄达。']);

  X('c1-partizip', `
c {Langer Satz: Was passt?} Die im Rahmen des Projekts ___ Daten wurden anonymisiert und ausschließlich zu wissenschaftlichen Zwecken ausgewertet. | erhobenen | erhebenden | erhoben | erhobene # 数据是“被收集的” → Partizip II；die + 复数 → -en。
c {Langer Satz: Was passt?} Die bis zum Ende des Semesters noch zu ___ Prüfungsleistungen müssen spätestens zwei Wochen vor dem Termin angemeldet werden. | erbringenden | erbrachten | erbringende | erbringen # 必须完成的 → zu + Partizip I；die + 复数 → -en。
c {Langer Satz: Was passt?} Der von zahlreichen Experten seit Langem ___ Ausbau der Ganztagsschulen wird nun endlich umgesetzt. | geforderte | fordernde | geforderten | gefordert # 被要求的 → Partizip II；der + Nom → -e。
i {Partizip: Die Studie, die im vergangenen Jahr von der Universität Leipzig durchgeführt wurde, …} Die im vergangenen Jahr von der Universität Leipzig ___ Studie … | durchgeführte | Partizip II # 被动、已完成 → Partizip II；die + Nom 阴性 → -e。
i {Partizip: Die Zahl der Menschen, die in Single-Haushalten leben, nimmt weiter zu.} Die Zahl der in Single-Haushalten ___ Menschen nimmt weiter zu. | lebenden | Partizip I # 主动、同时 → Partizip I；der + Gen 复数 → -en。
o 这项由联邦政府资助的研究为该问题提供了新的视角。 | Die von der Bundesregierung finanzierte Studie liefert neue Perspektiven auf das Problem. # 扩展定语 von … finanzierte 放在冠词和名词之间。
`);
  W('Die im Rahmen des Projekts ___ Daten wurden anonymisiert und ausschließlich zu wissenschaftlichen Zwecken ausgewertet.', 'erhobenen',
    ['erhebenden 是 Partizip I，表示数据自己在收集。', 'erhoben 作定语时必须加词尾。', 'erhobene 是单数或无冠词复数的词尾，die Daten 前有冠词要用 -en。']);
  W('Die bis zum Ende des Semesters noch zu ___ Prüfungsleistungen müssen spätestens zwei Wochen vor dem Termin angemeldet werden.', 'erbringenden',
    ['erbrachten 表示“已完成的”，与 noch zu … 矛盾。', 'erbringende 是单数词尾，Prüfungsleistungen 是复数。', 'erbringen 是不定式，作定语要用 Partizip I。']);
  W('Der von zahlreichen Experten seit Langem ___ Ausbau der Ganztagsschulen wird nun endlich umgesetzt.', 'geforderte',
    ['fordernde 是 Partizip I，表示“扩建”自己在要求。', 'geforderten 是 Akk/Dat 词尾，der Ausbau 在这里是 Nom。', 'gefordert 作定语时必须加词尾。']);

  X('c1-konnektoren', `
c {Langer Satz: Was passt?} Die Mieten in den Universitätsstädten sind in den letzten zehn Jahren stark gestiegen, ___ viele Studierende inzwischen einen erheblichen Teil ihres Einkommens für das Wohnen ausgeben müssen. | sodass | indem | zumal | wohingegen # 结果 + 动词在末尾 → sodass。
c {Langer Satz: Was passt?} ___ die Digitalisierung zweifellos neue Chancen eröffnet, darf man die damit verbundenen Risiken für den Datenschutz nicht unterschätzen. | Wenngleich | Indem | Sofern | Sodass # 让步（书面）→ wenngleich = obwohl。
c {Langer Satz: Was passt?} Die Reform wurde kaum umgesetzt, ___ es an qualifiziertem Personal fehlte und die Finanzierung ungeklärt blieb. | zumal | sofern | indem | als dass # 补充原因（尤其因为）→ zumal。
i {Konnektor: Ergänze.} Die Ergebnisse sind nur bedingt aussagekräftig, ___ die Stichprobe mit 80 Personen relativ klein war. | da;weil;zumal | Grund # 原因 + 动词在末尾。
i {Konnektor: Ergänze.} Die Teilnahme ist freiwillig; ___ wird empfohlen, sich vorher beim Institut anzumelden. | allerdings;jedoch | 转折副词 # 转折副词放第一位 → 动词 wird 紧跟。
o 虽然该研究的样本较小，但其结果仍值得关注。 | Obwohl die Stichprobe der Studie klein ist, sind die Ergebnisse dennoch beachtenswert. # 从句在前 → 主句动词 sind 紧跟逗号；dennoch 强调让步。
`);
  W('Die Mieten in den Universitätsstädten sind in den letzten zehn Jahren stark gestiegen, ___ viele Studierende inzwischen einen erheblichen Teil ihres Einkommens für das Wohnen ausgeben müssen.', 'sodass',
    ['indem 表示方式（通过……），这里是结果。', 'zumal 表示补充原因，逻辑方向反了。', 'wohingegen 表示对比，这里没有对比。']);
  W('___ die Digitalisierung zweifellos neue Chancen eröffnet, darf man die damit verbundenen Risiken für den Datenschutz nicht unterschätzen.', 'Wenngleich',
    ['Indem 表示方式，句意不通。', 'Sofern 表示条件（只要），但“数字化带来机遇”是事实，不是条件。', 'Sodass 表示结果，不能放在句首引导前置从句。']);
  W('Die Reform wurde kaum umgesetzt, ___ es an qualifiziertem Personal fehlte und die Finanzierung ungeklärt blieb.', 'zumal',
    ['sofern 表示条件，这里讲的是已发生的原因。', 'indem 表示方式。', 'als dass 必须和前面的 zu + 形容词连用。']);

  X('c1-redewiedergabe', `
c {Langer Satz: Was passt?} Der Sprecher des Ministeriums betonte, man ___ die Kritik der Hochschulen ernst und werde die Finanzierung im kommenden Jahr überprüfen. | nehme | nimmt | nähme | genommen # 间接引语 → K I：man nehme。
c {Langer Satz: Was passt?} Die Autorinnen der Studie weisen darauf hin, dass ihre Ergebnisse nicht ohne Weiteres auf andere Altersgruppen übertragen werden ___. | könnten | konnten | können würden | gekonnt # 谨慎表述 / 间接转述 → K II könnten。
c {Langer Satz: Was passt?} Wie aus dem Bericht ___, hat sich die Zahl der Studienabbrüche in den MINT-Fächern deutlich verringert. | hervorgeht | hervorkommt | hervorsteht | hervorgibt # aus … hervorgehen = 从……可以看出。
i {Redewiedergabe: Ergänze.} Die Rektorin erklärte, die Universität ___ in den nächsten Jahren mehr Wohnheimplätze schaffen. | werde | K I von werden # 转述将来 → K I werde。
i {Redewiedergabe: Ergänze.} Kritiker werfen der Regierung vor, sie ___ die Folgen der Reform nicht ausreichend geprüft. | habe | K I von haben # 转述过去 → K I habe + Partizip II。
o 据研究人员称，社交媒体对青少年的睡眠质量有负面影响。 | Den Forschern zufolge wirken sich soziale Medien negativ auf die Schlafqualität Jugendlicher aus. # zufolge 后置 + Dat；sich auswirken auf，aus 放句末。
`);
  W('Der Sprecher des Ministeriums betonte, man ___ die Kritik der Hochschulen ernst und werde die Finanzierung im kommenden Jahr überprüfen.', 'nehme',
    ['nimmt 是直陈式，正式转述用 K I。', 'nähme 是 K II，只在 K I 与直陈式相同时才用。', 'genommen 是分词，缺少助动词。']);
  W('Die Autorinnen der Studie weisen darauf hin, dass ihre Ergebnisse nicht ohne Weiteres auf andere Altersgruppen übertragen werden ___.', 'könnten',
    ['konnten 是直陈式过去时，表示“当时不能”。', 'können würden 是重复的情态，不成立。', 'gekonnt 是分词，这里需要变位动词。']);
  W('Wie aus dem Bericht ___, hat sich die Zahl der Studienabbrüche in den MINT-Fächern deutlich verringert.', 'hervorgeht',
    ['hervorkommen 是“出来、露出”，不能接 aus dem Bericht 表示“看出”。', 'hervorstehen 是“突出、凸起”。', 'hervorgeben 不存在。']);

  X('c1-modalitaet', `
c {Langer Satz: Was passt?} Angesichts der bisherigen Entwicklung ___ die Zahl der Bewerbungen auch im nächsten Jahr weiter steigen, sofern sich die Rahmenbedingungen nicht grundlegend ändern. | dürfte | darf | durfte | soll # 有根据的谨慎推测 → dürfte。
c {Langer Satz: Was passt?} Der Bürgermeister ___ von den Plänen nichts gewusst haben, obwohl mehrere Mitarbeiter ihn schriftlich informiert hatten – so jedenfalls seine Darstellung. | will | soll | muss | dürfte # 本人声称 → wollen。
c {Langer Satz: Was passt?} Die Unterlagen sind vollständig und fristgerecht beim Prüfungsamt ___, andernfalls kann der Antrag nicht bearbeitet werden. | einzureichen | eingereicht werden | einreichen | zu einreichen # sein + zu = müssen + Passiv；可分动词 ein-zu-reichen。
i {Modalität: Ergänze.} Die Ursachen des Rückgangs ___ sich anhand der vorliegenden Daten nicht eindeutig bestimmen. | lassen | sich lassen # sich lassen + 不定式 = kann … werden。
i {Modalität: Ergänze.} Laut Medienberichten ___ der Konzern bereits seit Monaten mit einem Investor verhandelt haben. | soll | 据说 # 据报道 → sollen + 完成式不定式。
o 这些结果必须在更大的样本中得到验证。 | Die Ergebnisse müssten in einer größeren Stichprobe überprüft werden. # 情态被动：müssten + Partizip II + werden；K II 使语气更谨慎。
`);
  W('Angesichts der bisherigen Entwicklung ___ die Zahl der Bewerbungen auch im nächsten Jahr weiter steigen, sofern sich die Rahmenbedingungen nicht grundlegend ändern.', 'dürfte',
    ['darf 表示允许，不表示推测。', 'durfte 是过去时“被允许”。', 'soll 表示“据说”，这里是说话人自己的推测。']);
  W('Der Bürgermeister ___ von den Plänen nichts gewusst haben, obwohl mehrere Mitarbeiter ihn schriftlich informiert hatten – so jedenfalls seine Darstellung.', 'will',
    ['soll 表示他人的说法，这里是他本人的说法（seine Darstellung）。', 'muss 表示说话人确定，与“这只是他的说法”矛盾。', 'dürfte 表示说话人的推测。']);
  W('Die Unterlagen sind vollständig und fristgerecht beim Prüfungsamt ___, andernfalls kann der Antrag nicht bearbeitet werden.', 'einzureichen',
    ['sind … eingereicht werden 不成立，缺少情态动词。', 'einreichen 缺少 zu。', 'zu einreichen 错：可分动词的 zu 要插在前缀和词干之间。']);

  X('c1-grafik', `
c {Langer Satz: Was passt?} Während der Anteil der Studierenden, die neben dem Studium arbeiten, zwischen 2016 und 2021 ___ 61 auf 68 Prozent stieg, blieb die durchschnittliche Arbeitszeit nahezu konstant. | von | um | bei | aus # von … auf：起始值 → 终值。
c {Langer Satz: Was passt?} Aus dem Schaubild geht hervor, dass sich die Ausgaben für Forschung und Entwicklung im Untersuchungszeitraum nahezu ___ haben. | verdoppelt | verdoppelten | doppelt | gedoppelt # sich verdoppeln → Perfekt：haben sich verdoppelt（从句中 haben 在末尾）。
c {Langer Satz: Was passt?} Auffällig ist, dass der Anteil der Frauen in Führungspositionen zwar gestiegen ist, ___ immer noch deutlich unter dem der Männer liegt. | jedoch | sondern | sodass | indem # zwar … jedoch / aber。
i {Grafik: Ergänze.} Den höchsten Wert ___ die Zahl der Neueinschreibungen im Jahr 2019 mit rund 510.000. | erreichte | erreichen # einen Wert erreichen；Präteritum。
i {Grafik: Ergänze.} Im Vergleich ___ Vorjahr sank die Arbeitslosenquote um 0,4 Prozentpunkte. | zum | zu dem # im Vergleich zu + Dat：zum Vorjahr。
o 与2010年相比，网上购物的人数增加了将近一倍。 | Im Vergleich zu 2010 hat sich die Zahl der Online-Käufer nahezu verdoppelt. # Im Vergleich zu … 占第一位 → hat 第二位；sich verdoppeln。
`);
  W('Während der Anteil der Studierenden, die neben dem Studium arbeiten, zwischen 2016 und 2021 ___ 61 auf 68 Prozent stieg, blieb die durchschnittliche Arbeitszeit nahezu konstant.', 'von',
    ['um 表示变化量，后面已有 auf 68，需要起始值 von 61。', 'bei 用于 liegen bei（处于某个数值）。', 'aus 不用于数值变化。']);
  W('Aus dem Schaubild geht hervor, dass sich die Ausgaben für Forschung und Entwicklung im Untersuchungszeitraum nahezu ___ haben.', 'verdoppelt',
    ['verdoppelten 是过去时变位，haben 后要用 Partizip II。', 'doppelt 是形容词，不是动词分词。', 'gedoppelt 不是规范德语。']);
  W('Auffällig ist, dass der Anteil der Frauen in Führungspositionen zwar gestiegen ist, ___ immer noch deutlich unter dem der Männer liegt.', 'jedoch',
    ['sondern 只能用在否定之后，不与 zwar 搭配。', 'sodass 表结果，这里是转折。', 'indem 表方式。']);

  X('c1-praepositionen', `
c {Langer Satz: Was passt?} ___ der Prüfungsordnung ist eine Wiederholung der Abschlussprüfung nur einmal möglich, es sei denn, es liegen schwerwiegende gesundheitliche Gründe vor. | Gemäß | Zwecks | Mangels | Angesichts # 按照规定 → gemäß + Dat。
c {Langer Satz: Was passt?} Die Fördermittel dürfen ausschließlich ___ der Anschaffung von Laborgeräten verwendet werden, nicht jedoch für Personalkosten. | zwecks | mangels | infolge | seitens # 为了……目的 → zwecks + Gen。
c {Langer Satz: Was passt?} ___ intensiver Bemühungen seitens der Stadtverwaltung ist es bislang nicht gelungen, ausreichend bezahlbaren Wohnraum zu schaffen. | Trotz | Dank | Infolge | Zwecks # 让步 → trotz + Gen。
i {Präposition: Ergänze.} ___ der hohen Nachfrage wurde die Bewerbungsfrist um zwei Wochen verlängert. | Aufgrund;Wegen;Infolge | Grund # 原因 → aufgrund / wegen / infolge + Gen。
i {Präposition: Ergänze.} Die Ergebnisse wurden ___ eines standardisierten Fragebogens ermittelt. | anhand;mithilfe | 借助 # 借助 → anhand / mithilfe + Gen。
o 由于缺乏证据，法院宣判被告无罪。 | Mangels Beweisen sprach das Gericht den Angeklagten frei. # mangels（复数无冠词常接 Dat）；freisprechen → sprach … frei。
`);
  W('___ der Prüfungsordnung ist eine Wiederholung der Abschlussprüfung nur einmal möglich, es sei denn, es liegen schwerwiegende gesundheitliche Gründe vor.', 'Gemäß',
    ['Zwecks 表示“为了”，规定不是目的。', 'Mangels 表示“由于缺少”，句意不通。', 'Angesichts 表示“鉴于”，用于情况，不用于条文依据。']);
  W('Die Fördermittel dürfen ausschließlich ___ der Anschaffung von Laborgeräten verwendet werden, nicht jedoch für Personalkosten.', 'zwecks',
    ['mangels 表示“由于缺少”。', 'infolge 表示“由于……的后果”。', 'seitens 表示“来自……方面”。']);
  W('___ intensiver Bemühungen seitens der Stadtverwaltung ist es bislang nicht gelungen, ausreichend bezahlbaren Wohnraum zu schaffen.', 'Trotz',
    ['Dank 表示“多亏”，与“没有成功”矛盾。', 'Infolge 表示后果，“由于努力所以失败”逻辑不通。', 'Zwecks 表示目的。']);

  X('c1-verbenpraep', `
c {Langer Satz: Was passt?} Die Studie setzt sich kritisch damit ___, inwieweit digitale Lernangebote tatsächlich zu besseren Prüfungsergebnissen beitragen. | auseinander | auf | an | ein # sich auseinandersetzen mit → damit … auseinander。
c {Langer Satz: Was passt?} Ob das Projekt fortgesetzt wird, hängt in erster Linie ___ ab, ob die Finanzierung für die nächsten drei Jahre gesichert ist. | davon | darauf | daran | dafür # abhängen von → davon … ab, ob …
c {Langer Satz: Was passt?} Die Verantwortlichen weisen ___ hin, dass die Bauarbeiten voraussichtlich bis zum Ende des Wintersemesters andauern werden. | darauf | daran | darüber | dazu # hinweisen auf → darauf hin, dass …
i {Verb + Präposition: Ergänze.} Viele Studierende klagen ___, dass ihnen neben Studium und Job kaum Zeit für Erholung bleibt. | darüber | über → da(r)+ # klagen über → darüber, dass …
i {Verb + Präposition: Ergänze.} Die Kommission hat sich ___ verständigt, die Reform schrittweise umzusetzen. | darauf | auf → da(r)+ # sich verständigen auf → darauf + zu 不定式。
o 这项研究主要探讨的是，气候变化如何影响农业。 | Die Studie befasst sich vor allem mit der Frage, wie sich der Klimawandel auf die Landwirtschaft auswirkt. # sich befassen mit；从句中 sich auswirken auf，auswirkt 放末尾。
`);
  W('Die Studie setzt sich kritisch damit ___, inwieweit digitale Lernangebote tatsächlich zu besseren Prüfungsergebnissen beitragen.', 'auseinander',
    ['sich aufsetzen 不存在这个意思。', 'ansetzen 与 damit 和 inwieweit 不构成固定搭配。', 'sich einsetzen 用 für，不用 mit。']);
  W('Ob das Projekt fortgesetzt wird, hängt in erster Linie ___ ab, ob die Finanzierung für die nächsten drei Jahre gesichert ist.', 'davon',
    ['darauf 对应 auf，abhängen 用 von。', 'daran 对应 an，abhängen 用 von。', 'dafür 对应 für，abhängen 用 von。']);
  W('Die Verantwortlichen weisen ___ hin, dass die Bauarbeiten voraussichtlich bis zum Ende des Wintersemesters andauern werden.', 'darauf',
    ['daran 对应 an，hinweisen 用 auf。', 'darüber 对应 über，hinweisen 用 auf。', 'dazu 对应 zu，hinweisen 用 auf。']);

  X('c1-hypothese', `
c {Langer Satz: Was passt?} Hätte die Hochschule rechtzeitig in die digitale Infrastruktur investiert, ___ die Umstellung auf Online-Lehre während der Pandemie deutlich reibungsloser verlaufen. | wäre | hätte | würde | war # verlaufen 用 sein → wäre … verlaufen（过去的非现实）。
c {Langer Satz: Was passt?} Selbst wenn die Studiengebühren abgeschafft ___, bliebe das Problem der hohen Lebenshaltungskosten für viele Studierende bestehen. | würden | werden | wurden | worden # 让步假设 → selbst wenn + K II：abgeschafft würden。
c {Langer Satz: Was passt?} Es ___ zu prüfen, ob sich die Ergebnisse auch auf andere Bundesländer übertragen lassen. | wäre | würde | hätte | sei # 委婉提出研究建议 → Es wäre zu prüfen …
i {Hypothese: Ergänze.} Ohne die finanzielle Unterstützung ihrer Eltern ___ viele Studierende ihr Studium nicht finanzieren können. | würden;könnten | K II # 非现实 → würden … können（或 könnten）。
i {Hypothese: Ergänze.} Wäre der Antrag früher gestellt worden, ___ die Förderung schon im Herbst beginnen können. | hätte | K II von haben # 过去的非现实 + 情态动词 → hätte … können。
o 如果政府早点采取措施，损失本来会小得多。 | Hätte die Regierung früher Maßnahmen ergriffen, wäre der Schaden viel geringer gewesen. # 省略 wenn → 动词 hätte 前置；主句 wäre … gewesen。
`);
  W('Hätte die Hochschule rechtzeitig in die digitale Infrastruktur investiert, ___ die Umstellung auf Online-Lehre während der Pandemie deutlich reibungsloser verlaufen.', 'wäre',
    ['hätte 错：verlaufen 的完成时用 sein。', 'würde … verlaufen 缺少完成式，无法表示过去的非现实。', 'war 是直陈式，不能表示假设。']);
  W('Selbst wenn die Studiengebühren abgeschafft ___, bliebe das Problem der hohen Lebenshaltungskosten für viele Studierende bestehen.', 'würden',
    ['werden 是直陈式，与主句 bliebe（K II）不一致。', 'wurden 是直陈式过去时。', 'worden 只用于被动完成式，前面缺少 wären。']);
  W('Es ___ zu prüfen, ob sich die Ergebnisse auch auf andere Bundesländer übertragen lassen.', 'wäre',
    ['würde 后需要不定式，不能和 zu prüfen 组合。', 'hätte … zu prüfen 意思是“本该检查”，语气不对。', 'sei 是 K I，用于转述，不用于提出自己的建议。']);

  X('c1-textverweise', `
c {Langer Satz: Was passt?} Die Zahl der Studienplätze in der Medizin wurde zwar erhöht, ___ reicht sie bei Weitem nicht aus, um den wachsenden Bedarf an Ärztinnen und Ärzten zu decken. | dennoch | dadurch | demnach | daraufhin # 让步转折 → dennoch + 动词 + 主语。
c {Langer Satz: Was passt?} Im Folgenden werden zunächst die methodischen Grundlagen erläutert, ___ die zentralen Ergebnisse der Befragung vorgestellt werden. | bevor | nachdem | indem | wobei # 先……再…… → bevor。
c {Langer Satz: Was passt?} Die Kosten für Energie sind stark gestiegen, ___ viele Haushalte gezwungen sind, ihren Verbrauch deutlich einzuschränken. | weshalb | womit | worauf | wobei # 指代整句的结果 → weshalb。
i {Textverweis: Ergänze.} Die Studie hat mehrere Schwächen. ___ ist die Zahl der Befragten mit 120 Personen relativ gering. | Zum einen;Erstens | 列举第一点 # 列举 → Zum einen / Erstens + 动词。
i {Textverweis: Ergänze.} Sowohl Bus als auch Bahn werden subventioniert; ___ erhält jedoch deutlich mehr Fördermittel. | letztere;Letztere | 后者 # 后者（die Bahn，阴性）→ letztere。
o 综上所述，可以说这项改革只取得了部分成功。 | Zusammenfassend lässt sich sagen, dass die Reform nur teilweise erfolgreich war. # 副词占第一位 → lässt 第二位；sich sagen lassen。
`);
  W('Die Zahl der Studienplätze in der Medizin wurde zwar erhöht, ___ reicht sie bei Weitem nicht aus, um den wachsenden Bedarf an Ärztinnen und Ärzten zu decken.', 'dennoch',
    ['dadurch 表示“由此”，是因果，不是转折。', 'demnach 表示“据此、因此”。', 'daraufhin 表示“随后、于是”。']);
  W('Im Folgenden werden zunächst die methodischen Grundlagen erläutert, ___ die zentralen Ergebnisse der Befragung vorgestellt werden.', 'bevor',
    ['nachdem 会把顺序弄反：先介绍结果，再说明方法。', 'indem 表示方式。', 'wobei 表示“在此过程中”。']);
  W('Die Kosten für Energie sind stark gestiegen, ___ viele Haushalte gezwungen sind, ihren Verbrauch deutlich einzuschränken.', 'weshalb',
    ['womit 表示“用此”。', 'worauf 表示“随后”。', 'wobei 表示“在此过程中”。']);
})();
