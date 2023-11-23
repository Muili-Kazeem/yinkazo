import { Component, OnInit } from '@angular/core';
import { DateTime, DurationObjectUnits } from 'luxon';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-compssa',
  templateUrl: './compssa.component.html',
  styleUrls: ['./compssa.component.scss']
})
export class CompssaComponent implements OnInit {

  ngOnInit(): void {
  }

  timer = this.transform("2023-11-25T09:00:00.000");

  transform(value: string): Observable<DurationObjectUnits> {
    const target = DateTime.fromISO(value);

    return timer(0, 1000).pipe(map(() => {
      const now = DateTime.now();
      return target.diff(now, ['days', 'hours', 'minutes', 'seconds', 'milliseconds']).toObject();
    }));
  }

}
