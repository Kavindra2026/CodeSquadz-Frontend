var jname, jdate, jemail, jsal;
function generate() {
  jdate = prompt("enter date");
  jemail = prompt("enter email");
  jsal = prompt("enter sal");
  jname = prompt("enter name");
  var mytemp = document.querySelectorAll(".offer-letter");
  mytemp[0].innerHTML = `<div class="header">
      <h1>Offer Letter</h1>
      <p>Your Company Name</p>
    </div>
  <div class="details">
      <p><span class="bold">Date:</span> ${jdate}</p>
      <p><span class="bold">To:</span> ${jname}</p>
      <p><span class="bold">Email:</span> ${jemail}</p>
    </div>

    <div class="content">
      <p>Dear John,</p>
      <p>
        We are pleased to offer you the position of
        <strong>Software Engineer</strong> at [Your Company Name]. We were
        impressed with your background and skills, and we are excited to see the
        contributions you'll make to our team.
      </p>
      <p>
        Your starting salary will be <strong>${jsal} per annum</strong> and you
        will report directly to the Head of Engineering. Your expected start
        date is <strong>May 1, 2025</strong>.
      </p>
      <p>
        Please review the terms and conditions enclosed and confirm your
        acceptance by signing below.
      </p>
    </div>

    <div class="signature">
      <p>Sincerely,</p>
      <p><strong>Jane Smith</strong></p>
      <p>HR Manager</p>
    </div>

    <br /><br />

    <div class="signature">
      <p>__________________________</p>
      <p>${jname} (Signature)</p>
      <p>Date: ________________</p>
    </div>`;
}
