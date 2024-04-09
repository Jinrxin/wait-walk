

export default interface RequestResult<T> extends WechatMiniprogram.RequestSuccessCallbackResult{
  data: T;
}

