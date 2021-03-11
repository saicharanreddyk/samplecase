public class OMComponentUtil {
    
    @AuraEnabled
    public static boolean isLightning(){
        string theme = UserInfo.getUiThemeDisplayed();
        system.debug('theme'+theme);
        boolean IsLightning = false;
       
        if(theme == 'Theme4d') 
        {
            IsLightning = true;
        }
       
                
        return IsLightning;
    }
    
    
}