import {Template} from "meteor/templating";
import "./date.html";
import {Tracker} from "meteor/tracker";
import {getFieldValue} from "../_api";

Template.autoProfileField_date.onCreated(function onCreated() {
    this.state = new ReactiveDict();
    Tracker.autorun(() => {
        const fieldValue = getFieldValue(this, this.data.id, this.data);
        this.state.set("fieldValue", fieldValue);
    });
});
Template.autoProfileField_date.helpers({
    isClickable() {
        let fieldOptions = Template.instance().data.fieldOptions;
        if (!fieldOptions) {
            fieldOptions = Template.instance().data;
        }
        return fieldOptions && fieldOptions.clickable;
    }
});
