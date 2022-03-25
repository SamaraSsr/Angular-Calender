import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  calenderViews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // get current year
  selectedYear = new Date().getFullYear();
  calender: any = [];

  ngOnInit(): void {
    this.calenderViews.forEach(view => {
      this.buildCalenderMonths(view, this.selectedYear);
    });
  }

  getDaysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();

  buildCalenderMonths = (monthNumber: number, year: number) => {
    const daysInMonth = this.getDaysInMonth(monthNumber, year);
    const month: any[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, monthNumber - 1, i);
      month.push({
        date: date,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        dayOfWeek: date.getDay(),
        isToday: date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear(),
        isSelected: date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear(),
        isDisabled: date.getDay() === 0 || date.getDay() === 6,
        monthName: date.toLocaleString('en-us', { month: 'long' }),
        dayName: date.toLocaleString('en-us', { weekday: 'short' })
      });
    }
    this.calender.push(month);
    console.log(this.calender);
    // build calender with sunday as first day of week and saturday as last day of week 
  }
}
