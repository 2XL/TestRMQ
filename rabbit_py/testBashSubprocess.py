#!/usr/bin/env python

import subprocess







def bash_command(cmd):
    child = subprocess.Popen(['/bin/bash', '-c', cmd])
    child.communicate()[0]
    rc = child.returncode
    return rc



if __name__ == '__main__':
    print bash_command('echo MASDFEASDFAE')
    print bash_command('pwd')
    print bash_command('nohup python ~/Code/BenchBox/workload_generator/executor.py &')