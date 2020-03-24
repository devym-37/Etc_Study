# 출력하기
import random
print("hello world")

print([1, 2, 3, 4])

print(1, 2)

# 입력하기
# 사용자가 입력을 받을수 있도록 하는 것 = prompt
input()

age = input('당신의 나이는 ? ')  # age에 입력값 저장

# Variable
my_int = 1
my_int + 3

# Naming
# 대소문자, _ 사용 가능 -> 유니코드 방식
# 숫자로 시작 x , 띄어쓰기 x

# Data Type
# Numberic = 숫자형
m_int = 4
m_float = 3.4

# Type 알기
type(m_int)
type(m_float)

# String = 문자형
'Hello'
"Hello2"

# Boolean = 비교 / 논리연산자 True / False
True
False

# Container = List, Tuple, Dictionary

my_list = [1, 2, 3]
# List = 배열
students = ['lee', 'kim']

students.append('park')     # push

# Tuple
students[0] = 'you'     # 'lee' -> 'you' change
# list 값을 변경 가능

my_tuple = ('요거트', '수박')
my_tuple[0] = '돈까스'  # error 발생
# Tuple에서는 값을 변경 불가능

# Dictionary = object {key :  value}
my_dic = {'lee': 'male', 'park': 'female'}
my_dic['lee']  # male

# 자료형 변환하기
sub_int = 1
type(sub_int)  # class 'int'
float(sub_int)  # 1.0 실수로 변환
str(sub_int)  # '1'  문자열
type(str(sub_int))  # class 'str'

sub_str = 'coding'
list(sub_str)  # ['c', 'o', 'd', ...] 배열의 형태로 변환

# 문자열
# "" , '' 구분
str_str = """구분 가능한
문자 형태
"""

# Formatting
# %d %f %s 사용 가능
my_str = 'My name is %s' % 'Young'
# 출력하면 My name is Young

'%d %d' % (1, 2)  # 여러개 대입일 경우 ( ) 이용
# '1 2'  정수형 숫자 대입
# %f  실수형 숫자 대입


# '{}'.format() -> python 다운 형식
'My name is {}'.format('lee')
# My name is lee : 출력

'{} x {} = {}'.format(2, 3, 2*3)
# '2 x 3 = 6' 출력

'{1} x {0} = {2}'.format(2, 3, 2*3)
# '3 x 2 = 6' 입력 순서의 index값으로 대입가능한 자리를 정할 수 있다

# Slicing
sub_slice = "파이썬 코딩 공부"  # [1: 4]  1부터 3까지 (4전까지)
sub_slice[4: 7]  # 코딩 출력
# [ : 3] 앞에서부터 2까지
# [2: ] 2부터 마지막까지
# [ : ] 전체 복사


# string.split() 메서드
sub_split = "파이썬 코딩 공부"
sub_split.split()   # ['파이썬', '코딩', '공부'] 으로 출력

fruit_str = '포도 수박 복숭아 망고'
fruits = fruit_str.split()
print(fruits)  # ['포도', '수박', '복숭아' ...]
# default 공백을 기준으로 split

# Docstring
"""주석"""

# end
print('', end='')  # 뒤에 채워질 문자 코드 end에 작성 / default enter

# Escape code
print('파이썬 코딩 공부')

print('미운', end='\t')
print('코딩')
# 미운 |t | 코딩 출력

# List
sub_list = []  # 빈 list

# 추가하기
sub_list.append('lee')  # sub_list 에 'lee' 추가하기 -> push
# 사이에 추가
sub_list.insert()
sub_list.pop()  # 마지막 요소 제거

# 삭제하기
del fruits[2]  # 2번째 요소 삭제

# list.sort()
fruits.sort()
print(fruits)  # 정렬된 list 반환

# list.count() : list안에 해당 값이 몇개 있는지 반환
fruits.count('포도')    # 1 반환

# array.length = len(list)
len(fruits)  # list의 개수 반환

# Tuple :  값 변경이 불가능
sub_tupel = ()  # 빈 tuple 생성

#  Tuple의 특징 Packing : 여러개의 값을 하나로 묶는 것 / Unpacking : 여러개의 값으로 푸는것

# For
# for 변수 in 컨테이너:
# [띄어쓰기 4칸]실행할 명령 [코드블럭]
#       실행할 명령 [코드블럭]

# range()
range(0, 3)  # [0, 1, 2]
for n in range(0, 3):
    print(n)
# 0 , 1 , 2 출력
# range(3) = range(0, 3)

# 구구단
for j in range(2, 10):
    for i in range(1, 10):
        print('{} x {} = {}'.format(j, i, j * i))

# Comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_numbers = []

for num in numbers:
    if num % 2 == 1:
        odd_numbers.append(num)

odd_numbers = [num for num in numbers if num % 2 == 1]

# Operator : 할당
# += / /= / *= /

# Arithmetic 산술연산자
# 4 ** 3 = 63
# 7 / 3 = 2.777777
# 7 // 3 = 2 몫만 반환

# 문자열 연산자
'lee' + 'x' + 'youngmin'    # leexyoungmin
# 문자 * 는 반복 횟수

# Comparison | 비교연산자
# Logical | 논리 연산자 / and / or / not
# Membership | in / not in

list_membership = ['lee', 'young', 'min']
'lee' in list_membership  # true
'park' in list_membership  # false
'park' not in list_membership  # true


# If 문 구조
# if 조건:
#    실행할 명령
# elif:
#    실행할 명령
# else:
#    실행할 명령

# Loop
# while문
# while 조건:
#     실행할 명령

# continue : continue 아래 코드는 실행 x
# break


# Dictionary = Object
sub_dict = {}   # 빈 Dictionary 생성
sub_dict[0] = 'a'  # sub_dict = {0: 'a'}
sub_dict['b'] = 2
#  sub_dict = {0: 'a', 'b':2}

print(sub_dict[0])

# delete
del sub_dict[0]  # key값이 0인 value 삭제

# Dictionary 메서드
sub_dict.values()   # value값들만
sub_dict.keys()     # key 값들만
for key in sub_dict.keys():
    print(key)

sub_dict.items()
for key, val in sub_dict.items():
    print(key, val)

# Function
# 내장함수 / 모듈의 함수 / 사용자 정의 함수

# 구조
# def 함수이름(인자1, ...):
#     실행할 명령
#     retrun 결과

# why function ? 재사용성 가능, 코드관리 용이, 조립 가능


def add(num1, num2):
    return num1 + num2


add(1, 2)  # return 3


def com(num1, num2):
    return num1 + num2, num1 * num2


add, mul = com(1, 2)  # unpacking
add  # 3
mul  # 2


# Module : 함수들을 모아둔 파일
student = [1, 2, 3, 4, 5, 6]
random.choice()

print(random.choice(student))  # 랜덤으로 값 출력
random.sample()
random.randint()
# random.randint(8, 10)  : 8부터 10사이의 숫자 랜덤으로 반환

# Object : 파이썬은 객체지향

# 코딩스타일 PEP8
