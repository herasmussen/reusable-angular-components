import { computed, Directive, effect, inject, input, signal, Signal, TemplateRef, ViewContainerRef } from "@angular/core";

export interface MyRepeatContext {
  readonly myRepeat: Signal<number>;
  readonly $implicit: Signal<number>;
  readonly index: Signal<number>;
  readonly first: Signal<boolean>;
  readonly last: Signal<boolean>;
}

@Directive({
  selector: '[myRepeat]'
})
export class MyRepeat {
  readonly myRepeat = input.required<number>();
  readonly myRepeatStart = input<number>(0);
  readonly myRepeatSkip = input<number>(0);
  readonly vcr = inject(ViewContainerRef);
  readonly template = inject<TemplateRef<MyRepeatContext>>(TemplateRef);

  private invalidate() {
    const count = this.myRepeat();

    while (this.vcr.length > count) {
      this.vcr.remove(this.vcr.length - 1);
    }

    while (this.vcr.length < count) {
      const index = signal(this.vcr.length).asReadonly();
      const first = computed(() => index() === 0);
      const last = computed(() => index() === (this.myRepeat() - 1));
      const myRepeat = this.myRepeat;
      const value = computed(() => this.myRepeatStart() + index() * this.myRepeatSkip());

      this.vcr.createEmbeddedView(this.template, {
        $implicit: value,
        index,
        first,
        last,
        myRepeat
      })
    }
  }
  constructor() {
    effect(() => {
      console.log(`MyRepeat: ${this.myRepeat()} Start: ${this.myRepeatStart()} Skip: ${this.myRepeatSkip()}`);
    });
    effect(() => {
      this.invalidate();
    })
  }

  static ngTemplateContextGuard(_: MyRepeatContext, ctx: unknown): ctx is MyRepeatContext {
    return true;
  }
}