public class Main {
    public static void main(String[] args) {
        Zombie zombie = new Zombie(50, 1);
        Ogre ogre = new Ogre(20, 3);

//        zombie.talk();
//        ogre.talk();
//        zombie.attack();
//        ogre.attack();
//        zombie.walkForward();
//        ogre.walkForward();
        System.out.println("There are " + Enemy.getNumberOfEnemies() + " waiting to join the battle area!");
        zombie.battlestance();
        ogre.stareDown();
//        battle(zombie, ogre);

        Weapon weapon = new Weapon("Sword", 5);
        Hero hero = new Hero(25, 1);
        hero.setWeapon(weapon);
        hero.equipWeapon();
        heroBattle(ogre, hero);

//        System.out.println(ogre.getNumberOfEnemies());
//        System.out.println(zombie.getNumberOfEnemies());
//        System.out.println(ogre.getId());
//        System.out.println(zombie.getId());
    }

    public static void heroBattle(Enemy enemy, Hero hero) {
        while (hero.getHealthPointsRemaining() > 0 && enemy.getHealthPointsRemaining() > 0) {
            System.out.println("_____________________________________________");
            enemy.specialAttack();
            System.out.println("Enemy: " + enemy.getHealthPointsRemaining() + "HP Left");
            System.out.println("Hero: " + hero.getHealthPointsRemaining() + "HP Left");
            enemy.attack();
            hero.setHealthPointsRemaining(hero.getHealthPointsRemaining() - enemy.getAttackDamage());
            hero.attack();
            enemy.setHealthPointsRemaining(enemy.getHealthPointsRemaining() - hero.getAttackDamage());

        }
        System.out.println("----------------------------------------");
        if (enemy.getHealthPointsRemaining() > 0) {
            System.out.println("ENEMY WINS");
        } else {
            System.out.println("HERO WINS");
        }
    }

    public static void battle(Enemy e1, Enemy e2) {
        e1.talk();
        e2.talk();
        while (e1.getHealthPointsRemaining() > 0 && e2.getHealthPointsRemaining() > 0) {
            System.out.println("_____________________________________________");
            e1.specialAttack();
            e2.specialAttack();
            System.out.println("Enemy 1: " + e1.getHealthPointsRemaining() + "HP Left");
            System.out.println("Enemy 2: " + e2.getHealthPointsRemaining() + "HP Left");
            e2.attack();
            e1.setHealthPointsRemaining(e1.getHealthPointsRemaining() - e2.getAttackDamage());
            e1.attack();
            e2.setHealthPointsRemaining(e2.getHealthPointsRemaining() - e1.getAttackDamage());
        }
        System.out.println("----------------------------------------");
        if (e1.getHealthPointsRemaining() > 0) {
            System.out.println("ENEMY 1 WINS");
        } else {
            System.out.println("ENEMY 2 WINS");
        }
    }
}
