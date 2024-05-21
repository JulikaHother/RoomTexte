// document.addEventListener('DOMContentLoaded', function () {
//   const text = `sind Ruth-Maria Thomas und Cynthia Cornelius.

// Sie sind am 15.12.1993 geboren und in Cottbus aufgewachsen. Sie schreiben allein und seit 2021 gemeinsam für Kunstausstellungen und Magazine.

// Ruth-Maria Thomas ist Sozialarbeiterin und hat am Literaturinstitut in Leipzig studiert. Zuletzt erschienen ihre Essays „wie ich frau bin“ bei SUKULTUR und „toxic“ bei SWR2. Ihr Debütroman erscheint 2024 bei Rowohlt.

// Cynthia Cornelius hat Literaturwissenschaften und Französisch in Marseille und Halle (Saale) studiert. Für das ZEITmagazin veröffentlichte sie diverse Kolumnen, Interviews und eine Fotostrecke. Außerdem ist sie Mitherausgeberin des literarischen Groschenromans Hot Topic!.`;
//   let index = 0;
//   const typingSpeed = 100; // Millisekunden zwischen jedem Buchstaben

//   function typeText() {
//     if (index < text.length) {
//       document.getElementById('typed-text').textContent += text.charAt(index);
//       index++;
//       setTimeout(typeText, typingSpeed);
//     }
//   }

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



//   function updateViewportSize() {
//     var width = window.innerWidth || document.documentElement.clientWidth;
//     var height = window.innerHeight || document.documentElement.clientHeight;

//     document.getElementById('viewport-size').innerHTML = `
//       Room ${width} x ${height}<br><br>
//       Room 1 <span class="wer">wer</span><br>
//       Room 2 <span class="wo">wo</span><br>
//       Room 3 <span class="wie">wie</span><br>
//       Room 4 <span class="was">was</span><br>
//     `;
//   }

//   // Starten der Textanimation
//   typeText();

//   // Aktualisieren beim Laden der Seite
//   updateViewportSize();

//   // Aktualisieren, wenn die Größe des Fensters geändert wird
//   window.onresize = updateViewportSize;
// });

function applyTypewriterEffect(elementId, loop = true, pauseDuration = 2500, deleteDuration = 10000) {
  var element = document.getElementById(elementId);
  var html = element.innerHTML;

  // Ersetze mehrere aufeinanderfolgende Leerzeichen und Zeilenumbrüche durch ein einziges Leerzeichen
  var cleanedHtml = html.replace(/\s*(<br\s*\/?>)\s*/gi, '$1').replace(/\s\s+/g, ' ').trim();

  var typewriter = new Typewriter(element, {
    loop: loop
  });

  typewriter.pauseFor(pauseDuration)
    .typeString(cleanedHtml)
    .pauseFor(pauseDuration)
    .deleteAll()
    .pauseFor(deleteDuration)
    .typeString(cleanedHtml)
    .start();
}

applyTypewriterEffect('about-text');
applyTypewriterEffect('typed-text-publi');
applyTypewriterEffect('typed-text');


