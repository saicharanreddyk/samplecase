({
    createContact : function(component, event, helper) {
        event.preventDefault();
        var fields = event.getParam('fields');
        fields.AccountId = component.get("v.recordId");
        component.find('myForm').submit(fields);
    },
    
    handleSuccess: function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
		var navEvt = $A.get("e.force:navigateToSObject");
                        navEvt.setParams({
                            recordId: component.get("v.recordId"),
                            "slideDevName": "detail",
                            "isredirect": true
                        });        
                        navEvt.fire();
						component.find("spinnerIcon").set("v.class" ,'slds-hide');
    }
})