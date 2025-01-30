import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-add-character',
	standalone: false,

	templateUrl: './add-character.component.html',
	styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

	@Output()
	public onNewCharacter: EventEmitter<Character> = new EventEmitter();

	public character: Character = {
		name: '',
		power: 0
	};

	emitCharacter() {
		console.log(this.character);
		if (this.character.name.length === 0) return;
		
		/**
		 * Esta es una forma de realizar la emisión.
		 * Lo que pasa aquí es que al realizar una asignación a this.character de la siguiente
		 * manera { name: '', power: 0 }, Angular crea un nuevo objeto, con una nueva referencia
		 * y lo asigna a this.character, dejando intacta la referencia anterior. 
		 * 
		 */
		this.onNewCharacter.emit(this.character);
		this.character = { name: '', power: 0 };


		/** 
		 * Esta es otra forma de realizar la emisión.
		 * Lo que se hace es utilizar el Spread operator {...this.character} que realiza una copia
		 * del objeto y envía esa nueva copia en la emisión, dejando intacta la referencia anterior. 
		 */
		// this.onNewCharacter.emit({...this.character});
		// this.character.name = '';
		// this.character.power = 0;

	}
}
