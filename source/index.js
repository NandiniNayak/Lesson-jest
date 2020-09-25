function repeatMessage(message, repeatCount = 1){
    // check if repeatCount was assigned a falsey value
    if (!repeatCount){ 
        repeatCount = 1;
    }

    // check if repeatCount was assigned a string value
    if (typeof(repeatCount) == "string"){ 
        throw "'repeatCount' arg must be a number or nothing at all!";
    }

    // check if message was assigned a falsey or non-string value
    if (!message || typeof(message) != "string"){ 
        throw "'message' arg must be a string with content!";
    }

    let messageToShow = "";
    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message; 
    }
    return messageToShow;
}

module.exports = {
    repeatMessage
}