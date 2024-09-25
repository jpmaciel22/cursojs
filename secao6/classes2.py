class Teste:
    def __init__(self,x,y):
        self.x = x 
        self.y = y 
    
    def soma(self):
        return self.x + self.y
     
x = Teste(1,2)
print(x.soma())