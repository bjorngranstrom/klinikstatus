---
title: 2. Handläggning
description: Översikt och handläggning av traumatiska sår, klassificering, behandling och tips för kliniker.
layout: doc
next: {
    text: '3. Antibiotika',
    link: 'sarvard/antibiotika'
}
---

# HANDLÄGGNING PÅ AKUTEN


## ANAMNES 

::: info För att kunna prognosticera sårets läkningsförmåga och infektionsrisken behöver man ta en god sjukdomshistoria. Detta kan vara avgörande för vilka åtgärder man väljer.
:::  

###  Tidigare / nuvarande sjukdomar / aktuellt 

- Perifer kärlsjukdom (ffa diabetes och claudicatio)
- Immunosupprimerad
- Främmande föremål
- Tetanusstatus

###  Riskfaktorer som ökar infektionsrisk 

- Efter 6 - 12 timmar har man traditionellt betraktat ett sår som klass 4. Detta är omdebatterat idag då sårrengöring blivit så mycket bättre.
- Krosskada: Ofta rejält skadad vävnad utöver huden. Minskat blodflöde till sårkanterna. Ökar bakteriebördan upp till 100 gånger.
- \> 5 cm lång sårskada
- Djup sårskada (> 6 mm; man kan se subcutis)
- \> 65 år
- Höghastighetsprojektil
- Kontaminering: Saliv, jord, feces.
- Punktionsskada (bett, tagg)

::: warning VIKTIGA BEAKTANDEN
- Primärsutur ska ske inom 8 - 12h. Data pekar dock på att timingen inte är lika viktig som dom andra riskfaktorerna eftersom rengöring och debridering blivit så pass bra. UpToDate tycker det går bra upp till 18 timmar.
- Fina och rena ansiktssår kan primärförslutas > 24h efter skadan
:::

###  Sårlokalisation 

Sårlokalisation är en av dom viktigaste faktorerna vid bedömning av infektionsrisk. Lår och framförallt underben har högst risk då kroniska sjukdomar ofta skadar kärl och hudstrukturen kring ankel och underben. Dåliga förutsättningar för sårläkning. Detta gör det särskilt riskabelt om kontamination föreligger.

| Lokalisation               | Infektionsrisk efter suturering |
|:---------------------------|:-------------------------------:|
| Ansikte + skalp            |              < 4%               |
| Torso + andra extremiteter |              > 10%              |
| Lår/underben               |      <re><b>> 20%</b></re>      |

Risk för infektion: Underben > lår > armar > fötter > bröst > rygg > ansikte > skalp

::: tip VÅGMÄSTARE
Det är den sammanvägda bedömningen med alla dessa faktorer som ska ligga till grund för klinikern om såret ska förslutas och om antibiotika är aktuellt.
:::

## STATUS & RADIOLOGI

::: info ATT FÖRSTÅ SÅRET
Ibland kan det vara klurigt att förstå såret och se den för vad den är; framförallt om den blöder och ändrar skepnad hela tiden. Hemostas kan därför blottgöra och förenkla såråskådningen. 

På en sårskadad extremitet kan en blodtrycksmanschett  användas med fördel proximalt om såret samtidigt som man höjer extremiteten 1-2 minuter. Manschetten kan vara på 2 timmar om man så önskar, men sannolikt så kommer patienten vara i så pass mycket smärta att det är självbegränsande.
::: 

::: tip FRÄMMANDE FÖREMÅL
Om man misstänker att ett föremål tagit sig in på djupet men man kan inte se eller palpera den så kan man med fördel nyttja olika typer av radiologi. Valet av bildmodalitet blir beroende på vad för objekt man misstänker. 
- <ye><b>SLÄTRÖNTGEN</b></ye> 
    <br> Metall 99%; Glas 75%;  Trä 7%.</br>
- <ye><b>SKIKTRÖNTGEN, CT </b></ye>
    <br>Ser alla typer av främmande föremål vilket gör den golden standard. De uppenbara negativa aspekterna är strålning och kostnad.</br>
