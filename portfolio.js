const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
      if (top > offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      }
    });
    var header = document.querySelector('.header')
    header.classList.toggle('sticky',window.scrollY>100);
  };
   let menubar = document.querySelector('#menu');
   let navbar= document.querySelector('.navbar');
   menubar.onclick=()=>
   {
     menubar.classList.toggle('bx-x')
     navbar.classList.toggle('active')
   }
</script>
  <!---java file end--->
           <script src=" https://smtpjs.com/v3/smtp.js"></script>     
           <script>
            function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "riqra2998@gmail.com",
        Password: "password",
        To: 'riqra2998@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact From Enquiry",
        Body: "Content of the email"
    }).then(
        message => alert(message)
    );
}
