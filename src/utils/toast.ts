import {
  ElMessage,
  ElMessageBox,
  ElNotification,
  MessageOptions,
  ElMessageBoxOptions,
  NotificationParams
} from 'element-plus'

/**
 * toast轻提示
 * @param {String} message
 * @param {MessageOptions} option
 */
export const toast = (message: string, option: MessageOptions = {}) => {
  return ElMessage({
    message,
    showClose: true,
    grouping: true,
    duration: 2000,
    ...option
  })
}
/**
 * alert提示框
 * @param {String} message
 * @param {ElMessageBoxOptions} config
 */
export const alert = (message: string, config: ElMessageBoxOptions = {}) => {
  const defaultOption = {
    title: '温馨提示',
    closeOnClickModal: false,
    closeOnPressEscape: false,
    confirmButtonText: '确认',
    draggable: true
  }
  const option = { ...defaultOption, ...config }
  return ElMessageBox.alert(message, option)
}
/**
 * confirm确认框
 * @param {String} message
 * @param {ElMessageBoxOptions} config
 */
export const confirm = (message: string, config: ElMessageBoxOptions = {}) => {
  const defaultOption = {
    title: '温馨提示',
    closeOnClickModal: false,
    closeOnPressEscape: false,
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    draggable: true
  }
  const option = { ...defaultOption, ...config }
  return ElMessageBox.confirm(message, option)
}
/**
 * notification通知
 * @param {NotificationParams} option
 */
export const notification = (option: NotificationParams = {}) => {
  return ElNotification(option)
}
