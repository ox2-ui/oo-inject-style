Package.describe({
  name: 'ox2:inject-style',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use([
    'ecmascript'
    ]);
  // 3rd party
  api.use([

    ]);

  api.addFiles('lib/oo-inject-style.js', C);
  api.export('ooInjectStyle')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:inject-style');
  api.addFiles('package-tests.js');
});
