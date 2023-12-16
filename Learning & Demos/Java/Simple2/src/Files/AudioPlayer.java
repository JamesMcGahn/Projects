package Files;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

import javax.sound.sampled.*;

public class AudioPlayer {

    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            File file = new File("./src/Files/drumLoop.wav");
            AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
            Clip clip = AudioSystem.getClip();
            clip.open(audioStream);

            String response = "";
            while (!response.equals("Q")) {
                System.out.println("Q=quit, S=Stop, R=Reset, Q=Quit");
                System.out.println("Enter your response: ");
                response = scanner.next();
                response = response.toUpperCase();

                switch (response) {
                    case "P":
                        clip.start();
                        break;
                    case "S":
                        clip.stop();
                        break;
                    case "Q":
                        System.out.println("Goodbye");
                        break;
                    case "R":
                        clip.setMicrosecondPosition(0);
                        clip.start();
                        break;
                    default:
                        System.out.println("Not a valid response");
                }
            }

            clip.start();

        } catch (UnsupportedAudioFileException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();

        } catch (LineUnavailableException e) {
            e.printStackTrace();
        }
    }
}
