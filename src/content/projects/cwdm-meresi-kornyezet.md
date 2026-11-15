---
title: CWDM mérési környezet megvalósítása
summary: Három csomópontból álló optikai mérési környezet fizikai kiépítése, menedzsmentje és tesztelése három hullámhosszon.
status: "Szakdolgozat | TDK különdíj"
technologies: [CWDM, Optikai távközlés, WDM-technológia, Hálózatépítés, Optikai mérések, Hálózatmenedzsment]
order: 1
motif: fiber
cover:
  src: rack-elonezet.webp
  alt: A CWDM mérési környezet optikai kábelezése és berendezései a rack szekrényben.
  cardOnly: true
galleries:
  - title: A megvalósítás lépései
    section: kialakitas
    fitViewport: true
    items:
      - title: 1. Tervezés
        legend:
          introduction: "A rendszer felépítése során 3 féle útvonalat kell beállítani:"
          items:
            - { color: yellow, label: Belső topológia }
            - { color: blue, label: Peer (vonali) topológia }
            - { color: black, label: Kliens topológia }
        caption: |-
          CWDM_1, CWDM_2, CWDM_3: csomópontok
          C1, C2, C3: Kliens (Client) portok
          L1, L2, L3: Vonali (Line) portok
          TP1, TP2, TP3: az adott csomópontban lévő transzponder kártyák (TPQMR)
          MUX jelölések: Optikai multiplexer és demultiplexer modulok. A ponttal elválasztott számok a csomópontot és az adott modul sorszámát jelölik
        image:
          preview: 1_Tervezés.png
          full: 1_Tervezés.png
          matchHeight: true
          alt: Három CWDM-csomópontot gyűrűbe kötő kapcsolási rajz.
      - title: 2. Menedzsmenthálózat kialakítása
        caption: A három TM-301 berendezést külön Ethernet-interfészen keresztül csatlakoztattam a számítógéphez. Minden interfészhez a hozzá tartozó berendezéssel azonos alhálózatból állítottam be IP-címet. Így közvetlenül elértem a kezelőfelületeket, ahol beállítottam a topológiákat, majd leolvastam a méréshez szükséges optikai teljesítményszinteket.
        image:
          preview: menedzsmenthalozat-attekintes.png
          full: menedzsmenthalozat-attekintes.png
          alt: A TM-301 berendezések menedzsmentkábelezése és a három CWDM-kapcsolat a Windowsban.
      - title: 3. Fizikai hálózatépítés
        caption: A terv alapján a három csomópontot optikai kábelekkel kötöttem össze a laborban. A vonali összeköttetésekbe csillapítótagokat iktattam, hogy a rackben egymáshoz közel lévő csomópontok között is szimulálni lehessen a valós hálózati szakaszcsillapítást.
        image:
          preview: 2_Fizikai hálózatépítés.jpg
          full: 2_Fizikai hálózatépítés.jpg
          matchHeight: true
          alt: Optikai kábelekkel összekötött berendezések egy rack szekrényben.
      - title: 4. Szoftveres konfigurálás
        compactCaption: true
        caption: A berendezés beépített csomópontkezelő felületén (ENM) konfiguráltam a belső, a vonali (peer) és a kliens topológiákat.
        image:
          preview: szoftveres-konfiguralas-attekintes.png
          full: szoftveres-konfiguralas-attekintes.png
          alt: Balra az ENM kezelőfelülete, jobbra egymás alatt a vonali topológia két képernyőképe.
      - title: 5. Működés ellenőrzése
        compactCaption: true
        previewWidth: 529
        caption: A végpontok közötti kapcsolatot pingtesztekkel ellenőriztem. A képen látható tesztben mind a négy csomagra érkezett válasz, a csomagvesztés 0% volt.
        image:
          preview: 5_Működés ellenőrzése.png
          full: 5_Működés ellenőrzése.png
          alt: Ping teszt négy válasszal és nulla százalék csomagvesztéssel.
  - title: Mérési ábra
    section: meresek
    items:
      - title: 1590 nm-es optikai csatorna
        image:
          preview: 1590nm-meresi-eredmenyek-sotet.png
          full: 1590nm-meresi-eredmenyek-sotet.png
          alt: Az 1590 nm-es csatorna jelszintjeit, csillapításszámítását és kapcsolatellenőrzését összefoglaló ábra.
---
