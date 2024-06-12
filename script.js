

function openform(){
    document.getElementById("EnquireSection").style.display = "block";
    document.getElementById("html").style.opacity = "0.1";
    document.getElementById("EnquireSection").style.opacity = "1";
}

function submitform(){
    const info = document.getElementById("enquire");
    let name = (info.elements["name"]).value;
    let email = (info.elements["email"]).value;
    let enquiry = (info.elements["enquiry"]).value;


    emailjs.send("service_zko5yuh","template_hq7voyf",{
        to_name: name,
        message: enquiry,
        email: email,
        }, "_fC1jhZcfXnMvi2yl").then(
            (response) => {
                
                alert("Enquiry logged!");
            },
            (error) => {
                alert("Please retry");
            },
        );
    

}