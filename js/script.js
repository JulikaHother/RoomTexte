document.addEventListener('DOMContentLoaded', function () {
  const text = `sind Ruth-Maria Thomas und Cynthia Cornelius.
  
Sie sind am 15.12.1993 geboren und in Cottbus aufgewachsen. Sie schreiben allein und seit 2021 gemeinsam für Kunstausstellungen und Magazine.
  
Ruth-Maria Thomas ist Sozialarbeiterin und hat am Literaturinstitut in Leipzig studiert. Zuletzt erschienen ihre Essays „wie ich frau bin“ bei SUKULTUR und „toxic“ bei SWR2. Ihr Debütroman erscheint 2024 bei Rowohlt.

Cynthia Cornelius hat Literaturwissenschaften und Französisch in Marseille und Halle (Saale) studiert. Für das ZEITmagazin veröffentlichte sie diverse Kolumnen, Interviews und eine Fotostrecke. Außerdem ist sie Mitherausgeberin des literarischen Groschenromans Hot Topic!.`;
  let index = 0;
  const typingSpeed = 100; // Millisekunden zwischen jedem Buchstaben

  function typeText() {
    if (index < text.length) {
      document.getElementById('typed-text').textContent += text.charAt(index);
      index++;
      setTimeout(typeText, typingSpeed);
    }
  }

  // const textPubli = `erschienen in ...
  // processin_magazine
  // HONICH.VERSION
  // Heide Nord
  // Ausstellung Johannes XY
  // Ausstellung Selma XY
  // Magazin XYZ
  // Magazin XYZ
  // Magazin XYZ`;

  // let indexPubli = 0;
  // const typingSpeedPubli = 100; // Millisekunden zwischen jedem Buchstaben, anpassbar

  // function typeTextPubli() {
  //   if (indexPubli < textPubli.length) {
  //     document.getElementById('typed-text-publi').textContent += textPubli.charAt(indexPubli);
  //     indexPubli++;
  //     setTimeout(typeTextPubli, typingSpeedPubli);
  //   }
  // }



  function updateViewportSize() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight;

    document.getElementById('viewport-size').innerHTML = `
      Room ${width} x ${height}<br><br>
      Room 2738 x 2183 – 3892 x 2193 <span class="wer">wer</span><br>
      Room 3204 x 3811 – 3801 x 5032 <span class="wo">wo</span><br>
      Room 1030 x 9282 – 2044 x 5619 <span class="wie">wie</span><br>
      Room 1234 x 7806 – 3141 x 7564 <span class="was">was</span><br>
    `;
  }

  // Starten der Textanimation
  typeText();

  // Aktualisieren beim Laden der Seite
  updateViewportSize();

  // Aktualisieren, wenn die Größe des Fensters geändert wird
  window.onresize = updateViewportSize;
});
