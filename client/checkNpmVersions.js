import {checkNpmVersions} from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
    jquery: "^3.5.1",
    lodash: "^4.17.20",
}, 'corefihub:meteor-autoprofile');