- <ye><b>ULTRALJUD</b></ye>
    <br>Bra men kan ibland ge dåligt resultat pga små föremål, luft, ödem, pus, blod, kalcifieringar.</br>
:::

## HANDLÄGGNING

::: info Nu kommer vi till den viktigaste delen i artikeln, nämligen hur vi stegvis handlägger ett sår.
:::
### Översikt

```mermaid
flowchart TD
    A["Suturkrävande sår"] --> B["Lokalanestesi"]
    B --> C["Debridering, rengöring, såradaptation"]
    C --> D["Suturering"]
    D --> E["Bra såradaptering?"]
    E -->|Ja| Bra_Såradaptation["Omläggning"]
    E -->|Nej| Dålig_Såradaptation["Överväg sätta om stygn"]
    Dålig_Såradaptation --> Bra_Såradaptation
    
```

### Lokalanestesi

#### <br>Val av lokalanestetikum</br>
::: info SÅRSKADOR PÅ AKUTEN
MEPIVAKAIN (**Carbocain®**)  
LIDOCAIN (**Xylocain®**)  
:::

| Typ        | Anslagstid                 | Duration                                                  | Rimlig dos                                                                                 |
|:-----------|:---------------------------|:----------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| Mepivakain | <ul><li>Sekunder</li></ul> | <ul><li>1,5 - 4 h</li></ul>                               | <ul><li>1-20 ml (10 mg/ml)</li><li>5 mg/kg (maxdos)</li></ul>                              |
| Lidokain   | <ul><li>Sekunder</li></ul> | <ul><li>20-60 minuter</li><li>2-6 h (adrenalin)</li></ul> | <ul><li> 5-40 ml (10 mg/ml)</li><li>4 mg/kg (maxdos)</li><li>7 mg/kg (adrenalin)</li></ul> |

::: details VARFÖR MEPIVAKAIN > LIDOKAIN
* Liknande anslagstid
* Längre duration
* Samma potens
* Mindre toxicitet
* Ej beroende av adrenalin i lika hög grad
:::

::: tip BUFFRA
Carbocain är löst i en låg pH-lösning (pH 4,5 - 6). Agerar antimikrobiellt. Detta betyder också att det gör extra ont vid injektion. Man kan tillsätta 1-2 ml 0,6 M Natriumbikarbonat till 10 ml carbocain.
:::
::: danger ADRENALIN
Fördröjer läkningsperioden. Ökar infektionsrisk. Om högrisksår med omfattande vävnadsskada: överväg avstå adrenalin.
:::

#### <br>Allergi</br>

::: info 2 familjer inom lokalanestesi
* Amider (Lidokain, Mepivakain, Bupivakain)  
* Estrar (Prokain, Tetrakain, Benzokain)
:::

::: warning KORSREAGERAR INTE
Vid osäkerhet om allergi, injicera 0,1 ml och utvärdera efter 30min
:::

#### <br>Injektionsteknik</br>

