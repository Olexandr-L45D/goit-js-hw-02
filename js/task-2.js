// 2
function formatMessage(message, maxLength) {
       return message.slice(0, maxLength) + "...";
    }
    
    console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
    console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"