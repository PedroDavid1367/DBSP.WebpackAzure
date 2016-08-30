// The next 2 lines might be in the vendro.ts file.
import "materializecss";
import "angular2-materialize";  // I think it's not currently used.

// The browser platform with a compiler
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// The app module
import { AppModule } from "./app.module";

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);

