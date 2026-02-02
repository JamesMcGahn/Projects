public interface IHero {
    int getHeathPoints();

    int getHealthPointsRemaining();

    void setHealthPointsRemaining(int healthPointsRemaining);

    int getAttackDamage();

    Weapon getWeapon();

    void setWeapon(Weapon weapon);

    void equipWeapon();

    boolean isWeaponEquipped();

    void setWeaponEquipped(boolean isWeaponEquipped);

    void setAttackDamage(int attackDamage);

    void attack();
}
