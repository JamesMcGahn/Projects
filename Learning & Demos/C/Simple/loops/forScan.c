#include <stdio.h>
int main(){
    int x;
    printf("Enter the number of times table would you like to study: \n");
    scanf("%d", &x);
    for(int i=0; i<=10; i++){
        printf("%dx%d=%d\n",i,x,i*x);
    }
    return 0;
}