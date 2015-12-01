import os
import sys




class d:
    def __init__(self):
        print 'ddddd xD'



def appendParentDir(num, currdir):
    print currdir
    if num is 0:
        print 'return value'
        sys.path.append(currdir)
        return currdir
    else:
        dirname, basename = os.path.split(currdir)
        num-=1
        return appendParentDir(num, dirname)

if __name__ == '__main__':
    print 'hello world'

    print os.getcwd()
    print os.path.realpath(__file__)
    print os.path.dirname(os.path.realpath(__file__))

    print os.pardir
    print os.path.relpath(os.getcwd())
    ast = appendParentDir(1, '/home/x/Code/BenchBox/workload_generator')
    print 'PARENT'
    print ast
    print 'end parent'




    from a import a
    aaaa = a.a()
