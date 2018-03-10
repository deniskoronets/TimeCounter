# TimeCounter
Lightweight JavaScript time backward counter

`npm install simple-time-counter`

Or load from cdn:
`https://cdn.jsdelivr.net/npm/simple-time-counter@0.0.1/time-counter.js`

**Sample usage**:
```
<div id='days'>
</div> days

<hr>
<div id='hours'>
</div> hours

<hr>
<div id='minutes'>
</div>
minutes

<hr>
<div id='seconds'>
</div>
seconds

<script src="https://cdn.jsdelivr.net/npm/simple-time-counter@0.0.1/time-counter.js"></script>
<script>
new TimeCounter(60 * 60 + 62).subscribe(function(state) {
    window.days.innerText = state.days;
    window.hours.innerText = state.hours;
    window.minutes.innerText = state.minutes;
    window.seconds.innerText = state.seconds;
});
</script>

```
