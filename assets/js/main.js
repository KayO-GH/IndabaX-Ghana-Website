CATEGORY_TO_ICON = {
    'Theory': "ion-ios-book",
    "Natural language processing": "ion-android-chat",
    "Lightning talk": "ion-flash",
    "Vision": "ion-eye",
    "Speech": "ion-mic-a",
    "Application": "ion-settings"
};

INFO = {
    'Moustapha Cisse':
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
      description: ' '
     },
    'Darlington Akogo':
    { imagePath: './assets/images/speakers/darlington.jpg',
     affiliation: 'Founder, MinoHealth AI Labs',
     linkedinProfile: 'https://www.linkedin.com/in/darlington-a-akogo-8628b78b/',
     description: ' ' 
    },
    'Stephen Opoku-Anokye, PhD':
    { imagePath: './assets/images/speakers/stephen.jpeg',
     affiliation: 'Business Analytics Consultant, Barrachd',
     linkedinProfile: 'https://www.linkedin.com/in/nanayaw95/',
     description: ' '
    },
    'Delali Agbenyegah':
    { imagePath: './assets/images/organisers/delali.jpeg',
     affiliation: 'Director of Data Science & Analytics, EXPRESS',
     linkedinProfile: 'https://www.linkedin.com/in/delaliagbenyegah/',
     description: ' '
    },
    'Danielle Belgrave':
    { imagePath: './assets/images/speakers/danielle.jpeg',
     affiliation: 'Researcher, Microsoft',
     linkedinProfile: 'https://www.linkedin.com/in/danielle-belgrave-704157107/',
     description: ' '
    },
};

PANEL = [
  "Dr. Alta De Waal",
  "Ismail Akhalwaya",
  "Dr. Jacques Ludik",
  "Dr. Herman Kamper",
  "Prof. Amit Mishra",
  "Prof. Sugnet Lubbe"
];

KEYNOTE = "Moustapha Cisse";

ORGANIZERS = {
  'Richard Ackon':
   { imagePath: './assets/images/organisers/richard.jpg',
   link: 'https://elanvb.github.io/CV/'},
  'Hannah Lormenyo':
   { imagePath: './assets/organisers/image.jpg',
     link: 'https://elanvb.github.io/CV/'},
  'Wayne Gakuo':
   { imagePath: './assets/organiser_data/arnu_pretorius/image.jpg',
   link: 'https://elanvb.github.io/CV/'},
};

// SPONSORS = [ [ './assets/images/sponsors/deeplearningindaba_com.PNG',
//     'http://www.deeplearningindaba.com' ],
//   [ './assets/images/sponsors/stonethree_com.png',
//     'http://www.stonethree.com' ],
//   [ './assets/images/sponsors/stonethreemining_com.jpg',
//     'http://www.stonethreemining.com' ],
//   [ './assets/images/sponsors/principa_co_za.png',
//     'http://www.principa.co.za' ],
//   [ './assets/images/sponsors/rezco_co_za.png',
//     'http://www.rezco.co.za' ],
//   [ './assets/images/sponsors/aerobotics_co.png',
//     'http://www.aerobotics.co' ],
//   [ './assets/images/sponsors/cortexlogic_com.png',
//     'http://www.cortexlogic.com' ],
//   [ './assets/images/sponsors/launchlab_co_za.png',
//     'http://www.launchlab.co.za' ],
//   [ './assets/images/sponsors/machineintelligenceafrica_org.png',
//     'http://www.machineintelligenceafrica.org' ],
//   [ './assets/images/sponsors/numberboost_com.png',
//     'http://www.numberboost.com' ],
//   [ './assets/images/sponsors/stochastic-consulting_com.png',
//     'http://www.stochastic-consulting.com' ],
//   [ './assets/images/sponsors/omnisient_com.png',
//   'http://www.omnisient.com' ],
//   [ './assets/images/sponsors/ambrite_ch.png',
//     'http://www.ambrite.ch' ] ]
// ;
/*
 * Change Navbar color while scrolling
 */

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

        var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");

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
                        $("<div />").addClass("col-xs-1")
                        .append(
                            $("<a />")
                            .append(
                                $("<i />").addClass(
                                    CATEGORY_TO_ICON[info[speaker].category]
                                ).attr({
                                    "data-toggle": "tooltip",
                                    "title": info[speaker].category
                                })
                            ) // append to a
                        ) // append to list
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-12")
                        .append(
                            $("<h5 />").text(info[speaker].affiliation)
                        ) // paragraph div
                        .append(
                            $("<p />").text(info[speaker].lectureHeading)
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
                                            "style": "text-transform: none;",
                                        }).text(
                                            info[speaker].description || ""
                                        )
                                      )
                                    )
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-footer")
                                    .append(
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

        if(speaker == KEYNOTE) {
          continue;
        }

        // add info to schedule
        $scheduleSection = $(".schedule .tab-content");
        // find title of this speaker and insert information (if not in tab zero)
        $scheduleSlot = $scheduleSection.find("h3.schedule-slot-title:containsi('" + info[speaker].lectureHeading + "')").closest(".schedule-slot-info");

        if($scheduleSlot.length > 0) {
            $slotInfo = $scheduleSlot.find("div.schedule-slot-info-content");

            $slotInfo.wrap($("<div />").addClass("col-xs-8"))
            // $scheduleSlot = $scheduleSlot.filter(function(index, $element) {
            //     return ($element.closest("#tab_zero") == null);
            // });

            $scheduleSlot.prepend(
                $("<div />").addClass("col-xs-4")
                .append(
                    $("<a />")
                    .append(
                        $("<img />").addClass("schedule-slot-speakers").attr({
                            "src": info[speaker].imagePath
                        })
                    )
                )
            );

            $slotInfo.append(
                $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker)
            );
        } else if(info[speaker].category && info[speaker].category.toLowerCase() == "lightning talk") {
            $scheduleSlot = $scheduleSection.find("div.row.lightning-speakers");
            $slot = $("<div />").addClass("col-xs-3").css({
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
                        // $("<h3 />").text(info[speaker].lectureHeading)
                    )
                );
            $scheduleSlot.append($slot);
            $scheduleSlot = $slot;
        }

        // console.log($scheduleSlot);
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
