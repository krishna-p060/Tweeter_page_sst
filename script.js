let post_btn= document.querySelector('.post-button');
let textArea= document.querySelector(".text");
let main_cont = document.querySelector(".main-cont");

post_btn.addEventListener("click", function(){
    if(textArea.value == ""){
        alert("Please enter some text");
        return;
    }
    generateTicket(textArea.value);
    console.log(textArea.value);
    textArea.value = "";
})


function generateTicket(post) {
    
    let ticketCont = document.createElement("div");
    ticketCont.className = "cards";
    ticketCont.innerHTML = `
    <div>
                        <img class="profile_image" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="">
                    </div>
                    <div class="details">
                        <div class="name">
                            <p>Krishna_Patidar  @krp5556</p>
                            <div>
                                <span class="edit-btn"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit"></span>
                                <span><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete-reg"></span>
                            </div>
                        </div>
                        <div class="content">
                            
                            <p class="text-area">${post} </p>
                        </div>
                        <div class="emoji">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="heart-reg">
                        </div>
                    </div>`
    console.log(ticketCont);
    main_cont.appendChild(ticketCont);

    let contentArea= ticketCont.querySelector(".text-area");
    let edit = main_cont.querySelector(".edit-btn img");
    let flag=0;
    edit.addEventListener("click", function(){
        console.log("edit");
        if(flag%2==0){
            contentArea.setAttribute("contenteditable","true");
            flag=1;
            console.log(flag);
        }
        else{
            contentArea.setAttribute("contenteditable","false");
            flag=0;
            console.log(flag);
        }
    })
}  