::: details Skolans misslyckande
Av någon bisarr orsak missade jag PM:et där det skall ha framgått att lokalanestesin INTE ska infiltreras i epidermis. Tyckte alltid det var lite märkligt att jag ofta jobbade mot så djävulskt mycket motstånd vid injektionsmomentet. Rent anatomiskt är detta mycket enkelt att förklara. Som beskrivet i denna artikels första del [Anatomi](#anatomi), finner vi sensoriska nervstruktur i dermis/subcutis och INTE i epidermis. Av mycket logiska skäl innebär detta givetvis att vi skall infiltrera djupa delen av dermis (mindre spridning) alternativt ytliga delen av subcutis (större spridning).  
:::

Ett bra nålval som har ett balanserat injektionsflöde (smärta kontra hastighet) är en 23 Gauge nål. I svenska termer motsvarar detta en blå nål. .

När vi har en sårskada framför oss finns det två tillvägagångssätt. Antingen betraktas såret tillräkligt rent för att vi ska kunna injicera direkt i sårkanterna (förslagsvis ytliga delen av subcutis). Detta kommer vara majoriteten av sår och är mindre smärtsamt. I annat fall kan såret vara så skitigt att man kan riskera dra med sig smuts in i vävnaden. Detta vill vi absolut inte göra eftersom vi i princip gödslar med potentiellt infektionsmaterial.

Om du sticker perkutant (via huden), se till att denna är rengjord, förslagsvis med tvål och vatten. Om du är lite ångestladdad kan man även, MED FÖRSIKTIGTHET, använda klorhexidin på frisk hud. Klorhexidin skadar öppna sårytor och förlänger läkning. Sen gör det sinnessjukt ont för patienten

En generellt bra teknik är att man sticker in hela vägen längst med sårkanten tills man når basen av nålen. Därefter aspirerar man, backar långsamt, samtidigt som man injicerar lokalanestesi. Djupet bör vara ungefär 5 mm för att adekvat nå rätt del av dermis/subcutis.

#### <br>Kort om finger-tåblockad och adrenalin</br>

::: info Sannolikt inte farlig
Tes: Vasokonstriktion av endarterioler -> ischemi  
Case studies från handkirurgi: Säkert med försiktig monitorering. Reverseras med lokalinjektion 0,5 - 2 mg subkutant phentolamin alternativt topikal nitroglycerin.

Om det är svårt att ha blodfritt arbetsfält kan man överväga att tornikera fingret/tån på dess bas med exempelvis ett bandage.
:::

### Sårhantering

::: info Efter man har framgångsrikt välsignat området med lokal analgesi kan sårtvätt börja. Plåga inte patienten i onödan.
:::

#### <br>Debridering och sårtvätt</br>

::: info DEBRIDERING
Debridering är i särklass ett av dom viktigaste momenten i sårvård. Om kroppsfrämmande föremål och partiklar missas i sår finns en skälig risk att ingen adekvat läkning sker samtidigt som infektionsrisken ökar dramatiskt. Utöver detta kan sårläkning ske på ett ofördelaktigt sätt vilket förändrar anatomin på ett estetiskt eller funktionellt olämpligt vis. 
:::

::: tip SÅRTVÄTT
Efter man plockat bort större och uppenbara föroreningar kommer nästa viktiga steg, vilket är att man tvättar rent såret. Här kan man med fördel använda ljummet kranvatten blandat med tvål. Effektmässigt är kranvatten jämförbart med koksalt. Kranvatten är i princip gratis och lättillgängligt. Koksalt kan reserveras till kirurgiskt sterila sår; sårskador på akuten betraktas redan som kontaminerade. 

Om man inte fysiskt skrubbar i såret ska ett spoltryck på 7 Psi uppnås, detta för att säkerställa att skräp och mikroorganismer sköljs bort utan att skada vävnaden ytterliggare. Ett enkelt sätt att säkerställa att man spolar rätt är att ansluta en 30 mL spruta med en 18G nål (rosa pvk eller röd uppdragningskanyl). Här rekommenderar jag att man använder PVK:n så man undviker skärande våld.
:::

::: warning HÅR
Hår är något av ett gissel vad gäller sårskador. Hamnar i såret, är i vägen när man suturerar, och gör det onödigt svårt. 

⭐ <gr>BÄST:</gr> Trimmer/sax.

OKEJ: Vaselin/oljig substans på sårkant = agerar hårprodukt.

🔴 <re>DÅLIG:</re> Rakhyvel. Skadar hårfolliklars infundibulum vilket skapar enkel bakterieacess. Infektionsrisk ökar 9-faldigt.
:::

### Sårförslutning

#### <br>Primärförslutning</br> 

- Ej infekterat  
- Tid < 12-18 h (rena ansiktssår upp till 48h)

#### Fördröjd primärförslutning

```mermaid
flowchart TD
    A["Sår ⬆️ infektionsrisk"] --> B["Fördröjd primärförslutning"]
    B --> C["
- Debridering<br>
- Rengöring"]
    C --> D["
- Lämnas öppen
- Daglig spolning
- Omläggningar"]
    D --> |3-5 dagar| E["Primärförslutning"]  
```
::: info Bra att veta
Samma läkningstid men dramatiskt reducerad infektionsrisk. Om extremitet, omlägges med skena. Oklart huruvida packning är fördelaktigt eller ej. Orsakar mer smärta utan uppenbar vinst. Återbesök 24h för sårkontroll och omläggningsbyte. 
:::

::: danger ANTIBIOTIKA GES INTE TILL DESSA SÅR
:::

### Suturtyper

Vi använder i första hand syntetiska suturer eftersom dom är till sin yta glatt (låg friktion) men har också som regel mycket låg vävnadsreaktivitet. Detta gör dem lätta att knyta men lite svårare att hantera eftersom de gärna vill tillbaks till sin ursprungsform - "suture memory". Det är viktigt man knyter med god teknik för att de inte ska gå upp.

::: details ETHILON
- Nylon (polyamide)
- Monofilament
- Icke-absorberbar
- Billig och i särklass den vanligaste suturen vi använder på akuten.
:::

::: details PROLENE
- Prolene (polypropylene) 
- Betraktas som den förfinade Ethilonsuturen
- Mer slitstark, håller sin form, och lämpar sig för långvarig användning in vivo
- Sällan indicerad på akuten
- Dyrare per sutur
:::

::: details VICRYL
- Polyglactin (vicryl)
- Flätad multifilament -> Hög draghållfasthet
- Svagt "suture memory"
- 30% svagare efter 2 veckor; 50% svagare efter 3 veckor; 75% svagare efter 4 veckor; absorberad efter 2 månader
:::

### Suturering

Här inkluderas de vanligaste och mest användbara sårförslutningsverktygen på en akutmottagning.

#### Suturer

::: warning Surgeon's knot
Samtliga suturer låses med 2-1-1 teknik. Första vändningen bestämmer suturens styrka. 2 slag för att övervinna "suture memory". Andra låser knuten. Tredje för säkerhetsmarginal. Demonstrationsvideos på samtliga suturer.
:::

::: details Enkelsutur
![enkelsutur](enkelsutur1.gif)
_Lämpar sig till i princip alla sår. Du kommer använda denna sutur i > 90% av såren du stöter på._
:::

::: details Stående madrass
![ståendemadrass](ståendemadrass.gif)
_Vid djupare sår där resorberbartråd inte behövs._
:::

::: details Liggande madrass
![liggandemadrass](liggandemadrass.gif)
_Vid sår där man vill sprida ut suturtensionen för att undvika att man drar igenom svag och skör hud. Lämpar sig bra för V-formade sår._
:::

::: details Fortlöpande utan låsning
![fortlöpande](fortlöpande.gif)
_Kan används för raka lacerationer med låg infektionsrisk. Sparar tid. Nackdel är att man måste klippa bort hela tråden vid minsta problem som kräver sårrevision._
:::

::: details Y-sår
![cornerstitchy](cornerstitchy.gif)
_Corner stitch._
:::

::: details V-sår                           
![cornerstitchv](cornerstitchv.gif)
_Corner stitch._
:::

::: details V-sår med liggande madrass
![cornerstitch2](vshape.gif)
_Liggande madrass istället för corner stitch._
:::


::: info STAPLING
Fungerar bra på fina och hyfsat raka lacerationer. Tidsvinst och billigare. Lägre infektionsrisk.
:::

::: tip PRAKTISK PATIENTINFORMATION SUTUR
- Duscha går bra
- Bada inte -> ökar risk för infektion
- Skrubba inte 
- Suturer tas bort hos distriktssköterska, sårlokalisation avgör tid
- Informera om infektion
:::

#### Suturtabell

| Lokal                  | Storlek  | Längd (dagar) |
|:-----------------------|:---------|:-------------:|
| Ansikte                | 4-0, 5-0 |      5-7      |
| Huvud, skalp           | 3-0      |     7-10      |
| Thorax, buk, övre extr | 3-0, 4-0 |     10-12     |
| Rygg, nedre extr       | 3-0, 4-0 |     14-17     |

#### Limning

::: details DermaFlex
Låg tröskel för användning på barn. Sannolikt underanvänt på akuten. Lämpar sig på följande:
- < 6 cm sår
- Sår med god hemostas, limmet fäster annars inte
- Gärna inte djupare än 1 cm
- Sårkanterna måste ha låg spänning, annars hög risk för att limmet släpper under läkning
- Låg dynamisk plats, ie INTE ÖVER LEDER, händer
- Stelnar efter 95 sekunder
- Försvinner efter 7 dagar
- LIM + SteriStrip är en kombination guld värd. Slitningssår, exempelvis hos äldre med tunn kortisonbehandlad hud så kan detta vara ett mycket bra alternativ.
:::

::: tip PRAKTISK PATIENTINFORMATION LIM
- Duscha går bra
- Bada inte -> ökar risk för infektion och kan lösgöra limmet
- Skrubba inte -> risk för att mekaniskt skrubba bort limmet
- Försvinner av sig självt efter 7 dagar
- Informera om infektion
:::


### OMLÄGGNING

Med tanke på att vi får nästan noll utbildning vad gäller såromläggning utgör detta alltför ofta ett problem när omvårdnadspersonal frågar "experten" vad för typ av förband som ska användas för respektive sår. Dessa förband finns tillgängliga på akuten. Kortfattade videodemonstrationer.

::: tip PRINCIPER
Skapa optimal sårläkningsmiljö -> värna om makrofager och fibroblaster
- Omläggning ska hålla såret fuktigt, goda förutsättningar för epitelialisering. Ett torrt sår bildar ett hårt och tjockt callus med signifikant minskad epitelialisering.
- Vid vätskande sår och omläggning som "fångar" trans/exsudat uppstår maceration som hämmar sårläkning och ökar infektionsrisk. Hornlagret blir överhydrerat, svullet, och försvagat rent strukturellt -> Dålig såradaptation. Detta förlänger sårläkning, ökar smärtan, och förstorar såret.
- Behöver vara permeabel för gas då O2 är essentiel för epitelialisering 
:::

::: details Sårtejp "SteriStrip" 
Vävnadsstödjande. Funkar till dom flesta sårskadorna. Kan utgöra primärbehandling hos barn och äldre.
![steristrip](steristrip.gif)
:::

::: details Lättabsorberande vattentätt plåster
Standardförband. Lämpar sig till majoriteten av sårskador. Ej adekvat vid ordentligt vätskande sår. Fångar vätska och orsakar maceration.
![vattentättplåster](vattentättplåster.gif)
:::

::: details Absorberande förband
Används på sår som förväntas vätska större volymer som exempelvis:
- Venösa bensår
- Diabetesrelaterade bensår
- Brännskador, delhudengagemang
- Sår vid lymfödem

Viktigt att undvika maceration.
![absorberandeförband](absorberandeförband.gif)
:::

::: details Silicone would contact layer "Sipro"
Används på större sårytor med skör hud där förbandet riskerar att torka in i såret. Detta gelliknande förband läggs som en skyddande barriär ovanpå såret varvid förbandet läggs ovanpå. Transporterar exusdat effektivt till förbandet. Kan vara på så länge den släpper igenom vätska
![sipro](sipro.gif)
:::


#### Specialförband
::: details Gel fibre dressing "Exufiber"
Gelbildande förband som lämpar sig till kraftigt vätskande sår som typiskt ses vid diabetes, tryck, och kirurgiska sår. Vid vätskekontakt omvandlas förbandet till en gel som agerar som en inkapslande vätskebarriär. Passar till djupa sårhålor.
![exufiber](exufiber.gif)
:::


::: details Vätsketransporterande "Mepilex transfer" 
Transporterar bort stor mängd vätska till täckförbandet. Förhindrar maceration.
![mepilextransfer](mepilextransfer.gif)
:::

