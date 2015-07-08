var pages = {};

module.exports = {
  pages: pages,
  addPage: addPage
};

function addPage(page) {
  pages[page.name] = page;
}
