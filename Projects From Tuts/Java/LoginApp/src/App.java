public class App {
    public static void main(String[] args) throws Exception {
        IDandPasswords iDandPasswords = new IDandPasswords();
        LoginPage loginPage = new LoginPage(iDandPasswords.getLoginInfo());
    }
}
