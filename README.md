# Grammatik

Deutsche Grammatik B1–B2 lernen — Lernpfad, Lektionen, Wiederholung falscher Antworten, Serie & XP.
Läuft im Browser auf Computer und Handy, offline-fähig (PWA), ohne Build-Schritt.

## Starten

- Direkt: `index.html` doppelklicken (alles außer Offline-Modus funktioniert).
- Lokaler Server (für PWA / Offline):

  ```
  python -m http.server 8767
  ```

  dann <http://localhost:8767> öffnen.
- Handy: Ordner auf einen statischen Host legen (z. B. GitHub Pages) und im Browser „Zum Startbildschirm hinzufügen“.

## Inhalt

Lernpfad nach Goethe-Kursstufen, Ziel: Grammatik auf TestDaF-Niveau TDN 4.

| Kapitel | Thema | Einheiten | Übungen |
|---|---|---|---|
| B1.1 | Grundlagen festigen | 8 | 225 |
| B1.2 | Sätze erweitern | 8 | 220 |
| B2.1 | Argumentieren & vermuten | 9 | 235 |
| B2.2 | Schriftsprache | 8 | 207 |
| C1.1 | Wissenschaftssprache (TestDaF) | 5 | 109 |
| C1.2 | TestDaF-Schreiben | 5 | 107 |

43 Einheiten, 1103 Übungen (Auswahl, Lücke, Satzbau mit Drag & Drop, Paare), ein Abschnittstest pro Kapitel
(15 Fragen, bestanden ab 80 %). Grammatik-Erklärungen auf Chinesisch, Oberfläche Deutsch / Chinesisch.

Wortschatz: 446 Prüfungswörter (Goethe B1/B2, TestDaF), die alle in den Übungssätzen vorkommen. Nach jeder Antwort
erscheinen die Schlüsselwörter mit Bedeutung; die Seite *Wörter* zeigt, welche schon geübt wurden.

## Struktur

```
index.html            App-Shell
css/app.css           Styles (hell/dunkel, Desktop/Tablet/Handy)
js/data/chapters.js   Kapitel und Reihenfolge der Einheiten
js/data/dsl.js        Kompaktformat für Übungen (siehe Kommentar in der Datei)
js/data/*.js          Einheiten: Erklärung (tip) + Übungen (ex); more-*.js ergänzen bestehende Einheiten
js/data/words.js      Prüfungswortschatz (Lemma | 中文 | Niveau | Wortart | Formen)
js/vocab.js           Erkennt Prüfungswörter in den Übungssätzen
js/i18n.js            Oberflächentexte Deutsch / Chinesisch
js/store.js           Fortschritt in localStorage, Leitner-Wiederholung
js/lesson.js          Lektions-Engine
js/app.js             Routing & Ansichten
sw.js                 Offline-Cache (nach Änderungen CACHE-Version erhöhen)
```

## Übungen hinzufügen

Am einfachsten im Kompaktformat, z. B. in `js/data/more-b1.js` (eine Zeile pro Übung):

```
c Satz mit ___. | richtig | falsch | falsch | falsch # Erklärung
i Satz mit ___. | Antwort;andere Antwort | Hinweis # Erklärung
o 中文意思 | Deutscher Satz. | Variante # Erklärung
m Aufgabe | links=rechts;links=rechts # 
```

Fortschritt liegt nur im Browser; unter *Einstellungen → Daten* exportieren/importieren.
