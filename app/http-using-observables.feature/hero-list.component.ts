import { Component, OnInit }  from "@angular/core";
import { Hero }               from "./hero.model";
import { HeroService }        from "./hero.service";

@Component({
  selector: 'hero-list',
  template: `
  <h3>Tour of Heroes ({{mode}})</h3>
  <h4>Heroes:</h4>
  <ul>
    <li *ngFor="let hero of heroes">
      {{hero.name}}
    </li>
  </ul>
  New hero name:
  <input #newHeroName />
  <button class="btn" (click)="addHero(newHeroName.value); newHeroName.value=''">
    Add Hero
  </button>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  providers: [
    HeroService
  ]
})
export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error => this.errorMessage = <any>error
      );
  }

  addHero(name: string) {
    if (!name) { return; }
    let heroContainer = { name: name };
    this.heroService
      .addHero(heroContainer)
      .subscribe(
        hero => this.heroes.push(hero),
        error => this.errorMessage = <any>error
      );
  }
}
