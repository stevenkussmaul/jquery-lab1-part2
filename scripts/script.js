"use strict";

$(document).ready(() => {
    let tableNo;

    $(".form").hide();

    $(document).on("click", ".unreserved", (event) => {

        $(".form").show();

        tableNo = $(event.target);
        // console.log(event.target.tagName); 
        // console.log(`${tableNo.text()}`); 
        // console.log(`${tableNo.children().text()}`); 

        if (event.target.tagName === "P") {
        $(".form-table-num").text(`Table Number: ${tableNo.text()}`); 
        } else {
        $(".form-table-num").text(`Table Number: ${tableNo.children().text()}`);
        }
    
    });

    $(document).on("mouseenter", ".reserved", (event) => {
        if ($(event.target).attr("name") && $(event.target).attr("partySize")) {
        $(event.target).append(`
            <section class="tooltip">
                Name: ${$(event.target).attr("name")}
                Party Size: ${$(event.target).attr("partySize")}
            </section>
            `);
        }

    });
    
    $(document).on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
    });

    $(document).on("click", ".save-button, .form-x", (event) => {
        $(".form").hide();

        if ($(event.target).hasClass("save-button")) {
            tableNo.removeClass("unreserved").addClass("reserved");
            
            

            tableNo.attr("name", $("input").eq(0).val())
            tableNo.attr("partySize", $("input").eq(2).val());


            $("input").each(function() {
                $(this).val("");
            });
        }

    });

    $(document).on("mouseover",".unreserved", (event) => {
        $(event.target).fadeTo(500, 0.5);
    });
    $(document).on("mouseleave",".unreserved", (event) => {
        $(event.target).fadeTo(500, 1);
    });


});