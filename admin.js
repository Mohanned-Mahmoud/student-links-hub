import { database, ref, set } from './firebase-config.js';

document.addEventListener("DOMContentLoaded", () => {
    const saveLinksForm = document.getElementById("links-form");
    const saveContentButton = document.getElementById("save-content");

    // Save links to Firebase
    saveLinksForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const linksData = {
            calendar: document.getElementById("calendar-link").value,
            importantLinks: document.getElementById("important-links").value,
            deadlines: document.getElementById("deadlines").value,
            exams: document.getElementById("exams").value,
        };
        set(ref(database, "links"), linksData)
            .then(() => {
                alert("Links updated successfully!");
            })
            .catch((error) => {
                alert("Error updating links: " + error.message);
            });
    });

    // Save content to Firebase
    saveContentButton.addEventListener("click", () => {
        const pageContent = document.getElementById("content-editor").value;
        set(ref(database, "content"), pageContent)
            .then(() => {
                alert("Content updated successfully!");
            })
            .catch((error) => {
                alert("Error updating content: " + error.message);
            });
    });
});
