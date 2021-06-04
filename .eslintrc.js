module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "globals": {
        document: true,
        window: true
    },
    "rules": {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        /*
	    0 或’off’：  关闭规则。
	    1 或’warn’： 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）。
	    2 或’error’：打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)。
        */
        // 以下为该项目自定义部分
        "semi": 0,    //语句强制分号结尾
        'indent': [2, 2], //缩进风格 - 开启缩进4格
        'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格 - 开启
        'no-const-assign': 2, //禁止修改const声明的变量 - 开启
        'space-before-function-paren': [2, 'always'], //函数定义时括号前面要有空格 - 关闭
        'eol-last': 2, //文件以单一的换行符结束 - 关闭
        'camelcase': 2, //强制驼峰法命名 - 关闭
        'no-undef': 2, //不能有未定义的变量 - 关闭
        'no-alert': 2, //禁止使用alert confirm prompt - 关闭
        'arrow-parens': 0, //箭头函数用小括号括起来 - 关闭
        "strict": 2,//使用严格模式
        "eqeqeq": 2,//必须使用全等
    }
}