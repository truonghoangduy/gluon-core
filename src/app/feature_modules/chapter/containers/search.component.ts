import { Component, Input } from '@angular/core'
import { SearchService } from '../services'

@Component({
  selector: 'app-search-page',
  template: `
    <div class="h-2 flex-none md:h-8"></div>

    <div class="flex flex-row justify-between">
      <div class="flex-1 text-xl">
        <span class="font-semibold">Search result for:</span
        ><span class="font-normal">&nbsp;{{ service.value }}</span>
      </div>
      <app-cross-component
        class="cursor-pointer h-8 w-8 flex-none fill-current text-gray-300"
        (click)="service.dismiss()"
      ></app-cross-component>
    </div>

    <app-under-construction [displayButton]="false"></app-under-construction>
  `
})
export class SearchComponent {
  @Input()
  service: SearchService
}
