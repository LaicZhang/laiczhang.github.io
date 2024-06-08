---
title: 猴博士-C语言复习笔记
copyright: true
comment: true
mathjax: false
date: 2019-12-07 16:49:50
updated: 2020-07-01 23:15:20
tags:
  - 笔记
  - 编程语言
categories: 笔记
keywords: 笔记, c语言, 期末考试, 基础语法
permalink: My-Notes-on-C-Language/
description:
---

为了给学妹复习C语言而复习C语言。。。

用的IDE是老当益壮的DevC++，对课程中的部分代码进行了修改。

老规矩，在更新完后，如果需要md文件的可以在文末查看关键词。

<!-- more -->

# 1.C语言基本语句（上）

## 1.固定格式

```c
#include<stdio.h>

int main(){
 
 return 0;
}
```

## 2.printf语句

### 样例：printf语句

```c
#include<stdio.h>

int main(){
 printf("hello");
 printf(",");
 printf("world");
 printd("!");
 return 0;
}
```

输出结果：

```
hello,world!
```

### 加'\n',变成

```c
#include<stdio.h>

int main(){
 printf("hello\n");
 printf(",\n");
 printf("world\n");
 printf("!\n");
 return 0;
}
```

输出结果：

```txt
hello
,
world
!
```

### 加'\t',变成

```c
#include<stdio.h>

int main(){
 printf("hello\t");
 printf(",\t");
 printf("world\t");
 printf("!\t");
 return 0;
}
```

输出结果为：

```
hello   ,       world   !
```

## 3.用printf语句输出int、float、double、char 型数据

```c
int a=3;

float a=3.14; 

double a=3.14; 

char a='A';
```

### 样例1：输出int型数据

```c
#include<stdio.h>

int main(){
 int a=5,b,c,d,e,f;
 b = a + 2;
 c = b - a;
 d = a * c;
 e = a / d; //除
 f = a % d; //取模
 printf("a=%d,b=%d,c=%d,d=%d,e=%d,f=%d",a,b,c,d,e,f);
 return 0;
}
```

输出结果为：

```
a=5,b=7,c=2,d=10,e=0,f=5
```

### 样例2：输出double型数据

```c
#include<stdio.h>

int main(){
 double a,b,c,d;
 a = 3.67;
 b = 5.43;
 c = 6;
 d = (a + b + c) / 2;
 printf("a=%.2f,b=%.2f,c=%.2f,d=%.2f",a,b,c,d);
 return 0;
}
```

输出结果为：

```
a=3.67,b=5.43,c=6.00,d=7.55
```

### 样例3：输出char型数据

字符型可以加上或减去数字得到字符（对应ASCII码）

```c
#include<stdio.h>

int main(){
 char a='P',b='Z',c='H';
 a = a;
 b = a + 32;
 c = c + 32; //可写成c+=32
 printf("a=%c,b=%c,c=%c",a,b,c);
 return 0;
}
```

输出结果为：

```
a=P,b=p,c=h
```

## 4.用scanf 语句输入int、float、double、char型数据

### 输入int型样例

```c
int a,b;
scanf("%d%d",&a,&b);
```

###

```c
#include<stdio.h>

int main(){
 int a, b, c;
 scanf("%d%d",&a,&b);
 c = (a + b) / 2;
 printf("%d与%d的平均数为%d\n",a,b,c);
 return 0;
}
```

输入数据：

```
1 2
```

输出结果为：

```
1与2的平均数为1
```

### 输入float、double型样例

```c
float a;
double b;
scanf("%f%lf",&a,&b);
```

### 输入char型样例

```c
char a,b;
scanf("%c%c",&a,&b);
```

### 请编程序，输入一个大写字母，可以输出一个小写字母

```c
#include<stdio.h>

int main(){
 char a,b;
 scanf("%c",&a);
 b = a + 32;
 printf("%c的小写字母是%c",a,b);
 return 0;
}
```

键盘输入A，输出结果为：

```
A的小写字母是a
```

