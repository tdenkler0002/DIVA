import { NgModule, Component, Input, Output, ElementRef, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

// This Component takes an image/document as input and encodes it to base64 for the database
export class FileUploadComponent implements ControlValueAccessor {
    selectedFileName: string = null;
    base64String: any;
    documentType: string = null;
    @Input() showFileNameInput: boolean;
    @Input() uploadButtonText: string;

    constructor(
      private userService: UserServiceService
    ) {}

    // Calls userService to add the base64 string to User Object
    writeValue(value: any) {
       this.base64String = value;
       this.userService.addUserDoc(this.base64String, this.documentType);
    }

    // Awaits change
    propagateChange = (_: any) => { };
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }

    changeListener($event): void {
        // debugger; // uncomment this for debugging purposes
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        // debugger; // uncomment this for debugging purposes
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();
        // Diffrentiates biometrics document from citizenshipDocument
        if(inputValue.offsetParent.children[0].id == "citizenshipDocument") {
          this.documentType = "Citizenship"
        } else {
          this.documentType="Biometrics"
        }
        // The reader will readAsDataURL first and then come back to this to process once loaded
        myReader.onloadend = (e) => {
            this.propagateChange(myReader.result);
            this.selectedFileName = file.name;
            this.writeValue(myReader.result);
        }
        var base64Link = myReader.readAsDataURL(file);

    }
}
