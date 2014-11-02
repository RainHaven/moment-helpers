_.extend(moment, {
  today: function () {
    return moment(new Date()).startOf('day').toDate();
  },
  startOfDay: function (date) {
    return moment(new Date(date)).startOf('day').toDate();
  },
  startOfMonth: function (date) {
    return moment(new Date(date)).startOf('month').toDate();
  },
  subtractDays: function (days, date) {
    return moment(date).subtract(days, 'days').startOf('day').toDate();
  },
  addDays: function (days, date) {
    return moment(date).add(days, 'days').startOf('day').toDate();
  }
});

moment.helpers = {
  dayOfWeekStr: function (date) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[moment(date).day()];
  },
  dayOfWeekStrAbbrv: function (date) {
    var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    return days[moment(date).day()];
  },
  dayOfMonthInt: function (date) {
    return moment(date).date();
  },
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
  todaysDate: function (format) {
    var format = format || 'MMMM DD YYYY';
    return moment(moment.today()).format(format);
  }
}
_.each(moment.helpers, function (helper, key) {
  Template.registerHelper(key, helper);
});
