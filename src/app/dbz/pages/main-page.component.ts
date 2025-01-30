import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    constructor(
        private dbzService: DbzService
    ) {}

    get characters () : Character[] {
        // El operador Spread crea una copia del objeto que lo utiliza.
        return [...this.dbzService.characters];
    }

    onDeleteCharacter (id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }
}