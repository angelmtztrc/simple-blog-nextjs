'use strict';
const slugify = require('slugify');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      if (data.title) {
        data.slug = slugify(data.title.toLowerCase());
      }
    },
    beforeUpdate: async data => {
      if (data.title) {
        data.slug = slugify(data.title.toLowerCase());
      }
    }
  }
};
