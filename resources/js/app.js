/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');


/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


require('./components/Nav/Nav');
require('./components/Requests/Requests');
require('./components/Forms/FormRequest');
require('./components/Forms/FormAnimal');
require('./components/Index/Index');

document.onkeydown = function(e)
    {
        if(event.keyCode == 123)
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
        {
            return false;
        }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))
    {
      return false;
    }
    }

    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
        });

