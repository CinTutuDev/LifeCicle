import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  public interval$?: Subscription = interval(1000).subscribe((val) =>
    console.log(`Tick: ${val}`)
  );

  ngOnInit(): void {
    console.log('Price HIJO: OnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price HIJO: OnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Price HIJO: OnDestroy');
    this.interval$?.unsubscribe();
  }
}
