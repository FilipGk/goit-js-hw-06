// 1.Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
// 2.Podczas przesyłania formularza strona nie powinna się restartować.
// 3.Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// 4.Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// 5.Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { elements } = event.currentTarget;
  const formData = {};

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.tagName === "INPUT" && element.value === "") {
      alert("Uzupełnij wszystkie pola formularza");
      return;
    }
    if (element.tagName === "INPUT") {
      formData[element.name] = element.value;
    }
  }

  console.log(formData);
  form.reset();
});
