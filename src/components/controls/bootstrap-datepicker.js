import { customAttribute, bindable, inject, bindingMode } from 'aurelia-framework';

import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';
import 'bootstrap-datepicker';

@customAttribute('bootstrap-datepicker')
@inject(Element)
export class BootstrapDatePickerCustomAttribute {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) options;

    constructor(element) {
        this.element = element;
        console.log("BS: ", element);
    }

    attached() {
        $(this.element).datepicker(this.options).on('changeDate', e => fireEvent(e.target, 'input'));
    }

    detached() {
        $(this.element).datepicker().off('changeDate');
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