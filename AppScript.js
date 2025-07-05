function onFormSubmit(e) {
  try {
    // Get all response data
    var formResponse = e.response;
    var itemResponses = formResponse.getItemResponses();
    
    // Create payload object
    var payload = {};
    
    // Loop through each form item to map responses
    for (var i = 0; i < itemResponses.length; i++) {
      var itemResponse = itemResponses[i];
      var question = itemResponse.getItem().getTitle().toLowerCase();
      var answer = itemResponse.getResponse();
      
      // Map questions to your Salesforce fields
      if (question.includes('name')) {
        payload.name = answer;
      } else if (question.includes('email')) {
        payload.email = answer;
      } else if (question.includes('phone')) {
        payload.phoneNumber = answer;
      } else if (question.includes('subject')) {
        payload.subject = answer;
      }
    }
    
    // Send data to Salesforce
    var options = {
      'method': 'post',
      'contentType': 'application/json',
      'payload': JSON.stringify(payload),
      'muteHttpExceptions': true // To see error responses
    };
    
    var response = UrlFetchApp.fetch('https://orgfarm-0847e220c7-dev-ed.develop.my.salesforce-sites.com/services/apexrest/myNp28/GoogleFormIntegration/', options);
    Logger.log(response.getContentText());
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
  }
}
