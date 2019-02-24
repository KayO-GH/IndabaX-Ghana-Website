CATEGORY_TO_ICON = {
    'Theory': "ion-ios-book",
    "Natural language processing": "ion-android-chat",
    "Lightning talk": "ion-flash",
    "Vision": "ion-eye",
    "Speech": "ion-mic-a",
    "Application": "ion-settings"
};

INFO = {
    'Danielle Belgrave, PhD':
    { imagePath: './assets/images/speakers/danielle.jpeg',
     affiliation: 'Researcher, Microsoft',
     linkedinProfile: 'https://www.linkedin.com/in/danielle-belgrave-704157107/',
     description: " "
    },
    'Darlington Akogo':
    { imagePath: './assets/images/speakers/darlington.jpg',
     affiliation: 'Founder, MinoHealth AI Labs',
     linkedinProfile: 'https://www.linkedin.com/in/darlington-a-akogo-8628b78b/',
     description: "Darlington Ahiale Akogo is the Founder, C.E.O and Director of Artificial Intelligence at minoHealth. He's also a Board Advisor and Ambassador at AI Expo Africa, the largest business focused AI community in Africa (http://aiexpoafrica.com/). Darlington Ahiale Akogo also heads minoHealth AI Labs where they research and apply Artificial Intelligence to fields like Biotechnology, Neuroscience, Optometry, Epidemiology, Dietetics/Nutrition and Agriculture. And with Gudra AI Studio, they explore Artificial Intelligence applied to general domains like Energy, Art, Education and Linguistics. <br><br> Darlington Ahiale Akogo is also an Artificial Intelligence advocate, communicator and mentor. He believes Artificial Intelligence can solve a lot of problems plaguing Africa and being proactive is necessary in the Age of Artificial Intelligence and the 4th Industrial Revolution. So Darlington advocates, teaches and communicates Artificial Intelligence through seminars, lectures, interviews, writings and mentorships. He was a research presenter at NeurIPS 2018, the largest Conference on Artificial Intelligence in the World. And he was one of the speakers at the AI Expo Africa 2018 in Cape Town, South Africa and Next Einstein Forum’s Africa Science Week. He was also a participant in Massachusett Institute of Technology(MIT)'s Global Community BioSummit 2018. His research paper ‘ScaffoldNet: Detecting and Classifying Biomedical Polymer-Based Scaffolds via a Convolutional Neural Network’ has been accepted by the Future of Information and Communications Conference, which is sponsored by IEEE. Alongside great minds including Yoshua Bengio, who's celebrated as one of the Fathers of Deep Learning, Darlington is featured in and wrote for the book, 'Artificial Intelligence Simplified: 99 Use Cases And Expert Thoughts For Starters' which was put together by Data Science Nigeria. He also wrote reports and essays for Synapse Magazine ‘The Voice of African Artificial Intelligence & Data Science’ by AI Media."
    },
    'Delali Agbenyegah':
    { imagePath: './assets/images/organisers/delali.jpeg',
     affiliation: 'Director of Data Science & Analytics, EXPRESS',
     linkedinProfile: 'https://www.linkedin.com/in/delaliagbenyegah/',
     description: "Delali Agbenyegah is the head of Data Science and Analytics team at Express, a large US based Fashion Retailer where he leads a team of Data Scientists In developing and deploying machine learning and optimization models for Express. Prior to joining Express In 2018, Delali was a Predictive Analytics Manager at a large Credit Card and Loyalty Solutions company based in Columbus, Ohio in the USA where he leads a team of Data Scientists in developing and deploying Predictive Analytics Solutions for several Fortune 500 companies. He has over eight years of experience in Data Science, Statistical Consulting and Business Analytics, with strong focus in predictive modelling, data mining, machine learning, conjoint design and analysis, marketing campaign optimization and marketing mix modelling. Delali has worked with several retailors and banks to develop and Implement analytical solutions that has generated great customer acquisitions and Improved retention, leading to significance revenue growth for the brands."
    },
    'G. Ayorkor Korsah, PhD':
    {
        imagePath: './assets/images/speakers/ayorkoh.jpg',
        affiliation: 'Head of Computer Science Department and Senior Lecturer, Ashesi University',
        linkedinProfile: 'https://www.linkedin.com/in/g-ayorkor-korsah-1b09183/',
        description: "G. Ayorkor Korsah is a Senior Lecturer in the Department of Computer Science and Information Systems at Ashesi University, Ghana. Korsah’s scholarly interests include solving optimization problems, such as those that arise in robotics path-planning and coordination, and exploring the application of technology to various development-related problems. Korsah enjoys working with students at all levels. At Ashesi, she teaches and works on projects with undergraduate students in the areas of programming, algorithm design, robotics, and artificial intelligence.  To strengthen the pipeline of students entering university, she co-created and is part of a dedicated team that runs the annual Ashesi Innovation Experience (AIX), a pre-college enrichment program aimed at inspiring high school students by engaging them in leadership, design, robotics, engineering, entrepreneurship and the creative arts. <br><br> Korsah studied computer science and engineering at Dartmouth College, NH, USA and later completed her Ph.D. work in robotics at Carnegie Mellon University, PA, USA.  She co-founded, along with Ken Goldberg, the African Robotics Network (AFRON), an informal online community established to promote communication and collaborations to enhance robotics-related education, research, and industry on the continent."
    },
    'Moustapha Cisse, PhD':
    { imagePath: './assets/images/speakers/moustapha.jpeg',
      // lectureInfoPath: './assets/speaker_data/ntombikayise_banda/lecture_info.txt',
      // lectureHeading: 'Multimodal Emotion Recognition',
      // lectureAbstract:
      //  [ 'During communication, research shows that a large portion of the message is conveyed through emotional displays, with the content of the message accounting for approximately 7%. Moreover, human brains make use of these complementary emotional displays such as facial expressions, vocal expressions, and body postures to resolve any decision ambiguities and infer reliable emotion decisions. This talk will explore how computers can emulate humans by making use of visual, audio and bio-signal modalities to recognize complex emotions using variants of recurrent neural networks' ],
      // categoryInfoPath: './assets/speaker_data/ntombikayise_banda/category.txt',
      /// category: 'Vision',
      // affiliationInfoPath: './assets/speaker_data/ntombikayise_banda/affiliation.txt',
      affiliation: 'Head of Google AI Center, Accra. Founder and Director of AMMI at AIMS',
      linkedinProfile: 'https://www.linkedin.com/in/moustapha-cisse/', 
      // vidLink: 'https://www.youtube.com/embed/jzCwsq9xDjY'
      description: "."
     },
};

