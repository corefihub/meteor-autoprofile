/* eslint-disable consistent-return */
import {Template} from "meteor/templating";
import {check, Match} from "meteor/check";
import _ from "lodash";
import {SimpleSchemaFunctions} from "meteor/sebl29:meteor-simple-schema-functions";

import {getOptions, getTemplate} from "./_api";


Template.autoProfilePanel.helpers({
    cardOrPanel() {
        return 'card' || 'panel';
    },
    headerOrHeading() {
        return 'header' || 'heading';
    },
    panelTitle() {
        const profileOptions = getOptions(Template.instance());
        if (this.title) {
            return this.title;
        }
        if (this.field) {
            return _.get(SimpleSchemaFunctions.getFieldSchema(profileOptions.collection, this.field.id), 'label');
        }
    },
    getTemplate() {
        // console.info(`autoProfilePanel#getTemplate: `, getTemplate(Template.instance(), this));
        return getTemplate(Template.instance(), this);
    },
    doShowLoadingSpinner() {
        return Template.instance().data.showLoadingSpinner();
    }
});


Template.autoProfilePanelCardHeaderMenu.onCreated(function onCreated() {
    check(this.data.linkClass, Match.Optional(String));
    check(this.data.labelIcon, String);
    check(this.data.linkTooltip, Match.Optional(String));
    check(this.data.linkCallback, Function);
});
Template.autoProfilePanelCardHeaderMenu.events({
    "click a.js-card-header-menu__link"(event, templateInstance) {
        templateInstance.data.linkCallback();
    }
});
