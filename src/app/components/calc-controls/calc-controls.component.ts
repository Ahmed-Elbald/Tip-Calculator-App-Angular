import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculatorStore } from '../calculator.state';
import { moreThan } from '../form.validators';
import { LetDirective } from '@ngrx/component';
import { fadeInOut } from './calc-controls.animations';
import { EMPTY, map } from 'rxjs';

@Component({
  selector: 'app-calc-controls',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LetDirective],
  templateUrl: './calc-controls.component.html',
  styleUrl: './calc-controls.component.scss',
  animations: [fadeInOut]
})
export class CalcControlsComponent implements OnInit {

  // Dependencies
  private calculatorStore = inject(CalculatorStore);
  private fb: FormBuilder = new FormBuilder()

  // Public fields
  public tipPercents: number[] = [5, 10, 15, 25, 50];
  public selectedTip: number | null = null;
  public tipForm!: FormGroup;

  // Public methods
  ngOnInit(): void {

    // Initialize form
    this.tipForm = this.fb.group({
      bill: ["", { validators: [Validators.required, moreThan(0)] }],
      nop: ["", { validators: [Validators.required, moreThan(0)] }],
      tipPercent: ["", { validators: [moreThan(0)] }],
    });

    // Initialize state updater
    this.calculatorStore.stateUpdater(this.tipForm.valueChanges.pipe(
      map((values) => {
        if (!this.tipForm.valid) return EMPTY;
        if (this.selectedTip) return { ...values as {}, tipPercent: this.selectedTip }
        return values
      })
    ));

  }

  selectTipPercent(percent: number) {

    this.selectedTip = percent;
    this.tipForm.controls["tipPercent"].setValue("");

  }

  resetTipPercent() {
    this.selectedTip = null;
  }

}
