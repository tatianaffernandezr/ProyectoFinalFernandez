async () => {
    const { value: email } = await Swal.fire({
    title: "Suscribite a nuestro Newsletter",
    input: "email",
    inputLabel: "Ingresa tu email",
    inputPlaceholder: "Te suscribiste exitosamente!",
  });
  if (email) {
    Swal.fire(`Entered email: ${email}`);
  }
}