---
title: Mobilhálózati teljesítmény vizsgálata
summary: 2022-es vermonti mobilhálózati mérések térinformatikai és statisztikai elemzése ArcGIS Pro és Excel használatával.
status: Térinformatikai és statisztikai elemzés
technologies: [Mobilhálózatok, Térinformatika, Adatelemzés, Hálózati teljesítmény]
software: [arcgis-pro, excel]
order: 2
motif: map
cover:
  src: letoltesi-terkep-layout-preview.svg
  alt: Orleans megye összesített letöltésisebesség-térképe.
  cardOnly: true
galleries:
  - title: Hanghívási sikeresség szolgáltatónként
    section: hanghivasi-eredmenyek
    fitViewport: true
    uniformPreviews: true
    items:
      - title: AT&T · Orleans megye, 2022
        caption: "Az AT&T 481 érvényes, mért cellájából 276 ért el 80–100%-os sikerességet. A hat szolgáltató közül itt volt a legtöbb ilyen cella."
        image: { preview: voice_att-layout-preview.svg, full: voice_att-layout.svg, alt: Az AT&T hanghívási sikerességének térképe a közös jelmagyarázattal. }
      - title: FirstNet · Orleans megye, 2022
        caption: "A FirstNet 481 érvényes, mért cellájából 102 ért el 80–100%-os sikerességet, 56 cellában pedig egyetlen hívás sem sikerült."
        image: { preview: voice_firstnet-layout-preview.svg, full: voice_firstnet-layout.svg, alt: A FirstNet hanghívási sikerességének térképe. }
      - title: T-Mobile · Orleans megye, 2022
        caption: "A T-Mobile 481 érvényes, mért cellájából 216 ért el 80–100%-os sikerességet. A hat szolgáltató közül itt volt a legkevesebb 0%-os cella (54 db)."
        image: { preview: voice_tmobile-layout-preview.svg, full: voice_tmobile-layout.svg, alt: A T-Mobile hanghívási sikerességének térképe. }
      - title: US Cellular · Orleans megye, 2022
        caption: "A US Cellular 481 érvényes, mért cellájából 195 ért el 80–100%-os sikerességet. Emellett 128 cellában egyetlen hívás sem sikerült."
        image: { preview: voice_uscc-layout-preview.svg, full: voice_uscc-layout.svg, alt: A US Cellular hanghívási sikerességének térképe. }
      - title: Verizon · Orleans megye, 2022
        caption: "A Verizonnál 480 érvényes, mért cellából 201-ben egyetlen hívás sem sikerült, és csak 22 cella ért el 80–100%-os sikerességet. A hat szolgáltató közül itt volt a legtöbb 0%-os cella."
        image: { preview: voice_verizon-layout-preview.svg, full: voice_verizon-layout.svg, alt: A Verizon hanghívási sikerességének térképe. }
      - title: VTel · Orleans megye, 2022
        caption: "A VTel 481 érvényes, mért cellájából 221 ért el 80–100%-os sikerességet, 73 cellában pedig egyetlen hívás sem sikerült."
        image: { preview: voice_vtel-layout-preview.svg, full: voice_vtel-layout.svg, alt: A VTel hanghívási sikerességének térképe. }
  - title: A Verizon-vizsgálat diagramjai
    section: verizon
    desktopHeight: 500
    items:
      - title: Összesített hanghívási sikeresség szolgáltatónként
        caption: "Az összes sikeres teszt és az összes teszt hányadosa százalékban. A Verizon összesített aránya a legalacsonyabb, mindössze 29,81%."
        image: { preview: hanghivas-osszesitett.svg, full: hanghivas-osszesitett.svg, alt: Hat szolgáltató összesített hanghívási sikeressége százalékban. }
      - title: LTE-jelerősség és hanghívási sikeresség szolgáltatónként
        caption: "A szolgáltatónként számított Pearson-korreláció a jelerősség és a hanghívási sikeresség lineáris kapcsolatát mutatják. A Verizon esetében a korreláció −0,049 volt, ami közel nulla lineáris kapcsolatot jelez a vizsgált adatokban. Az érvényes jelerősség nélküli cellák korlátozzák az értelmezést."
        image: { preview: hanghivas-rsrp.svg, full: hanghivas-rsrp.svg, alt: A hanghívási sikeresség és az LTE-jelerősség Pearson-korrelációja hat szolgáltatónál. }
      - title: Verizon hanghívási sikeressége tesztszám-kategóriánként
        caption: "A diagram azt mutatja hogyan alakul a Verizon sikeressége a különböző tesztszámú H3-cellákban. A legalább 20 tesztet tartalmazó cellákban is csak 39,85%-os volt a sikeresség."
        image: { preview: verizon-tesztszam.svg, full: verizon-tesztszam.svg, alt: Verizon sikeresség négy tesztszám-kategóriában. }
      - title: AT&T és Verizon hanghívási sikeressége közös H3-cellákban
        caption: "Az összehasonlítás 306 olyan közös H3-cellából történt, ahol mindkét szolgáltatónál legalább öt hanghívási teszt történt. Az AT&T összesített sikeressége 67,37%, a Verizoné 30,82% volt."
        image: { preview: att-verizon.svg, full: att-verizon.svg, alt: Az AT&T és a Verizon összesített sikeressége azonos H3-cellákban. }
  - title: Sebességtérkép és szolgáltatói diagramok
    section: mobilinternet
    desktopHeight: 570
    items:
      - title: Átlagos letöltési sebesség Orleans megye H3-celláiban
        caption: "A térkép a 2022-es SpeedTest-adatok alapján számított átlagos letöltési sebesség területi eloszlását mutatja. A szolgáltatók eredményei együtt jelennek meg. A jelmagyarázat öt sebességkategóriát különböztet meg, a kis térkép pedig Orleans megye helyét jelöli."
        image: { preview: letoltesi-terkep-layout-preview.svg, full: letoltesi-terkep-layout.svg, alt: Orleans megye átlagos letöltési sebessége H3-cellánként, öt kategóriával, jelmagyarázattal és helymeghatározó térképpel. }
      - title: Letöltési sebesség szolgáltatónként
        caption: "A diagram szolgáltatónként az érvényes H3-cellák átlagos letöltési sebességeinek átlagát és mediánját mutatja. Az AT&T átlaga 48,92 Mbps, a US Cellularé 1,90 Mbps."
        image: { preview: letoltes.svg, full: letoltes.svg, alt: Hat szolgáltató H3-celláinak átlagos és medián letöltési sebessége. }
      - title: Feltöltési sebesség szolgáltatónként
        caption: "A szolgáltatók feltöltési sebességének átlaga és mediánja az érvényes H3-cellák alapján. A US Cellular feltöltési átlaga 5,75 Mbps, letöltésben ő a legalacsonyabb, míg feltöltésben a legjobb. Az érvényes feltöltési adatok száma eltérhet a letöltési adatok számától."
        image: { preview: feltoltes.svg, full: feltoltes.svg, alt: Hat szolgáltató H3-celláinak átlagos és medián feltöltési sebessége. }
  - title: Pearson-korreláció szolgáltatónként
    section: lte-es-letoltes
    items:
      - title: LTE-RSRP és letöltési sebesség Pearson-korrelációja
        caption: "A korrelációt szolgáltatónként, párosított H3-cellákból számítottam. A T-Mobile korrelációja +0,433, a US Cellularé mindössze +0,054 lett. A jelerősség és a letöltési sebesség között több szolgáltatónál pozitív, de nem különösebben erős kapcsolatot találtam."
        image: { preview: letoltes-rsrp.svg, full: letoltes-rsrp.svg, alt: Az LTE-RSRP és a letöltési sebesség Pearson-korrelációja hat szolgáltatónál. }
---
