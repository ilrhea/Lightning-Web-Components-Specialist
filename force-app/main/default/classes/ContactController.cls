public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            List<Contact> contacts = [SELECT Id, FirstName, LastName, Email FROM Contact with SECURITY_ENFORCED];
            return contacts;
        } catch (Exception e) {
            throw new AuraHandledException('Forced error');
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsBornAfter(Date birthDate) {
        return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE Birthdate > :birthDate
            WITH SECURITY_ENFORCED
       ];
    }
}