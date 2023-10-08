const afficherCvBtn = document.getElementById("afficher-cv");
    const cvContent = document.getElementById("cv-content");

    afficherCvBtn.addEventListener("click", () => {
        cvContent.style.display = "block"; // Afficher le contenu du CV
    });