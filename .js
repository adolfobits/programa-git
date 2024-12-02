// Validación básica para el formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "usuario@ejemplo.com" && password === "123456") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir a otra página
      window.location.href = "catalogo.html";
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  });
  