@RestResource(urlMapping='/GoogleFormIntegration/*')
global with sharing class GoogleFormIntegration {

    @HttpPost
    global static void handleFormSubmission() {
        RestRequest req = RestContext.request;
        String requestBody = req.requestBody.toString();

        // Parse the incoming JSON payload
        Map<String, Object> formData = (Map<String, Object>) JSON.deserializeUntyped(requestBody);


        // Extract form data
        String name = (String)formData.get('name');
        String email = (String)formData.get('email');
        String phoneNumber = (String)formData.get('phoneNumber');
        String subject = (String)formData.get('subject');

        // Create Google Contact Form record
        myNp28__Google_Contact_Form__c contactForm = new myNp28__Google_Contact_Form__c();
        contactForm.Contact_Name__c = name;
        contactForm.Email__c = email;
        contactForm.Phone_Number__c = phoneNumber;
        contactForm.Subject__c = subject;

        insert contactForm;
    }
}