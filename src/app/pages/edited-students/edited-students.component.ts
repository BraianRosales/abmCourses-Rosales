import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-edited-students',
  templateUrl: './edited-students.component.html',
  styleUrls: ['./edited-students.component.scss']
})
export class EditedStudentsComponent {

  public editor:any = ClassicEditor;

}
