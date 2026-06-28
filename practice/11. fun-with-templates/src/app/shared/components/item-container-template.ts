import { Directive, inject, TemplateRef } from '@angular/core';

export interface ItemContainerTemplateContext {
  readonly $implicit: string;
  readonly selected: boolean;
  readonly onSelect: () => void;
}

@Directive({
  selector: '[appItemContainerTemplate]',
})
export class ItemContainerTemplate {
  readonly template = inject(TemplateRef<ItemContainerTemplateContext>);

  static ngTemplateContextGuard(_: ItemContainerTemplate, ctx: unknown): ctx is ItemContainerTemplateContext {
    return true;
  }
}
