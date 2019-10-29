# Car Laps
Car laps and times API. By default the listen port is 3000

# Run with

```
node server/server
```

# API Request


```
GET /laps

    return all the laps
````
```
DELETE /laps

    remove all the laps from db
```
``` 
POST /lap
    body => {"lap": number }
 
    Add the time for the lap to db
```
```
GET /lastLaps/:number

    return the :number last Laps from db
```
```
GET /bestLaps/:number

    return the :number laps with the best time
```