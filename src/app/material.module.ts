import { MatAutocompleteModule, MatButtonModule, MatToolbarModule , MatIconModule, MatTooltipModule,MatListModule,
    MatCardModule} from '@angular/material/';
import { NgModule } from '@angular/core';


const mods = [MatAutocompleteModule, MatButtonModule, MatToolbarModule , MatIconModule , MatTooltipModule , MatCardModule , MatListModule];

@NgModule({
    declarations: [],
    imports: [mods],
    exports: [mods],
})
export class MaterialModule { }
