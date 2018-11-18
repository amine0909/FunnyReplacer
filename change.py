# script python, just to rename all images name
# i'm a little bit lazy :p

import glob
import os


list = glob.glob("./pics/*.*")

print(list)
for i,filename in enumerate(list):
    #print(filename)
    os.rename(filename,"./pics/{0}.jpg".format(i))

