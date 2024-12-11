import { database, ref, set } from './firebase-config.js';

document.addEventListener("DOMContentLoaded", () => {
    const saveLinks = document.getElementById("links-form");
    const saveContent = document.getElementById("save-content");

    // Save links to Firebase
    saveLinks.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            calendar: document.getElementById("calendar-link").value,
            importantLinks: document.getElementById("important-links").value,
            deadlines: document.getElementById("deadlines").value,
            exams: document.getElementById("exams").value,
        };
        set(ref(database, "links"), data)
            .then(() => alert("Links updated successfully!"))
            .catch((error) => alert("Error: " + error.message));
    });

    // Save content to Firebase
    saveContent.addEventListener("click", () => {
        const content = document.getElementById("content-editor").value;
        set(ref(database, "content"), content)
            .then(() => alert("Content updated successfully!"))
            .catch((error) => alert("Error: " + error.message));
    });
});
