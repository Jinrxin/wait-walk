export enum HttpStatus {
  Success = 200,
  // 资源已被移除
  MovedPrem = 301,
  // 参数列表错误（缺少，格式不匹配）
  BadRequest = 400,
  // 未授权
  Unauthorized = 401,
  // 访问受限，授权过期
  Forbidden = 403,
  // 资源，服务未找到
  NotFound = 404,
  // 不支持的数据，媒体类型
  UnsupportedType = 415,
  // 系统内部错误
  Error = 500,
  // 接口未实现
  NotImplemented = 501,
  // 系统警告消息
  Warn = 601
}
