import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeNotasComponent } from './pages/lista-de-notas/lista-de-notas.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { DetalheNotasComponent } from './pages/detalhe-notas/detalhe-notas.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeNotasComponent,
    PaginaPrincipalComponent,
    NoteCardComponent,
    DetalheNotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPrintModule // ToastrModule ad  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
