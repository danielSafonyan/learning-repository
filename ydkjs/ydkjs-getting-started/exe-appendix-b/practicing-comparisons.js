// Let's practice working with value types and comparisons (Chapter 4, Pillar 3) where coercion will need to be involved.

// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    console.log(`\nStart time: ${startTime}\nDuration minutes ${durationMinutes}`);
    // determine meetingStartHour and meetingStartMinutes
    let [meetingStartHour, meetingStartMinutes] = startTime.split(':');
    meetingStartHour = Number(meetingStartHour)
    meetingStartMinutes = Number(meetingStartMinutes);

    // determine meeting duration in hours and minutes
    let meetingDurationtHours;
    let meetingDurationMinutes;

    if (durationMinutes >= 60) {
        meetingDurationtHours = Math.floor(durationMinutes / 60);
        meetingDurationMinutes = durationMinutes % 60;
    } else {
        meetingDurationtHours = 0;
        meetingDurationMinutes = durationMinutes;
    }

    // determine meetingEndHour and meetingEndMinutes
    let meetingEndHour = meetingStartHour + meetingDurationtHours;
    let meetingEndMinutes = meetingStartMinutes + meetingDurationMinutes;
    if (meetingEndMinutes >= 60) {
        meetingEndHour++;
        meetingEndMinutes = meetingEndMinutes % 60;
    }

    // create strings representing meetingStart and meetingEnd
    let meetingStart = `${meetingStartHour.toString().padStart(2, "0")}:${meetingStartMinutes.toString().padStart(2, "0")}`;
    console.log(`Meeting starts at ${meetingStart}`);

    // pad strigns for consistent format
    let meetingEnd = `${meetingEndHour.toString().padStart(2, "0")}:${meetingEndMinutes.toString().padStart(2, "0")}`;
    console.log(`Meeting ends at ${meetingEnd}`);
    // compare meetingStart with dayStart
    if (meetingStart < dayStart) {
        console.log("false");
        return false;
    } else if (meetingStart > dayEnd) {
        console.log("false");
        return false;
    }

    // compare meetingNEd with dayEnd
    else if (meetingEnd > dayEnd) {
        console.log("false");
        return false;
    }
    console.log(true);
}

console.log("\n\n\n-------START-------");
scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false
console.log("-------END-------");