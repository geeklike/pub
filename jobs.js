import $ from 'jquery';

let jobs = [{
    companies: [ 
        {   
            id: "J0",
            company: "Company",
            place: "Place​",
            title: "Job Description",
            time: "Start time - End time",
            notes : "Description of what I did",
            websites: [ 
                "https://website1.com",
                "https://website2.com"
            ]
        }
    ],
    freelance: [
    ]
}];

export function setJobs() {
    jobs.map(function (types) {
        $.each( types, function( type ) {
            if (types[type].length > 0)
            {
                types[type].map(function (entry) {
                    // Set tooltip
                    //var experience, years, months, tooltip;
                    var company =   "<span class='col-12 col-sm-auto company cta'>" + entry.company + "<span class='d-none d-sm-inline'>, </span></span>";
                    var place   =   "<span class='col-12 col-sm-auto place cta'>" + entry.place + "</span>";
                    var dash    =   "<span class='d-none d-lg-inline'> &ndash; </span>";
                    var title   =   "<span class='col-12 col-sm-auto title'>" + entry.title + "</span>";
                    var h3      =   "<h3>" + company + place + dash + title + "</h3>";
                    var website =   "";

                    if (entry.websites != null && entry.websites.length > 0)
                    {
                        var links  = "";
                        entry.websites.map(function(link) { 
                            var linkName = link.replace('https://', '').replace('http://', '');
                            links += "<a href='" + link + "' target='_blank'>" + linkName + "</a>, "; 
                        });

                        // Remove last comma
                        links = links.substring(0, links.length - 2);

                        website =  "<p class='col-12 websites'>" + links + "</p>";
                    }

                    var time    =   "<p class='col-12 time'>" + entry.time + "</p>";
                    var desc    =   "<p class='col-12'>" + entry.notes + "</p>";
                    var skills  =   "<h4 class='col-12'>Technologies used:</h4><ul class='skills'></ul>";

                    var info = "<div id='" + entry.id + "' class='" + type + "'>" + h3 + time + website + desc + skills + "</div>";

                    $('div#' + type).append(info);
                });
            }
        });
    });
}