Package.describe({
    name: 'nimblenotes:typed.js',
    version: '1.1.1',
    summary: 'Sideshow interactive tour',
    git: 'https://github.com/NimbleNotes/nimblenotes-packages',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'jquery',
        'nimblenotes:jquery-autosize@1.17.8'
    ], 'client');
    api.addFiles([
      'js/typed.js'
    ], 'client');
});
