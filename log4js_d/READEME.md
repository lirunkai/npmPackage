## log4js

### level 分级 从低到高
trace < debug < info < warn < error < fatal < mark

### 设置类别

`log4js.getLogger('bug')` 如果没设置进行设置, 如果设置了直接返回

###  appenders 

根据类别, 进行配置, 如何输出
```
log4Js.configure({
    appenders: { 
        cheese: {type: 'file', filename: 'cheese.log',
        bug: { type: 'console'}
    }},
    categories: { 
        default: {appenders: ['cheese'], level: 'error'},

    }
})
```

### type的类型

dateFile

file

console

stdout

#### dataFile属性

filename 用于指定日志的文件地址

pattern  用于指定日志切分的时间间隔

    .yyyy-MM 精确到月
    .yyyy-MM-dd 精确到天
    .yyyy-MM-dd-hh 精确到小时

layout 选择日志输出的格式

```
const log4js = require('log4js')

log4js.configure({
    replaceConsole: true,
    appenders: {
        cheese: {
            type: 'dateFile',
            filename: 'logs/dateLog.log',
            layout: {
                type: 'pattern',
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
            }
        }
    },
    categories: {
        default: { appenders: ['cheese'], level: 'debug'}
    }
})
```


### categories

组合

