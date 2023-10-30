const generateCaptcha = () => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captchaLength = 6;
  let captcha = "";

  for(let i = 0; i < captchaLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    captcha += chars.charAt(randomIndex);
  }

  document.getElementById("captcha").innerHTML = captcha;
  document.getElementById("userInput").value = "";
  document.getElementById("result").innerHTML = "";
}

generateCaptcha();

const validateCaptcha = () => {
  let userInput = document.getElementById("userInput").value;
  let captcha = document.getElementById("captcha").innerHTML;
  let resultElement = document.getElementById("result");

  if(userInput === captcha) {
    resultElement.innerHTML = "Parábens, você não é um robô!";
    resultElement.style.color = "#601484";
  } else {
    resultElement.innerHTML = "Me parece que você é um robô. Tente Novamente.";
    resultElement.style.color = "red";
  }
}