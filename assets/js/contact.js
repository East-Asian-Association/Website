fetch('/assets/contacts.json')
    .then((response) => response.json())
    .then((data) => 
        data.members.map((member) => {
            var bild = ("bild" in member) == 0 ? "profile.png" : member.bild;
            $('#member-grid').append(
                "<div class='member'>" + 
                    "<div class='member-flex'>" +
                        "<div class='member-info'>" +
                            "<h2>" + member.post + "</h2>" +
                            "<h3>" + member.name + "</h3>" +
                            "<p>E-mail: " + member.gmail + "</p>" +
                        "</div>" + 
                        "<div class='member-photo'>" +
                            "<img src='/assets/img/" + bild + "'></img>" +
                        "</div>" +
                    "</div>" +
                "</div>"
            );
        }
    ));
