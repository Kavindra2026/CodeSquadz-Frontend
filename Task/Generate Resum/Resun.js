var company, name, date, email, sdate, jtitle, phone, sal, Hrname;
function resume() {
  company = prompt("Enter Company Name");
  name = prompt("enter Name");
  date = prompt("Enter Date");
  email = prompt("Enter email");
  sdate = prompt("Enter  Strating date");
  jtitle = prompt("Enter  Job Title");
  phone = prompt("Enter  Phone Number");
  sal = prompt("Enter  salary");
  Hrname = prompt("Enter HR Name");
  var temp = document.querySelectorAll(".offer-letter");
  temp[0].innerHTML = `<div class="header">
      <h2>${company}</h2>
      <p>Address Line 1, Address Line 2</p>
      <p>Phone: ${phone}</p>
    </div>

    <hr />

    <div class="content">
      <p>Date: ${date} </p>
      <p>To,</p>
      <p>
        <strong>${name}</strong><br />
        [Candidate Address]
      </p>
      <p>Subject: ${jtitle}</p>
      <p>Dear ${name},</p>
      <p>
        We are delighted to extend to you this formal offer of employment for
        the position of <strong>${jtitle}</strong> at
        <strong>${company}</strong>.
      </p>
      <p>
        Your expected start date will be <strong>${sdate}</strong>. You will
        be compensated with a salary of <strong>${sal}</strong> per
        annum and will be reporting to ${Hrname}.
      </p>
      <p>
        This offer is contingent upon the successful completion of all company
        requirements and background checks.
      </p>
      <p>
        Please sign and return this letter to confirm your acceptance by
        <strong>[Acceptance Deadline]</strong>.
      </p>
      <p>We look forward to welcoming you aboard!</p
      <div class="${name}">
        <p>Sincerely,</p>
        <p><strong>${Hrname}</strong></p>
        <p>${company}</p>
      </div>
    </div>
    <hr /> `;
}
