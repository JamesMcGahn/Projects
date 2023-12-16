package Basics;

public class AccessModifiers {

    // Modifier || Class || Package || Subclass || World
    // public || Y || Y || Y || Y
    // protected || Y || Y || Y || N
    // no-modifier || Y || Y || N || N
    // private || Y || N || N || N

    public String publicString = "public";
    protected String protectString = "protected";
    String noMod = "no-mod";
    private String privString = "private";
}
