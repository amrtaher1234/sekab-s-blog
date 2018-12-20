import { MatAutocompleteModule, MatButtonModule,  MatToolbarModule , MatIconModule, MatTooltipModule, MatListModule, MatFormFieldModule,
    MatCardModule} from '@angular/material/';
import {MatInputModule, MatSelectModule , MatRadioModule , MatDividerModule} from '@angular/material';
import { NgModule } from '@angular/core';


// tslint:disable-next-line:max-line-length
const mods = [MatFormFieldModule, MatAutocompleteModule,
    MatInputModule, MatSelectModule, MatRadioModule,
     MatButtonModule, MatToolbarModule , MatIconModule ,
     MatDividerModule,
     MatTooltipModule , MatCardModule , MatListModule];

@NgModule({
    declarations: [],
    imports: [mods],
    exports: [mods],
})
export class MaterialModule { }
