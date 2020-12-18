import React from 'react';
import AppDescription from '../AppDescription';

function Calendar() {
    return (
        <div id="page-content">
            <AppDescription sectionID="calendar-description">
                <h1>
                    Creating a Timeline for your plants
                </h1>
                <p>
                    If you're growing plants from seed, it can be difficult to remember
                    the milestones for your plants. This page will help you generate
                    the dates for the day expected to emerge and day when it should be ready
                    for harvest. This can help you keep track of if your plant is growing
                    at the right pace.
                </p>
                <p>
                    This was inspired by my difficulty in remembering when my carrots should be
                    ready to harvest. Once the seeds are planted, I forget the date I should harvest
                    and end up pulling them too early.
                </p>
                <p>
                    You can use the dates generated by putting them in your calendar with an alert.
                </p>
            </AppDescription>


        </div>
    )
}

export default Calendar;