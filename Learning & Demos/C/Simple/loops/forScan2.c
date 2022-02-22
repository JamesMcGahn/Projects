#include <stdio.h>
int main() {
    int robotSum = 0;
    int numOfBots = 0;
    int i;
    printf("enter number of bots\n");
    scanf("%d", &numOfBots);
    for(i =0; i < numOfBots; i++){
        int enginePower = 0;
        int resistance = 0;
        int weight = 0;
        int height = 0;
        int total = 0;
        printf("enter height, weight, engine power and resistance for Bot #%d \n", i+1);
        scanf("%d%d%d%d",&height,&weight,&enginePower,&resistance);
        total = total + (enginePower+resistance)*(weight-height);
        robotSum = robotSum + total;
    }
    printf("total robot power: %d\n", robotSum);
    return 0;
}