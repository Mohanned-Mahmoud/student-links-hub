document.addEventListener("DOMContentLoaded", () => {
    const backend = {
        links: {
            calendar: "calendar.html",
            importantLinks: "links.html",
            deadlines: "deadlines.html",
            exams: "exams.html",
        },
        content: "Default content for pages.",
    };

    const populateForm = () => {
        document.getElementById("calendar-link").value = backend.links.calendar;
        document.getElementById("important-links").value = backend.links.importantLinks;
        document.getElementById("deadlines").value = backend.links.deadlines;
        document.getElementById("exams").value = backend.links.exams;
        document.getElementById("content-editor").value = backend.content;
    };

    populateForm();

    document.getElementById("links-form").addEventListener("submit", (e) => {
        e.preventDefault();
        backend.links.calendar = document.getElementById("calendar-link").value;
        backend.links.importantLinks = document.getElementById("important-links").value;
        backend.links.deadlines = document.getElementById("deadlines").value;
        backend.links.exams = document.getElementById("exams").value;
        alert("Links updated successfully!");
    });

    document.getElementById("save-content").addEventListener("click", () => {
        backend.content = document.getElementById("content-editor").value;
        alert("Content updated successfully!");
    });
});
