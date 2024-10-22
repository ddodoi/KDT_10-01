function foo(arg){
    return arg;
}
function bar(){       //함수 선언문
    console.log('bar');
}

const foo1 = function (){ //함수 표현식
    console.log('bar');
};

const foo4 = new Function("console.log('foo4')");   //Function 생성자 함수

const foo5 = () =>{   //화살표 함수
    console.log('foo5');
}

function foo2(arg = 1){
    console.log(arg);
}

function foo3(arg, ...rest){
    console.log(arguments);
}

(function foo6(){     //IIFE(즉시 실행 함수)
    console.log('foo6');
})();

function foo7(arg){    //재귀함수
    if (arg === 3){
        return;
    }
    console.log(arg);
    foo7(arg + 1);
}

function foo8(arg){       //중첩함수
    function bar(){
        console.log(arg);
    }
    bar();
}

function foo9(arg){
    arg();
}

foo(bar)();
foo1;
foo2();
foo3(1,2,3,4);
foo4();
foo5();
foo7(1);
foo8(1);
foo9(() =>{
    console.log(1);
});