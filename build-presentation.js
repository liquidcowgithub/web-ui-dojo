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

markpress(
    alignment + biggerClickAreas,
  options
).then(({html, md}) => {
  fs.writeFileSync('index.html', html);
});