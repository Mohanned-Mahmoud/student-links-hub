onValue(contentRef, (snapshot) => {
    if (snapshot.exists()) {
        const content = snapshot.val();
        console.log("Fetched content:", content);
        document.querySelector("main").innerHTML = `<p>${content}</p>`;
    } else {
        console.log("No content available.");
        document.querySelector("main").innerHTML = `<p>No calendar content available.</p>`;
    }
});
