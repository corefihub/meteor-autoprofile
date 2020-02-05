Package.describe({
    summary: "Generate profile pages / data-sheets based on simpl-schema",
    version: "0.1.7",
    name: "sebl29:meteor-autoprofile",
    git: "https://github.com/sebl29/meteor-autoprofile"
});

Package.onUse((api) => {
    api.versionsFrom("1.9");

    api.use([
        "blaze-html-templates",
        'check',
        'ecmascript',
        'tracker',
        'reactive-var',
        'aldeed:template-extension@4.1.0',
        'd3k4y:meteor-simple-schema-functions@0.0.1',
    ]);

    api.use([
        'tmeasday:check-npm-versions@0.3.2',
    ], 'client');
    api.use([
        'aldeed:autoform@6.3.0',
        'd3k4y:autoform-modals@0.4.3',
        'd3k4y:files@1.10.0',
        'd3k4y:autoform-files@2.3.0',
        'corefi:meteor-autoform-enhanced-method@0.0.1',
    ], 'client', {weak: true});

    api.use([
        'babrahams:editable-text@0.9.10',
    ], ['client', 'server'], {weak: true});

    api.mainModule('client.js', 'client');
});
