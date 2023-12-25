import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CalculatorStore } from '../calculator.state';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-calc-screen',
  standalone: true,
  imports: [AsyncPipe, NgIf, LetDirective],
  templateUrl: './calc-screen.component.html',
  styleUrl: './calc-screen.component.scss'
})
export class CalcScreenComponent {

  // Dependencies
  private calculatorStore = inject(CalculatorStore);

  // Public fields
  public vm$ = this.calculatorStore.vm$;

}
