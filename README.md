# Angular Pipes

Use pipes to transform strings, currency amounts, dates, and other data for display.

Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.

## Pipes syntax

```
----------------------
# app.component.html
----------------------
<ul>
  <li>Date pipe: {{ happynewyear | date }}</li>
  <li>Uppercase pipe: {{ name | uppercase }}</li>
  <li>Currency pipe: {{ salary | currency: 'EUR' }}</li>
  <li>Number pipe: {{ largeNumber | number: '3.1-3' }}</li>
  <li>Percent pipe: {{ decimal | percent: '2.1-1' }}</li>
</ul>
```

```
----------------------
# app.component.ts
----------------------
happynewyear: Date = new Date(2023, 0, 1);
name: string = 'aissam';
salary: number = 1500.5;
largeNumber: number = 12345.12345;
decimal: number = 0.85;
```
