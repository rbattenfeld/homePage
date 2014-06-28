<?php
//If the form is submitted
if(isset($_POST['submit'])) {
	//Check to make sure that the name field is not empty
	if(trim($_POST['First']) == '') {
		$hasError = true;
	} else {
		$First = trim($_POST['First']);
	}
	//Check to make sure sure that a valid email address is submitted
	if(trim($_POST['Email']) == '')  {
		$hasError = true;
	} else {
		$Email = trim($_POST['Email']);
	}
	//Check to make sure that the date field is not empty
	if(trim($_POST['Comments']) == '') {
		$hasError = true;
	} else {
		$Comments = trim($_POST['Comments']);
	}
	//If there is no error, send the email
	if(!isset($hasError)) {
		$emailTo = 'yourmail@website.com'; //Put your own email address here
		$subject = 'Email from your site'; //Put Email subject here
		$body = "First Name : $First \n\n Email : $Email  \n\n Comments: $Comments";
		$headers = 'From:Duster Template <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}
}
?>
<?php if(isset($hasError)) { //If errors are found ?>
  <p class="error">All fields are required.</p>
  <?php } ?>
  <?php if(isset($emailSent) && $emailSent == true) { //If email is sent ?>
  <p><strong>Email Sent Successfully. You are now being redirected to site.
  <div class="clear"></div>
  <img src="../img/forward.png" alt="" /></strong></p>
  <meta HTTP-EQUIV="REFRESH" content="2; url=http://minimalistgallery.com/template/duster/index.html">
  <p>
    <?php } ?>
  </p>