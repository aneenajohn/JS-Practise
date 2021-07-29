# JS Practise
 This repo is for practising JS

## Q3

This is sort of an outlier question that I have seen in the whole Frontend Interview process. Many people might even term it is as poorly written code and it is true in some sense. You can't tell what exactly is the intention of the code owner and what is the logic. Since, I have seen this/similar question being asked so here it is.

Basic crux of this question is that we are de-structuring the name property from the right-hand side object and aliasing it with person.username. Since, person already exists, key-value is set on that object. It won't work if we remove the ( ... ) brackets { name: person['name'] has no variable declaration. Within brackets, it is executed as an expression.

