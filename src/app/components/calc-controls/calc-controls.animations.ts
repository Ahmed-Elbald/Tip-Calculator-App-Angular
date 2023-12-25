import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInOut = trigger(
    "fadeInOut",
    [
        state("void", style({ opacity: 0 })),
        state("in", style({ opacity: 1 })),
        transition(
            ":enter",
            [animate(500)]
        ),
        transition(
            ":leave",
            [animate(200)]
        )

    ]
)