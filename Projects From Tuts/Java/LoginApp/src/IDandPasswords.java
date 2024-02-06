import java.util.HashMap;

public class IDandPasswords {

    HashMap<String, String> loginInfo = new HashMap<String, String>();

    IDandPasswords() {
        loginInfo.put("user1", "password");
        loginInfo.put("user2", "password");
        loginInfo.put("user3", "password");
    }

    protected HashMap<String, String> getLoginInfo() {
        return loginInfo;
    }
}
