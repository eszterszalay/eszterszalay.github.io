# Szalay Eszter – villamosmérnöki portfólió

Magyar nyelvű, statikus Astro-weboldal távközlési és infokommunikációs projektekhez.

## Helyi futtatás

Node.js 22.12 vagy újabb és pnpm 11 szükséges. A repó gyökérmappájában futtasd:

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd dev --host 127.0.0.1 --port 4321
```

Nyisd meg a [helyi előnézetet](http://127.0.0.1:4321/). A terminálban a Ctrl+C állítja le. Más rendszeren a `pnpm.cmd` helyett `pnpm` használandó.

A `pnpm.cmd build` a `dist/` mappába fordítja a weboldalt. Az elkészült buildet a `pnpm.cmd preview` szolgálja ki helyben.

Ha a böngésző a 4322-es porton megtagadott csatlakozást jelez, indítsd újra az előnézetet a repó gyökérmappájából. Hagyd nyitva a terminált, amíg az oldalt nézed.

```powershell
pnpm.cmd build
pnpm.cmd preview --host 127.0.0.1 --port 4322 --strictPort
```

Az [Orleans-projekt előnézete](http://127.0.0.1:4322/projektek/mobilhalozati-elemzes/) az indítás után nyitható meg.

## Projektleírás készítése Wordben

1. Írd meg vagy frissítsd a projektleírást Wordben. Új dokumentumban a főcímhez a **Cím**, a fejezetekhez a **Címsor 1**, az alfejezetekhez a **Címsor 2** stílus használható. Az ábra alá írd a képaláírást és a forrást. A jó minőségű eredeti ábrát külön fájlként is add át, ha rendelkezésre áll.
2. A `.docx`-et és a nyers ábrákat tedd a `forrasanyagok/<projekt-azonosító>/` mappába, és nevezd meg a Codexnek a frissítendő projektet. A `forrasanyagok/` mappa Gitből ki van zárva. A `public/` könyvtárba csak az oldalra szánt képeket tedd, mert az Astro ezt a könyvtárat a buildbe másolja.
3. A Codex a Wordből származó fejezeteket a `src/content/document-sections/<projekt-azonosító>/` mappában frissíti. A fejezetek sorrendjét az `order` adja. A dokumentum címe és alcíme az első fejezet `documentTitle` és `documentSubtitle` mezőjébe kerül. Az ábrák az érintett fejezet után jelennek meg, ha a galéria `section` mezője a fejezet fájlnevére mutat (a `.md` nélkül).
4. Frissítéskor a Codex ellenőrzi a Word és az előnézet szövegét, a képek helyét, a képaláírásokat és a forrásokat. A projektkártya metaadatai, a galériabeállítások és a kézzel szerkesztett webes szöveg a `src/content/projects/<projekt-azonosító>.md` fájlban kezelhetők. Ezeket a Word-fejezetek frissítése önmagában nem írja felül. A build a korábban átvett tartalmat használja, ezért a Word mentése után kérj külön frissítést a Codextől.

## Új projekt technikai beállítása

1. Hozz létre egy fájlt a `src/content/projects/` mappában, például `uj-projekt.md` néven. Használj kisbetűs, ékezet nélküli, kötőjeles nevet. Ez adja a `/projektek/uj-projekt/` címet és a képmappa nevét.
2. A fájl tetejére másold be az alábbi mintát, és cseréld ki a példaértékeket. Az `order` adja a főoldali sorrendet. A `motif` értéke `fiber`, `map` vagy `plan` lehet. A kártya és a projektoldal automatikusan elkészül. A `summary` a részletes oldal bevezetője és keresőleírása.
3. Hozd létre a `public/media/uj-projekt/` mappát, és ide másold a jóváhagyott képeket, térképeket és diagramokat. A `cover.src`, `image.preview` és `image.full` mezőkbe elég a fájlnevet vagy a projekten belüli almappát és fájlnevet írni. A már meglévő `/media/…` hivatkozások továbbra is használhatók.
4. A `galleries` listához több galéria és galériánként több ábra adható. Egyetlen ábra önálló, nagyítható ábraként jelenik meg. A `source` opcionális. `image` nélkül helyőrző jelenik meg. A `cover` és a `galleries` elhagyható, amíg készülnek a képek.

```markdown
---
title: Új projekt címe
summary: Rövid szakmai bevezető a projektoldalhoz.
status: Projektállapot
technologies: [ArcGIS Pro, Excel]
order: 4
motif: map
cover:
  src: borito.webp
  alt: A borítókép lényegi vizuális tartalma.
galleries:
  - title: Térképek és diagramok
    items:
      - title: Az ábra címe
        caption: Mit mutat az ábra, milyen területen és időszakban?
        source: Az export vagy az ellenőrzött adatforrás megnevezése
        image:
          preview: abra-elonezet.webp
          full: abra-teljes.png
          alt: Az ábra lényegi vizuális információja.
---

## Célkitűzés

A vizsgált kérdés és a projekt hatóköre.

## Saját szerep és módszertan

A saját feladatok, az eszközök és az elemzés lépései.

## Eredmények, következtetések és források

Az ellenőrzött eredmények, a korlátok és a hivatkozások.
```

### ArcGIS-térképek és műszaki ábrák

- Külön fájlt használj előnézetnek és nagyításhoz. Előnézethez megfelelő lehet egy 1000–1400 pixel széles WebP. A teljes képhez a feliratok és a jelmagyarázat mérete alapján válassz exportméretet, és raszteres ábránál használj veszteségmentes PNG-t. Diagramhoz vagy műszaki rajzhoz jóváhagyott SVG is megadható.
- A képre kattintva a nagyított nézet a teljes felbontású fájlt tölti be.
- A teljes exporton 1:1 nézetben ellenőrizd a jelmagyarázatot, a tengelyfeliratokat és a kisebb szövegeket. Ha homályosak, exportáld újra nagyobb felbontással. Az adatértelmezéshez szükséges ábrákat a galériába tedd, ahol a teljes kép és a képaláírás is megjelenik.

### CWDM-projekt

A Word-leírás helye `forrasanyagok/cwdm-meresi-kornyezet/CWDM_projekt.docx`. Az átvett fejezetek a `src/content/document-sections/cwdm-meresi-kornyezet/` mappában vannak. A galériák a `src/content/projects/cwdm-meresi-kornyezet.md` fájlban, a webes képek a `public/media/cwdm-meresi-kornyezet/` mappában találhatók.

A bemutatkozás és az elérhetőségek a `src/pages/index.astro` fájlban szerkeszthetők.

### Orleans megyei mobilhálózati forrásanyagok

A Word-leírás, az Excel-munkafüzet és az eredeti ArcGIS-exportok helye a helyi, Gitből kizárt `forrasanyagok/mobilhalozati-elemzes/` mappa. A képaláírások a `src/content/projects/mobilhalozati-elemzes.md` fájlban, a webes térképek és diagramok a `public/media/mobilhalozati-elemzes/` mappában vannak. A korábbi exportok és képek a forrásmappák `archiv/` almappáiban találhatók.

A kezdőlap képei és a szoftverikonok a `public/media/rolam/` mappába kerülnek. A bemutatkozás eredeti képei és Word-fájlja a `forrasanyagok/rolam/` mappában vannak.

## Későbbi közzététel

A statikus `dist/` könyvtár a GitHub Pagesre feltölthető. A személyes Pages-repó fiókját és címét közzététel előtt ellenőrizni kell. A GitHub Actions munkafolyamat a közzétételi fázisban készül el.
