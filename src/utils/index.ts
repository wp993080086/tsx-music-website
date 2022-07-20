import { IThrottleFunc, IDebounceFunc } from './utils'
/**
 * 返回数据类型
 * @param  {String} value 数据类型 比如 returnType(false) 返回 'Boolean'
 */
export const returnType = (value: unknown) => {
  if (!Number.isNaN) {
    Number.isNaN = function (val) {
      return typeof val === 'number' && window.isNaN(val)
    }
  }
  let type
  if (typeof value === 'number' && isNaN(value)) {
    type = 'NaN'
  } else {
    const info = Object.prototype.toString.call(value)
    type = info.split(' ')[1].split(']')[0]
  }
  return type
}
/**
 * 获取随机数
 * @param {Number} Limit 随机数上限
 */
export const getRandom = (Limit = 10) => {
  return Math.round(Math.random() * Limit)
}
/**
 * 手机号码校验
 * @param {String} value
 * @param {Function} 回调
 */
export const validateMobile = (value: string, callback: (value?: Error) => void) => {
  const RegExp = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
  if (value === '') {
    callback(new Error('请填写联系电话'))
  } else if (!RegExp.test(value)) {
    callback(new Error('手机号码格式有误'))
  } else {
    callback()
  }
}
/**
 * 睡眠
 * @param  {Number} ms 休眠时间
 * @return {Promise} SetTimeout promise
 */
export const sleep = (ms = 500) => {
  if (typeof ms !== 'number') {
    throw new Error('param must be a number')
  }
  return new Promise(res => {
    setTimeout(res, ms)
  })
}
/**
 * 节流
 * @param {Function} fn 事件
 * @param {Number} limit 触发间隔
 */
export const throttle = <F extends TAnyFunc>(fn: F, limit = 200): IThrottleFunc<F> => {
  let wait = false
  return function (this: void, ...args: Parameters<F>) {
    if (wait === false) {
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
      return fn.apply(this, args)
    }
    return null
  }
}
/**
 * 防抖
 * @param {Number} wait 触发间隔
 * @param {Function} fn 事件
 * @param {Number} immediate 是否立即触发一次
 */
export const debounce = <F extends TAnyFunc>(
  wait: number,
  fn: F,
  immediate = false
): IDebounceFunc<F> => {
  let timeout: NodeJS.Timeout
  const debounced = function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const later = () => {
      timeout
      if (immediate !== true) {
        fn.apply(this, args)
      }
    }
    clearTimeout(timeout)
    if (immediate === true && timeout === undefined) {
      fn.apply(this, args)
    }
    timeout = setTimeout(later, wait)
  }
  debounced.cancel = () => {
    clearTimeout(timeout)
  }
  return debounced
}
/**
 * 生成uuid
 * @param {String} prefix 前缀
 */
export const createUuid = (prefix = 'pdd') => {
  let Time = new Date().getTime()
  const uuid = 'x_xx_xxx_xxxx'.replace(/[xy]/g, res => {
    const Random = (Time + Math.random() * 16) % 16 | 0
    Time = Math.floor(Time / 16)
    return (res === 'x' ? Random : (Random & 0x3) | 0x8).toString(16)
  })
  return `${prefix}_${uuid}`
}

/**
 * 去除首尾空格或内部全部空格
 * @param {String} value 字符串
 * @param {Boolean} all 全部空格
 */
export const trim = (value: string, all = false) => {
  let reg = /(^\s*)|(\s*$)/g
  if (all) reg = /\s/g
  return value.replace(reg, '')
}
/**
 * 邮箱验证
 * @param  {String} value 邮箱
 */
export const mailboxVerify = (value: string) => {
  const RegExp = /^[.A-Za-z0-9_-\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!RegExp.test(value)) return false
  return true
}
/**
 * 昵称验证
 * @param  {String} value 昵称仅限汉字或字母
 */
export const nickNameVerify = (value: string) => {
  const RegExp = /^[A-Za-z\u4e00-\u9fa5\s]+$/
  if (!RegExp.test(value)) return false
  return true
}
/**
 * 数字转整数 如 100000 转为10万
 * @param {Number} num 需要转化的数
 * @param {Number} point 需要保留的小数位数
 */
export const tranNumber = (num: number, point: number) => {
  const numStr = num.toString()
  // 十万以内直接返回
  if (numStr.length < 6) {
    return numStr
  } else if (numStr.length > 8) {
    // 大于8位数是亿
    const decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point)
    return parseFloat(parseInt((num / 100000000).toString()) + '.' + decimal) + '亿'
  } else if (numStr.length > 5) {
    // 大于6位数是十万 (以10W分割 10W以下全部显示)
    const decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
    return parseFloat(parseInt((num / 10000).toString()) + '.' + decimal) + '万'
  }
}
/**
 * 格式化时间毫秒转分秒
 * @param {Number} time 时间
 */
export const formatTime = (time: number) => {
  let format
  let s = ''
  let m = ''
  time = ~~time
  if (time < 10) {
    format = '00:0' + time
  } else if (time < 60) {
    format = '00:' + time
  } else {
    if (~~parseInt(((time % (1000 * 60 * 60)) / (1000 * 60)).toString()) < 10) {
      m = '0' + m
    }
    if (~~parseInt(((time % (1000 * 60)) / 1000).toString()) < 10) {
      s = '0' + s
    }
    format = m + ':' + s
  }
  return format
}
/**
 * 秒转00:00
 * @param {Number} seconds 秒
 */
export const formatSecondTime = (seconds: number) => {
  const m = Number.parseInt((seconds / 60).toString())
  let s = ''
  Number.parseInt((seconds % 60).toString()) < 10 ? (s = `0${s}`) : s
  return `0${m}:${s}`
}
/**
 * 时间戳转换成几分钟前，几小时前，几天前
 * @param {Number} timestamp 时间戳
 */
export const formatMsgTime = (timestamp: number) => {
  let result = ''
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - timestamp
  if (diffValue < 0) return
  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  if (monthC >= 1) {
    result = '' + parseInt(monthC.toString()) + '个月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC.toString()) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC.toString()) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC.toString()) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC.toString()) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}
