Package.describe({
    name: 'nimblenotes:typed.js',
    version: '0.0.2',
    summary: 'Typed.js v1.1.1',
    git: 'https://github.com/NimbleNotes/nimblenotes-packages',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'jquery',
    ], 'client');
    api.addFiles([
      'js/typed.js'
    ], 'client');
});
