import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent
  implements
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('OnChanges');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngOnInit(): void {
    console.log('OnInit');
  }

  inCreasePrice() {
    this.currentPrice++;
  }
}
