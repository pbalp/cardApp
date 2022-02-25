

function generateCardNumber(user) {
    cardNumber = "";
    expirationDate = getExpirationDate(user["role"]);
    
    let control = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, E: 7, F: 8, G: 9, H: 10, I: 11, J: 12, 
                    K: 13, L: 14, M: 15, N: 16, O: 17, P: 18, Q: 19, R: 20, S: 21, T: 22, U: 23, 
                    V: 24, W: 25, X: 26, Y: 27, Z: 28};
    email = user["email"];
    const email2 = email.split('@', 1);
    const email3 = email2[0].toUpperCase();
    number = 0;
    for (var i=0; i<email3.length; i++) {
        console.log("EMAIL i", email3[i]);
        console.log("CONTROL i", control[email3[i]]);
        number = number+control[email3[i]];
    }
    console.log("NUMBER ", number);
    sum = expirationDate.split('/');
    console.log("Suma Expiration Date ", sum);
    cardNumber = parseInt(sum[0]) + parseInt(sum[1]) + parseInt(sum[2]);
    universityCode = getUniversityCode(user["university"]);
    console.log("UNIVERSITY CODE", universityCode);
    roleCode = getRoleCode(user["role"]);
    console.log("ROLE CODE", roleCode);
    //cardNumber.concat("", universityCode).concat("", roleCode).concat("", number.toString());
    cardNumber2 = cardNumber+universityCode+roleCode+number.toString();
    console.log("CARD NUMBER", cardNumber2);

    return cardNumber2;
}

function getUniversity(university) {
    switch (university) {
        case "MUL": return "Hochschule Mittweida";
        case "TU BAF": return "Technische Universität Bergakademie Freiberg";
        case "UP": return "Universitatea din Petroșani";
        case "ULE": return "Universidad de León";
        case "TUC": return "Technical University of Crete";
        case "SUT": return "Politechnika Śląska";
        case "HSMW": return "Hochschule Mittweida";
        default: return null;
    }
}

function getExpirationDate(role) {
    year = new Date().getFullYear();


    if (role=="alum" || role=="student") {
        year=year+5;
    } else { 
        year=year+50; 
    }
    expirationDate = "31/06/"+year;
    return expirationDate.toString();
}

function getUniversityCode(university) {
    switch (university) {
        case "MUL": return "00";
        case "TU BAF": return "01";
        case "UP": return "02";
        case "ULE": return "03";
        case "TUC": return "04";
        case "SUT": return "05";
        case "HSMW": return "06";
        default: return null;
    }
}


function getRoleCode(role) {
    switch(role) {
        case "student": return "00";
        case "faculty": return "01";
        case "staff": return "02";
        case "affiliate": return "03";
        case "alum": return "04";
        default: return null;
    }
}

module.exports.generateCardNumber = generateCardNumber
module.exports.getExpirationDate = getExpirationDate
module.exports.getUniversity = getUniversity