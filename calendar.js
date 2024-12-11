import { database, ref, onValue } from './firebase-config.js';

document.addEventListener("DOMContentLoaded", () => {
    const contentRef = ref(database, "content");
    
    // Fetch and display the content for the calendar
    onValue(contentRef, (snapshot) => {
        if (snapshot.exists()) {
            document.querySelector("main").innerHTML = `<p>${snapshot.val()}</p>`;
        } else {
            document.querySelector("main").innerHTML = `<p>No calendar content available.</p>`;
        }
    });
});
