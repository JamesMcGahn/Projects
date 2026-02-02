public class Zombie extends Enemy implements IZombie {
    public Zombie(int healthPoints, int attackDamage) {
        super(healthPoints, attackDamage);

    }

    @Override
    public void talk() {
        System.out.println("grrrrrrrrr!");
    }

    @Override
    public void specialAttack() {
        boolean didSpecialAttackWork = Math.random() < .50;
        if (didSpecialAttackWork) {
            setHealthPointsRemaining(getHealthPointsRemaining() + 2);
            System.out.println("Zombie regenerated 2hp");
        }
    }


    @Override
    public void battlestance() {
        System.out.println("The zombie is spreading a disease");
    }
}
