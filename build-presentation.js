const fs = require('fs');

require.extensions['.md'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const markpress = require('markpress');
const options = {
  layout: 'horizontal',
  theme: 'light',
  autoSplit: true,
  allowHtml: true,
  verbose: false,
  title: 'Optional <title> for output HTML'
}
// // Simulating named parameters through destructuring 
// markpress('./Part 1 - Theory/1.UI Design/Alignment/concept.md', options).then(({html, md}) => {
//   fs.writeFileSync('output.html', html);
//   // if `md` is defined it contains the markdown content with embedded options (see --save option) 
// });
 
// // or you can pass the Markdown content directly as parameter 
 
const introduction = require('./Part 0 - Introduction/concept.md')
const alignment = require('./Part 1 - Theory/1.UI Design/Alignment/concept.md')
const biggerClickAreas = require('./Part 1 - Theory/1.UI Design/Bigger click areas/concept.md')
const navigations = require('./Part 1 - Theory/1.UI Design/Navigations/concept.md')
const forms = require('./Part 1 - Theory/3.Simplicity/Forms/concept.md')
const submitOnEnter = require('./Part 1 - Theory/3.Simplicity/Submit On Enter/concept.md')
const formsIconography = require('./Part 1 - Theory/3.Simplicity/Forms Iconography/concept.md')
const formsPlaceholders = require('./Part 1 - Theory/3.Simplicity/Forms Placeholders/concept.md')
const lessIsMore = require('./Part 1 - Theory/3.Simplicity/Less is More/concept.md')
const crud = require('./Part 1 - Theory/3.Simplicity/CRUD/concept.md')
const clarity = require('./Part 1 - Theory/5.Clarity/concept.md')
const onePageShouldLookLikeTheNext = require('./Part 1 - Theory/4.Consistency/One page should look like the next/concept.md')
const branding = require('./Part 1 - Theory/6. Branding/concept.md')
const practical = require('./Part 2 - Practical/concept.md')
const someIdeas = require('./Part 3 - Some ideas/concept.md')
const furtherReading = require('./Part 4 - Futher reading/Reading resources.md')
const conclusion = require('./Part 5 - Conclusion/conclusion.md')
const questions = require('./Part 5 - Conclusion/questions.md')

markpress(
    introduction + "\n" + 
    alignment + "\n" + 
    biggerClickAreas + "\n" + 
    forms + "\n" + 
    submitOnEnter + "\n" + 
    formsIconography + "\n" + 
    formsPlaceholders + "\n" + 
    navigations + "\n" + 
    onePageShouldLookLikeTheNext + "\n" +
    lessIsMore + "\n" + 
    clarity + "\n" +
    crud + "\n" + 
    branding + "\n" +
    practical + "\n" +
    someIdeas + "\n" +
    furtherReading + "\n" +
    conclusion + "\n" +
    questions,
  options
).then(({html, md}) => {
  fs.writeFileSync('index.html', html);
});