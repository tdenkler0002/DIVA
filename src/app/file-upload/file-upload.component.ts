import { NgModule, Component, Input, Output, ElementRef, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

// This Component takes an image as input and encodes it to base64 for the database
export class FileUploadComponent implements ControlValueAccessor {
    selectedFileName: string = null;
    base64String: any;
    @Input() showFileNameInput: boolean;
    @Input() uploadButtonText: string;

    writeValue(value: any) {
       //Handle write value
       this.base64String = value;
       //return value;
    }
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

        // The reader will readAsDataURL first and then come back to this to process once loaded
        myReader.onloadend = (e) => {
            this.propagateChange(myReader.result);
            this.selectedFileName = file.name;
            // console.log(myReader.result);
            // return myReader.result;
            this.writeValue(myReader.result);
        }
        var base64Link = myReader.readAsDataURL(file);

    }
}
