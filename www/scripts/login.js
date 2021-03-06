function validateAll() {
    var allValid = true;
    var $d = document.getElementById('validate').querySelectorAll('paper-input-decorator');
    Array.prototype.forEach.call($d, function (d) {
        d.isInvalid = !d.querySelector('input').validity.valid;
        if(d.isInvalid){
            allValid = false;
        }
    });
    return allValid;
}

function loginToApp() {
    if(validateAll() === true){
        console.log('do login');
        window.location = 'pages/homepage.html';
    }
}

var scope = document.querySelector('template[is=auto-binding]');

scope.userValidate = function (e) {
    var d = document.getElementById('usernameDeco');
    d.isInvalid = !e.target.validity.valid;
};

scope.passValidate = function (e) {
    var d = document.getElementById('passwordDeco');
    d.isInvalid = !e.target.validity.valid;
};