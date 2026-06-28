import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChild, input, model, TemplateRef } from '@angular/core';
import { ItemTemplate } from '../item-template';
import { ItemContainerTemplate } from '../item-container-template';

@Component({
  selector: 'app-item-selector',
  imports: [CommonModule],
  templateUrl: './item-selector.html',
  styleUrl: './item-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelectorComponent {
  readonly title = input.required<string>();
  readonly options = input.required<string[]>();
  readonly selectedOption = model('');

  readonly itemTemplateDirective = contentChild(ItemTemplate);
  readonly itemTemplate = computed(() => this.itemTemplateDirective()?.template);
  readonly hasItemTemplate = computed(() => !!this.itemTemplate());

  readonly itemContainerTemplateDirective = contentChild(ItemContainerTemplate);
  readonly itemContainerTemplate = computed(() => this.itemContainerTemplateDirective()?.template);
  readonly hasItemContainerTemplate = computed(() => !!this.itemContainerTemplate());

  select(option: string): void {
    this.selectedOption.set(option);
  }
}

export const ItemSelector = [ItemSelectorComponent, ItemTemplate, ItemContainerTemplate];