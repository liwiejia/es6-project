{
    //类的基本定义 和生成实例
    class Parent {
        constructor(name = 'liweijia') { //parent起源，父亲
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent);
} {
    //类的继承
    class Parent {
        constructor(name = 'liweijia') { //parent起源，父亲
            this.name = name;
        }
    }
    // extends继承
    class Child extends Parent { //extends 延伸

    }
    console.log('继承', new Child())
} {
    //继承传递参数
    class Parent {
        constructor(name = 'liweijia') { //parent起源，父亲
            this.name = name;
        }
    }
    // extends继承
    class Child extends Parent { //extends 延伸
        //子类修改父类
        constructor(name = 'child') {
            super(name); //把参数传递给父类， 如果没有穿super（） 则默认使用父类的     **super一定要在第一行
            this.type = 'child'; //子类定义自己的属性 一定要放在super之后
        }

    }
    console.log('继承传递参数', new Child('hello'))
} {
    //类中的getter，setter
    class Parent {
        constructor(name = 'liweijia') { //parent起源，父亲
            this.name = name;
        }

        get longName() { //这是一个属性，不是方法
            return 'mk_' + this.name;
        }

        set longName(value) {
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter', v.longName);
    v.longName = 'hello';
    console.log('setter', v.longName);
} {
    //类的静态方法
    class Parent {
        constructor(name = 'liweijia') { //parent起源，父亲
            this.name = name;
        }

        static tell() { //定义静态方法  static
                console.log('tell');
            }
            //静态方法是通过类去调用， 而不是类的事例去调用
    }
    Parent.tell();
    let v = new Parent();
} {
    //静态属性
    class Parent {
        constructor(name = 'liweijia') { //parent起源，父亲
            this.name = name;
        }

        static tell() { //定义静态方法  static
                console.log('tell');
            }
            //静态方法是通过类去调用， 而不是类的事例去调用
    }
    Parent.type = 'test'; ///静态属性

    console.log('静态属性', Parent.type)

}