document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const submitButton = document.querySelector(".btn");

    submitButton.addEventListener("click", async () => {
        const data = {
            cardHolderName: document.querySelector(".grid1").value,
            identification: document.getElementById("identification").value,
            phone: document.getElementById("phone").value
        };

        console.log(data);
        

        try {

            const response = await fetch("http://localhost:3000/card/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                alert("¡Datos enviados exitosamente!");
                console.log(result);
            } else {
                alert("Error al enviar datos. Intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Hubo un error de conexión.");
        }
    });
});
