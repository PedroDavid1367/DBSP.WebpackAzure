import { NgModule }                            from "@angular/core";
import { CommonModule }                        from "@angular/common";

import { routing }                             from "./notes.routing";
import { NotesHomeComponent }                  from "./notes-home.component"
import { HeroListComponent }                   from "./hero-list.component";
import { DbspNoteCategoryListComponent }       from "./dbsp-note-category-list.component"; 
import { DbspNoteCategoryItemComponent }       from "./dbsp-note-category-item.component";
import { DbspNoteCategoryContainerComponent }  from "./dbsp-note-category-container.component";
import { DbspNoteComponent }                   from "./dbsp-note.component";

import { DbspContainerComponent }  from "./dbsp-container.component";
import { DbspListComponent }       from "./dbsp-list.component";
import { DbspItemComponent }       from "./dbsp-item.component";

import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    NotesHomeComponent,
    HeroListComponent,

    DbspNoteCategoryContainerComponent,
    DbspNoteCategoryListComponent,
    DbspNoteCategoryItemComponent,
    DbspNoteComponent,

    DbspContainerComponent,
    DbspListComponent,
    DbspItemComponent
  ],
  providers: [
    OidcTokenManagerService
  ]
})
export class NotesModule { }
