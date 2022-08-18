import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  faStar = faStar;
  cropWidth = 90;

  @Input() rating: number = 0;
  @Output() onRating: EventEmitter<number> = new EventEmitter();

  ngOnChanges(): void {
    this.cropWidth = this.rating / 5 * 90;
  }

  ratingClicked() {
    if (this.rating <= 4.9)
      this.rating += 0.1;

    this.onRating.emit(this.rating);
  }
}
