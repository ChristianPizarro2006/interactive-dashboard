# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features. It provides a foundation for using JavaScript to add dynamic functionality and user interaction to a webpage.

## TODO: Future Enhancements

- [x] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator.

## Weekly Task Goals

The Weekly Task Goals feature calculates a user's weekly task target based on their daily goal and additional bonus tasks. It multiplies the daily goal by five workdays and adds the weekly bonus tasks to calculate the total weekly goal.

## Imperial/Metric Converter

The Imperial/Metric Converter allows users to enter a numeric value and convert between Imperial and Metric units. The converter supports inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

BEGIN

    INPUT value
    INPUT conversionType

    IF conversionType = "inch to centimeter" THEN
        SET result = value * 2.54
        DISPLAY result

    ELSE IF conversionType = "foot to centimeter" THEN
        SET result = value * 30.48
        DISPLAY result

    ELSE IF conversionType = "yard to meter" THEN
        SET result = value * 0.91
        DISPLAY result

    ELSE IF conversionType = "mile to kilometer" THEN
        SET result = value * 1.61
        DISPLAY result

    ELSE IF conversionType = "centimeter to inch" THEN
        SET result = value * 0.39
        DISPLAY result

    ELSE IF conversionType = "centimeter to foot" THEN
        SET result = value * 0.0328
        DISPLAY result

    ELSE IF conversionType = "meter to yard" THEN
        SET result = value * 1.09
        DISPLAY result

    ELSE IF conversionType = "kilometer to mile" THEN
        SET result = value * 0.62
        DISPLAY result

    ELSE
        DISPLAY "Invalid conversion type"
    END IF

END