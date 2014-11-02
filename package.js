Package.describe({
  name: 'rainhaven:moment-helpers',
  summary: 'A few helpers for moment and blaze',
  version: '1.0.1',
  git: 'https://github.com/RainHaven/moment-helpers.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('mrt:moment@2.8.1');
  api.use('underscore');
  api.use('templating', 'client');
  api.addFiles('moment-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:moment-helpers');
  api.addFiles('moment-helpers-tests.js');
});
