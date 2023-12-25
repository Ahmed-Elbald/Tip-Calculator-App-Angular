import { ValidatorFn } from "@angular/forms";

export const moreThan: (numberToCompare: number) => ValidatorFn = (numberToCompare) => {
    return (control) => {

        if (control.value === "" || control.value === null) return null
        return control.value > numberToCompare ? null : { moreThan: { numberToCompare } }

    }
}