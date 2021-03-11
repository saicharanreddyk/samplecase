({
    managePartners : function(component, event, helper) {
        var value = helper.getParameterByName(component, event, 'inContextOfRef');
        var context = JSON.parse(window.atob(value));
        component.set("v.recordId", context.attributes.recordId);
        var recid = component.get("v.recordId");
        
        var action = component.get("c.isLightning");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var context;
                if(response.getReturnValue() == true){
                    //alert(context)
                    context = "c:quickContact";
                    var dismissActionPanel = $A.get("e.force:closeQuickAction");
                    dismissActionPanel.fire();    
                }    
                else {
                    //alert(context);
                    context = "c:quickContact";
                    
                }
               console.log('context'+context+response.getReturnValue());
                var evt = $A.get("e.force:navigateToComponent");
                evt.setParams({
                    componentDef : context,
                    componentAttributes: {
                        recordId : recid
                    }
                });
                evt.fire(); 
            }
        });
        $A.enqueueAction(action);	
    }
})
