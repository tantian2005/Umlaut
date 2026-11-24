/* Longer exercises in authentic text types (news brief, e-mail, university notice, ad, forum, study, opinion).
   Written for this app in the style of these genres; no real sources are quoted. */
(function () {
  'use strict';
  var X = G.dsl.extend;

  X('b1-praeteritum', `
c {Zeitungsmeldung: Was passt?} Am Montagmorgen ___ ein Lkw auf der A7 bei Hamburg liegen. Die Polizei sperrte die Autobahn für drei Stunden, verletzt wurde niemand. | blieb | bleibte | ist geblieben | bleibt # 新闻叙述用 Präteritum：bleiben → blieb（liegen bleiben = 抛锚）。
i {E-Mail: Ergänze.} Liebe Sara, gestern ___ ich endlich meine neue Wohnung gesehen. Sie ist klein, aber sehr hell, und die Miete ist bezahlbar. | habe | haben # 私人邮件用 Perfekt：habe … gesehen。
`);
  X('b1-satzstellung', `
c {Forum: Was passt?} Hallo zusammen! Seit drei Wochen wohne ich in Leipzig. In meiner Freizeit ___ Leute, die mit mir Deutsch sprechen. | suche ich | ich suche | suchen ich | ich suchen # In meiner Freizeit 占第一位 → 动词 + 主语。
i {Uni-Info: Ergänze.} Die Bibliothek ist während der Prüfungszeit länger geöffnet. Von Montag bis Freitag ___ Sie dort bis 24 Uhr lernen. | können # 情态动词第二位，不定式放句末。
`);
  X('b1-nebensatz', `
c {Ratgeber: Was passt?} Viele zugezogene Studierende melden sich nicht beim Bürgeramt an, ___ die Anmeldung innerhalb von zwei Wochen Pflicht ist. | obwohl | weil | ob | dass # 让步 → obwohl。
i {Zeitungsmeldung: Ergänze.} Die Stadt Köln baut neue Radwege, weil immer mehr Menschen mit dem Fahrrad zur Arbeit ___. | fahren # 从句中变位动词放句末。
`);
  X('b1-reflexiv', `
c {Forum: Was passt?} Ich lebe seit einem Jahr in Bremen. Am Anfang war alles schwierig, aber inzwischen habe ich ___ an das Wetter und das Essen gewöhnt. | mich | mir | sich | mein # sich gewöhnen an → mich。
i {Ratgeber: Ergänze.} Wer abends lange am Handy sitzt, kann ___ schlechter konzentrieren und schläft oft unruhig. | sich # 主语 wer → sich。
`);
  X('b1-wechselpraep', `
c {E-Mail: Was passt?} Lieber Herr Neumann, den Schlüssel für die Wohnung habe ich ___ Briefkasten gelegt. Bitte geben Sie mir kurz Bescheid, wenn Sie ihn gefunden haben. | in den | im | in dem | in der # legen = Wohin? → Akk。
i {Ratgeber: Ergänze.} Milch und Joghurt gehören in den Kühlschrank. Brot dagegen bleibt länger frisch, wenn es nicht in ___ Kühlschrank kommt. | den # kommen in = Wohin? → Akk。
`);
  X('b1-adjektiv', `
c {Wohnungsanzeige: Was passt?} Zu vermieten: helle 2-Zimmer-Wohnung mit ___ Balkon, ruhige Lage, fünf Minuten zur U-Bahn. | großem | großer | großen | großes # mit + Dat，无冠词阳性 → -em。
i {Stellenanzeige: Ergänze.} Wir suchen eine ___ Mitarbeiterin für unser Team in Frankfurt. Sie haben Erfahrung im Kundenservice und sprechen gut Englisch. | freundliche | freundlich # eine + Akk 阴性 → -e。
`);
  X('b1-komparativ', `
c {Zeitungsmeldung: Was passt?} Im Juli war es in Deutschland deutlich ___ als im Durchschnitt der letzten dreißig Jahre. Besonders im Süden wurden mehrmals über 35 Grad gemessen. | wärmer | warmer | am wärmsten | wärmste # 比较级 + als。
i {Studie: Ergänze.} Junge Menschen lesen heute ___ Nachrichten auf dem Smartphone als in der gedruckten Zeitung. | mehr;häufiger;öfter | viel / oft # 比较级 + als。
`);
  X('b1-temporal', `
c {Zeitungsmeldung: Was passt?} ___ das Feuer gelöscht worden war, durften die Bewohner wieder in ihre Wohnungen zurückkehren. | Nachdem | Bevor | Während | Seit # Plusquamperfekt + Präteritum → nachdem。
i {E-Mail: Ergänze.} ___ ich nächste Woche in Berlin bin, möchte ich dich gern treffen. Hast du am Dienstagabend Zeit? | Wenn;Während | 将来 # 将来的时间 → wenn。
`);
  X('b1-relativ', `
c {Uni-Info: Was passt?} Studierende, ___ ein Stipendium beantragen möchten, müssen ihre Unterlagen bis zum 15. Mai einreichen. | die | denen | deren | der # 复数 Nom → die。
i {Ratgeber: Ergänze.} Ein Mietvertrag ist ein Vertrag, in ___ alle Rechte und Pflichten von Mieter und Vermieter stehen. | dem # in + Dat 阳性 → dem。
`);
  X('b1-praepverben', `
c {Forum: Was passt?} Ich habe mich ___ eine Stelle als Werkstudentin beworben und warte jetzt auf eine Antwort. Wie lange dauert das normalerweise? | um | für | auf | an # sich bewerben um。
i {Zeitungsmeldung: Ergänze.} Viele Eltern beschweren sich ___ die langen Wartelisten für Kitaplätze. | über # sich beschweren über。
`);
  X('b1-zu', `
c {Uni-Info: Was passt?} ___ sich für einen Sprachkurs anzumelden, müssen Sie zuerst einen Einstufungstest machen. | Um | Damit | Ohne | Statt # 目的 + zu → um … zu。
i {Ratgeber: Ergänze.} Es ist sinnvoll, vor dem Umzug alle Verträge rechtzeitig zu ___. | kündigen # zu + 不定式。
`);
  X('b1-konjunktiv2', `
c {E-Mail: Was passt?} Sehr geehrte Frau Becker, ___ Sie mir bitte mitteilen, ob der Termin am Freitag noch frei ist? Vielen Dank im Voraus. | könnten | können | konnten | könnte # 礼貌请求 → Könnten Sie …?
i {Forum: Ergänze.} Wenn ich mehr Zeit ___, würde ich gern einen Tanzkurs machen. Leider arbeite ich jeden Abend. | hätte # 非现实条件 → hätte。
`);
  X('b1-passiv', `
c {Zeitungsmeldung: Was passt?} Das alte Schwimmbad in der Innenstadt ___ im nächsten Jahr komplett renoviert. Die Kosten liegen bei rund vier Millionen Euro. | wird | wurde | ist | hat # 将来的计划 → Präsens Passiv：wird renoviert。
i {Uni-Info: Ergänze.} Die Ergebnisse der Klausur werden voraussichtlich Ende März online ___. | veröffentlicht | veröffentlichen # werden + Partizip II。
`);
  X('b1-futur', `
c {Zeitungsmeldung: Was passt?} Nach Angaben der Bahn ___ die neue Strecke zwischen Berlin und Dresden im Jahr 2030 fertig sein. | wird | werden | würde | wurde # Futur I：wird … sein。
i {E-Mail: Ergänze.} Keine Sorge, ich ___ dir die Unterlagen morgen früh per E-Mail schicken. | werde # 承诺 → werde。
`);
  X('b1-lassen', `
c {Ratgeber: Was passt?} Wer sein Fahrrad nicht selbst reparieren kann, sollte es einmal im Jahr in einer Werkstatt überprüfen ___. | lassen | gelassen | zu lassen | lässt # 情态动词 + überprüfen lassen。
i {Forum: Ergänze.} Ich habe mir gestern zum ersten Mal in Deutschland die Haare schneiden ___ – leider viel zu kurz! | lassen # 双不定式。
`);
  X('b1-genitiv', `
c {Zeitungsmeldung: Was passt?} Wegen ___ Sturms fielen am Sonntag in ganz Norddeutschland zahlreiche Züge aus. | des | dem | den | der # wegen + Gen：des Sturms。
i {Uni-Info: Ergänze.} Während ___ Semesterferien ist das Studierendensekretariat nur vormittags geöffnet. | der # 复数 Gen → der。
`);
  X('b2-satzverbindungen', `
c {Zeitungsmeldung: Was passt?} Die Mieten in den Großstädten steigen seit Jahren, ___ ziehen immer mehr Familien ins Umland. | deshalb | weil | obwohl | sodass # 连接副词 deshalb + 动词 + 主语。
i {Studie: Ergänze.} Viele Studierende jobben neben dem Studium, ___ das BAföG oft nicht für Miete und Lebensmittel reicht. | weil;da # 原因从句。
`);
  X('b2-konnektoren', `
c {Stellenanzeige: Was passt?} Sie verfügen ___ über gute IT-Kenntnisse ___ über Erfahrung im Projektmanagement. | sowohl / als auch | weder / noch | entweder / oder | zwar / aber # 两者都 → sowohl … als auch。
i {Zeitungsmeldung: Ergänze.} Je früher Kinder mit einer Fremdsprache beginnen, ___ leichter fällt ihnen später das Lernen, sagen viele Experten. | desto;umso # je … desto / umso。
`);
  X('b2-ndeklination', `
c {Zeitungsmeldung: Was passt?} Die Polizei sucht nach einem ___, der den Unfall am Bahnhof beobachtet hat. | Zeugen | Zeuge | Zeugens | Zeug # 弱变化名词：nach + Dat → einem Zeugen。
i {E-Mail: Ergänze.} Sehr geehrter Herr Schulz, vielen Dank für Ihre Nachricht. Ich habe Ihre Frage an unseren ___ weitergeleitet. | Kollegen | Kollege # an + Akk → unseren Kollegen。
`);
  X('b2-praefix', `
c {Ratgeber: Was passt?} Lesen Sie den Vertrag genau, bevor Sie ihn ___. Später lässt sich vieles nicht mehr ändern. | unterschreiben | schreiben unter | unterzuschreiben | unterschrieben # unterschreiben 不可分，从句末尾用变位形式。
i {Uni-Info: Ergänze.} Bitte füllen Sie das Formular vollständig ___ und geben Sie es im Sekretariat ab. | aus # 可分动词 ausfüllen：前缀放句末。
`);
  X('b2-k2-vergangenheit', `
c {Forum: Was passt?} Hätte ich früher gewusst, wie teuer die Wohnungen hier sind, ___ ich mich nicht in München beworben. | hätte | wäre | würde | habe # 过去的非现实 → hätte … beworben。
i {Zeitungsmeldung: Ergänze.} Experten meinen, der Schaden ___ geringer gewesen, wenn die Warnung früher gekommen wäre. | wäre # sein 的完成式用 sein → wäre … gewesen。
`);
  X('b2-vermutung', `
c {Zeitungsmeldung: Was passt?} Der Zug steht seit einer Stunde still. Nach Angaben der Bahn ___ ein Baum auf die Gleise gefallen sein. | soll | will | muss | dürfte # 据报道 → soll。
i {Forum: Ergänze.} Mein Paket ist immer noch nicht da. Es ___ wohl beim Nachbarn abgegeben worden sein. | wird;dürfte;könnte | Vermutung # 推测过去：wird / dürfte … worden sein。
`);
  X('b2-passiv', `
c {Uni-Info: Was passt?} Die Hausarbeit ist bis zum 31. August im Prüfungsamt ___. Später eingereichte Arbeiten werden nicht angenommen. | abzugeben | abgegeben werden | zu abgeben | abgeben # sein + zu = muss abgegeben werden。
i {Ratgeber: Ergänze.} Viele Haushaltsgeräte lassen sich mit wenig Aufwand ___, statt sie wegzuwerfen. | reparieren # sich lassen + 不定式。
`);
  X('b2-infinitiv', `
c {E-Mail: Was passt?} Liebe Frau Klein, ich bin sehr froh, die Prüfung beim ersten Versuch ___. Vielen Dank für Ihre Unterstützung im Kurs! | bestanden zu haben | bestanden zu sein | zu bestehen haben | bestehen zu haben # 已完成 → Partizip II + zu haben。
i {Zeitungsmeldung: Ergänze.} Der Politiker bestreitet, von den Plänen vorher informiert worden zu ___. | sein # 被动完成式 → worden zu sein。
`);
  X('b2-partikeln', `
c {Forum: Was passt?} Du suchst einen Nebenjob? Frag ___ mal im Café an der Uni, die suchen gerade Leute! | doch | denn | ja | eben # 友好建议 → doch mal。
i {E-Mail: Ergänze.} Hallo Tim, wann kommst du ___ morgen? Ich muss wissen, ob ich dich vom Bahnhof abholen soll. | denn # 疑问句中的 denn。
`);
  X('b2-k1', `
c {Zeitungsmeldung: Was passt?} Die Ministerin erklärte, die Regierung ___ bis Ende des Jahres ein neues Gesetz zum Klimaschutz vorlegen. | werde | wird | würde | wurde # 转述将来 → K I werde。
i {Zeitungsmeldung: Ergänze.} Ein Sprecher des Unternehmens sagte, man ___ die Kritik der Kunden sehr ernst. | nehme # man → K I nehme。
`);
  X('b2-relativ', `
c {Studie: Was passt?} ___ regelmäßig Sport treibt, schläft besser und ist seltener krank, zeigt eine neue Untersuchung. | Wer | Der | Was | Welcher # 泛指人 → wer。
i {Ratgeber: Ergänze.} Schreiben Sie vor dem Vorstellungsgespräch alles auf, ___ Ihnen wichtig ist. | was # alles → was。
`);
  X('b2-partizip', `
c {Zeitungsmeldung: Was passt?} Die seit Monaten ___ Verhandlungen zwischen der Gewerkschaft und der Bahn wurden am Freitag ohne Ergebnis abgebrochen. | andauernden | angedauerten | andauernde | andauern # Partizip I；die + 复数 → -en。
i {Studie: Ergänze.} Die in der Umfrage ___ Personen waren zwischen 18 und 25 Jahre alt. | befragten | befragen, Partizip II # 被询问 → Partizip II；die + 复数 → -en。
`);
  X('b2-nominal', `
c {Uni-Info: Was passt?} ___ Ablauf der Frist werden keine Anträge mehr angenommen. | Nach | Vor | Während | Trotz # nachdem die Frist abgelaufen ist → nach Ablauf。
i {Zeitungsmeldung: Ergänze.} Wegen der ___ der Energiepreise müssen viele Familien sparen. | Erhöhung;Steigerung | erhöhen # erhöhen → die Erhöhung。
`);
  X('b2-praep-genitiv', `
c {Zeitungsmeldung: Was passt?} ___ der anhaltenden Trockenheit hat die Stadt das Bewässern von Gärten verboten. | Aufgrund | Trotz | Anlässlich | Mithilfe # 原因 → aufgrund。
i {E-Mail: Ergänze.} Sehr geehrte Damen und Herren, bezüglich ___ Anzeige vom 2. Mai möchte ich mich um die Stelle bewerben. | Ihrer # bezüglich + Gen：Ihrer Anzeige。
`);
  X('b2-nvv', `
c {Zeitungsmeldung: Was passt?} Die Regierung will noch in diesem Jahr Maßnahmen gegen den Fachkräftemangel ___. | ergreifen | machen | geben | stellen # Maßnahmen ergreifen。
i {Uni-Info: Ergänze.} Wenn Sie Fragen haben, steht Ihnen die Studienberatung gern zur ___. | Verfügung # zur Verfügung stehen。
`);
  X('b2-adjpraep', `
c {Studie: Was passt?} Die meisten Befragten sind ___ ihrem Wohnort zufrieden, kritisieren aber die hohen Mieten. | mit | über | von | an # zufrieden mit。
i {Ratgeber: Ergänze.} Viele ältere Menschen auf dem Land sind ___ das Auto angewiesen, weil kaum Busse fahren. | auf # angewiesen auf。
`);
  X('b2-es', `
c {Ratgeber: Was passt?} ___ lohnt sich, die Preise verschiedener Anbieter zu vergleichen, bevor man einen Handyvertrag abschließt. | Es | Sie | Er | Man # 关联词 es 指向后面的 zu 不定式。
i {Zeitungsmeldung: Ergänze.} Bei dem Streit ging ___ vor allem um die Frage, wer die Kosten übernimmt. | es # es geht um …
`);
  X('c1-nominalstil', `
c {Studie: Was passt?} ___ der zunehmenden Digitalisierung verändern sich viele Berufe grundlegend. | Infolge | Trotz | Zwecks | Mangels # 由于……的结果 → infolge + Gen。
i {Uni-Info: Ergänze.} Die ___ der Unterlagen muss bis spätestens 15. Juli erfolgen. | Einreichung;Abgabe | einreichen # Nominalstil：einreichen → die Einreichung。
`);
  X('c1-partizip', `
c {Studie: Was passt?} Die vom Statistischen Bundesamt ___ Zahlen zeigen einen deutlichen Anstieg der Studierendenzahlen. | veröffentlichten | veröffentlichenden | veröffentlichte | veröffentlicht # Partizip II；die + 复数 → -en。
i {Zeitungsmeldung: Ergänze.} Die bis 2030 zu ___ Klimaziele stellen viele Unternehmen vor große Herausforderungen. | erreichenden | erreichen, zu + Partizip I # zu + Partizip I；die + 复数 → -en。
`);
  X('c1-konnektoren', `
c {Studie: Was passt?} Das Homeoffice spart Zeit und Fahrtkosten, ___ fehlt vielen Beschäftigten der direkte Kontakt zu den Kollegen. | allerdings | indem | zumal | sofern # 转折副词 allerdings + 动词 + 主语。
i {Uni-Info: Ergänze.} Eine Verlängerung der Abgabefrist ist nur möglich, ___ ein ärztliches Attest vorliegt. | sofern;wenn;falls # 条件 → sofern。
`);
  X('c1-redewiedergabe', `
c {Zeitungsmeldung: Was passt?} Einer aktuellen Studie ___ verbringen Jugendliche täglich mehr als drei Stunden am Smartphone. | zufolge | laut | wegen | seitens # zufolge 后置 + Dat。
i {Zeitungsmeldung: Ergänze.} Die Forscher betonen, die Ergebnisse ___ noch nicht endgültig. | seien # K I：seien。
`);
  X('c1-modalitaet', `
c {Uni-Info: Was passt?} Der Antrag auf Rücktritt von der Prüfung ___ innerhalb von drei Tagen schriftlich zu stellen. | ist | hat | wird | muss # sein + zu = muss gestellt werden。
i {Ratgeber: Ergänze.} Die meisten Probleme mit dem Internetanschluss lassen ___ durch einen Neustart des Routers beheben. | sich # sich lassen + 不定式。
`);
  X('c1-grafik', `
c {Grafikbeschreibung: Was passt?} Der Anteil der Beschäftigten, die im Homeoffice arbeiten, stieg zwischen 2019 und 2021 ___ 13 auf 25 Prozent. | von | um | bei | aus # von … auf。
i {Grafikbeschreibung: Ergänze.} Im gleichen Zeitraum ging die Zahl der Pendler leicht ___. | zurück # zurückgehen：前缀放句末。
`);
  X('c1-praepositionen', `
c {Uni-Info: Was passt?} ___ der Prüfungsordnung dürfen Sie eine Prüfung höchstens dreimal wiederholen. | Gemäß | Mangels | Zwecks | Seitens # 按照 → gemäß。
i {Zeitungsmeldung: Ergänze.} ___ fehlender Fachkräfte mussten mehrere Kitas ihre Öffnungszeiten verkürzen. | Mangels;Wegen;Aufgrund | 由于缺乏 # mangels + Gen。
`);
  X('c1-verbenpraep', `
c {Studie: Was passt?} Die Studie kommt zu dem Ergebnis, dass soziale Medien erheblich ___ Meinungsbildung junger Menschen beitragen. | zur | an der | für die | auf die # beitragen zu。
i {Studie: Ergänze.} Die Autoren weisen darauf ___, dass die Stichprobe relativ klein war. | hin # hinweisen auf → weisen darauf hin。
`);
  X('c1-hypothese', `
c {Stellungnahme: Was passt?} Es ___ wünschenswert, wenn Hochschulen mehr bezahlbaren Wohnraum für Studierende anbieten würden. | wäre | ist gewesen | würde | hätte # 委婉表态 → Es wäre wünschenswert。
i {Stellungnahme: Ergänze.} Ohne die finanzielle Unterstützung der Eltern ___ viele junge Menschen gar nicht studieren. | könnten # ohne + 名词 + K II。
`);
  X('c1-textverweise', `
c {Stellungnahme: Was passt?} Die Zahl der Studienabbrecher ist gestiegen, ___ die Hochschulen ihre Beratungsangebote ausbauen wollen. | weshalb | womit | worauf | wobei # 指代整句的结果 → weshalb。
i {Stellungnahme: Ergänze.} Darüber ___ sollte man bedenken, dass nicht alle Studierenden einen eigenen Laptop besitzen. | hinaus # darüber hinaus = 此外。
`);
})();
