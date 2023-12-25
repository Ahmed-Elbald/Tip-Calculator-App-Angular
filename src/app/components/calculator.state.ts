import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { interval } from "rxjs";

export interface CalculatorState {
    bill: number,
    nop: number,
    tipPercent: number | null
}

export const initialState: CalculatorState = {
    bill: 0,
    nop: 0,
    tipPercent: null
}

@Injectable()
export class CalculatorStore extends ComponentStore<CalculatorState> {

    constructor() { super(initialState) };

    // Selectors
    private readonly tipPerPerson$ = this.select(({ bill, nop: numberOfPeople, tipPercent }) => {
        if (!tipPercent) return 0
        return bill * (tipPercent / 100) / numberOfPeople
    });
    private readonly totalPerPerson$ = this.select(({ bill, nop: numberOfPeople, tipPercent }) => {
        if (!tipPercent) return 0;
        return bill * ((tipPercent / 100) + 1) / numberOfPeople
    })

    public readonly vm$ = this.select({
        tipPerPerson: this.tipPerPerson$,
        totalPerPerson: this.totalPerPerson$,
    })

    // Updates
    public readonly stateUpdater = this.updater((_oldState, newState: CalculatorState) => ({ ...newState }))


}