KEYNOTE = "Moustapha Cisse";


$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).load(function(){
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

    if(top>10){
        $('#site-nav').addClass('navbar-solid');
    } else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*
 * SmoothScroll
 */

smoothScroll.init();

/*
 * Add Speakers to html
 */


function populateSpeakerInfo(info) {
    var count = 0;
    var $row_div;

    // add info to speakers section
    for(speaker in info) {
        if(info[speaker].imagePath == null || speaker.toUpperCase() == "MORE SPEAKERS TBC") {
          continue;
        }

        var id = "-" + speaker.toLowerCase().replace(".", "").replace(",", "").split(" ").join("-");

        if(count % 3 == 0) {
            $row_div = $("<div />").addClass("row");
        }
        count++;

        $row_div.append(
            $("<div />").addClass("col-md-4")
            .append(
                $("<div />").addClass("speaker")
                .append(
                    $("<figure />")
                    .append(
                        $("<a />").attr({
                            "data-target": ("#myModal" + id),
                            "data-toggle": "modal"
                        })
                        .append(
                            $("<img />").attr({
                                "src": info[speaker].imagePath,
                                "data-toggle": "tooltip",
                                "title": "Click for more info"
                            })
                        ) // append to a
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-9 col-xs-push-1")
                        .append(
                            $("<h4 />").text(speaker)
                        ) // heading div
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-12")
                        .append(
                            $("<h5 />").text(info[speaker].affiliation)
                        ) // paragraph div   
                    ) // append to figure
                    .append(
                        $("<div />").addClass("modal fade").attr({
                            "tabindex": "-1",
                            "id": ("myModal" + id),
                            "role": "dialog",
                            "aria-hidden": "true",
                            "aria-labelledby": "myModalLabel"
                        })
                        .append(
                            $("<div />").addClass("modal-dialog")
                            .append(
                                $("<div />").addClass("modal-content")
                                .append(
                                    $("<div />").addClass("modal-header")
                                    .append(
                                        $("<button />").addClass("close").attr({
                                            "aria-hidden": "true",
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("x")
                                    ) // append to modal header
                                    .append(
                                        $("<h4 />").attr({
                                            "id": "myModalLabel"
                                        })
                                        .text(speaker)
                                    ) // append to modal header
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-body")
                                    .append(
                                        $("<h4 />")
                                        .text(info[speaker].lectureHeading || "")
                                    ) // append to modal body
                                    .append(
                                      (
                                        $("<p />").attr({
                                            "style": "text-transform: none; font-style: normal; text-align: justify;",
                                        }).innerText = info[speaker].description || ""
                                      )
                                    )
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-footer")
                                    .append(
                                        $("<a />").addClass("btn btn-primary linkedin").attr({
                                            "type": "button",
                                            "href": info[speaker].linkedinProfile,
                                            "target": "_blank",
                                        })
                                        .text("LinkedIn Profile"),

                                        $("<button />").addClass("btn btn-primary").attr({
                                            "type": "button",
                                            "data-dismiss": "modal",
                                            "style": "background: #d89324"
                                        })
                                        .text("Close")
                                    ) // append to modal footer
                                ) // append to modal content
                            ) // append to modal dialog
                        ) // append to modal div
                    ) // append to figure
                ) // append to speaker div
            ) // append to col div
        );

        if(count % 3 == 2) {
            $("#speakers div.container").append($row_div);
        }
    }

    $("#speakers div.container").append($row_div);
}

function populateSponsors(sponsors) {
    var $row_div;
    var count = 0;
    var $logosDiv = $("#sponsors div.container div.logos");

    for(i in sponsors) {
        var sponsor = sponsors[i];

        if(count % 4 == 0) {
            $row_div = $("<div />").addClass("row");
        }

        $row_div.append(
            $("<div />").addClass("col-sm-3")
            .append(
                $("<a />").attr({
                    "href":sponsor[1],
                    "target": "_blank"})
                .addClass("sponsors-box")
                .append(
                    $("<img />").attr({
                        "src": sponsor[0],
                    })
                    .addClass("sponsor-logo")
                )
            )
        );

        if(count % 4 == 3) {
            $logosDiv.append($row_div);
        }
        count++;
    }

    $logosDiv.append($row_div);

    // console.log($logosDiv.html().toString());
}

// add case insensitive contains
$.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});

function populatePanelSpeakers(panel, info) {
  $scheduleSection = $(".schedule .tab-content");

  for(i in panel) {
    var speaker = panel[i];
    var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");


    $scheduleSlot = $scheduleSection.find("div.row.panel-speakers");
    $slot = $("<div />").addClass("col-xs-2").css({
      "height": "7.5em"
    })
    .append(
        $("<div />").addClass("text-center")
        .append(
            $("<img />").addClass("schedule-slot-speakers").attr({
                "src": info[speaker].imagePath
            }).css({
                "position": "absolute",
                "right": "50%",
                "transform": "translateX(+50%)"
            })
        )
    )
    .append(
        $("<div />").addClass("text-center")
        .append(
            $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker).css({
                "position": "absolute",
                "top": "70%",
                "transform": "translateY(-100%)",
                "right": "50%",
                "transform": "translateX(+50%)",
                "width": "100%"
            })
        )
    );

    $scheduleSlot.append($slot);
    $scheduleSlot = $slot;

    $scheduleSlot.attr({
        "data-target": ("#myModal" + id),
        "data-toggle": "modal"
    });

    $scheduleSlot.mouseenter(function() {
        $(this).css({
            "cursor": "pointer",
            "-webkit-transform": "scale(1.2)",
                "-ms-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    }).mouseleave(function() {
        $(this).css({
            "cursor": "default",
            "-webkit-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                    "transform": "scale(1)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    });
  }
}

function populateKeyNote(keynote, info) {
    var speaker = keynote;
    var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");

    var $scheduleSection = $(".schedule .tab-content");
    var $keynoteSlot = $scheduleSection.find("div.keynote");
    var $heading = $keynoteSlot.find("h3.schedule-slot-title:containsi('" + info[speaker].lectureHeading + "')");
    var $headingDiv = $("<div />").addClass("col-xs-9");

    var $newDiv = $heading.wrap($headingDiv);
    $newDiv.append(
        $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker)
    );

    $keynoteSlot.prepend(
        $("<div />").addClass("col-xs-3")
        .append(
            $("<a />")
            .append(
                $("<img />").addClass("schedule-slot-speakers").attr({
                    "src": info[speaker].imagePath
                })
            )
        )
    );

    $keynoteSlot.attr({
        "data-target": ("#myModal" + id),
        "data-toggle": "modal"
    });

    $keynoteSlot.mouseenter(function() {
        $(this).css({
            "cursor": "pointer",
            "-webkit-transform": "scale(1.2)",
                "-ms-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    }).mouseleave(function() {
        $(this).css({
            "cursor": "default",
            "-webkit-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                    "transform": "scale(1)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    });
}

function populateOrganizers(organizers) {
  var $row_div = $("<div />").addClass("row");
  var count = 1;

  for(speaker in organizers) {
    $organizerSection = $(".about .container");

    $slot = $("<div />").addClass("col-xs-3")
    .append(
      $("<div />").addClass("speaker")
      .append(
        $("<figure />")
        .append(
          $("<a />").attr({
            "href": organizers[speaker].link,
            "target": "_blank"
          })
          .append(
            $("<img />").attr({
              "src": organizers[speaker].imagePath
            })
            .attr(
              (
                organizers[speaker].link?
                {
                  "data-toggle": "tooltip",
                  "title": "click me!"
                }
                :{}
              )
            )
          ) // append to a
        ) // append to figure
        .append(
          $("<div />").addClass("col-xs-12")
          .append(
              $("<h4 />").text(speaker)
          ) // heading div
        ) // append to figure
      )
    );

    $row_div.append($slot);

    if(count % 4 == 0) {
        $organizerSection.append($row_div);
        $row_div = $("<div />").addClass("row");
    }
    count++;

  }

  $organizerSection.append($row_div);

}

// populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
// populatePanelSpeakers(PANEL, INFO);
// populateKeyNote(KEYNOTE, INFO);
// populateOrganizers(ORGANIZERS);

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
