// Nickname 유효성 검사
$(document).ready(function(){
    $('#user_nickname').blur(function(){
        var nickname = $(this).val().trim();
        var message1 = $('#nickname_message');

        if(nickname.length >= 3 && nickname.length <= 20 && /^[a-zA-Z0-9\uAC00-\uD7A3]+$/.test(nickname)){
            message1.text('사용 가능한 닉네임입니다.');
            message1.css('color', 'green');
        } else {
            message1.text('공백없이 문자와 숫자로만 3자 이상 20자 이내로 입력하세요.');
            message1.css('color', 'red');
        }
    });
});

// Email 유효성 검사
$(document).ready(function () {
    $('#user_email').blur(function (){
        validateEmail();
    });

});

function validateEmail() {
    var emailInput = $('#user_email');
    var emailMessage = $('#email_message');

    var email = emailInput.val();

    // 이메일에 대한 유효성 검사
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
        emailMessage.text('유효한 이메일 주소입니다.');
        emailMessage.css('color', 'green');
    } else {
        emailMessage.text('올바른 형식의 이메일을 입력해 주세요. ex) goinout@gmail.com');
        emailMessage.css('color', 'red');
    }
}

// Password 1,2 유효성 검사
$(document).ready(function(){
    $('#user_pwd1').blur(function(){
        validatePassword();
    });

    $('#user_pwd2').blur(function(){
        checkPasswords();
    });
});

function validatePassword() {
    var password = $('#user_pwd1').val().trim();
    var pwdMessage = $('#pwd1_message');

    if(/^(?=.*[a-zA-Z0-9])(?=.*[~!@#$%^&*()_+|<>?:{}-]).{3,20}$/){
        pwdMessage.text('사용 가능한 비밀번호입니다.');
        pwdMessage.css('color', 'green');
    } else {
        pwdMessage.text('공백없이 문자, 숫자, 특수문자로만 3자 이상 20자 이내로 입력하세요.');
        pwdMessage.css('color', 'red');
    }
}

function checkPasswords() {
    var password1 = $('#user_pwd1').val();
    var password2 = $('#user_pwd2').val();
    var message = $('#password_match_message');

    if (password1 === password2) {
        message.text('입력한 비밀번호가 같습니다.');
        message.css('color', 'green');
    } else {
        message.text('입력한 비밀번호와 다릅니다. 동일하게 입력해 주세요.');
        message.css('color', 'red');
    }
}



