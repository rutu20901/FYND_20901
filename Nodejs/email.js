var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rutujachavan20901@gmail.com',
        pass: 'Rutu@2001'
    }
});

var mailOptions = {
    from: 'rutujachavan20901@gmail.com',
    to: 'rutujachavan22901@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    
});