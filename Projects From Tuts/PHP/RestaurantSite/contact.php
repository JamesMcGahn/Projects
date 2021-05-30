<?php 

define("TITLE", "Contact");
include('./includes/header.php'); ?> 

<div id="contact">
    <hr>
    <h1>Get in Touch</h1>

    <?php 

        // check for header injection
        function headerInjection($str) {
            return preg_match("/[\r\n]/", $str);
        }

        if(isset($_POST['contact_submit'])) {
            $name = trim($_POST['name']);
            $email = trim($_POST['email']);
            $msg = $_POST['message'];
    
            if(!$name || !$email || !$msg) {
                echo '<h4 class="error"> All fields are required.</h4><a href="contact.php" class="button block">Go back and try again</a> ';
                exit;
            }

            if(headerInjection($name) || headerInjection($email)) {
                die();
            }
            //email
            $to = "example@example.com";
            $subject = "$name sent you a message via your contact form";

            $message = "Name: $name \r\n";
            $message .= "Email: $email\r\n";
            $message .= "Message: $msg\r\n";
            //subscribe?

            if (isset($_POST['subscribe']) && $_POST['subscribe'] == 'Subscribe'){

                 $message .= "\r\n\r\n Add $email to mailing list \r\n";
            }

            $message = wordwrap($message, 72);

            // set headers Constant
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/plain; charset=iso-8859\r\n";
            $headers .= "From: $name <$email> \r\n";
            $headers .= "X-Priority: 1 \r\n";
            $headers .= "X-MSMail-Priority: High \r\n";
            
            mail($to, $subject, $message, $headers);

?>
    <h5>Thanks for contacting Franklin's!</h5>
    <p><a href="index.php" class="button block">&laquo; Go Back to Homepage</a></p>

<?php } else  { ?>
    <form method="post" action="" id="contact-form">
        <label for="name">Your name</label>
        <input type="text" name="name" id="name">
        <label for="email">Your email</label>
        <input type="email" name="email" id="email">
        <label for="message">and your message</label>
        <textarea name="message" id="message"></textarea>
     
        <input type="checkbox" name="subscribe" id="subscribe" value="Subscribe">
        <label for="subscribe">Subscribe to newsletter</label>

        <input type="submit" class="button next" name="contact_submit" value="Send Message">

    </form>

</div>

<?php } ?>
<hr>

<?php include('./includes/footer.php'); ?> 