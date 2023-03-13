### 1. Auth - 用户注册登录
> URL - http://localhost:3000/auth/login
> 
> HTTP 请求方式 - POST
>
> |参数|必选|类型|说明|
> |:---|:---|:---|:---|
> |name|true|string|用户名|
> |password|true|string|密码|
> |states|false|object|其他参数|

### 2. User - 用户信息更新
> URL - http://localhost:3000/user/update
> 
> HTTP 请求方式 - POST
>
> |参数|必选|类型|说明|
> |:---|:---|:---|:---|
> |name|true|string|用户名|
> |password|true|string|密码|
> |states|false|object|其他参数|

### 3. User - 用户信息获取
> URL - http://localhost:3000/user/info@name
> 
> HTTP 请求方式 - GET
>
> |参数|必选|类型|说明|
> |:---|:---|:---|:---|
> |name|true|string|用户名|

### 4. Undefined - 用户特殊备注
> nothing here...