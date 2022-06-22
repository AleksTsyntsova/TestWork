document.querySelector(".call_btn").addEventListener('click', function() {
    document.querySelector(".modal").style.display = 'block';
});

document.querySelector(".btn_back").addEventListener('click', function() {
    document.querySelector(".modal").style.display = 'none';
    document.querySelector(".number_modal").style.border = "0";
        document.querySelector(".chekB").style.color = "#1C1C1C";
        document.querySelector(".chekB").style.textDecoration = "none";
        document.querySelector(".message_good").style.display = "none";
        document.querySelector(".number_modal").value = "";
        document.querySelector("#check").checked = 0;
});

document.querySelector(".btn_modal").addEventListener('click', function() {
    if (document.querySelector(".number_modal").value == ""){
        document.querySelector(".number_modal").style.border = "1px solid red";
    }else if (!(document.querySelector("#check").checked)){
        document.querySelector(".chekB").style.color = "red";
        document.querySelector(".chekB").style.textDecoration = "underline";
    }else{
        document.querySelector(".number_modal").style.border = "0";
        document.querySelector(".chekB").style.color = "#1C1C1C";
        document.querySelector(".chekB").style.textDecoration = "none";
        document.querySelector(".message_good").style.display = "block";

    }
});

document.querySelector(".menu_mob").addEventListener('click', function() {
    document.querySelector(".menu_mob_list").style.display = "block";
    document.querySelector(".menu_mob").style.display = "none";
    document.querySelector(".menu_btn_back").style.display = "block";
});



