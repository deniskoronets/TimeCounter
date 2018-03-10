function TimeCounter(seconds) {

    var MINUTE = 60;
    var HOUR = 60 * MINUTE;
    var DAY = 24 * HOUR;

    this.days = Math.floor(seconds / DAY);
    seconds -= DAY * this.days;

    this.hours = Math.floor(seconds / HOUR);
    seconds -= HOUR * this.hours;

    this.minutes = Math.floor(seconds / MINUTE);
    seconds -= MINUTE * this.minutes;

    this.seconds = seconds;

    this.subscribe = function(callback) {

        var interval;
        var self = this;

        var func = function() {

            callback({
                days: self.days,
                hours: self.hours,
                minutes: self.minutes,
                seconds: self.seconds,
            });

            self.seconds--;

            if (self.seconds <= 0) {
                self.seconds = 59;
                self.minutes--;
            }

            if (self.minutes <= -1) {
                self.minutes = 59;
                self.hours--;
            }

            if (self.hours <= -1) {
                self.hours = 23;
                self.days--;
            }
        };

        func();
        interval = setInterval(func, 1000);
    };
}
