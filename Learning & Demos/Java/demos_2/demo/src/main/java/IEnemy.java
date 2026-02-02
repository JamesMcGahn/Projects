public interface IEnemy {

    int getId();

    void talk();

    void attack();

    void specialAttack();

    int getHealthPointsRemaining();

    void setHealthPointsRemaining(int healthPointsRemaining);

    int getAttackDamage();

    void setAttackDamage(int attackDamage);


}
