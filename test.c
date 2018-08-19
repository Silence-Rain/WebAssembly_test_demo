#include<stdio.h>
#include<time.h>
void fibonacci(int n)
{
	int first = 0, second = 1, next;
	for (int i = 0; i < n; i++)
	{
		next = first + second;
		first = second;
		second = next;
	}
}
int main()
{
	clock_t beg = clock();
	for (int i = 0; i < 1000000; i++)
		fibonacci(46);
	clock_t end = clock();
	printf("1m fibonacci(46) in c: %lu\n", end-beg);
}