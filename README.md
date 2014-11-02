# Moment Extras
A few helpers for Moment and Blaze


## Moment Helpers
```js
// Return the start of today
// Example: moment.today();
moment.today();

// Get the beginning of whatever date is passed in
// Example: moment.startOfDay(new Date) 
moment.startOfDay(date)

// Get the beginning of the month relative to what 
// date is passed in
// Example: moment.startOfMonth(new Date) 
moment.startOfMonth(date)

// Subtract specified days from the specified date
// and return the start of that result
// Example: moment.subtractDays(1, new Date)
moment.subtractDays(days, date);

// Add specified days to the specified date
// and return the start of that result
// Example: moment.addDays(1, new Date);
moment.addDays(days, date);
```

## Blaze Helpers
```js

// Return Sunday-Monday
{{dayOfWeekStr date}}

// Return Sun-Mon
{{dayOfWeekStrAbbrv date}}
 
// Return 0-31
{{dayOfMonthInt date}}

// Return date with passed in string format
// Example: {{formatDate date 'MMMM DD YYYY'}}
{{formatDate date format}}
	
// Return today with passed in string format
// formate is optional and will default to 'MMMM DD YYYY'
{{todaysDate format}}	
```
