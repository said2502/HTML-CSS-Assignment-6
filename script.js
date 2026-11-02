$(document).ready(function () {
    // Task 0: Confirm that jQuery has loaded and the DOM is ready.
    console.log("jQuery is ready!");

    // Task 1: Selectors, text, CSS, and themes.
    $("body").css("font-family", "'DM Sans', Arial, sans-serif"); // Tag selector
    $("#greeting").text("Welcome to My Interactive Portfolio!"); // ID selector
    $(".headline").css("color", "#5267df"); // Class selector

    $("#changeGreeting").on("click", function () {
        $("#greeting").text("Hello! Thanks for visiting my portfolio.");
    });

    $("#darkTheme").on("click", function () {
        $("body").addClass("dark-mode");
    });

    $("#lightTheme").on("click", function () {
        $("body").removeClass("dark-mode");
    });

    // Task 2: Visibility methods.
    $("#hideBtn").on("click", function () {
        $("#status, #funFacts").hide(300);
    });

    $("#showBtn").on("click", function () {
        $("#status, #funFacts").show(300);
    });

    $("#toggleBtn").on("click", function () {
        $("#status, #funFacts").toggle(300);
    });

    // Task 3: Fade methods.
    $("#fadeInBtn").on("click", function () {
        $(".gallery-item").stop(true, true).fadeIn(700);
    });

    $("#fadeOutBtn").on("click", function () {
        $(".gallery-item").stop(true, true).fadeOut(700);
    });

    $("#fadeToggleBtn").on("click", function () {
        $(".gallery-item").stop(true, true).fadeToggle(700);
    });

    // Task 4: Slide methods. The first panel demonstrates slideDown,
    // the second demonstrates slideToggle, and the third demonstrates slideUp.
    $(".slide-heading").each(function (index) {
        const heading = $(this);
        const panel = heading.next(".slide-panel");
        const indicator = heading.find("span");

        heading.on("click keypress", function (event) {
            if (event.type === "keypress" && event.which !== 13 && event.which !== 32) {
                return;
            }
            if (event.type === "keypress") event.preventDefault();

            if (index === 0) {
                panel.stop(true, true).slideDown(400);
                heading.attr("aria-expanded", "true");
                indicator.text("−");
            } else if (index === 2) {
                panel.stop(true, true).slideUp(400);
                heading.attr("aria-expanded", "false");
                indicator.text("+");
            } else {
                panel.stop(true, true).slideToggle(400, function () {
                    const isOpen = panel.is(":visible");
                    heading.attr("aria-expanded", String(isOpen));
                    indicator.text(isOpen ? "−" : "+");
                });
            }
        });
    });

    // Task 5: Add and remove list elements.
    function getSkillInput() {
        return $("#newSkill").val().trim();
    }

    function createSkillItem(skill) {
        // Use text() to safely create text instead of inserting raw HTML.
        return $("<li>").text(skill);
    }

    $("#addSkillBtn").on("click", function () {
        const skill = getSkillInput();
        if (!skill) {
            $("#skillMessage").text("Please enter a skill before adding it.");
            return;
        }
        $("#skillList").append(createSkillItem(skill));
        $("#newSkill").val("");
        $("#skillMessage").text("Skill added to the end of the list.");
    });

    $("#prependSkillBtn").on("click", function () {
        const skill = getSkillInput();
        if (!skill) {
            $("#skillMessage").text("Please enter a skill before adding it.");
            return;
        }
        $("#skillList").prepend(createSkillItem(skill));
        $("#newSkill").val("");
        $("#skillMessage").text("Skill added to the beginning of the list.");
    });

    $("#removeSkillBtn").on("click", function () {
        const lastSkill = $("#skillList li").last();
        if (lastSkill.length) {
            lastSkill.remove();
            $("#skillMessage").text("The last skill was removed.");
        } else {
            $("#skillMessage").text("There are no skills left to remove.");
        }
    });

    $("#newSkill").on("keypress", function (event) {
        if (event.which === 13) {
            event.preventDefault();
            $("#addSkillBtn").trigger("click");
        }
    });

    // Task 6: Change a link destination using attr().
    let showingLinkedIn = false;
    $("#changeLinkBtn").on("click", function () {
        if (!showingLinkedIn) {
            $("#socialLink").attr("href", "https://www.linkedin.com/").text("Visit LinkedIn");
            showingLinkedIn = true;
        } else {
            $("#socialLink").attr("href", "https://github.com/said2502").text("Visit my GitHub");
            showingLinkedIn = false;
        }
    });

    // Task 7: Read form values with val() and display them with text().
    $("#userName").on("input", function () {
        const name = $(this).val().trim();
        $("#liveName").text(name ? "Name: " + name : "Your name will appear here.");
    });

    $("#userEmail").on("input", function () {
        const email = $(this).val().trim();
        $("#liveEmail").text(email ? "Email: " + email : "Your email will appear here.");
    });

    $("#contactForm").on("submit", function (event) {
        event.preventDefault();
    });

    // Task 8: Animate skill bars between zero and their target widths.
    let skillsAnimated = false;
    $("#animateSkillsBtn").on("click", function () {
        const button = $(this);

        if (!skillsAnimated) {
            skillsAnimated = true;
            $(".skill-progress").each(function () {
                const targetWidth = $(this).attr("data-width");
                $(this).stop(true).animate({ width: targetWidth }, 1200);
            });
            button.text("Reset skills");
        } else {
            $(".skill-progress").stop(true).animate({ width: "0%" }, 700);
            skillsAnimated = false;
            button.text("Animate my skills");
        }
    });
});
