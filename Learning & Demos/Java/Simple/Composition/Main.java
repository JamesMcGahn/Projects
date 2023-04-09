public class Main {
    public static void main(String[] args) {
        ComputerCase theCase = new ComputerCase("2222", "dell", "240");
        Monitor theMonitor = new Monitor("27inch", "dell", 27, "1080p");
        Motherboard theMotherboard = new Motherboard("b1h2", "acer", 4, 5, "v3");
        PersonalComputer thePc = new PersonalComputer("M234", "Dell", theCase, theMonitor, theMotherboard);

        // thePc.getMonitor().drawPixel(10, 10, "red");
        // thePc.getMotherboard().loadProgram("Windows");
        // thePc.getComputerCase().pressPowerButton();

        thePc.powerUp();
    }
}