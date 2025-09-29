let toastPlaceHolder;
let red = '#fdccccff';
let green = '#d0fcdaff';
let blue = '#d0d2fcff';
let fontBlue = '#151757ff';
let fontGreen = '#155724';
let fontRed = '#571515ff';
let success_icon = 'https://res.cloudinary.com/ddgfmkjjm/image/upload/v1759070440/checkIcon_hlzenc.png';
let info_icon = 'https://res.cloudinary.com/ddgfmkjjm/image/upload/v1759070440/info_gxzjhk.png';
let error_icon = 'https://res.cloudinary.com/ddgfmkjjm/image/upload/v1759070440/error_vfr6n9.png';


(function () {
    if (!document.getElementById('toast-style')) {
        let link = document.createElement('link');
        link.id = 'toast-style';
        link.rel = 'stylesheet';
        link.href = './toast.css';
        document.head.appendChild(link);
    }
    if (!document.getElementById('toast')) {
        toastPlaceHolder = document.createElement('div');
        toastPlaceHolder.id = 'toast';
        document.body.appendChild(toastPlaceHolder);
    } else {
        toastPlaceHolder = document.getElementById('toast');
    }
})();

function ShowToast(type = null, message = "No Message") {
    if (!type) throw new Error('Toast type is null');

    toastPlaceHolder.style.display = "flex";
    toastPlaceHolder.innerHTML = "";

    let toastbar = document.createElement("div");
    toastbar.classList.add("toastBar");
    toastbar.style.backgroundColor = 
        type.toLowerCase() === 'success' ? green : 
        type.toLowerCase() === 'info' ? blue : red;

    toastbar.innerHTML = `
        <img src="${type.toLowerCase() === 'success' ? success_icon : 
                     type.toLowerCase() === 'info' ? info_icon : error_icon}" 
             style="height:30px;width:30px;object-fit:cover"/>
        <p class="text" style="color:${type.toLowerCase() === 'success' ? fontGreen : 
                                      type.toLowerCase() === 'info' ? fontBlue : fontRed}">
            ${message}
        </p>
    `;

    toastPlaceHolder.append(toastbar);

    let textEl = toastbar.querySelector(".text");

    // slide down
    setTimeout(() => {
        toastbar.classList.add("slide");
        // expand bar
        setTimeout(() => {
            toastbar.classList.add("expand");
            //fade in text
            setTimeout(() => {
                textEl.classList.add("show");
                //fade out text
                setTimeout(() => {
                    textEl.classList.add("hide");
                    // collapse bar
                    setTimeout(() => {
                        toastbar.classList.remove("expand");
                        //slide up
                        setTimeout(() => {
                            toastbar.classList.remove("slide");
                        }, 500);
                    }, 500);
                }, 2000);
            }, 500);
        }, 300);
    }, 50);
}




