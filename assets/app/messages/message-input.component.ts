import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-message-input',
    templateUrl: "./message-input.component.html",
})
export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    onSave(form: NgForm)
    {
        if(form.value.content=="")
        {
            alert("No Content Specified for Your Message!")
        } else {
            const message = new Message(form.value.content, 'Amarsha');
            this.messageService.addMessage(message);
        }

    }
}
