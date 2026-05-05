---

# https://vitepress.dev/reference/default-theme-home-page
title: Lathund akuten
description: Kort manual med användbara kommandon för Taligenkänning Dragon Medical One DMO specifik för akuten MSE
layout: doc
---

# Akutens egna kommandon

### JOURNAL

| Handling            | SÄG                           | Handling                | SÄG                       |
|---------------------|-------------------------------|-------------------------|---------------------------|
| 1 Ny akutanteckning | <gr>"Akutanteckning"</gr>     | 5 Prover                | <gr>"Provsvar"</gr>       |
| 2 Aktuellt          | <gr>"Aktuellt"</gr>           | 5 Bilddiagnostik        | <gr>"Röntgensvar"</gr>    |
| 3 Tid. Sjukdom      | <gr>"Tidigare sjukdomar"</gr> | 5 ULJ akutläkare        | <gr>"Ultraljud akut"</gr> |
| 4 Allmäntillstånd   | <gr>"Allmäntillstånd"</gr>    | 6 Bedömning             | <gr>"Bedömning"</gr>      |
| 4 Hjärtstatus       | <gr>"Hjärta"</gr>             | 7 Åtgärd                | <gr>"Åtgärd"</gr>         |
| 4 Lungstatus        | <gr>"Lungor"</gr>             | 8 Planering             | <gr>"Planering"</gr>      |
| 4 Bukstatus         | <gr>"Buk"</gr>                | 9 Diktat                | <gr>"Diktat"</gr>         |
| 4 Genitalstatus     | <gr>"Könsorgan"</gr>          | 9 Diktat prioriterad    | <gr>"Diktat prio"</gr>    |
| 4 Munhåla och svalg | <gr>"Mun och svalg"</gr>      | 10 Inskränkt behandling | <gr>"IB"</gr>             |
| 4 Neurostatus       | <gr>"Neuro"</gr>              | 10 Spara och stäng      | <gr>"Spara stäng"</gr>    |
| 4 Lokalstatus       | <gr>"Lokalstatus"</gr>        |                         |                           |
| 4 EKG-tolkning      | <gr>"EKG"</gr>                |                         |                           |



<div style="display: flex; gap: 2rem; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px;">
    <h3>RÖNTGEN</h3>
    <table>
      <thead>
        <tr>
          <th>SLÄTRÖNTGEN</th>
          <th>DT</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>"Röntgen lungor"</td><td>"DT buk med kontrast"</td></tr>
        <tr><td>"Röntgen axelled"</td><td>"DT thorax med kontrast"</td></tr>
        <tr><td>"Röntgen handled"</td><td>"DT lungemboli"</td></tr>
        <tr><td>"Röntgen höftled"</td><td>"DT hjärna nativ"</td></tr>
        <tr><td>"Röntgen knäled"</td><td>"DT skalltrauma"</td></tr>
        <tr><td>"Röntgen fotled"</td><td>"DT aorta"</td></tr>
        <tr><td></td><td>"DT urinvägsöversikt"</td></tr>
        <tr><td></td><td>"Coronarangiografi"</td></tr>
      </tbody>
    </table>
  </div>
  
  <div style="flex: 1; min-width: 300px;">
    <h3>PROVER</h3>
    <table>
      <thead>
        <tr>
          <th>Prov</th>
          <th>SÄG</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>PNA;CRP;Vgas</td><td><gr>"Snabbprover akuten"</gr></td></tr>
        <tr><td>CRP,Blodst,Vgas</td><td><gr>"Basprover akuten"</gr></td></tr>
        <tr><td>Basprv,trop</td><td><gr>"Hjärtprover akuten"</gr></td></tr>
        <tr><td>Basprv,leverst</td><td><gr>"Bukprover akuten"</gr></td></tr>
      </tbody>
    </table>
  </div>
</div>

[LADDA NER LATHUND PDF](taligenkanning-media/tik.pdf)


<div style="display: flex; gap: 2rem; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px;">
    <h3>JOURNAL</h3>
    <table>
      <thead>
        <tr>
          <th>ANAMNES</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><Ref label="0. 'Akutanteckning'" citation="Ny akutanteckning" url="" :superscript="false" fontSize="1em"/></td></tr>
        <tr><td><Ref label="0.1 'Akutanteckning mini'" citation="Förfyller AT, COR, PULM" url="" :superscript="false" fontSize="1em"/></td></tr>
        <tr><td><Ref label="0.2 'Akutanteckning stor'" citation="Som mini + BUK" url="" :superscript="false" fontSize="1em"/></td></tr>
        <tr><td><Ref label="0.3 'Akutantecking larm'" citation="ej färdigställd" url="" :superscript="false" fontSize="1em"/></td></tr>  
        <tr><td><Ref label="1. 'Aktuellt'" citation="Tar dig till aktuellt" url="" :superscript="false" fontSize="1em"/></td></tr>
        <tr><td><Ref label="2. 'Tidigare sjukdomar'" citation="Tar dig till tid/nuv sjukdomar" url="" :superscript="false" fontSize="1em"/></td></tr>
      </tbody>
    </table>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <h3>STATUS</h3>
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Row1Col1</td><td>Row1Col2</td></tr>
        <tr><td>Row2Col1</td><td>Row2Col2</td></tr>
        <tr><td></td><td></td></tr>
      </tbody>
    </table>
  </div>
</div>