function openDesigns() {
    document.getElementById("designModal").style.display = "block";
}

function closeDesigns() {
    document.getElementById("designModal").style.display = "none";
}

function showDesign(imagePath) {
    document.getElementById("bigDesignImage").src = imagePath;
    document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
    document.getElementById("bigDesignImage").src = "";
}
function openProject(project) {

    let title = "";
    let description = "";
    let technology = "";
    let image = "";

    if (project === "internship") {
        title = "Online Internship Portal";
        description = "An ADBMS project designed to help users check and manage internship application status.";
        technology = "HTML • CSS • Database";
        image = "images/internship.png.jpg";
    }

    if (project === "lock") {
        title = "Digital Door Locking System";
        description = "A PIN-controlled digital security system with separate user and owner functionality.";
        technology = "Digital System • PIN Security";
        image = "images/lock.png.jpg";
    }

    if (project === "portfolio") {
        title = "Personal Portfolio Website";
        description = "My personal portfolio website created to showcase my projects, skills, UI/UX work and creative journey.";
        technology = "HTML • CSS";
        image = "images/portfolio.png";
    }

    document.getElementById("projectTitle").innerText = title;
    document.getElementById("projectDescription").innerText = description;
    document.getElementById("projectTechnology").innerText = technology;
    document.getElementById("projectImage").src = image;

    document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}
function openCertificate(imagePath) {
    document.getElementById("certificateImage").src = imagePath;
    document.getElementById("certificateModal").style.display = "flex";
}

function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}