# 2.C语言基本语句（下）

## 5.putchar()、getchar()语句

```c
#include<stdio.h>

int main(){
 char a,b,c;
 a = getchar();
 b = getchar();
 c = getchar();
 a += 32;
 b += 32;
 c += 32;
 putchar(a);
 putchar(b);
 putchar(c);
 putchar('\n');
 return 0;
}
```

键盘输入

```txt
PANDA
```

输出结果为：

```txt
pan
```

## 6.$e^x$,$\log$等数学运算

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/1-1.png?x-oss-process=style/note)

### 1.给出三角形三边a、b、c的长，利用公式$area=\sqrt{s(s-a)(s-b)(s-c)}$求该三角形的面积area（$s=\frac{a+b+c}{2}$

```c
#include<stdio.h>

int main(){
 double a, b, c, s, area;
 scanf("%lf%lf%lf", &a, &b, &c);
 s = (a + b + c) / 2;
 area = sqrt(s * (s - a) * (s - b) * (s - c));
 printf("area=%lf\n", area);
 return 0;
}
```

键盘输入

```txt
3 4 5
```

输出结果为

```txt
area=6.000000
```

### 2.利用公式$x=\frac{-b \pm \sqrt{b^2-4ac}}{2a}$，求$a^2x+bx+c=0$的根，a,b,c由键盘输入，且$b^2-4ac>0$

```c
#include<stdio.h>

int main(){
 double a, b, c, d, x1, x2;
 scanf("%lf%lf%lf",&a,&b,&c);
 d = sqrt(b * b - 4 * a *c);
 x1 = (-b + d) / (2 * a);
 x2 = (-b - d) / (2 * a);
 printf("x1=%f,x2=%f",x1,x2);
 return 0;
}
```

键盘输入

```txt
1 2 1
```

输出结果为

```txt
x1=-1.000000,x2=-1.000000
```

# 3.选择语句

## 1.if语句

### 1.例1，输入一个整数，如果该数大于等于60小于80，则输出“及格”；如果大于80则输出“优秀”，如果该数不大于60，则输出“不及格”

```c
#include<stdio.h>

int main(){
 int a;
 scanf("%d", &a);
 if(a >= 60 && a < 80){
  printf("及格\n");
 }
 else if(a > 80){
  printf("优秀");
 }
 else{
  printf("不及格\n");
 }
 return 0;
}
```

键盘输入

```txt
60
```

输出结果为：

```txt
及格
```

### 2.例2，输入两个实数a、b，按数值由小到大的顺序输出这两个数

```c
#include<stdio.h>

int main(){
 double a,b,t;
 scanf("%lf%lf", &a, &b);
 if(a > b){
  t = a;
  a = b;
  b = t;
 }
 printf("%f<%f", a, b);
 return 0;
}
```

键盘输入：

```txt
2 3
```

输出结果为：

```txt
2.000000<3.000000
```

## 2.常见表达式

```txt
>
<
==  //等于
!=  //不等于
<=
>=
&&  //两边均满足
||  //两边满足一个
```

### 1.样例1，判断某年是否为闰年

请编一程序，判断某一年是否是闰年。（注：当年份不是100的倍数且是4的倍数时，该年是闰年；当年份是100的倍数且是400的倍数时，该年也是闰年）

```c
#include<stdio.h>

int main(){
 int year;
 scanf("%d", &year);
 if((year % 100 != 0 && year % 4 == 0) || year % 400 == 0){
  printf("%d年是闰年\n", year);
 }
 else{
  printf("%d年不是闰年\n", year);
 }
 return 0;
}
```

键盘输入

```txt
2013
```

输出结果为：

```txt
2013不是闰年
```

### 2.样例2，输入一个字符，判断它是否为大写字母，若是则将其转换成小写字母，若不是则不转换，然后输出最后得到的字符

```c
#include<stdio.h>

int main(){
 char ch;
 scanf("%c", &ch);
 if(ch >= 'A' && ch <= 'Z'){
  ch = ch + 32;
 }
 printf("%c", ch);
 return 0;
}
```

