public class Ogre extends Enemy implements IOgre {
    public Ogre(int healthPoints, int attackDamage) {
        super(healthPoints, attackDamage);

    }

    @Override
    public void talk() {
        System.out.println("Bar bar Bar Bar");
    }

    @Override
    public void specialAttack() {
        boolean didSpecialAttackWork = Math.random() < .05;
        if (didSpecialAttackWork) {
            setAttackDamage(getAttackDamage() + 4);
            System.out.println("Ogre attack increase 4");
        }
    }

    @Override
    public void stareDown() {
        System.out.println("Ogre is staring intently.");
    }
}
