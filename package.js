Package.describe({
    name: 'wehrlock:accounts-foursquare',
    summary: "Login service for Foursquare accounts",
    version: "1.0.4",
    git: "https://github.com/wehrlock/accounts-foursquare.git"
});

Package.on_use(function(api) {
    api.versionsFrom('1.0');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('wehrlock:foursquare@1.0.4', ['client', 'server']);

    api.add_files('foursquare_login_button.css', 'client');

    api.add_files("foursquare.js");
});