键盘输入

```txt
A
```

输出结果为：

```txt
a
```

## 3.表达式1?表达式2:表达式3

### 3.样例2另一写法

```c
#include<stdio.h>

int main(){
 char ch;
 scanf("%c", &ch);
 ch = (ch >= 'A' && ch <= 'Z') ? (ch + 32) : ch;
 printf("%c", ch);
 return 0;
}
```

## 4.switch语句

```c
 switch(整型变量或字符型变量){
  case 常量1:语句1;break;
  case 常量2:语句2;break;
  
  case 常量n:语句n;break;
  default: 语句n+1;break;
 }
```

某课成绩原为A、B、C、D四个等级，现要将其转成百分制分数段，规则是：A等转成85~100，B等转成70~84，C等转成60~69，D等转成<60。请编一程序，成绩等级由键盘输入，输出分数段。

```c
#include<stdio.h>

int main(){
 char rank;
 scanf("%c", &rank);
 switch(rank){
  case 'A':printf("85-100\n");break;
  case 'B':printf("70-84\n");break;
  case 'C':printf("60-69\n");break;
  case 'D':printf("<60\n");break;
  default: printf("error\n");break; 
 }
 return 0;
}
```

键盘输入

```txt
B
```

输出结果为

```txt
70-84
```

# 4.循环语句

## 1.用while 语句循环做数学运算

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/4-1.png?x-oss-process=style/note)

### 1.求2+4+6+…+100

```c
#include<stdio.h>

int main(){
 int n = 1, sum = 0, a = 2;
 while(n <= 50){
  n += 1;
  sum += a;
  a += 2;
 }
 printf("sum=%d", sum);
 return 0;
}
```

### 2.求2×4×6×8x…×100

```c
#include<stdio.h>

int main(){
 int n = 1, product = 1, a = 2;
 while(n <= 50){
  n += 1;
  product *= a;
  a += 2;
 }
 printf("product=%d", product);
 return 0;
}
```

## 2.用while语句循环

猴博士今儿纳妃，有一堆母猴排着队一个接一个地给他表演才艺以求被选上。猴博士总共只肯看她们300分钟。请编程统计300分钟后，猴博士看了多少只母猴。

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/4-2.png?x-oss-process=style/note)

## 3.用break提前终止循环

猴博士今儿纳妃，有一堆母猴排着队一个接一个地给他表演才艺以求被选上。猴博士总共只肯看她们300分钟，并且最多乐意看100只母猴。请编程统计猴博士看了多少只母猴，总共看了几分钟。

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/4-3.png?x-oss-process=style/note)

## 4.用continue语句提前结束本次循环

请编程输出100~300之间（包括100与300）不能被4整除的数。

```c
#include<stdio.h>

int main(){
 int n = 99;
 while(n < 300){
  n += 1;
  if(n % 4 == 0){
   continue;
  }
  printf("%d\t", n);
 }
 return 0;
}
```

输出结果为

```
101     102     103     105     106     107     109     110     111     113     114     115     117     118     119
121     122     123     125     126     127     129     130     131     133     134     135     137     138     139
141     142     143     145     146     147     149     150     151     153     154     155     157     158     159
161     162     163     165     166     167     169     170     171     173     174     175     177     178     179
181     182     183     185     186     187     189     190     191     193     194     195     197     198     199
201     202     203     205     206     207     209     210     211     213     214     215     217     218     219
221     222     223     225     226     227     229     230     231     233     234     235     237     238     239
241     242     243     245     246     247     249     250     251     253     254     255     257     258     259
261     262     263     265     266     267     269     270     271     273     274     275     277     278     279
281     282     283     285     286     287     289     290     291     293     294     295     297     298     299
```

## 5.用do...while语句循环

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/4-4.png?x-oss-process=style/note)

## 6.用for循环

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/4-5.png?x-oss-process=style/note)

