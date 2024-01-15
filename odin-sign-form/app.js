const form = document.querySelector("form");
const formInps = document.querySelectorAll("[data-form]");

form.addEventListener("submit", (e) => {
  const isValidInps = Array.from(formInps).every(item => item.classList.contains('success'));

  if(!isValidInps) e.preventDefault();
  else { 
    console.log('success');
    formInps.forEach((inp) => {
      inp.value = "";
      inp.classList.remove('success');
      inp.classList.remove('error');
    });
  } 
});

formInps.forEach((input) => {
  input.addEventListener("input", (e) => {
    const inp = e.target;
    const errorP = input.parentElement.querySelector('p.error'); 

    if (inp.dataset.form === "name") {
      if (inp.value.trim() === "") setError(inp, 'field must be filled', errorP); 
      else setSucces(inp, errorP);
    }

    if (inp.dataset.form === "last") {
      if (inp.value.trim() === "") setError(inp, 'field must be filled', errorP); 
      else setSucces(inp, errorP);
    } 

    if (inp.dataset.form === "email") {
      const regEx = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      
      if (!regEx.test(inp.value)) { setError(inp, "the email is invalid", errorP) }
      else { setSucces(input, errorP) }
    } 

    if (inp.dataset.form === "tel") {
      const regEx = /(^\d{3}-\d{3}-\d{4}$)/;
      if (!regEx.test(inp.value)) { setError(inp, "the phone is invalid", errorP) }
      else { setSucces(input, errorP) }
    }

    let pass1 = document.querySelector('#pass-inp');
    let pass2 = document.querySelector('#pass2-inp');

    if(pass1.value === pass2.value) {
      if(!(pass1.value === "" || pass2.value === "")) {
        setSucces(pass1, pass1.parentElement.querySelector('p.error'));
        setSucces(pass2, pass2.parentElement.querySelector('p.error'));
      }
    } else {
      setError(pass2, pass2.parentElement.querySelector('p.error'), "passwords doesn't match")
    }
  });
});

function setError(input, msg, errorContainer) {  
  input.classList.add('error');
  input.classList.remove('success');

  errorContainer.textContent = msg;
}

function setSucces(input, errorContainer) {
  input.classList.remove('error'); 
  input.classList.add('success');

  errorContainer.textContent = "";
}