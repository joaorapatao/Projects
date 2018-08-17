import { SociaisComponent } from './../sociais/sociais.component';
import { ApresentacaoComponent } from './../apresentacao/apresentacao.component';
import { DataBindingComponent } from './data-binding.component';
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
    {path: '', component: DataBindingComponent},
    {path: 'app-apresentacao', component: ApresentacaoComponent},
    {path: 'app-sociais', component: SociaisComponent}
];
