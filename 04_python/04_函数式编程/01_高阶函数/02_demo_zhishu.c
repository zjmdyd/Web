#include <stdio.h>

#define TRUE 1
#define FLASE 0
#define N 100

void fun1();
void fun2();

int main() 
{
	fun1();

}

void fun1()
{
	int i, j, arr[N];
	for (int i = 0; i < N; ++i)
	{
		arr[i] = 1;
	}
	for (int i = 2; i < N; ++i)
	{
		if (arr[i])
		{
			// printf("i = %d\n", i);
			for (int j = 2; j*i < N; ++j)
			{
				// printf("i*j = %d\n", i*j);
				arr[i * j] = 0;
			}
		}
	}
	for (int i = 2; i < N; ++i)
	{
		if (arr[i])
		{
			printf("%d\n", i);
		}
	}
}

void fun2() 
{
	int i;	// i表示整数和对应的下标
	int j;	// j表示正要处理的质数 j之前的已处理j之后的未处理
	int k;	// k表示正在处理的j的倍数从2开始到j*k<N
	int a[N];	// 下标表示整数内容判断是否为质数
	int *p;	// 控制循环
	for (p = a; p < a+N; ++p)		// 初始化数组全是TRUE
	{
		*p = TRUE;	
	}
	a[0] = a[1] = FLASE;			// 设置前面两个不是质数的数的状态为FALSE
	i = 2;	// 从2开始
	while(i < N)	//找下一个质数
	{
		while(a[i++] == TRUE)
		{
			j = i-1;
			break;
		}
		for (k = 2; j*k < N; ++k)	// 处理质数的倍数
		{
			a[j * k] = FLASE;
		}
	}
	for (p = a; p < a + N; ++p)
	{
		if (*p == TRUE)
		{
			printf("%ld\n", p - a);
		}
	}
}

/*
gcc .c
./a.out
*/