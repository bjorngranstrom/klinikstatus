---
title: Grundläggande statistiklära
description: Viktig kunskap om medicinsk statistik
layout: doc
---


# Grundläggande medicinsk statistik

::: info <gr> Kortfattad essentiell kunskap i statistik för att förstå nyckelbegrepp och hur de appliceras.</gr>
<gr> Du kommer förstå varför ett likelyhood ratio (LR) på 1 är meningslöst och varför ett LR på 10 eller 0.1 agerar som rule-in eller rule-out undersökningar. </gr>  
:::

[[toc]]

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

::: info Bra eller inte?
|       Värde   |             | 
| ------------- | :-----------:                      | 
| 0.8-0.89 (80-89%)          | Acceptabelt             | 
| 0.9-1 (90-100%)            | Bra till mycket bra        | 
:::

> <bl> For a test to be useful, sensitivity+specificity should be at least 1.5 (halfway between 1, which is useless, and 2, which is perfect). </bl>

För att en undersökning ska tillföra något värde måste den antingen öka eller minska sannolikheten för den sjukdom man undersöker för. 
En bra undersökning har både hög sensitivitet och specifictet. Undersökningen ger då goda chanser att vägleda klinikern både vid positivt och negativt utfall. 

## 2. Positive/negative predictive value (PPV/NPV) 

## 3. Likelyhood ratio (LR)

## 4. Pretest probability (PTP)

## 5. Fagans nomogram

## 6. Applicering



1. Sensitivitet och Specificitet
2. Likelyhood ratio (LR)
3. Pre-test probability (PTP)
4. Fagans nomogram
5. Applicering
6. Avslutande tankar
