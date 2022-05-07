const profilePicture = document.getElementById("profile-picture");
const form = document.querySelector("form");
const inputProfilePicture = document.querySelector("input");

profilePicture.addEventListener("click", () => {
    inputProfilePicture.click();
})

inputProfilePicture.addEventListener("change", (e) => {
    // Vérification du fichier...
    
    form.submit();
})