## 7.while语句、do…while语句、for语句的区别

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/4-6.png?x-oss-process=style/note)

# 5.数组

选择法/冒泡法（沉底法）

## 1.定义一维数组

输入10个地区的面积（面积为整数），对它们由小到大排序并输出排序后的结果。

```c
#include<stdio.h>

int main(){
 int a[10];
 int i,j,t;
 printf("请输入10个面积：");
 for(i = 0; i <= 9; i ++){
  scanf("%d", &a[i]);
 }
 printf("\n");
 for(i = 0; i <= 8; i ++){
  if(a[i] > a[j]){
   t = a[i];
   a[i] = a[j];
   a[j] = t;
  }
 }
 for(i = 0; i <= 9; i ++){
  printf("%d,", a[i]);
 }
 return 0;
}
```

键盘输入

```
1 3 5 7 9 2 4 6 8 10
```

输出结果为

```
1,9,3,5,7,2,4,6,8,10,
```

## 2.定义二维数组

### 1.将一个二维数组a=[[1,2,3],[4,5,6]]的行列元素互换，存到另一个二维数组b中并输出

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/5-1.png?x-oss-process=style/note)

### 2.已知a=[[1,2,3],[9,8,7],[-10,10,-5]]，请编程求出其中值最大的那个元素

```c
#include<stdio.h>

int main(){
 int i, j, max;
 int a[3][3] = {{1,2,3},{9,8,7},{-10,10,-5}};
 max = a[0][0];
 for(i = 0; i <= 2; i ++)
  for(j = 0; j <= 2; j ++)
   if(a[i][j] > max){
    max = a[i][j];
   }
 printf("max=%d", max);
 return 0;
}
```

## 3.定义字符数组

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/5-2.png?x-oss-process=style/note)

## 4.输出字符数组

定义一个字符串“hello world"，然后输出这个字符串。

```c
#include<stdio.h>

int main(){
 char c[15] = {'h','e','l','l','o',' ','w','o','r','l','d'};
 int i;
 for(i = 0; i <= 14; i ++)
  printf("%c", c[i]);
 printf("\n");
 return 0;
}
```

## 5.输入字符数组

将"hello world"存入数组

```c
#include<stdio.h>

int main(){
 char c[15];
 gets(c);
 return 0;
}
```

输入一行由空格和单词组成的字符（字符数在80以内），请统计有多少个单词。

```c
#include<stdio.h>

int main(){
 char c[81];
 int i,dancishu=1;
 gets(c);
 if(c[0] == ' ')
  dancishu = 0;
 for(i = 0; c[i] != '\0'; i ++)
  if(c[i] == ' ' && c[i + 1] != ' ' && c[i + 1] != '\0')
   dancishu ++;
 printf("%d", dancishu);
 return 0;
}
```

# 6.函数

## 1.调用有参函数

编写一程序，要求用户输入4个数字，输出前两个数中的最大数、后两个数中的最大数以及四个数中的最大数。

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/6-1.png?x-oss-process=style/note)

有两个小组，分别有5名学生和10名学生。请编程输入这些学生的成绩，并调用一个aver函数求这两个小组的平均分。

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/6-2.png?x-oss-process=style/note)

## 2.调用无参函数

请编程输入10个整数，并将这10个数由小到大排序。

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/6-3.png?x-oss-process=style/note)

## 3.函数的嵌套

请编程输入4个整数，并找出其中最大的数。

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/6-4.png?x-oss-process=style/note)

## 4.函数的递归

### 1.有5个学生，第5个学生比第4个学生大2岁，第4个学生比第3个学生大2岁，第3个学生比第2个学生大2岁，第2个学生比第1个学生大2岁，第1个学生是10岁。请编程计算出第5个学生的年龄

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/6-5.png?x-oss-process=style/note)

### 2.用递归方法求n

![](https://cdn.zyha.cn/blog/Dr.Monkey-c-note/6-6.png?x-oss-process=style/note)

# 7.指针（上）

# 8.指针（下）

# 9.结构体
