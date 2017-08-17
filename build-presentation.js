const fs = require('fs');

require.extensions['.md'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const markpress = require('markpress');
const options = {
  layout: 'horizontal',
  theme: 'dark',
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
 
const alignment = require('./Part 1 - Theory/1.UI Design/Alignment/concept.md')
const biggerClickAreas = require('./Part 1 - Theory/1.UI Design/Bigger click areas/concept.md')
const navigations = require('./Part 1 - Theory/1.UI Design/Navigations/concept.md')
const forms = require('./Part 1 - Theory/3.Simplicity/Forms/concept.md')
const lessIsMore = require('./Part 1 - Theory/3.Simplicity/Less is More/concept.md')
const crud = require('./Part 1 - Theory/3.Simplicity/CRUD/concept.md')
const onePageShouldLookLikeTheNext = require('./Part 1 - Theory/4.Consistency/One page should look like the next/concept.md')

markpress(
    alignment + "\n" + 
    biggerClickAreas + "\n" + 
    navigations + "\n" + 
    forms + "\n" + 
    lessIsMore + "\n" + 
    lessIsMore + "\n" + 
    crud + "\n" + 
    onePageShouldLookLikeTheNext,
  options
).then(({html, md}) => {
  fs.writeFileSync('index.html', html);
});