const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    
    const formElements = event.currentTarget.elements;

    const formEmail = formElements.email.value;
    const formPassword = formElements.password.value;

    let formData;

    if (!formEmail || !formPassword) {

        alert("Fields must be filled!");
        
    } else {
      formData = {
        email: formEmail,
        password: formPassword,
      };

      console.log(formData);

      form.reset();
    };

   event.preventDefault();

};

