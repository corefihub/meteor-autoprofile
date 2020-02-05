/* eslint-disable meteor/template-names,consistent-return */
import {Template} from "meteor/templating";
import {SimpleSchemaFunctions} from "meteor/d3k4y:meteor-simple-schema-functions";

import {getOptions} from "../_api";


Template.autoProfileField_fileArray.helpers({
    getLinkArray(value) {
        if (typeof this.link === 'function') {
            const instance = Template.instance();
            const fieldSchema = SimpleSchemaFunctions.getFieldSchema(getOptions(instance).collection, this.id);
            return this.link.call(this, value, fieldSchema);
        }
        return null;
    },

    getFilename(value) {
        if (value) {
            const collection = window.Files;
            if (collection) {
                try {
                    return collection.findOne({_id: value}).name;
                } catch (error) {
                    // error
                }
            }
        }
    },
    getClass(value) {
        return this.class;
    },
    getIconType(value) {
        if (typeof this.getIconType === 'function') {
            const collection = window.Files;
            const file = collection.findOne({_id: value});
            return this.getIconType(file);
        }
        return "";
    }
});
