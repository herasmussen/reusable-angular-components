import { Directive, inject, TemplateRef } from '@angular/core';

export interface ItemTemplateContext {
  readonly $implicit: string;
}

@Directive({
  selector: '[appItemTemplate]',
})
export class ItemTemplate {
  readonly template = inject(TemplateRef<ItemTemplateContext>);

  static ngTemplateContextGuard(_: ItemTemplate, ctx: unknown): ctx is ItemTemplateContext {
    return true;
  }
}
