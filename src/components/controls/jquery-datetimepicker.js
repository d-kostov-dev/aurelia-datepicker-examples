import { customAttribute, bindable, inject, bindingMode } from 'aurelia-framework';

import "jquery-ui-dist/jquery-ui";
import "jquery-ui-dist/jquery-ui.min.css";
import "jquery-ui-dist/jquery-ui.theme.min.css";

@customAttribute('jquery-datetimepicker')
@inject(Element)
export class JQueryDateTimePickerCustomAttribute {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

    constructor(element) {
        this.element = element;
        console.log("JQ", element);
    }

    attached() {
        $(this.element).datepicker(this.options).on('change', e => fireEvent(e.target, 'input'));
    }

    detached() {
        $(this.element).datepicker('destroy').off('change');
    }
}

function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    
    return event;
}

function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
}