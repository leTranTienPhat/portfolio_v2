import { toast } from 'react-toastify';

const toastConfig = {
  closeOnClick: true,
}

const toastInfo = (message: string) => {
  toast.info(message, toastConfig)
}

const toastError = (message: string) => {
  toast.error(message, toastConfig)
}

const toastSuccess = (message: string) => {
  toast.success(message, toastConfig)
}

const toastWarn = (message: string) => {
  toast.warn(message, toastConfig)
}

export { toastInfo, toastError, toastSuccess, toastWarn }