import codecs



proekt="1"
forma="2"
opisanie="3"
interes="4"
team="5"
partic="6"




write_file=codecs.open("test", "a", "utf-16")
write_file.write('\n'+proekt+forma+opisanie+interes+team+partic+'\n')
write_file.close()
         
    



