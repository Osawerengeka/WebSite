function contacts()
{
    var dialog = document.querySelector('dialog.contacts');
   //  var dialog = document.createElement("dialog");
   // dialog.innerHTML("");
    if(dialog.hasAttribute('hidden'))
    {
        dialog.removeAttribute('hidden');
    }
    dialog.show();
}

function contactsClose()
{
    var dialog = document.querySelector('dialog.contacts');
    //  var dialog = document.createElement("dialog");
    // dialog.innerHTML("");
    if(!dialog.hasAttribute('hidden'))
    {
        dialog.setAttribute('hidden','true');
    }
}