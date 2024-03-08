---
# https://vitepress.dev/reference/default-theme-home-page
title: Klinikstatus
description: Klinikerns statistikverktyg
layout: doc
---

<style>
gr { color: #3BC851 }
re { color: #C70039 }
ye { color: #FFC300 }
bl { color: #0CDFF2 }
</style>

# Akutläkarens handbok i statistik

## Vad är Klinikstatus

<ye> 
Klinikstatus används som vägledning i den kliniska diagnostiken med fokus på akutarbetet. Syftet är att använda denna databas som underlag för att undvika onödiga undersökningar och prioritera "high yield" undersökningar både för att spara resurser och effektivisera arbetet.  

Här presenteras undersökningar för vanliga sjukdomar man stöter på i det akuta skedet och deras evidensgrad. Den huvudsakliga mätvariabeln är likelyhood ratio (LR). 

Navigeras enklast från listvyn i vänster spalt. 
</ye> 

## Grundläggande statistiklära
::: info <gr> Kortfattad essentiell kunskap i statistik för att förstå nyckelbegrepp och hur de appliceras.</gr>
<gr> Du kommer förstå varför ett likelyhood ratio (LR) på 1 är meningslöst och varför ett LR på 10 eller 0.1 agerar som rule-in eller rule-out undersökningar. </gr>  
:::

1. Sensitivitet och Specificitet
2. Likelyhood ratio (LR)
3. Pre-test probability (PTP)
4. Fagans nomogram
5. Applicering
6. Avslutande tankar

## 1. Sensitivitet och Specificitet

### Sensitivitet
::: info <gr> Beskriver en undersöknings sannolikhet att hitta sjukdom (true positive) utifrån en grupp med sjukdomen. </gr>
:::

Beräknas genom: 
$\frac{true\,positive}{har\,sjukdomen}$

_Exempel_:
> <bl> Sannolikheten att hitta en äkta proximal djup ventrombos (DVT) med ultraljud (UL) är ca 94%. Detta ger undersökningen en sensitivitet på 94%. </bl>


Med UL hittar man alltså 94/100 patienter med sjukdomen DVT. Det betyder också att man i genomsnitt missar 6 patienter med DVT. Dessa 6
beskriver man då som <re> _falskt negativa_ </re>.

### Specificitet
::: info <gr> Beskriver en undersöknings sannolikhet att inte hitta sjukdomen (true negative) utifrån en grupp utan sjukdomen. </gr>
:::

Beräknas genom:
$\frac{true\,negative}{har\,inte\,sjukdomen}$

_Exempel_:
> <bl> Sannolikheten att inte hitta en proximal DVT med UL är också ca 94% hos folk som inte har DVT. Detta ger undersökningen en specifictet på 94%. </bl>

Med UL hittar man alltså inte en proximal DVT på 94/100 patienter som inte har en DVT. Även här misstas 6 patienter för att ha DVT.
Dessa beskrivs då som <re> _falskt positiva_. </re>

### Illustrativ beräkningstabell


|               | Har sjukdomen             | Har inte sjukdomen        |
| ------------- | :-----------:             | :--------------------:    |
| Test positiv  | a (True Positiv)          | b (False Positive)        |
| Test negativ  | c (False Negative)        | d (True Negative)         |


Sensitivitet = $\frac{a}{a+c}$

Specificitet = $\frac{d}{b+d}$


### Hur man ska tänka
För att en undersökning ska tillföra något värde måste den antingen öka eller minska sannolikheten för den sjukdom man undersöker för. 
En bra undersökning har både hög sensitivitet och specifictet. Undersökningen ger då goda chanser att vägleda klinikern både vid positivt och negativt utfall. 


