import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcControlsComponent } from './components/calc-controls/calc-controls.component';
import { CalcScreenComponent } from './components/calc-screen/calc-screen.component';
import { CalculatorStore } from './components/calculator.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalcControlsComponent, CalcScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CalculatorStore]
})
export class AppComponent {
  title = 'tip-calculator-app-angular-standalone';
}
