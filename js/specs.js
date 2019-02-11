describe("Testing sum function", function() { //funkcija describe  -  za opis blok koda
    //ocekivanje da : moze da sabira pozitivne, negativne, decimalne brojeve, da ne sabira stringove  
    it("should add two integers", function() { // funkcija it - za zapocinjnje sta TEST treba da radi  
      expect( sum(2, 2) ).toBe(4); 
    });
// dodajemo spcifikaciju sta treba da radi nasa funkcija kroz testiranje

    it("should add two negative numbers", function() {  
    expect( sum(-2, -2) ).toBe(-4); 
    });

     it("should add two decimal numbers", function() {  
    expect( sum(0.02, 0.04) ).toBe(0.06); 
     });

    it("should not add two strings", function() {  
        expect( sum("Maja", "Uros") ).toBeNaN(); 
        });

    it("should not add string and number", function() {  
            expect( sum("Maja", 1) ).toBeNaN(); 
            });    
     
    it("should not add undefined and object", function() {  
            expect( sum(undefined, {}) ).toBeNaN(); 
            });    

    it("should not add two objects", function() {  
            expect( sum({}, {}) ).toBeNaN(); 
            });  
            
            
    it("should add to infinity", function() {  
            expect( sum(Infinity, 1)).toBe(Infinity); 
            });  
                
        
  });

      