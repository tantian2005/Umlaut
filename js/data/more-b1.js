/* Extra B1 exercises, written around Goethe-Zertifikat B1 topics and word list */
(function () {
  'use strict';
  var X = G.dsl.extend;

  X('b1-praeteritum', `
c Nach dem Studium ___ sie zwei Jahre in einer Bank. | arbeitete | arbeitet | arbeitetete | gearbeitet # 规则动词，词干以 -t 结尾：arbeit-e-te。
i Der Vermieter ___ uns gestern eine neue Rechnung. | schickte | schicken, Präteritum # schicken → schickte。
i Leider ___ ich keine Zeit, zu dem Termin zu gehen. | hatte | haben, Präteritum # haben → hatte。
c Wann ___ du deine Bewerbung abgeschickt? | hast | bist | warst | wirst # abschicken 用 haben → hast … abgeschickt。
c Der Unfall ___ auf der Autobahn passiert. | ist | hat | wird | wurde # passieren 的 Perfekt 用 sein。
i Im Vorstellungsgespräch ___ der Chef viele Fragen. | stellte | stellen, Präteritum # stellen → stellte。
c Meine Kollegin ___ gestern krank zu Hause. | blieb | bleibte | blieben | bleibt # bleiben → blieb（不规则）。
o 那家公司去年招了十个新员工。 | Die Firma stellte letztes Jahr zehn neue Mitarbeiter ein. | Letztes Jahr stellte die Firma zehn neue Mitarbeiter ein. # 可分动词 einstellen：stellte … ein。
c Er ___ die Prüfung beim ersten Versuch. | bestand | bestehte | bestandete | bestehen # bestehen → bestand（不规则）。
i Der Zug ___ mit zwanzig Minuten Verspätung an. | kam | ankommen, Präteritum # ankommen → kam … an。
i Als Kind ___ ich oft Bauchschmerzen. | hatte | haben, Präteritum # haben → hatte。
c Wir ___ den ganzen Abend über die Reise gesprochen. | haben | sind | hatten gewesen | wurden # sprechen 用 haben。
o 我昨天忘了我的钥匙。 | Ich habe gestern meinen Schlüssel vergessen. | Gestern habe ich meinen Schlüssel vergessen. # vergessen 的 Partizip II 不加 ge-。
m Infinitiv ↔ Präteritum | schreiben=schrieb;fahren=fuhr;helfen=half;nehmen=nahm;wissen=wusste # 常见不规则动词。
`);

  X('b1-nebensatz', `
c Ich rufe dich an, ___ ich die Ergebnisse habe. | sobald | obwohl | ob | dass # sobald = 一……就；动词放句末。
c Der Arzt fragt, ___ ich regelmäßig Medikamente nehme. | ob | dass | weil | wann # 一般疑问的间接问句 → ob。
i Ich weiß nicht, warum der Zug heute so viel Verspätung ___. | hat | haben # 间接疑问句：动词放句末。
c Sie hat die Stelle bekommen, ___ sie wenig Erfahrung hatte. | obwohl | weil | damit | ob # 让步 → obwohl。
o 我觉得房租太高了。 | Ich finde, dass die Miete zu hoch ist. # dass 从句，ist 在句末。
o 你知道考试什么时候开始吗？ | Weißt du, wann die Prüfung beginnt? # 间接疑问句。
c Er kann nicht kommen, ___ er arbeiten muss. | weil | obwohl | denn | ob # 原因 + 动词在末尾 → weil。
i Ich hoffe, dass mein Antrag bald bearbeitet ___. | wird | werden, Passiv # 从句末尾：bearbeitet wird。
c Kannst du mir sagen, ___ man hier parken darf? | ob | dass | wenn | weil # 是否 → ob。
i Weil der Vermieter die Heizung nicht ___, ist es in der Wohnung kalt. | repariert;repariert hat | reparieren # 从句中变位动词放句末。
c ___ du Fragen zur Anmeldung hast, schreib mir eine E-Mail. | Wenn | Ob | Dass | Obwohl # 条件 → wenn。
i Viele Leute wissen nicht, dass man den Müll trennen ___. | muss | müssen # 情态动词放句末。
m Satzanfang ↔ Ende | Ich bleibe zu Hause,=weil ich krank bin.;Ich gehe spazieren,=obwohl es regnet.;Ich weiß nicht,=ob er kommt.;Ich glaube,=dass er recht hat. #
`);

  X('b1-satzstellung', `
o 我昨天因为下雨没去上班。 | Ich bin gestern wegen des Regens nicht zur Arbeit gegangen. | Gestern bin ich wegen des Regens nicht zur Arbeit gegangen. # TeKaMoLo：gestern（Te）– wegen des Regens（Ka）。
c Der Vermieter hat ___ geschickt. | uns die Rechnung | die Rechnung uns | uns sie | die uns Rechnung # 代词在名词前。
c Hast du ___ schon gezeigt? | sie ihm | ihm sie | er sie | sie er # 两个代词：Akk（sie）在 Dat（ihm）前。
o 下周一我必须去看医生。 | Am nächsten Montag muss ich zum Arzt gehen. | Ich muss am nächsten Montag zum Arzt gehen. # 情态动词第二位，不定式在句末。
c Am Wochenende ___ wir mit Freunden in die Berge. | fahren | fahre | fährt | gefahren # 动词第二位，与 wir 一致。
o 他没有通过考试。 | Er hat die Prüfung nicht bestanden. # 否定整句：nicht 在 Partizip II 前。
c Warum ___ du gestern nicht gekommen? | bist | hast | warst | wurdest # kommen 用 sein；疑问词后动词第二位。
o 请明天早上给我打电话！ | Ruf mich bitte morgen früh an! # 命令式：动词第一位，前缀 an 在句末。
c Der Kurs ___ nächste Woche ___. | fängt / an | beginnt / an | anfängt / an | fängt / auf # 可分动词 anfangen：fängt … an。
i Morgen ___ ich meine Eltern. | besuche | besuchen # 时间词在第一位，动词仍在第二位。
c Ich gebe ___ morgen zurück. | dir das Buch | das Buch dir | dich das Buch | dir den Buch # 名词宾语：Dat 在 Akk 前。
o 我把它寄给我妈妈了。 | Ich habe es meiner Mutter geschickt. # 代词 es 在名词 meiner Mutter 前。
m Wo steht das Verb? | Aussagesatz=Position 2;Nebensatz=am Ende;Ja/Nein-Frage=Position 1;W-Frage=nach dem Fragewort #
`);

  X('b1-temporal', `
c ___ ich die Wohnung gefunden hatte, unterschrieb ich sofort den Mietvertrag. | Nachdem | Bevor | Während | Seit # Plusquamperfekt + Präteritum → nachdem。
c ___ du das Formular abschickst, lies es bitte noch einmal durch. | Bevor | Nachdem | Seit | Als # 寄出之前 → bevor。
i ___ ich in Deutschland studiere, spreche ich jeden Tag Deutsch. | Seit;Seitdem | 自从 # 从过去持续到现在 → seit(dem)。
c ___ meine Eltern zu Besuch waren, haben wir viel unternommen. | Als | Wenn | Wann | Bis # 过去一次 → als。
i Bitte warte, ___ der Arzt dich aufruft. | bis | 直到 # 直到 → bis。
c ___ des Studiums hat sie in einem Café gejobbt. | Während | Als | Nachdem | Bevor # während 也可作介词 + Genitiv。
o 每次下雨，我都坐公交车。 | Immer wenn es regnet, fahre ich mit dem Bus. # 反复发生 → (immer) wenn；从句在前，主句动词紧跟。
o 出发前我们检查了所有文件。 | Bevor wir losfuhren, prüften wir alle Unterlagen. | Wir prüften alle Unterlagen, bevor wir losfuhren. # bevor 从句。
i Nachdem der Kurs zu Ende ___, bekamen alle ein Zertifikat. | war | sein # Plusquamperfekt：war … zu Ende（gewesen）。
c Sobald ich ankomme, ___ ich dich an. | rufe | rief | gerufen | rufen # sobald 从句在前 → 主句动词紧跟。
c ___ ich jung war, wollte ich Pilot werden. | Als | Wenn | Wann | Ob # 过去的一个时期 → als。
i Während du einkaufst, ___ ich das Essen. | koche | kochen # 主句动词紧跟逗号。
m Konnektor ↔ Zeitverhältnis | während=gleichzeitig;nachdem=Nebensatz zuerst;bevor=Hauptsatz zuerst;seit=Beginn in der Vergangenheit #
`);

  X('b1-relativ', `
c Der Arzt, ___ ich gestern war, hat mir Tabletten verschrieben. | bei dem | bei den | dem | bei der # bei + Dat，阳性 → bei dem。
i Die Wohnung, ___ wir besichtigt haben, ist leider zu teuer. | die | Akkusativ # 阴性 Akk → die。
i Das ist der Kollege, ___ Auto ich mir geliehen habe. | dessen | Genitiv # 阳性先行词 + 所属 → dessen。
c Die Bewerber, ___ wir eine Einladung geschickt haben, kommen am Montag. | denen | die | den | deren # schicken + Dat（给谁），复数 → denen。
c Die Stadt, ___ ich geboren bin, liegt an der Elbe. | in der | in die | die | der # 位置 → in + Dat。
o 这就是我昨天跟你讲过的那家餐厅。 | Das ist das Restaurant, von dem ich dir gestern erzählt habe. # erzählen von + Dat → von dem。
o 我们在找一套带花园的房子。 | Wir suchen ein Haus, das einen Garten hat. # 中性 Nom → das。
i Die Firma, für ___ ich arbeite, hat 500 Mitarbeiter. | die | für + Akk # für + Akk，阴性 → die。
c Es gibt vieles, ___ ich noch lernen muss. | was | das | dem | wo # vieles 后用 was。
i Der Termin, an ___ wir uns treffen wollten, passt mir nicht mehr. | dem | an + Dat # 时间 an + Dat → an dem。
c Das ist die Kollegin, mit ___ ich das Projekt mache. | der | die | dem | denen # mit + Dat，阴性 → der。
m Präposition + Relativpronomen | warten auf (der Bus)=auf den;sprechen mit (die Frau)=mit der;denken an (das Problem)=an das;träumen von (die Reise)=von der #
`);

  X('b1-adjektiv', `
c Wir suchen eine ___ Wohnung in der Nähe der Uni. | günstige | günstigen | günstiger | günstiges # eine + 阴性 Akk → -e。
c Er hat einen ___ Job bei einer großen Firma gefunden. | gut bezahlten | gut bezahlte | gut bezahlter | gut bezahltes # einen（Akk 阳性）→ -en。
i Bei ___ Wetter fällt der Ausflug aus. | schlechtem | schlecht # 无冠词 Dat 中性 → -em。
i Ich brauche einen ___ Termin beim Zahnarzt. | neuen | neu # einen → -en。
c Die ___ Mitarbeiter bekommen eine Einführung. | neuen | neue | neuer | neues # die + 复数 → -en。
i Das ist ein sehr ___ Angebot. | interessantes | interessant # ein + 中性 Nom → -es。
c Mit ___ Grüßen, Ihr Thomas Weber | besten | beste | bester | bestem # 无冠词 Dat 复数 → -en。
o 我买了一辆二手自行车。 | Ich habe ein gebrauchtes Fahrrad gekauft. # ein + 中性 Akk → -es。
c Trotz des ___ Verkehrs kamen wir pünktlich an. | starken | starke | starker | starkes # Genitiv → -en。
i Sie wohnt in einer ___ Stadt im Süden. | kleinen | klein # Dativ → -en。
c Der Arzt gab mir einen ___ Rat. | guten | gute | guter | gutes # einen → -en。
i Ich trinke morgens nur ___ Tee. | grünen | grün # 无冠词 Akk 阳性 → -en。
m Artikel ↔ Endung (Nominativ) | ein (Mann)=gut-er;eine (Frau)=gut-e;ein (Kind)=gut-es;die (Leute)=gut-en #
`);

  X('b1-komparativ', `
c Die Miete in München ist viel ___ als in Leipzig. | höher | hocher | höcher | mehr hoch # hoch → höher（去掉 c）。
c Mein neuer Job ist ___ interessant wie der alte. | genauso | so viel | mehr | als # 相同程度：(genau)so … wie。
i Der Zug ist ___ als das Auto, aber teurer. | schneller | schnell # 比较级 + als。
i Das ist die ___ Lösung für unser Problem. | beste | gut, Superlativ # die + Nom → beste。
c Immer ___ Menschen arbeiten im Homeoffice. | mehr | viele | meisten | vieler # immer + 比较级 = 越来越……
c Von allen Bewerbern hatte sie die ___ Erfahrung. | meiste | mehr | meisten | viele # viel → meist-；die + Akk 阴性 → -e。
o 骑自行车比开车更环保。 | Fahrrad fahren ist umweltfreundlicher als Auto fahren. # umweltfreundlich → umweltfreundlicher。
o 越来越多的人吃素。 | Immer mehr Menschen essen vegetarisch. # immer mehr = 越来越多。
i Im Winter sind die Nächte am ___. | längsten | lang, Superlativ # am längsten。
c Ich wohne ___ an der Uni als du. | näher | naher | nächster | nah # nah → näher。
c Das Wetter ist heute nicht so ___ wie gestern. | warm | wärmer | am wärmsten | wärmste # so … wie 之间用原级。
i Das Leben in der Stadt ist ___ als auf dem Land. | teurer | teuer # teuer → teurer（去掉 e）。
m Adjektiv ↔ Superlativ | gut=am besten;viel=am meisten;gern=am liebsten;hoch=am höchsten;nah=am nächsten #
`);

  X('b1-konjunktiv2', `
c Wenn ich mehr Geld ___, würde ich eine größere Wohnung mieten. | verdienen würde | verdiene würde | würde verdienen | verdienen werde # 从句中 würde 放最后。
i ___ Sie mir bitte sagen, wo das Bürgeramt ist? | Könnten;Würden | höflich # 礼貌请求：Könnten / Würden Sie …?
c An deiner Stelle ___ ich mich sofort bewerben. | würde | wäre | hätte | werde # 建议：An deiner Stelle würde ich …
i Ich ___ gern einen Termin für nächste Woche. | hätte | haben # Ich hätte gern … = 我想要……
o 如果我是你，我会去看医生。 | Wenn ich du wäre, würde ich zum Arzt gehen. | Ich würde zum Arzt gehen, wenn ich du wäre. # 非现实条件。
c Es wäre besser, wenn wir früher ___. | losfahren würden | losfahren werden | würden losfahren | losgefahren # 从句：不定式 + würden。
i Du ___ weniger Kaffee trinken. | solltest | sollen, Ratschlag # 建议 → solltest。
c {Wähle die höflichste Form.} ___ ich Sie kurz stören? | Dürfte | Darf | Durfte | Dürfen # 最礼貌：Dürfte ich …?
o 要是我有更多时间就好了！ | Wenn ich doch mehr Zeit hätte! # 愿望句。
i Wenn das Wetter besser ___, könnten wir draußen essen. | wäre | sein # sein → wäre。
c Ich ___ dir gern helfen, aber ich habe keine Zeit. | würde | werde | wurde | wäre # 非现实 → würde。
i Wenn ich Zeit ___, käme ich mit. | hätte | haben # haben → hätte。
m Funktion ↔ Satz | Ratschlag=Du solltest mehr schlafen.;Bitte=Könnten Sie mir helfen?;Irreale Bedingung=Wenn ich reich wäre, …;Wunsch=Hätte ich doch mehr Zeit! #
`);

  X('b1-passiv', `
c Die Wohnung ___ letzte Woche renoviert. | wurde | wird | ist | hat # 过去 → Präteritum Passiv：wurde。
i Der Antrag muss bis Ende des Monats gestellt ___. | werden # 情态被动：gestellt werden。
c Im Restaurant ___ nicht geraucht. | wird | werden | ist | hat # 无主语被动：wird geraucht。
i Die Ergebnisse ___ morgen veröffentlicht. | werden # 复数主语 → werden。
c Das Formular ist noch nicht unterschrieben ___. | worden | geworden | werden | wurde # Perfekt 被动 → worden。
o 这座桥是 1990 年建成的。 | Die Brücke wurde 1990 gebaut. # Präteritum Passiv。
o 病人立刻被送进了医院。 | Der Patient wurde sofort ins Krankenhaus gebracht. # bringen → gebracht。
c Die E-Mail ___ von der Sekretärin geschrieben. | wurde | würde | wird geworden | ist geworden # Präteritum Passiv：wurde geschrieben。
i Bewerbungen können online eingereicht ___. | werden # können + Partizip II + werden。
c Die Straße wurde ___ den Sturm beschädigt. | durch | von | mit | bei # 原因 / 事件 → durch。
i In Deutschland ___ viel Bier getrunken. | wird # 无人称被动。
c Der Brief ist gestern abgeschickt ___. | worden | geworden | wurde | werden # Perfekt 被动。
m Aktiv ↔ Passiv | Man baut das Haus.=Das Haus wird gebaut.;Man baute das Haus.=Das Haus wurde gebaut.;Man hat das Haus gebaut.=Das Haus ist gebaut worden.;Man muss das Haus bauen.=Das Haus muss gebaut werden. #
`);

  X('b1-futur', `
c Ich bin sicher, dass du die Prüfung ___. | bestehen wirst | wirst bestehen | bestehst wirst | bestanden wird # 从句：不定式 + wirst。
i Laut Wetterbericht ___ es morgen schneien. | wird # Futur I：wird + 不定式。
c Er ___ sicher bald eine neue Stelle finden. | wird | würde | wurde | werden # 预测 → wird。
i Die Preise ___ im nächsten Jahr weiter steigen. | werden # 复数 → werden。
o 我明天给你回电话。 | Ich werde dich morgen zurückrufen. | Morgen werde ich dich zurückrufen. # werde + 不定式。
c Seine Tochter möchte Ärztin ___. | werden | wird | worden | zu werden # 情态动词 + 不定式 werden。
i Es ist kalt geworden – der Winter ___ bald kommen. | wird # Futur I 预测。
c Wann ___ das neue Gesetz in Kraft treten? | wird | werden | wirst | werdet # das Gesetz → wird。
o 我们将在柏林举办这次会议。 | Wir werden die Konferenz in Berlin veranstalten. # Futur I。
i Die Kosten sind in den letzten Jahren immer höher ___. | geworden | werden # 实义动词 werden 的 Partizip II：geworden。
c Ich glaube, er ___ jetzt schon zu Hause sein. | wird | würde | wurde | ist # 推测 → wird … sein。
m Satz ↔ Funktion | Ich werde dir helfen.=Versprechen;Morgen wird es regnen.=Vorhersage;Er wird wohl krank sein.=Vermutung;Du wirst jetzt schlafen!=Aufforderung #
`);

  X('b1-zu', `
c Ich habe keine Lust, am Wochenende ___. | zu arbeiten | arbeiten | zu gearbeitet | um arbeiten # Lust haben + zu 不定式。
i Es ist nicht leicht, eine günstige Wohnung ___. | zu finden | finden # Es ist … + zu 不定式。
c Er spart Geld, ___ ein Auto zu kaufen. | um | damit | ohne | statt # 目的 + 同一主语 → um … zu。
c Ich schreibe es auf, ___ ich es nicht vergesse. | damit | um | ohne | dass # 目的 + 从句 → damit。
i Vergiss nicht, den Antrag rechtzeitig ___! | abzugeben | abgeben # 可分动词：ab-zu-geben。
c Sie verließ das Büro, ___ das Licht auszumachen. | ohne | um | damit | statt # 没有做 → ohne … zu。
o 我打算明年去德国读书。 | Ich habe vor, nächstes Jahr in Deutschland zu studieren. # vorhaben + zu 不定式。
o 为了学德语，他上了一个夜校课程。 | Er besucht einen Abendkurs, um Deutsch zu lernen. # um … zu。
i Hast du Zeit, mir kurz ___? | zu helfen | helfen # Zeit haben + zu 不定式。
c ___ den Bus zu nehmen, ging er zu Fuß. | Statt | Um | Ohne | Damit # 代替 → statt … zu。
i Er hat endlich aufgehört ___. | zu rauchen | rauchen # aufhören + zu 不定式。
c Wir müssen morgen früh ___. | aufstehen | aufzustehen | zu aufstehen | aufgestanden # 情态动词后不用 zu。
o 学好一门外语很重要。 | Es ist wichtig, eine Fremdsprache gut zu lernen. # Es ist wichtig + zu 不定式。
`);

  X('b1-lassen', `
c Wir ___ unsere Wohnung renovieren. | lassen | lässt | lasst | gelassen # wir → lassen。
i Ich habe meinen Pass verlängern ___. | lassen | lassen, Perfekt # 双不定式：verlängern lassen。
c ___ mich bitte ausreden! | Lass | Lässt | Gelassen | Ließ # 命令式（du）→ Lass。
i Sie ___ ihre Tasche im Zug liegen. | ließ | lassen, Präteritum # lassen → ließ。
c Der Arzt ___ den Patienten nicht nach Hause gehen. | lässt | lasst | lassen | gelassen # der Arzt → lässt。
o 我得找人修手机。 | Ich muss mein Handy reparieren lassen. # 委托别人做 → lassen + 不定式。
o 我们开始吧！ | Lass uns anfangen! # Lass uns … = 我们……吧。
i Hast du das Fenster offen ___? | gelassen | lassen # 单独使用 → gelassen。
c Wo ___ du dein Fahrrad stehen? | lässt | lasst | lassen | gelassen # du → lässt。
i Meine Eltern ___ mich allein in den Urlaub fahren. | lassen # 允许 → lassen。
c Ich habe mir die Haare kurz schneiden ___. | lassen | gelassen | lässt | zu lassen # 双不定式。
`);

  X('b1-praepverben', `
c Ich bewerbe mich ___ eine Stelle als Krankenpfleger. | um | für | auf | an # sich bewerben um + Akk。
i Wir müssen uns ___ den neuen Kollegen gewöhnen. | an # sich gewöhnen an + Akk。
c Der Erfolg hängt ___ vielen Faktoren ab. | von | an | auf | mit # abhängen von + Dat。
i Hast du schon ___ dem Vermieter gesprochen? | mit # sprechen mit + Dat。
c Sie beschwert sich ___ den Lärm der Nachbarn. | über | gegen | auf | um # sich beschweren über + Akk。
i Ich bitte Sie ___ eine schnelle Antwort. | um # bitten um + Akk。
c ___ hast du Angst? – Vor der Prüfung. | Wovor | Wofür | Worüber | Woran # Angst haben vor → wovor。
o 我照顾孩子们。 | Ich kümmere mich um die Kinder. # sich kümmern um。
o 你参加那个课程了吗？ | Hast du an dem Kurs teilgenommen? # teilnehmen an + Dat。
c Ich freue mich ___, dich bald wiederzusehen. | darauf | darüber | worauf | auf es # 指向后面的 zu 不定式 → darauf。
i Er interessiert sich nicht ___ Fußball. | für # sich interessieren für。
i Ich verlasse mich ___ dich. | auf # sich verlassen auf + Akk。
m Verb ↔ Präposition | sich bewerben=um;sich gewöhnen=an;sich beschweren=über;abhängen=von;sich verlassen=auf #
`);

  X('b1-wechselpraep', `
c Ich lege die Unterlagen ___ Schreibtisch. | auf den | auf dem | auf der | auf das # legen = Wohin? → Akk。
c Die Unterlagen liegen ___ Schreibtisch. | auf dem | auf den | auf die | auf das # liegen = Wo? → Dat。
i Häng deine Jacke bitte in ___ Schrank! | den # 方向 → Akk：den Schrank。
i Der Schlüssel steckt noch in ___ Tür. | der # 位置 → Dat：der Tür。
c Wir setzen uns ___ Tisch. | an den | an dem | am | an die # sich setzen → Akk。
c Das Bild hängt ___ Sofa. | über dem | über das | über den | über die # 位置 → Dat。
o 请把牛奶放进冰箱！ | Stell bitte die Milch in den Kühlschrank! # stellen + Akk。
o 孩子们在花园里玩。 | Die Kinder spielen im Garten. # 位置 → im（in dem）。
i Er stellt das Fahrrad vor ___ Haus. | das # 方向 → Akk：das Haus。
c Zwischen ___ Bahnhof und dem Rathaus gibt es ein Café. | dem | den | der | das # 位置 → Dat。
c Sie geht jeden Morgen ___ Büro. | ins | im | in | in dem # 方向 → in das = ins。
i Die Katze sitzt auf ___ Dach. | dem # 位置 → Dat。
m Satz ↔ Artikel | Ich gehe in ___ Stadt.=die;Ich wohne in ___ Stadt.=der;Ich fahre in ___ Urlaub.=den;Ich war in ___ Kino.=dem #
`);

  X('b1-reflexiv', `
c Ich muss ___ beeilen, sonst verpasse ich den Bus. | mich | mir | sich | dich # sich beeilen → Akk mich。
c Kannst du ___ das merken? | dir | dich | sich | du # sich etwas merken → Dat dir。
i Wir haben ___ im Urlaub gut erholt. | uns # wir → uns。
c Er hat ___ beim Fußball das Bein gebrochen. | sich | ihm | ihn | er # 第三人称 → sich（Dat）。
i Ich ziehe ___ schnell um, dann gehen wir. | mich # sich umziehen → mich。
c Stell ___ vor, ich habe die Stelle bekommen! | dir | dich | sich | du # sich etwas vorstellen → Dat dir。
o 我已经习惯了德国的天气。 | Ich habe mich an das Wetter in Deutschland gewöhnt. # sich gewöhnen an。
o 请您坐下！ | Setzen Sie sich bitte! # 尊称 → sich。
i Habt ihr ___ schon für einen Kurs angemeldet? | euch # ihr → euch。
c Ich wünsche ___ einen neuen Laptop. | mir | mich | sich | mein # sich etwas wünschen → Dat。
c Ihr müsst ___ entscheiden. | euch | sich | uns | ihr # ihr → euch。
i Sie hat ___ über die laute Musik geärgert. | sich # sich ärgern über。
`);

  X('b1-genitiv', `
c Wegen ___ Streiks fallen viele Züge aus. | des | dem | der | den # der Streik → des Streiks。
i Trotz ___ hohen Miete ist die Wohnung beliebt. | der # die Miete → der。
c Das Büro ___ Chefin ist im ersten Stock. | der | des | dem | den # 阴性 Gen → der。
i Innerhalb ___ Woche müssen Sie antworten. | einer # 阴性 Gen → einer。
c Während ___ Semesters arbeitet sie in einer Bibliothek. | des | dem | der | den # das Semester → des Semesters。
o 这是我同事的电脑。 | Das ist der Computer meines Kollegen. # n-Deklination：des Kollegen。
o 尽管生病，他还是来上班了。 | Trotz seiner Krankheit kam er zur Arbeit. # trotz + Gen。
i Die Zahl ___ Studenten steigt jedes Jahr. | der # 复数 Gen → der。
c Statt ___ Briefes schickte er eine E-Mail. | eines | einem | einen | ein # 阳性 Gen → eines Briefes。
i Das Haus ___ Eltern liegt am Stadtrand. | meiner # 复数 Gen → meiner。
c Am Ende ___ Monats bekomme ich mein Gehalt. | des | dem | der | den # der Monat → des Monats。
m Nominativ ↔ Genitiv | der Mann=des Mannes;die Frau=der Frau;das Kind=des Kindes;die Leute=der Leute #
`);
})();
