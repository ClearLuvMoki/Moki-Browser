/* hannel Types ==>
*  get:
*  update:
*  delete:
*  add:
*  notice:
*  open:
*/


// 处理最小化,最大化, 关闭软件
import { ActionsEnum } from '@/types/RightActions';

export const handleMainWindowStatus = (type: ActionsEnum) => {
  window.__IPC__.invoke('notice:windowStatus', { type });
};

