function contacts()
{
    var dialog = document.querySelector('dialog.contacts');
    if(dialog.hasAttribute('hidden'))
    {
        dialog.removeAttribute('hidden');
    }
    dialog.show();
}

function contactsClose()
{
    var dialog = document.querySelector('dialog.contacts');
    if(!dialog.hasAttribute('hidden'))
    {
        dialog.setAttribute('hidden','true');
    }
}
function imageChange()
{
    let arr = ["img/1.jpg","img/2.png","img/3.png"];
    var img = document.querySelector('img.images');
    var i = 0;
    while ( i < 3) {
        if (arr[i] === img.getAttribute("src"))
        {
            if( i === 2)
            {
                img.setAttribute('src',arr[0]);
                i = 3;
            }
            else {
                img.setAttribute('src', arr[i + 1]);
                i = 3;
            }
        }
        i++
    }
}