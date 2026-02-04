import java.util.HashMap;
import java.util.Map;

public class MapsHashMapsDemo {
    public static void main(String[] args) {
        Map<String, String> stateAbbr = new HashMap<>();
        stateAbbr.put("California", "A");
        stateAbbr.put("New York", "NY");
        stateAbbr.put("Ohio", "OH");
        stateAbbr.put("Washington", "WA");
        System.out.println(stateAbbr.containsKey("New York"));
        System.out.println(stateAbbr.get("New York"));
        System.out.println(stateAbbr.containsValue("OH"));
        System.out.println(stateAbbr.putIfAbsent("Washington", "WA"));
        System.out.println(stateAbbr.putIfAbsent("Texas", "TX"));
        System.out.println(stateAbbr);
        System.out.println(stateAbbr.remove("New York"));
        System.out.println(stateAbbr.put("Pennsylvania", "PB"));
        System.out.println(stateAbbr);
        System.out.println(stateAbbr.replace("Pennsylvania", "PA"));
        System.out.println(stateAbbr);
        System.out.println(stateAbbr.size());

    }
}
