/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const join = require('path').join;

module.exports = {
  name: 'ember-intl-phone-input',
  // addon index.js
  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    const imagesDir = new Funnel(join(this.root, 'public/flags'), {
      include: ['*.png'],
      destDir: '/assets/flags'
    });

    return mergeTrees([imagesDir]);
  }
};
