var modal  = document.querySelector(".modal");
var modal2 = document.querySelector(".modal2");
var trigger  = document.querySelector(".login");
var trigger0 = document.querySelector(".openlogin");
var trigger2 = document.querySelector(".change-email");
var closeButton  = document.querySelector(".close-button");
var closeButton2 = document.querySelector(".close-button2");

function toggleModal() { console.log('toggleModal');
    modal.classList.toggle("show-modal");
    document.querySelector('.email-block input').focus();
	return false;
}
function toggleModal2() { console.log('toggleModal2');
    modal2.classList.toggle("show-modal");
	document.querySelector('.email-block input').focus();
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
    if (event.target === modal2) {
        toggleModal2();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
if (trigger0) {
	trigger0.addEventListener('click', toggleModal);
}
if (trigger2) {
	trigger2.addEventListener('click', toggleModal2);
	closeButton2.addEventListener("click", toggleModal2);
}
window.addEventListener("click", windowOnClick);

function answerSelectToggle(context) {
    var element = context;

    if (element.classList) {
        element.classList.toggle("selected");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("selected");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("selected");
        element.className = classes.join(" ");
    }
}

function toggle(element, klass) {
    var classes = element.className.match(/\S+/g) || [],
        index = classes.indexOf(klass);

    index >= 0 ? classes.splice(index, 1) : classes.push(klass);
    element.className = classes.join(' ');
}

// get all DOM element that we need for interactivity.

var mobmenuToggler =  document.getElementById('toggler');
var menu = document.getElementsByClassName('main-menu')[0];

// on button click job
mobmenuToggler.addEventListener('click', function(){
    toggle(menu, 'mob-menu');
});

function showComment(buttonContext) {
    var buttonToHide = buttonContext;
    var commentBlock = document.getElementById("commentar");
    buttonToHide.style.display = 'none';
    commentBlock.style.display = 'inline-block';
    return false
}


var FloatLabel = function () {

    // add active class and placeholder
    var handleFocus = function handleFocus(e) {
        var target = e.target;
        target.parentNode.classList.add('active');
        target.parentNode.classList.remove('notactive');
        target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };

    // remove active class and placeholder
    var handleBlur = function handleBlur(e) {
        var target = e.target;
        if (!target.value) {
            target.parentNode.classList.remove('active');
        }else{
            target.parentNode.classList.add('notactive');
		}
        target.removeAttribute('placeholder');
    };

    // register events
    var bindEvents = function bindEvents(element) {
        var floatField = element.querySelector('input');
        floatField.addEventListener('focus', handleFocus);
        floatField.addEventListener('blur', handleBlur);
    };

    // get DOM elements
    var init = function init() {
        var floatContainers = document.querySelectorAll('.float-container');

        for (var i = 0; i < floatContainers.length; i++) {
			if (floatContainers[i].querySelector('input').value) {
				//floatContainers[i].classList.add('active');
			}
            bindEvents(floatContainers[i]);
        }
    };

    return {
        init: init
    };
}();

FloatLabel.init();

