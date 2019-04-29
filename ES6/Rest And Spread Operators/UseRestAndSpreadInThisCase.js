const MathLibrary ={
    calculateProduct(...rest){
        return this.multiply(...rest);
    },
    multiply(a,b){
        return a*b;
    }
};