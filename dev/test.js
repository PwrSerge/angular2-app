

function make(tag) {
  return {
    tag: (function(tag) {
      return '<' + tag + '/>';
    })
  };
}
h1 = make.h1();
console.log(h1);
