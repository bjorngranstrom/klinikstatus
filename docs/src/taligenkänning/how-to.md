---

# https://vitepress.dev/reference/default-theme-home-page
title: HOW TO
description: Kort manual med användbara kommandon för Taligenkänning Dragon Medical One DMO
layout: doc
---

# VI SOM BROTTAS MED TALIGENKÄNNING (TIK)

Införandet av <re>COSMIC</re> har sina fördelar men ett synnerligen oklokt beslut var designen av journalmallarna. Dessa innehåller obscena mängder rubriker man ska klicka sig igenom - "<bl>_in the name of informationsstatistik_</bl>". Alla vet att detta är ett mödosamt gissel. <gr>**Men misströsta ej!**</gr> Med hjälp av TIK kan vi enkelgöra denna process genom steg-för-steg kommandon AKA "macron". Detta kräver bara lite grundläggande TIK-ologi för att programmera och när man väl kommit igång finns det inget slut.

Artikeln syftar således till att ge dig dessa grundläggande kunskaper på ett smidigt och begripligt sett. 

Vänder sig till er som använder Nuance's Dragon Medical One.

## PRAKTISK APPLICERING

### Skapande och navigering i journalmall
<br>

#### Effektiv och enkel navigering i akutens journalmall

<div style="max-width: 800px; margin-bottom: 2rem;">
  <video controls style="width: 100%; aspect-ratio: 16/9; object-fit: contain;">
    <source src="./tikexempel.mp4" type="video/mp4">
  </video>
</div>

Först skapar jag akutens besöksanteckning med enbart röstkommandot "akutanteckning". Den fyller i obligatorisk term "akutbesök". Därefter navigerar jag enkelt i journalmallen med skräddarsydda röstkommandon jag programmerat som steg-för-steg i TIK. Under "åtgärd" och "planering" har jag sagt åt TIK att skriva text.

### Att beställa undersökningar

<br>

#### Beställa röntgen

<div style="max-width: 800px; margin-bottom: 2rem;">
  <video controls style="width: 100%; aspect-ratio: 16/9; object-fit: contain;">
    <source src="./röntgen-exempel.mp4" type="video/mp4">
  </video>
</div>

I detta exempel beställer jag en DT buk med kontrast enbart genom röstkommandot "DT buk med kontrast". TIK väljer rätt undersökning, förfyller frågeställningar och ser till att markören hamnar under "Anamnes". 

## NAVIGERA I HOPPLÖSA JOURNALMALLAR

Nu när vi förstår värdet i att kunna TIK:ologi skall vi bära den som svärdet som dräper odjuret COSMIC-Mallarus Rex.

### Hotkeys

Först måste vi hitta COSMICS lathund för deras kortkommandon AKA hotkeys. Videon nedan visar hur du går tillväga för detta. Tryck på F1, skriv in "kommandon" i sökfältet, och öppna COSMICS kommandomanual.

#### Hur man hittar COSMICS lathund för kortkommandon
<div style="max-width: 800px; margin-bottom: 2rem;">
  <video controls style="width: 100%; aspect-ratio: 16/9; object-fit: contain;">
    <source src="./kortkommandomanual.mp4" type="video/mp4">
  </video>
</div>

#### Användbara hotkeys

| HOTKEY                | ACTION                                     |
|-----------------------|--------------------------------------------|
| CTRL + N              | Ny anteckning                              |
| ALT + HOME            | Till början av anteckning                  |
| ALT + END             | Till slutet av anteckning                  |
| ALT + P               | Spara anteckning                           |
| ALT + S               | Spara och stäng anteckning                 |
| CTRL + SHIFT + N      | Skapar nytt diktat                         |
| ALT + SHIFT + BOKSTAV | Till första sökordet som matchar bokstaven |

## SKAPA STEG-FÖR-STEG KOMMANDON

### Navigering i Journalmallar

Den viktigste hotkey:n är ALT + SHIFT + BOKSTAV som vi kommer använda för att hoppa runt i journalmallen. 

#### Hur ALT + SHIFT + BOKSTAV funkar
<div style="max-width: 800px; margin-bottom: 2rem;">
  <video controls style="width: 100%; aspect-ratio: 16/9; object-fit: contain;">
    <source src="./navigering-mall.mp4" type="video/mp4">
  </video>
</div>

Ett problem som uppstår är att macro:t körs från den plats där markören står. Det vill säga, om du ställt in ditt macro att köras från toppen av dokumentet från första sökordet kommer den glädjeligen ta dig till rubriken "aktuellt" genom att trycka SHIFT + ALT + A två gånger. Problemet är om du står i bedömningsrutan och vill hoppa tillbaks till aktuellt. Detta kan vi kringgå genom att se till att macro:t alltid ser till att vi börjar från toppen av dokumentet när den körs. Detta gör vi genom kommando ALT + HOME.

Nu har vi egentligen redskapen för att skapa ett macro vi kan bruka för enkel och effektiv navigering i journalmallar. Så här ser mitt steg-för-steg kommando ut för att hoppa till rubriken "aktuellt":

#### Steg-för-steg exempel för att hoppa till rubrik "Aktuellt"
<div style="max-width: 800px; margin-bottom: 2rem;">
  <video controls style="width: 100%; aspect-ratio: 16/9; object-fit: contain;">
    <source src="./skapa-macro.mp4" type="video/mp4">
  </video>
</div>

#### <re>Här visas mitt mest avancerade kommando vad gäller journalnavigering.</re>

<div style="max-width: 800px; margin-bottom: 2rem;">
  <video controls style="width: 100%; aspect-ratio: 16/9; object-fit: contain;">
    <source src="./avanceratmacro.mp4" type="video/mp4">
  </video>
</div>