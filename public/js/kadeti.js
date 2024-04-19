const openCardModal = (caller) => {
    let strTitle = caller.parentElement.getElementsByClassName("card-title")[0].innerText
    let strWholeText = caller.parentElement.getElementsByClassName("card-text")[0].innerText

    document.getElementById("modal-body-text").innerText = strWholeText;
    document.getElementById("modal-title-text").innerText = strTitle;
}

function copyToClipboard() {
    
    navigator.clipboard.writeText(document.getElementById("modal-body-text").innerText)

    //prikazi "toast" odnosno kratko obavestenje
    const mToast = new bootstrap.Toast(
        document.getElementById("my-toast"),
        "bottom-0 end-0"
    );
    mToast.show();
    window.setTimeout(() => {
        mToast.hide()
    }, 1500)
}

const search = () => {
    let term = document.getElementById("my-search-field").value

    let mainEl = $('#main-content')
    if (term.length !== 0) {

        let foundElements =$('.card-title:contains("'+ term +'")')
        mainEl.html('')

        foundElements.each(function() {
            mainEl.append($(this).parent().parent())
        })
    } else if (term.length === 0) {
        mainEl.html(mainContent)
    }
}