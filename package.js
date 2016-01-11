Package.describe({
  name: 'capsulecat:model-factories',
  version: '1.0.0',
  summary: 'Easily generate data for your models using factories',
  git: 'https://github.com/CapsuleCat/MeteorModelFactories',
  documentation: 'README.md'
});

function includeFiles(api) {
  api.use('ecmascript');
  api.imply('aldeed:collection2');
  api.addFiles('src/factory.js');
}

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  includeFiles(api);
  api.export(['$factory']);
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.20.3');
  includeFiles(api);
  api.addFiles('tests/factory-spec.js', ['server', 'client']);
});