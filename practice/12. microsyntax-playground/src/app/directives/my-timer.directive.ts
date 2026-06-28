import { Directive, effect, input, Signal } from "@angular/core";

export type TimerState = 'running' | 'done';

export interface MyTimerContext {
	readonly myTimer: Signal<number>;
  readonly value: Signal<number>;
	readonly state: Signal<TimerState>;
}

@Directive({
	selector: '[myTimer]'
})
export class MyTimer {
	readonly myTimer = input.required<number>();
	readonly myTimerFrom = input<number>(0);
	readonly myTimerTo = input<number | null>(null);
	readonly myTimerStep = input<number>(1);

	constructor() {
		effect(() => {
			console.log(`MyTimer: ${this.myTimer()} From: ${this.myTimerFrom()} To: ${this.myTimerTo()} Step: ${this.myTimerStep()}`);
		});
	}

	static ngTemplateContextGuard(_: MyTimer, ctx: unknown): ctx is MyTimerContext {
		return true;
	}
}
