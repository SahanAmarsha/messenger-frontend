import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{

    myForm: FormGroup;

    ngOnInit(): void {
        this.myForm = new FormGroup({
            email: new FormControl(null,
                [
                    Validators.required,
                    Validators.pattern(' /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/')
                ]
            ),
            password: new FormControl(null, Validators.required),
        });
    }

    onSubmit()
    {
        console.log(this.myForm);
        this.myForm.reset();
    }

}
