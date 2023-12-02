const wrapper =  document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector("qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=170*170&data=&(qrValue)';
    qrImage.addEventListener("load",()=>{;
    wrapper.classList.add("active");
    console.log(qrValue);
    wrapper.classList.add("active");
});